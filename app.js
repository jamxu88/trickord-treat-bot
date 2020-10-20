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
                setTimeout(message.channel.send("h!trick"),10)
                console.log("Sniped.")
                break;
            }else
            if (message.embeds[i].description.includes("h!treat")) {
                setTimeout(message.channel.send("h!treat"),10)
                console.log("Sniped.")
                break;
            }
        }
    }
});
client.login("your discord token");
