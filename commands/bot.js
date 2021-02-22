const Discord = require('discord.js');
const Client = require('./client/Client.js');
var prefix = "*";
client.on("message",message=>{

  if(message.author.bot) return
  if(message.content.startsWith(prefix +"dmall")){
  	
  	let msg = message.content.slice((prefix +"dmall ").length)

    if(!message.member.hasPermission("ADMINISTRATOR"))
return message.channel.send(":x: **Vous n'êtes pas autorisé à utiliser cette commande** :x:");

    try{
      message.guild.members.forEach(member => {
        if (member.id != bot.user.id && !member.user.bot) member.send(msg);
      });}catch(e){
        
      }
      return message.channel.send("Envoi de DM à tous, cela peut prendre un certain temps")
  }

})
client.login(ODEyNDAyMTMwNTQyMzk1Mzkz.YDAOcQ.zUrLg-FWVfK5nvszc8ON35_35Ow);