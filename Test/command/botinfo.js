const discord = require("discord.js");
const moment = require(`moment`) // requiring moment

module.exports.run = async (client, message, args) => {
    var botEmbed = new discord.MessageEmbed() // creates a embed that we gonna call botEmbed
    .setColor(`RANDOM`) // will set the color for the embed
    .setTitle(`Bot's Info`) // make the title for the cmd
    .setThumbnail(Client.user.displayAvatarURL()) // it will put the bot avatar (pfp) in the embed
    .addField(`**General**`, [ // say general then...
        `**Bot naam:** ${Client.user.username}`, // this will be the username of the bot
        `**Tag:** ${Client.user.tag}`, // the actual name for the bot
        `**ID:** ${Client.user.id}`, // this will be the ID for the bot
        `**Gemaakt op :** ${moment(Client.user.createdAt).format("DD-MM-YYYY [at] HH:mm")}`, // this will say when the bot is created 
        `**Maker:**Raymond#1362`, // who created the bot
        '\u200b'
    ])
    .addField(`**Stats**`,[ // it will say stats then...
        `**Servers:** ${Client.guilds.cache.size}`, // how many servers the bot is in
        `**Channels:** ${Client.channels.cache.size}`, // how many channels the bot have access to
        `**Users:** ${Client.users.cache.size}`, // how many users the bot serve on
        `**Discord.js Version:** 12.5.1`, // the discord.js modules version
        `**Node.js Version:** 1.0.0` // node.js version
    ])
    return message.channel.send(botEmbed)
}

module.exports.help = {
    name: "botinfo",
    description: "Geeft al de verschillende commands",
    category: "Informatie"
}