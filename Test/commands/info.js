const discord = require("discord.js");
const check = "👌"
module.exports.run = async (client, message, args) => {

    var botEmbed = new discord.MessageEmbed()
            .setTitle('Informatie')
            .setColor("#0099ff")
            .setDescription("Deze Bot is gemaakt bij **Raymond#1362**\n")
            .addFields(
              
            )
            .setThumbnail('')
            .setImage('')
            .setTimestamp()
            .setFooter('', '');

             message.channel.send(botEmbed);
             then((ticketMessage) => {
                ticketMessage.react(check)

}

module.exports.help = {
    name: "info",
    category: "Informatie"
}