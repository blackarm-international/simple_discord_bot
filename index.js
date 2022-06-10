var botData = require('./config.json');
var _a = require('discord.js'), Client = _a.Client, Intents = _a.Intents;
var client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
client.on('ready', function () {
    console.log("Logged in as ".concat(client.user.tag, "!"));
});
client.on('message', function (msg) {
    if (msg.content === 'ping') {
        msg.reply('pong');
    }
});
client.login(botData.token);
