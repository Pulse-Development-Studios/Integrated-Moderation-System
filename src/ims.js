/*
    Pulse Development Studios © November 2019
    Author: Austin Foster (YourDeadPixels)
    Development Site: https://bit.ly/33Ekwfk
    GitHub Repository: https://bit.ly/2QnglAR
*/

const Discord = require("discord.js");
const Enmap = require("enmap");
const fs = require("fs");

const client = new Discord.Client();
const { token } = require('./Database/Secure/Authentication/token.json')
const config = require("./Database/settings.json");
client.config = config;

fs.readdir("./Events/", (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
        const event = require(`./Events/${file}`);
        let eventName = file.split(".")[0];
        console.log(`Loading Event: ${eventName}...`)
        client.on(eventName, event.bind(null, client));
    });
});

client.commands = new Enmap();

fs.readdir("./Commands/", (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
        if (!file.endsWith(".js")) return;
        let props = require(`./Commands/${file}`);
        let commandName = file.split(".")[0];
        console.log(`Loading Command: ${commandName}...`);
        client.commands.set(commandName, props);
    });
});

client.login(token);