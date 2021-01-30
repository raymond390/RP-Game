const mongo = require('../../mongo')
const warnSchema = require('../../schemas/warn-schema')

module.exports = {
  commands: ['listwarns', 'lw'],
  minArgs: 1,
  expectedArgs: "<Target user's @>",
  requiredRoles: ['Moderator'],
  callback: async (message, arguments, text) => {
    const target = message.mentions.users.first()
    if (!target) {
      message.reply('geef een naam op')
      return
    }

    const guildId = message.guild.id
    const userId = target.id

    await mongo().then(async (mongoose) => {
      try {
        const results = await warnSchema.findOne({
          guildId,
          userId,
        })

        let reply = `Warns <@${userId}>:\n\n`

        for (const warning of results.warnings) {
          const { author, timestamp, reason } = warning

          reply += `Bij ${author} op ${new Date(
            timestamp
          ).toLocaleDateString()} voor "${reason}"\n\n`
        }

        message.reply(reply)
      } finally {
        mongoose.connection.close()
      }
    })
  },
}