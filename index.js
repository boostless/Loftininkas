const Discord = require('discord.js');
const client = new Discord.Client({ partials: ["MESSAGE","CHANNEL", "REACTION"]});
const prefix = '-';
const fs = require('fs');
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
  const command = require(`./commands/${file}`);
  client.commands.set(command.name, command);
  console.log('| '+ command.name + ' Uzkrauta  ✅|');
}

const token = process.env.TOKEN;
               
client.once('ready', () => {
  console.log('Loftinikas prisijunges');
})

client.on('message', message =>{ //kaip botas reguoja i zinute
  if(!message.content.startsWith(prefix) || message.author.bot) return; //nereguos jeigu nera prefixo

  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();
  const commandFile = client.commands.get(command)
  console.log(commandFile)

  if(commandFile) client.commands.get(command).execute(message,args, Discord, client);
});
client.login(token);

