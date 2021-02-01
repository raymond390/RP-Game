const discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    var botEmbed = new discord.MessageEmbed()
    .setColor("RANDOM")
    .setTitle("Server Info")
    .setImage(message.guild.iconURL)
    .setDescription(`${message.guild}'s informatie`)
    .addField("Owner", `De creator van deze server is ${message.guild.owner}`)
    .addField("Aantal leden", `Deze server heeft ${message.guild.memberCount} leden`)
    .addField("Aantal emojis", `Deze server heeft ${message.guild.emojis.cache.size} emojis`)
    .addField("Aantal rollen", `Deze server heeft ${message.guild.roles.cache.size} rollem`)
    

    return message.channel.send(botEmbed)
}

module.exports.help = {
    name: "serverinfo",
    description: "Geeft al de verschillende commands",
    category: "Informatie"
}