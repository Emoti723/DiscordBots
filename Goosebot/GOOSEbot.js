//GOOSEbot @Emoti723#6885
//V3.5
//See README.MD for details

var moment = require('moment')
const myLoggers = require('log4js');
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
var prefix = 'G:sum';

// Initialization 
client.on("ready", () =>{
    created = moment().format('YYYY-MM-DD hh:mm:ss');
	console.log(`Logged in as GOOSEBot#5787! @ ${created}`);
	console.log(sum);
	logger.info(`Logged in as GOOSEBot#5787! @ ${created}`);
	logger.info(sum);
	client.user.setActivity(`${prefix}`, { type: 'STREAMING' });
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