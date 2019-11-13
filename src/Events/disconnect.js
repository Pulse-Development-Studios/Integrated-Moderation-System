/*
    Pulse Development Studios © November 2019
    Author: Austin Foster (YourDeadPixels)
    Development Site: https://bit.ly/33Ekwfk
    GitHub Repository: https://bit.ly/2QnglAR
*/

const Discord = require('discord.js');
const fs = require('fs')
const edjf = require('edit-json-file')
module.exports = async (client, disconnect) => {
    const data = edjf('./database/sessionlog.json')
    let startupc = data.get().session.total
    data.set(`session.${startupc}.disconnect`, moment().format("LTS") + " | " + moment().format("L"))
    data.save();
}