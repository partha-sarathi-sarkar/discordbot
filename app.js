const Discord = require('discord.js');
require('dotenv').config();


const client = new Discord.Client();


client.on('ready', () => {
    console.log('Bot is ready');
  });

console.log("Token :process.env.BOT_TOKEN")
client.login(process.env.BOT_TOKEN)


client.on('message', (msg) => {
    if (msg.content === '!Hello') msg.reply('Hi');
  });
  