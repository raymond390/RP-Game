const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    var botEmbed = new discord.MessageEmbed()
            .setTitle('Informatie')
            .setColor("#0099ff")
            .setDescription("Deze Bot is gemaakt bij **Raymond#1362**\n")
            .addFields(
              
            )
            .setThumbnail('https://yt3.ggpht.com/a/AGF-l7_P42jUnWAoIvDDHzQH27EIOs5hAoDAwfdgug=s900-c-k-c0xffffffff-no-rj-mo')
            .setImage('')
            .setTimestamp()
            .setFooter('Defensie', '');

        return message.channel.send(botEmbed);

}

module.exports.help = {
    name: "info",
    category: "Informatie"
}