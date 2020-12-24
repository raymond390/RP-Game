const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

  
    var serverEmbed = new discord.MessageEmbed()
    .setColor("RANDOM")
    .setTitle("Server Info")
    .setImage(message.guild.iconURL)
    .setDescription(`${message.guild}'s Informatie`)
    .addField("Creator", `De Creator Van deze server is ${message.guild.owner}`, inline, true)
    .addField("Spelers", `This server has ${message.guild.memberCount} members`)
    .addField("Emoji Count", `This server has ${message.guild.emojis.cache.size} emojis`)
    .addField("Rollen", `Deze Server Heeft ${message.guild.roles.cache.map(r => `${r}`).join(" | ")} `)
    .addField("kanalen", `${message.guild.channels.cache.size}`)
    

message.channel.send(serverEmbed)
  
}
    
    module.exports.help = {
        name: "info",
        description: "Geeft al de verschillende commands",
        category: "Informatie"
    }