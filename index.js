const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '+'

const token = '';

client.once('ready', () => {
  console.log('Loftinikas prisijunges');
})
client.on('message', message =>{ //kaip botas reguoja i zinute

});

client.login(token);

