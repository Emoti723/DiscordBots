//HONKbot @Emoti723#6885
//V3.0

const Discord = require('discord.js');
const client = new Discord.Client()

var sum = 0;

// Initialization 
client.on("ready", () =>{
    console.log(`Logged in as HONKBot#9853!`);
	console.log(sum);
    client.user.setPresence({
        status: "online",  //You can show online, idle....
        game: {
            name: "H:sum",  //The message shown
            type: "LISTENING" //PLAYING: WATCHING: LISTENING: STREAMING:
        }
    });
 });
 
// Test for the word GOOSE and reply with HONK
client.on('message', msg => {
	var string = msg.content.toUpperCase();
    var count = (string.match(/GOOSE/g) || []).length;
		for (i = 0; i < count; i++) {
            msg.reply('*HONK*');
		sum = sum + 1;
        }
});

// G:sum command, which makes the bot respond with the current sum
client.on('message', msg => {
  if (msg.content === 'H:sum') { 
    msg.reply(sum);
    console.log('sum has been requested');
    console.log(sum);
  }
});

// After 5 minutes, log the sum to console
var minutes = 5, the_interval = minutes * 60 * 1000;
setInterval(function() {
   console.log('Its been 5 minutes');
   console.log(sum); 
}, the_interval);

//token
const config = require("./TOKEN.json");
client.login(config.token); // Uses value of key 'token' in the TOKEN file. 

