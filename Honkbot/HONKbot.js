//HONKbot @Emoti723#6885
//V3.5
//See README.MD for details

const myLoggers = require('log4js');
var moment = require('moment')
const Discord = require('discord.js');
const client = new Discord.Client()


//Log File code
myLoggers.configure({
    appenders: { mylogger: { type:"file", filename: "log.txt" } },
    categories: { default: { appenders:["mylogger"], level:"ALL" } }
});
const logger = myLoggers.getLogger("default");

//Timestamp Code
var created = moment().format('YYYY-MM-DD hh:mm:ss');
	
var sum = 0;
var prefix = 'H:sum';
var lastChannel;

// Initialization 
client.on("ready", () =>{
    created = moment().format('YYYY-MM-DD hh:mm:ss');
	console.log(`Logged in as HONKBot#9853! @ ${created}`);
	console.log(sum);
	logger.info(`Logged in as HONKBot#9853! @ ${created}`);
	logger.info(sum);
	client.user.setActivity(`${prefix}`, { type: 'STREAMING' });
});
 
// Test for the word GOOSE and reply with HONK
client.on('message', msg => {
	var string = msg.content.toUpperCase();
    var count = (string.match(/GOOSE/g) || []).length;
	for (i = 0; i < count; i++) {

		/*\ This function checks if its in the #bot-battle channel. 
		|*|	If it is not in #bot-battle and the last time it had to reply wasnt in the same channel it will reply to the users that send "honk"
		|*| The first else if will trigger if it hasn't been said in #bot-battle, if it was in the same channel as the last one and if the user was not GOOSEbot.
		|*| If those 3 conditions are true, it'll reply
		|*|	The last else if checks again if it is in #bot-battle. If it is, it will reply without any other conditions
		\*/
					//This is the channel id of #bot-battle
console.log(lastChannel)

		if(msg.channel !== "708022728560738344" && lastChannel !== msg.channel.id) {
			lastChannel = msg.channel.id;
			msg.reply('*HONK*')
		}else if(msg.channel !== "708022728560738344" && lastChannel == msg.channel.id && msg.author.id !== "707305819443560468"){
console.log("author" + msg.author.id)
			lastChannel = msg.channel.id;
			msg.reply('*HONK*')
		} else if(msg.channel == "708022728560738344"){
			msg.reply('*HONK*');
			sum = sum + 1;
		} 
	}
});

// G:sum command, which makes the bot respond with the current sum
client.on('message', msg => {
  if (msg.content === 'H:sum') { 
    created = moment().format('YYYY-MM-DD hh:mm:ss');
	msg.reply(sum);
    console.log('sum has been requested');
    console.log(`${sum} @ ${created}`);
	logger.info('sum has been requested');
	logger.info(`${sum} @ ${created}`);
  }
});

// After 5 minutes, log the sum to console
var minutes = 5, the_interval = minutes * 60 * 1000;
setInterval(function() {
	created = moment().format('YYYY-MM-DD hh:mm:ss');
	console.log('Its been 5 minutes');
	console.log(`${sum} @ ${created}`);
	logger.info('its been 5 minutes');
	logger.info(`${sum} @ ${created}`);
}, the_interval);

//token
const config = require("./TOKEN.json");
client.login(config.token); // Uses value of key 'token' in the TOKEN file. 