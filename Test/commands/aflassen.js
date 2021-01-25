
const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    if (!message.member.hasPermission("MANAGE_EMOJIS")) return message.reply("sorry jij kan dit niet");
     
     dienst = args[0];
     datum = args[1];
     tijd = args[2];
     var opmerking = args.slice(3).join(" ");
   
    if (!args[0]) return message.reply("Dienst datum tijd opmerking");
    if (!args[1]) return message.reply("Dienst datum tijd opmerking");
    if (!args[2]) return message.reply("Dienst datum tijd opmerking");
   
   
    var botEmbed = new discord.MessageEmbed()
    
    .setTitle('training Afgelast')
    .setColor("#000000")
    .setTimestamp()
    .addFields(
        {name:" **Host **" , value:`${message.author}`},
        {name:" **Dienst **" , value: (dienst) },
        {name:" **Datum **" , value: (datum) },
        {name:" **Co-Host **" , value: (tijd) },
        {name:" **Opmerking **" , value:` ${opmerking}`},
                
    )
    .setThumbnail('')
    .setImage('')
    .setFooter('', '');

    var channel = message.member.guild.channels.cache.get("784430428722298941");

    if (!channel) return

    channel.send(botEmbed);
}

module.exports.help = {
    name: "aflassen",
}
