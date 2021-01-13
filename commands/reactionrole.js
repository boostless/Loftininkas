
module.exports = {
    name: 'reactionrole',
    description: "Embeds",
   async  execute(message, args, Discord, client) {

        const channel = '798639003284406284';// Kanalas kur galesi pareactint
        const siauliaiRole = message.guild.roles.cache.find(role => role.name == 'Šiauliai');
        const kaunasRole = message.guild.roles.cache.find(role => role.name == 'Kaunas');
        const klaipedaRole = message.guild.roles.cache.find(role => role.name == 'Klaipėda');
        const vilniusRole = message.guild.roles.cache.find(role => role.name == 'Vilnius');
        const panevezysRole = message.guild.roles.cache.find(role => role.name == 'Panevežys');
        const alytusRole = message.guild.roles.cache.find(role => role.name == 'Alytus');
        const marijampoleRole = message.guild.roles.cache.find(role => role.name == 'Marijampolė');
        const jonavaRole = message.guild.roles.cache.find(role => role.name == 'Jonava');
        const plungeRole = message.guild.roles.cache.find(role => role.name == 'Plungė');
        const mazeikiaiRole = message.guild.roles.cache.find(role => role.name == 'Mažeikiai');
        const telsiaiRole = message.guild.roles.cache.find(role => role.name == 'Telšiai');
        const taurageRole = message.guild.roles.cache.find(role => role.name == 'Tauragė');
        const kretingaRole = message.guild.roles.cache.find(role => role.name == 'Kretinga');
        const kedainiaiRole = message.guild.roles.cache.find(role => role.name == 'Kėdainiai');

        const miestuEmoji = [':Siauliai:798830518065954848', ':Kaunas:798830403871834123', ':Klaipeda:798834300010496070', 
        ':Vilnius:798834300018884628', ':Panevezys:798834299603648552', ':Alytus:798834299105312779', ':Marijampole:798834295178788864',
        ':Jonava:798834301009002506', ':Plunge:798834297649627156', ':Mazeikiai:798834298533969930', ':Telsiai:798834294608756766',
        ':Taurage:798834299100594186', ':Kretinga:798834291576274944', ':Kedainiai:798838922775363614' 
        ]

        let embed = new Discord.MessageEmbed()
        .setColor('#e42643')
        .setTitle("Pasirink miesta")
        .setDescription('Pazimek role pagal savo miesta!\n\n'
            + `**Šiauliai** - <${miestuEmoji[0]}>\n`
            + `**Vilnius** - <${miestuEmoji[3]}>\n`
            + `**Kaunas** - <${miestuEmoji[1]}>\n`
            + `**Klaipėda** - <${miestuEmoji[2]}>\n`
            + `**Panevežys** - <${miestuEmoji[4]}>\n`
            + `**Alytus** - <${miestuEmoji[5]}>\n`
            + `**Marijampolė** - <${miestuEmoji[6]}>\n`
            + `**Jonava** - <${miestuEmoji[7]}>\n`
            + `**Plungė** - <${miestuEmoji[8]}>\n`
            + `**Mažeikiai** - <${miestuEmoji[9]}>\n`
            + `**Telšiai** - <${miestuEmoji[10]}>\n`
            + `**Tauragė** - <${miestuEmoji[11]}>\n`
            + `**Kretinga** - <${miestuEmoji[12]}>\n`
            + `**Kėdainiai** - <${miestuEmoji[13]}>`
        );
           
        let messageEmbed = await message.channel.send(embed);

        for (i = 0; i < miestuEmoji.length; i++){
            messageEmbed.react(`${miestuEmoji[i]}`);
        }

        client.on('messageReactionAdd', async (reaction, user) => {
            if (reaction.message.partial) await  reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;

            if (reaction.message.channel.id == channel){
                console.log(reaction.emoji.name)
                switch(reaction.emoji.name){
                    case 'Siauliai':
                        return await reaction.message.guild.members.cache.get(user.id).roles.add(siauliaiRole);
                    case 'Kaunas':
                       return await reaction.message.guild.members.cache.get(user.id).roles.add(kaunasRole);
                    case 'Klaipeda':
                        return await reaction.message.guild.members.cache.get(user.id).roles.add(klaipedaRole);
                    case 'Vilnius':
                        return await reaction.message.guild.members.cache.get(user.id).roles.add(vilniusRole);
                    case 'Marijampole':
                         return await reaction.message.guild.members.cache.get(user.id).roles.add(marijampoleRole);
                    case 'Alytus':
                        return await reaction.message.guild.members.cache.get(user.id).roles.add(alytusRole);
                    case 'Jonava':
                       return await reaction.message.guild.members.cache.get(user.id).roles.add(jonavaRole);
                    case 'Plunge':
                        return await reaction.message.guild.members.cache.get(user.id).roles.add(plungeRole);
                    case 'Mazeikiai':
                        return await reaction.message.guild.members.cache.get(user.id).roles.add(mazeikiaiRole);
                    case 'Telsiai':
                         return await reaction.message.guild.members.cache.get(user.id).roles.add(telsiaiRole);
                    case 'Taurage':
                        return await reaction.message.guild.members.cache.get(user.id).roles.add(taurageRole);
                    case 'Kretinga':
                        return await reaction.message.guild.members.cache.get(user.id).roles.add(kretingaRole);
                    case 'Kedainiai':
                        return await reaction.message.guild.members.cache.get(user.id).roles.add(kedainiaiRole);
                    case 'Panevezys':
                        return await reaction.message.guild.members.cache.get(user.id).roles.add(panevezysRole);
                }
            }
        });
    }
}