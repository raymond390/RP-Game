const command = require('./command')
const ownerId = '590540346983710740' // my discord user ID
const channelId = '757998148969824379' // private channel ID

module.exports = (client) => {
  command(client, 'eval', (message) => {
    const { member, channel, content } = message

    if (member.id === ownerId && channel.id === channelId) {
      const result = eval(content.replace('!eval ', ''))
      channel.send(result)
    }
  })
}