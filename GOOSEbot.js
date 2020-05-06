//GOOSEbot @Emoti723#6885
const Discord = require('discord.js');
const client = new Discord.Client()

// Initialization
client.on('ready', () => {
  var sum = 0;
  client.user.setPresence({
        game: { 
            name: 'G:sum',
            type: 'LISTENING'
        },
        status: 'online'
    })
  console.log('logged in as GOOSEbot');
  console.log(sum);
});

// Test for the word HONK and reply with GOOSE
client.on('message', msg => {
	var string = msg.content.toUpperCase();
    var count = (string.match(/HONK/g) || []).length;
		for (i = 0; i < count; i++) {
            msg.reply('*GOOSE*');
		sum = sum + 1;
        }
});

// G:sum command, which makes the bot respond with the current sum
client.on('message', msg => {
  if (msg.content === 'G:sum') { 
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
const config = require("./GOOSEconfig.json");
client.login(GOOSEconfig.token); // Uses value of key 'token' in config file. 
