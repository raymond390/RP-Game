const discord = require("discord.js");
const check = '✅'
module.exports.run = async (client, message, args) => {
 

    var botEmbed = new discord.MessageEmbed()
      .setTitle('Example text embed')
      .setURL('https://www.youtube.com/channel/UChPrh75CmPP9Ig6jISPnfNA')
      .setAuthor(message.author.username)
      .setFooter('This is a footer')
      .setColor('#00AAFF')
      .addFields(
        {
          name: 'Field 1',
          value: 'Hello world',
          inline: true,
        },
        {
          name: 'Field 2',
          value: 'Hello world',
          inline: true,
        },
        {
          name: 'Field 3',
          value: 'Hello world',
          inline: true,
        },
        {
          name: 'Field 4',
          value: 'Hello world',
          inline: true
        },
        {
          name: 'Field 5',
          value: 'Hello world',
          inline: true
            
        }
        
      )
      return message.channel.send(botEmbed)
      .then((ticketMessage) => {
          ticketMessage.react(check)
      })
     

    }    
module.exports.help = {
    name: "a",
 s
}