//Troll Bot
//Send fake Trick'ord Treat messages
// Halloween
const Discord = require('discord.js');
const client = new Discord.Client()
client.on('ready', function() {
    console.log(client.user.username);
});
client.on('message', (message) => {
  var tt = ""
  if (message.author.id == 755580145078632508) { 
    for(var i = 0; i < message.embeds.length; i++) {
        if(message.embeds[i].description.includes("h!trick")) {
            tt = "h!treat"
            imgurl = message.embeds[i].image.url
            break;
        }else
        if (message.embeds[i].description.includes("h!treat")) {
            tt = "h!trick"
            imgurl = message.embeds[i].image.url
            break;
        }
    }
    message.channel.send("_ _ \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n _ _")
    message.channel.send(
      {
      "embed": {
      "title": "A trick-or-treater has stopped by!",
      "author": {
        "name": "Trick'cord Treat",
        "icon_url": "https://cdn.discordapp.com/avatars/755580145078632508/517cb1cb893f6125032ec4913d8b8c80.png?size=2048"
      },
      "description": "Open the door and greet them with "+ tt,
      "color": 7506394,
      "image": {
        "url": imgurl
      }
    }})
  }
});
client.login("token");
