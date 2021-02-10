const discord = require("discord.js");

module.exports.run = async (client, message, args) => {
 
    const check = '👍'
    const uncheck = '👎'
    var opmerking = args.slice(0).join(" ");

    if (!args[0]) return message.reply("Geen suggestie gegeven");

        // Create embed.
        var embedCreateTicket = new discord.MessageEmbed()
            .setAuthor(message.author.username)
            .setTitle("Suggestie")
            .setDescription(`${opmerking}`)
            .setFooter("Suggestie")
            .setColor("#ed0909");
            
            
            

        // Channel voor logging
        var ticketChannel = message.member.guild.channels.cache.find(channel => channel.name === "suggesties");

        ticketChannel.send(embedCreateTicket)
        .then((ticketMessage) => {
            ticketMessage.react(check)
            ticketMessage.react(uncheck)
        })





}

module.exports.help = {
    name: "suggestie",
    category: "Informatie",
    description: "Geef een suggestie",
}
