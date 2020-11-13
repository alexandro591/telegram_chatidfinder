const { getUser } = require('../components/helper')

module.exports = async ctx => {
  const { id, isBot, name } = getUser(ctx.from)

  try {
    ctx.reply(`Hi ${isBot ? 'Mr. robot' : name}, your telegram chat id is: ${id}\n\nThank you for using Telegram chat_id finder.`)
  } catch (e) {
    return ctx.reply(`Error occured.`)
  }

}