const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    if (!message.member.hasPermission("MANAGE_EMOJIS")) return message.reply("sorry jij kan dit niet");

     dienst = args[0];
     type = args[1];
     co = args[2];
     datum = args[3];
     tijd = args[4];
     var opmerking = args.slice(5).join(" ");
   
    if (!args[0]) return message.reply(" Dientst type co host datum tijd opmerkingen");
    if (!args[1]) return message.reply(" Dientst type co host datum tijd opmerkingen");
    if (!args[2]) return message.reply(" Dientst type co host datum tijd opmerkingen");
    if (!args[3]) return message.reply(" Dientst type co host datum tijd opmerkingen");
    if (!args[4]) return message.reply(" Dientst type co host datum tijd opmerkingen");
    if (!args[5]) return message.reply(" Dientst type co host datum tijd opmerkingen");
   
   
    var botEmbed = new discord.MessageEmbed()
    
    .setTitle('Training')
    .setColor("#f00c0c")
    .setTimestamp()
    .addFields(
        {name:" ** Dienst **" , value:(dienst)},
        {name:" ** Type-Training **" , value: (type) },
        {name:" ** Host **" , value:` ${message.author} `},
        {name:" ** Co-Host **" , value: (co) },
        {name:" ** Datum **" , value: (datum) },
        {name:" ** Tijd **" , value: (tijd) },
        {name:" ** Opmerking **" , value:` ${opmerking}`},
                
    )
    .setThumbnail('')
    .setImage('https://images3.persgroep.net/rcs/BIBZ--XOMQel0lovkJYiJyaFU88/diocontent/13826445/_fitwidth/1240?appId=93a17a8fd81db0de025c8abd1cca1279&quality=0.9')
    .setFooter('', '');

    var channel = message.member.guild.channels.cache.get("784430428722298941");

    if (!channel) return

    channel.send(botEmbed);
}

module.exports.help = {
    name: "training",
    description: ".training Dientst type co host datum tijd opmerkingen",
    category: "Algemeen"
}