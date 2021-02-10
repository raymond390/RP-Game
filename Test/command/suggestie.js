const discord = require("discord.js");

module.exports.run = async (client, message, args) => {
 
    const check = '👍'
    const uncheck = '👎'
    var opmerking = args.slice(0).join(" ");

   

        // Create embed.
        var embedCreateTicket = new discord.MessageEmbed()
            .setTitle(`${message.author}`)
            .setDescription(`**Suggestie** \n ${opmerking} `)
            .setFooter("Suggestie")
            .setColor;
            
            
            

        // Channel voor logging
        var ticketChannel = message.member.guild.channels.cache.find(channel => channel.name === "『👷』bot-testing");

        ticketChannel.send(embedCreateTicket)
        .then((ticketMessage) => {
            ticketMessage.react(check)
            ticketMessage.react(uncheck)
        })





}

module.exports.help = {
    name: "suggestie",
    category: "Algemeen",
    description: "closed een ticket",
}
