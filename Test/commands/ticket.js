const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    const categoryID = "792756429869678613";
    var opmerking = args.slice(0).join(" ");
    var userName = message.author.username;
    var userDiscriminator = message.author.discriminator;

    var ticketBestaat = false;

    message.guild.channels.cache.forEach(channel => {

       

    });

    if (ticketBestaat) return;

    var embed = new discord.MessageEmbed()
        .setTitle("Hoi " + message.author.username)
        .setFooter("Support kanaal wordt aangemaakt");

    message.channel.send(embed);

    message.guild.channels.create(userName.toLowerCase() + "-" + userDiscriminator, { type: 'text' }).then(
        (createdChannel) => {
            createdChannel.setParent(categoryID).then(
                (settedParent) => {

                    settedParent.updateOverwrite(message.guild.roles.cache.find(x => x.name === '@everyone'), {
                        SEND_MESSAGES: false,
                        VIEW_CHANNEL: false
                    });

                    settedParent.updateOverwrite(message.author.id, {
                        CREATE_INSTANT_INVITE: false,
                        READ_MESSAGES: true,
                        SEND_MESSAGES: true,
                        ATTACH_FILES: true,
                        CONNECT: true,
                        ADD_REACTIONS: true,
                        VIEW_CHANNEL: true,
                        READ_MESSAGE_HISTORY: true
                    });

                    var embedParent = new discord.MessageEmbed()
                        .setTitle(`Hoi ${message.author.username}`)
                        .setDescription(`Je kunt hier alvast je vragen/klachten uitleggen en dan zal er iemand naar je toe komen.
                        **Onderwerp:** 
                        ${opmerking}`)
                        .setThumbnail("")
                        .setFooter('', '')

                    settedParent.send(embedParent);
                    

                }
            ).catch(err => {
                message.channel.send("Er is iets misgelopen");
            });
        }
    ).catch(err => {
        message.channel.send("Er is iets misgelopen");
    });
}

module.exports.help = {
    name: "ticket",
    category: "Algemeen",
    description: "Maakt een support kanaal aan",
}