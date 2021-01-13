

module.exports = {
    name: 'command',
    description: "Embeds",
    execute(message, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#731825')
        .setTitle ('taisykles')
        .setDescription('Serverio taisykles')
        .addField('Test', 'test')
        .setFooter('Test');

        message.channel.send(newEmbed);
    }
}