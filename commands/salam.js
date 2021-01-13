module.exports = {
    name: 'salam',
    description: "Čia testavimo komanda!",
    execute(message, args){
        if(message.member.roles.cache.has('798588706118041640')){

        
          message.channel.send('aleikum!');

        }else {
            message.channel.send('Tu neturi teisės panaudoti šios komandos');
        }
    }
}