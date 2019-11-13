/*
    Pulse Development Studios © November 2019
    Author: Austin Foster (YourDeadPixels)
    Development Site: https://bit.ly/33Ekwfk
    GitHub Repository: https://bit.ly/2QnglAR
*/

const edjf = require('edit-json-file');
const djs = require('discord.js');

module.exports = async (client, message) => {
    if (message.author.bot) return;
    const data = edjf(`./database/Secure/Guild Data/${message.guild.id}/data.json`);

    try {
        data.get().LogChannel;
    } catch {
        return;
    }

    const logChannel = client.channels.get(data.get().LogChannel);

    const member = message.guild.member(message.author);

    try {
        const embed = new djs.RichEmbed()
            .setAuthor('A Message was Deleted')
            .setThumbnail(message.author.displayAvatarURL)
            .setColor('RED')
            .addField('Deleted Message', message.content)
            //.setDescription(`**Action**: Message Deleted\n**Deleted message:** ${message.content}`)
            .addField('User', `<@${message.author.id}>`)
            .addField('User ID', message.author.id)
            .addField('Username + Tag', message.author.tag)
            .setTimestamp(new Date());

        logChannel.send(embed);
    } catch {
        const embed = new djs.RichEmbed()
            .setAuthor('A Message was Deleted')
            .setThumbnail(message.author.displayAvatarURL)
            .setColor('RED')
            .addField('Deleted Message', message.content)
            //.setDescription(`**Action**: Message Deleted\n**Deleted message:** ${message.content}`)
            .addField('User', `<@${message.author.id}>`)
            .addField('User ID', message.author.id)
            .addField('Username + Tag', message.author.tag)
            .setTimestamp(new Date());

        logChannel.send(embed);
    }
};
