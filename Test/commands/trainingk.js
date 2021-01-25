
const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    if (!message.member.hasPermission("MANAGE_EMOJIS")) return message.reply("sorry jij kan dit niet");
     
     type = args[0];
     co = args[1];
     supervisor = args[2];
     datum = args[3];
     tijd = args[4];
     var opmerking = args.slice(5).join(" ");
   
    if (!args[0]) return message.reply(" type co-host supervisor datum tijd opmerkingen");
    if (!args[1]) return message.reply(" type co-host supervisor datum tijd opmerkingen");
    if (!args[2]) return message.reply(" type co-host supervisor datum tijd opmerkingen");
    if (!args[3]) return message.reply(" type co-host supervisor datum tijd opmerkingen");
    if (!args[4]) return message.reply(" type co-host supervisor datum tijd opmerkingen");
    if (!args[5]) return message.reply(" type co-host supervisor datum tijd opmerkingen");
   
   
    var botEmbed = new discord.MessageEmbed()
    
    .setTitle('Kmar Training')
    .setColor("#000099")
    .setTimestamp()
    .addFields(
        {name:" **Type-Training **" , value: (type) },
        {name:" **Host **" , value:` ${message.author} `},
        {name:" **Co-Host **" , value: (co) },
        {name:" **Supervisor **" , value: (supervisor) },
        {name:" **Datum **" , value: (datum) },
        {name:" **Tijd **" , value: (tijd) },
        {name:" **Opmerking **" , value:` ${opmerking}`},
                
    )
    .setThumbnail('https://www.deltahouten.nl/media/image/2e/49/64/coin-Kmar_600x600.png')
    .setImage('')
    .setFooter('', '');

    var channel = message.member.guild.channels.cache.get("784430428722298941");

    if (!channel) return

    channel.send(botEmbed);
}

module.exports.help = {
    name: "trainingk",
}
