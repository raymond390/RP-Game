const discord = require("discord.js");

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

            var botEmbed = await message.channel.send(botEmbed);
            embedSend.react("🎉");

}

module.exports.help = {
    name: "info",
    category: "Informatie"
}