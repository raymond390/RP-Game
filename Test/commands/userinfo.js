const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

  
    let embed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setTitle("Server Info")
    .setImage(message.guild.iconURL)
    .setDescription(`${message.guild}'s information`)
    .addField("Owner", `The owner of this server is ${message.guild.owner}`)
    .addField("Member Count", `This server has ${message.guild.memberCount} members`)
    .addField("Emoji Count", `This server has ${message.guild.emojis.cache.size} emojis`)
    .addField("Roles Count", `This server has ${message.guild.roles.cache.size} roles`)
    

message.channel.send(embed)
  
}
    
    module.exports.help = {
        name: "userinfo",
        description: "Geeft al de verschillende commands",
        category: "Informatie"
    }