const discord = require("discord.js");

module.exports.run = async (client, message, argument) => {
    if (!message.member.hasPermission("KICK_MEMBERS")) return message.reply("sorry jij kan dit niet");

    if (!message.guild.me.hasPermission("KICK_MEMBERS")) return message.reply("Geen perms");
    
    const categoryID = "804717995569446942";
    var claim = message.guild.member(message.mentions.users.first());

    

    if (message.channel.parentID == categoryID) {

    var botEmbed = new discord.MessageEmbed()
    .setTitle('Unclaim')
    .setDescription(`${message.author} Heeft deze ge unclaimed`)
    .setThumbnail('')
    .setImage('')
    .setTimestamp()
    .setFooter('Unclaim', '');

    message.channel.setTopic(` Deze ticket is niet geclaimed!!!`)    

return message.channel.send(botEmbed);

    } else {
        

    message.channel.send("Gelieve dit command te doen bij een ticket.");
    }
}

module.exports.help = {
    name: "unclaim",
    description: "Geeft al de verschillende commands",
    category: "Algemeen"
}