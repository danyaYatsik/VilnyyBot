const { Telegraf } = require('telegraf');
require('dotenv').config();

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start((ctx) => ctx.reply('HI pidr'));
bot.on('message', (ctx) => {
	console.log(ctx.message);
	ctx.reply('hi');
})
bot.launch();

process.once('SIGTERM', () => bot.stop('SIGTERM'));
process.once('SIGINT', () => bot.stop('SIGINT'));