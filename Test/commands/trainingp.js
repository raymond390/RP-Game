
const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    if (!message.member.hasPermission("MANAGE_EMOJIS")) return message.reply("sorry jij kan dit niet");

     
     type = args[0];
     co = args[1];
     datum = args[2];
     tijd = args[3];
     var opmerking = args.slice(5).join(" ");
   
    if (!args[0]) return message.reply(" type co host datum tijd opmerkingen");
    if (!args[1]) return message.reply(" type co host datum tijd opmerkingen");
    if (!args[2]) return message.reply(" type co host datum tijd opmerkingen");
    if (!args[3]) return message.reply(" type co host datum tijd opmerkingen");
    if (!args[4]) return message.reply(" type co host datum tijd opmerkingen");
    if (!args[5]) return message.reply(" type co host datum tijd opmerkingen");
   
   
    var botEmbed = new discord.MessageEmbed()
    
    .setTitle('Training')
    .setColor("#f00c0c")
    .setTimestamp()
    .addFields(
        {name:" ** Dienst **" , value: Politie},
        {name:" ** Type-Training **" , value: (type) },
        {name:" ** Host **" , value:` ${message.author} `},
        {name:" ** Co-Host **" , value: (co) },
        {name:" ** Datum **" , value: (datum) },
        {name:" ** Tijd **" , value: (tijd) },
        {name:" ** Opmerking **" , value:` ${opmerking}`},
                
    )
    .setThumbnail('')
    .setImage('https://media.discordapp.net/attachments/794609521757913099/803200830609817640/2048x1152.png')
    .setFooter('', '');

    var channel = message.member.guild.channels.cache.get("784430428722298941");

    if (!channel) return

    channel.send(botEmbed);
}

module.exports.help = {
    name: "trainingp",
    description: ".trainingp type co host datum tijd opmerkingen",
    category: "Algemeen"
}
