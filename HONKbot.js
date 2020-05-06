//HONKbot @Emoti723#6885

const Discord = require('discord.js');
const client = new Discord.Client()

client.on('ready', () => {
  console.log('logged in as HONKbot!');
  console.log(sum);
});

var sum = 0;


// Test for the word GOOSE and reply with HONK
client.on('message', msg => {
	var string = msg.content.toUpperCase();
	var count = (string.match(/GOOSE/g) || []).length;
        for (i = 0; i < count; i++) {
                msg.reply('*HONK*');
		sum = sum + 1;		
	 }
});


// H:sum command, which makes the bot respond with the current sum
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
client.login('TOKEN');