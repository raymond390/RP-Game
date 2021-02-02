const discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    if (!message.member.hasPermission("KICK_MEMBERS")) return message.reply("sorry jij kan dit niet");

    if (!message.guild.me.hasPermission("KICK_MEMBERS")) return message.reply("Geen perms");
    
    const categoryID = "804717995569446942";

    if (!message.member.hasPermission("KICK_MEMBERS")) return message.reply("sorry jij kan dit niet");

    if (message.channel.parentID == categoryID) {

        message.channel.delete();

        // Create embed.
        var embedCreateTicket = new discord.MessageEmbed()
            .setTitle("Ticket, " + message.channel.name)
            .setDescription(` De ticket is gemarkeerd als **compleet**.  Gesloten door ${message.author} `)
            .setFooter("Ticket gesloten");

        // Channel voor logging
        var ticketChannel = message.member.guild.channels.cache.find(channel => channel.name === "『🔒』staff-logs");
        if (!ticketChannel) return message.reply("Kanaal bestaat niet");

        ticketChannel.send(embedCreateTicket);

    } else {

        message.channel.send("Gelieve dit command te doen bij een ticket.");

    }



}

module.exports.help = {
    name: "close",
    category: "Algemeen",
    description: "closed een ticket",
}
