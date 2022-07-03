var Telegraf = require('telegraf');
require('dotenv').config();
var bot = new Telegraf(process.env.BOT_TOKEN);
bot.start(function (ctx) => { return ctx.reply('HI pidr!!!'); });
bot.on('sticker', (ctx) => ctx.reply('hi'));
bot.launch();
process.once('SIGTERM', function () { return bot.stop('SIGTERM'); });
process.once('SIGINT', function () { return bot.stop('SIGINT'); });
