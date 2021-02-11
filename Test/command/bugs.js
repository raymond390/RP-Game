const discord = require("discord.js");

module.exports.run = async (client, message, args) => {
 
   
    var opmerking = args.slice(0).join(" ");
    const user = message.mentions.users.first() || message.member.user

    if (!args[0]) return message.reply("Geen Bug gegeven");
    

        // Create embed.
        var embedCreateTicket = new discord.MessageEmbed()
            .setAuthor(`${user.username}`, user.displayAvatarURL())
            .setTitle('🚨 Bugreport')
            .setDescription(`${opmerking}`)
            .setFooter(`Bug ${user.username}`)
            .setColor("#ed0909");
            
            
            

        // Channel voor logging
        var ticketChannel = message.member.guild.channels.cache.find(channel => channel.name === "bugs");

        ticketChannel.send(embedCreateTicket)
   
        


    


}

module.exports.help = {
    name: "bug",
    category: "Informatie",
    description: "Geef een suggestie",
}
