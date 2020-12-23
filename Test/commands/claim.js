const discord = require("discord.js");

module.exports.run = async (client, message, argument) => {
    if (!message.member.hasPermission("KICK_MEMBERS")) return message.reply("sorry jij kan dit niet");

    if (!message.guild.me.hasPermission("KICK_MEMBERS")) return message.reply("Geen perms");
    
    const categoryID = "791362597085511701";

    

    if (message.channel.parentID == categoryID) {

    var botEmbed = new discord.MessageEmbed()
    .setTitle('Claim')
    .setDescription(`${message.author} Heeft deze ticket Geclaimed`)
    .setThumbnail('https://yt3.ggpht.com/a/AGF-l7_P42jUnWAoIvDDHzQH27EIOs5hAoDAwfdgug=s900-c-k-c0xffffffff-no-rj-mo')
    .setImage('')
    .setTimestamp()
    .setFooter('Defensie', '');

    

return message.channel.send(botEmbed);

    } else {
        

    message.channel.send("Gelieve dit command te doen bij een ticket.");
    }
}

module.exports.help = {
    name: "claim",
    description: "Geeft al de verschillende commands",
    category: "Informatie"
}