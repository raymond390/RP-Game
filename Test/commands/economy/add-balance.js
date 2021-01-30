const economy = require('../../features/economy')

module.exports = {
  commands: ['addbalance', 'addbal'],
  minArgs: 2,
  maxArgs: 2,
  expectedArgs: "<The target's @> <coin amount>",
  permissionError: 'Je moet administrator hebben om deze commando te gebruiken',
  permissions: 'ADMINISTRATOR',
  description: 'geef een gebruiker geld',
  callback: async (message, arguments) => {
    const mention = message.mentions.users.first()

    if (!mention) {
      message.reply('Tag een persoon ')
      return
    }

    const coins = arguments[1]
    if (isNaN(coins)) {
      message.reply('Geef een geldig aantal munten op. ')
      return
    }

    const guildId = message.guild.id
    const userId = mention.id

    const newCoins = await economy.addCoins(guildId, userId, coins)

    message.reply(
      `Je hebt de <@${userId}> ${coins} coin(s). hij heeft nu ${newCoins} coin(s)!`
    )
  },
}