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
    .setImage('https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Df-WvltOZqNU&psig=AOvVaw19yltKCa-f0V4wNxDtSU6V&ust=1608834887115000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCIiEnJjf5O0CFQAAAAAdAAAAABAD')
    .setFooter('', '');

    var channel = message.member.guild.channels.cache.get("791366711495360522");

    if (!channel) return

    channel.send(botEmbed);
}

module.exports.help = {
    name: "training",
    description: ".training Dientst type co host datum tijd opmerkingen",
    category: "Informatie"
}