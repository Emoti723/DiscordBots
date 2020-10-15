//Goosebot @Emoti723#6885
//V4.0 - RHS Edition
//See README.MD for details

const myLoggers = require('log4js');
var moment = require('moment')
const Discord = require('discord.js');
const client = new Discord.Client()

//Timestamp variable
var created = moment().format('YYYY-MM-DD hh:mm:ss');

//Timestamp variable
var created = moment().format('YYYY-MM-DD hh:mm:ss');

//Log File code
myLoggers.configure({
    appenders: { mylogger: { type:"file", filename: `$(created)-log.txt` } },
    categories: { default: { appenders:["mylogger"], level:"ALL" } }
});

const logger = myLoggers.getLogger("default");

//General Bot varibles
var sum = 0;
var prefix = 'G:sum';
var username = 'Goosebot#8029';

// Initialization 
client.on("ready", () =>{
    created = moment().format('YYYY-MM-DD hh:mm:ss');
	logger.info(`Logged in as ${username} @ ${created}`);
	logger.info(sum);
	client.user.setActivity(`${prefix}`, { type: 'STREAMING' });
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

// Prefix command, which makes the bot respond with the current sum
client.on('message', msg => {
  if (msg.content === `${prefix}`) { 
    created = moment().format('YYYY-MM-DD hh:mm:ss');
	msg.reply(sum);
	logger.info('sum has been requested');
	logger.info(`${sum} @ ${created}`);
  }
});

// After 60 minutes, log the sum to console
var minutes = 60, the_interval = minutes * 60 * 1000;
setInterval(function() {
	created = moment().format('YYYY-MM-DD hh:mm:ss');
	logger.info('its been 60 minutes');
	logger.info(`${sum} @ ${created}`);
}, the_interval);

//token
const config = require("./TOKEN.json");
client.login(config.token); // Uses value of key 'token' in the TOKEN file. 