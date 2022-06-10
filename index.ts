const botData = require('./config.json');
const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [] });

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('pong');
  }
});

client.login(botData.token);
