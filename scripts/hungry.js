controller.hears(['hungry', 'お腹すいた'], 'direct_message,direct_mention,mention', function(bot, message) {

    bot.reply(message, 'わかる。');
});