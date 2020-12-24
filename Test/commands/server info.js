const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    const embed = new discord.MessageEmbed()
    .setTitle("Server Info!" + MSGesture.guild.name)
    .setThumbnail(msg.guild.iconURL())
    .setColor("RED")
    .addFields(
        {name: ":crown: Owner", value: msg.guild.owner.user.username, inline: true},
        {name: ":keyboard: Kanalen", value: msg.guild.channels.cache.size, inline: true},
        {name: "Members", value: msg.guild,memberCount, inline: true},
        {name: ":tools: rollen", value: msg.guild.roles.cache.size, inline: true},
        {name: "ID", value: msg.guild.id},
        {name: ":map: Regio", value: msg.guild.region, inline: true}
    )
    return channel.send(embed);

}

module.exports.help = {
    name: "hallo",
    description: "Geeft al de verschillende commands",
    category: "Informatie"
}