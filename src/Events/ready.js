/*
    Pulse Development Studios © November 2019
    Author: Austin Foster (YourDeadPixels)
    Development Site: https://bit.ly/33Ekwfk
    GitHub Repository: https://bit.ly/2QnglAR
*/

const config = require('../database/settings.json')
var blacklist = require('../database/banlist.json')
const edjf = require('edit-json-file')
const moment = require('moment')
module.exports = (client) => {
    let statuses = [
        `Pulse Studios`,
        `to ${client.users.size} users!`
    ]
    const data = edjf(`./database/sessionlog.json`);
    let total;
    try {
    total = data.get().session.total
    } catch {
    total = 0;
    }
    let totalc = total
    data.set(`session.total`, totalc + 1)
    data.save();
    let startupc = data.get().session.total
    data.set(`session.${startupc}.startup`, moment().format("LTS") + " | " + moment().format("L"))
    data.set(`session.${startupc}.users`, client.users.size)
    data.save();
    setInterval(function () {
        let status = statuses[Math.floor(Math.random() * statuses.length)];
        client.user.setActivity(status, { type: "STREAMING", url: 'https://twitch.tv/yourdeadpixels' });
    }, 2500)
    console.log("\n-------------------------------------------------")
    console.log(`--> PULSE DEVELOPMENT - IMS BOT`)
    console.log(`--> INTEGRATED MODERATION SYSTEM`)
    console.log(`--> Connected to Discord's API`)
    console.log("-------------------------------------------------")
    console.log(`--> Bot Name :      [ ${client.user.tag} ]`)
    console.log(`--> Bot ID :        [ ${client.user.id} ]`)
    console.log(`--> Commands size : [ ${client.commands.size} ]`)
    console.log(`--> Bot's prefix :  [ ${config.prefix} ]`)
    console.log(`--> Guilds size :   [ ${client.guilds.size} ]`)
    console.log(`--> User size :     [ ${client.users.size} ]`)
    console.log(`--> Global Bans :   [ ${blacklist.length} ]`)
    console.log("-------------------------------------------------")
    console.log(`=> Startup Sequence Complete \n`)
};
