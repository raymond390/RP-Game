const discord = require("discord.js");
const botConfig = require("./botconfig.json");
const database = require("./database.json");
const fetch = require("node-fetch");
const mongo = require('./mongo')
const messageCount = require('./features/message-counter')
const activeSongs = new Map();
const poll = require('./features/poll')
const scaling = require('./features/scaling-channels')
const path = require('path')

//  Command handler
const fs = require("fs");
const { isFunction } = require("util");

const client = new discord.Client();




//  Command handler
client.commands = new discord.Collection();


const baseFile = 'command-base.js'
const commandBase = require(`./commands/${baseFile}`)

const readCommands = (dir) => {
  const files = fs.readdirSync(path.join(__dirname, dir))
  for (const file of files) {
    const stat = fs.lstatSync(path.join(__dirname, dir, file))
    if (stat.isDirectory()) {
      readCommands(path.join(dir, file))
    } else if (file !== baseFile) {
      const option = require(path.join(__dirname, dir, file))
      commandBase(client, option)
    }
  }
}

readCommands('commands')


  

  messageCount(client)
  poll(client)
  scaling(client)

 mongo().then((mongoose) => {
    try {
      console.log('Connected to mongo!')
    } finally {
      mongoose.connection.close()
    }
  })

client.login(process.env.token)



//  Command handlers
fs.readdir("./command", (err, files) => {

    if (err) console.log(err);

    var jsFiles = files.filter(f => f.split(".").pop() === "js");

    if (jsFiles.length <= 0) {
        console.log("Kon geen files vinden");
        return;
    }

    jsFiles.forEach((f, i) => {

        var fileGet = require(`./command/${f}`);
        console.log(`De file ${f} is geladen`);

        client.commands.set(fileGet.help.name, fileGet);
    });

});




client.on("guildMemberAdd", member => {


  var role = member.guild.roles.cache.get('804686475475025930');

     if (!role) return;

     member.roles.add(role);

    


    var channel = member.guild.channels.cache.get('804692324076617749');

    if (!channel) return;

    // channel.send(`Welkom bij de server ${member}`);

    var joinEmbed = new discord.MessageEmbed()
        .setAuthor(`${member.user.tag}`, member.user.displayAvatarURL)
        .setDescription(`Hoi ${member.user.username}, **Welkom in Zoetermeer**`)
        .setColor("#00FF00")
        .setFooter("Gebruiker gejoined")
        .setTimestamp();

    channel.send(joinEmbed);

});

client.on("guildMemberRemove", member => {

    var channel = member.guild.channels.cache.get('804692324076617749');

    if (!channel) return;

    var leaveEmbed = new discord.MessageEmbed()
        .setAuthor(`${member.user.tag}`, member.user.displayAvatarURL)
        .setColor("#FF0000")
        .setFooter("Gebruiker geleaved")
        .setTimestamp();

    channel.send(leaveEmbed);

});


const activities_list = [
    "Zoetermeer", 
    "!help",
    "zoetermeer", 
    "!help"
    ]; // creates an arraylist containing phrases you want your bot to switch through.
    
    client.on('ready', () => {
        setInterval(() => {
            const index = Math.floor(Math.random() * (activities_list.length - 1) + 1); // generates a random number between 1 and the length of the activities array list (in this case 5).
            client.user.setActivity(activities_list[index]); // sets bot's activities to one of the phrases in the arraylist.
        }, 2500); // Runs this every 10 seconds.
    
});

client.on("messageDelete", messageDeleted => {

    if (messageDeleted.author.bot) return;

    var content = messageDeleted.content;
    if (!content) content = "Geen tekst te vinden";

    var respone = `Bericht ${messageDeleted.id} is verwijderd uit ${messageDeleted.channel}\n **Bericht:** ${content}`;

    var embed = new discord.MessageEmbed()
        .setAuthor(`${messageDeleted.author.id} ${messageDeleted.author.tag}`, `${messageDeleted.author.avatarURL({ size: 4096 })}`)
        .setDescription(respone)
        .setTimestamp()
        .setColor("#FF0000");

    client.channels.cache.find(c => c.name == "logs")

});


var swearWords = ["koe", "kalf", "varken"];

client.on("message", async message => {

    if (message.author.bot) return;

    if (message.channel.type === "dm") return;


     var msg = message.content.toLowerCase();

     for (let i = 0; i < swearWords; i++) {

         if (msg.includes(swearWords[i])) {

             message.delete();

             return message.reply("Gelieve niet te vloeken").then(msg => msg.delete({ timeout: 3000 }));

         }

     }


    var prefix = botConfig.prefix;

    var messageArray = message.content.split(" ");


    var swearWords = JSON.parse(fs.readFileSync("./data/swearWords.json"));

    var senteceUser = "";
    var amountSwearWords = 0;

    for (let y = 0; y < messageArray.length; y++) {

        const word = messageArray[y].toLowerCase();

        var changeWord = "";

        for (let i = 0; i < swearWords["vloekwoorden"].length; i++) {

            if (word.includes(swearWords["vloekwoorden"][i])) {

                changeWord = word.replace(swearWords["vloekwoorden"][i], "******");

                senteceUser += " " + changeWord;

                amountSwearWords++;

            }

        }

        if (!changeWord) {
            senteceUser += " " + messageArray[y];
        }

    }

    if (amountSwearWords != 0) {

        message.delete();
        message.channel.send(senteceUser);
        message.channel.send("Niet vloeken a.u.b.");
    }



    var command = messageArray[0];

    if (!message.content.startsWith(prefix)) return;

    //  Command handler
    var arguments = messageArray.slice(1);

    var commands = client.commands.get(command.slice(prefix.length));

    var options = {
        active: activeSongs
    };

    if (commands) commands.run(client, message, arguments, options);

});
