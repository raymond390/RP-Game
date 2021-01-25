const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    var embedParent = new discord.MessageEmbed()
    .setTitle(`**Training Inplannen**`)
    .setColor("#000000")
    .setDescription(`Hier onder staat het commando uitgelegd

    .training <TYPE> <CO-HOST> <SUPERVISOR> <DATUM> <TIJD> <OPMERKINGEN>`)
    .setThumbnail("")
    .setFooter('', '')

    channel.send(embedParent);

}

module.exports.help = {
    name: "training",
    description: "Geeft al de verschillende commands",
    category: "Informatie"
}