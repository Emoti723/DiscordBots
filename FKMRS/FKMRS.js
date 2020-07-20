//FKMRS @Emoti723#6885
//V1
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

//Varible initialization
	var created = moment().format('YYYY-MM-DD hh:mm:ss');
  var prefix = '&rate';

// Initialization
client.on("ready", () =>{
    created = moment().format('YYYY-MM-DD hh:mm:ss');
	console.log(`Logged in as GOOSEBot#5787! @ ${created}`);
	logger.info(`Logged in as GOOSEBot#5787! @ ${created}`);
	client.user.setActivity(`${prefix}`, { type: 'STREAMING' });
});

client.on('message', msg => {
    if (msg.content === prefix) {
        msg.reply('1/10', {
            files: [
                "./photos/1.jpg"
            ]
        });
    }
});

//token
const config = require("./TOKEN.json");
client.login(config.token); // Uses value of key 'token' in the TOKEN file.
