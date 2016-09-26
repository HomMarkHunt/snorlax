controller.hears(['hungry', 'お腹すいた'], 'direct_message,direct_mention,mention', (bot, message) => {

    bot.reply(message, 'わかる。');
});