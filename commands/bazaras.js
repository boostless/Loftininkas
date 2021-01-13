module.exports = {
    name: 'bazaras',
    description: "Bazaro rolės gavimas!",
    execute(message, args){
        var bazaras = args[0];

        if(!bazaras) return message.channel.send(`${message.author}, Nenurodei bazaro kanalo ! Pvz. bazaras 1`)

        if(bazaras == '1'){
            message.channel.send('Matau vykstą bazaras ir nori šios rolės, leisk man ją tau uždėti, galite testi bazara pirmame bazaro kanale (Jei nori sustbadyti parasyk bazaras stop)')
            message.member.roles.add('798597228419088421');
        }else if (bazaras == '2'){
            message.channel.send('Matau vykstą bazaras ir nori šios rolės, leisk man ją tau uždėti, bazara galite testi antrame bazaro kanale (Jei nori sustbadyti parasyk bazaras stop)')
            message.member.roles.add ('798597337210945556');
        }else if (bazaras == '3'){
            message.channel.send('Matau vykstą bazaras ir nori šios rolės, leisk man ją tau uždėti, bazara galite testi treciame bazaro kanale (Jei nori sustbadyti parasyk bazaras stop)')
            message.member.roles.add ('798597435835678771');
        }else if (bazaras == 'stop'){
            message.channel.send('Matau bazaras baigėsi, leisk nuiimti tau rolę, kaip sekėsi?')
            message.member.roles.remove('798597435835678771');
            message.member.roles.remove ('798597337210945556');
            message.member.roles.remove('798597228419088421');
        }
          
    }
    
}