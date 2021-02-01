const discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    var botEmbed = new discord.MessageEmbed()
    .setColor("RANDOM")
    .setTitle("Server Info")
    .setImage(message.guild.iconURL)
    .setDescription(`${message.guild}'s information`)
    .addField("Owner", `The owner of this server is ${message.guild.owner}`)
    .addField("Member Count", `This server has ${message.guild.memberCount} members`)
    .addField("Emoji Count", `This server has ${message.guild.emojis.cache.size} emojis`)
    .addField("Roles Count", `This server has ${message.guild.roles.cache.size} roles`)
    

    return message.channel.send(botEmbed)
}

module.exports.help = {
    name: "serverinfo",
    description: "Geeft al de verschillende commands",
    category: "Informatie"
}