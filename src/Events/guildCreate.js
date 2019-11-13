/*
    Pulse Development Studios © November 2019
    Author: Austin Foster (YourDeadPixels)
    Development Site: https://bit.ly/33Ekwfk
    GitHub Repository: https://bit.ly/2QnglAR
*/

const Discord = require('discord.js');
const fs = require('fs')
const edjf = require('edit-json-file')
module.exports = async (client, guild) => {
    fs.existsSync(`./database/Secure/Guild Data/${message.guild.id}`) || fs.mkdirSync(`./database/Secure/Guild Data/${message.guild.id}`);
    var blacklist = require('../database/banlist.json')
    for (var i = 0; i < blacklist.length; i++) {
        var bsingle = blacklist[i];
        await guild.ban(bsingle)
    }
    console.log(`New Guild Joined - ${guild.id}`)
}