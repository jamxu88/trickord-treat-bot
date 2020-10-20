// Halloween
const Discord = require('discord.js');
const client = new Discord.Client()
client.on('ready', function() {
    console.log(client.user.username);
});
client.on('message', (message) => {
      if (message.author.id == 755580145078632508) { 
          for(var i = 0; i < message.embeds.length; i++) {
              if(message.embeds[i].description.includes("h!trick")) {
                  message.channel.send("h!trick")
                  break;
              }else
              if (message.embeds[i].description.includes("h!treat")) {
                  message.channel.send("h!treat")
              }
          }
      }
  }
});
client.login("your discord token");
