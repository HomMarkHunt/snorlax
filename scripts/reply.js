controller.hears(['hello', 'hi'], 'direct_message,direct_mention,mention', (bot, message) => {

    bot.api.reactions.add({
        timestamp: message.ts,
        channel: message.channel,
        name: 'robot_face',
    }, (err, res) => {
        if (err) {
            bot.botkit.log('Failed to add emoji reaction :(', err);
        }
    });
});