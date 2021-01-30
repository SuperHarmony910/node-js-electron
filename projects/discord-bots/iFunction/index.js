const Discord = require('discord.js');
require('dotenv').config();
const bot = new Discord.Client();
bot.commands = new Discord.Collection();
const botCommands = require('./commands');

Object.keys(botCommands).map(key => {
  bot.commands.set('!' + botCommands[key].name, botCommands[key]);
});

const TOKEN = process.env.TOKEN;
const prefix = '!';

bot.login(TOKEN);

bot.on('ready', () => {
  console.info(`Logged in as ${bot.user.tag}!`);
});

bot.on('message', message => {

const args = message.content.slice(prefix.length).trim().split(/ +/g);
const command = args.shift().toLowerCase();

  console.info(`Called command: ${command}`);

  if (!bot.commands.has(command)) return;

  try {
    bot.commands.get(command).execute(message, args);
  } catch (error) {
    console.error(error);
    message.reply('There was an error trying to execute that command!');
  }
});

setTimeout((function() {
	console.log('Bot run successfully!');
    return process.exit(0);
}), 600000);
// Timeout currently set to 10 minutes. For 30 minutes, replace the value with `1800000`, for 10 minutes, replace the value with `600000`, and for 1 hour, replace the value with `3600000`
