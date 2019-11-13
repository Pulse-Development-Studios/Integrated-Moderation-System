/*
    Pulse Development Studios © November 2019
    Author: Austin Foster (YourDeadPixels)
    Development Site: https://bit.ly/33Ekwfk
    GitHub Repository: https://bit.ly/2QnglAR
*/

const edjf = require('edit-json-file');
const djs = require('discord.js');

module.exports = async (client, messageOld, messageNew) => {
    if (messageOld.author.bot) return;
    if(messageOld.author === client.user){
        return;
    }

    const data = edjf(`./database/Secure/Guild Data/${messageOld.guild.id}/data.json`);

    try {
        data.get().LogChannel;
    } catch {
        return;
    }

    const logChannel = client.channels.get(data.get().LogChannel);

    const member = messageOld.guild.member(messageOld.author);

    const embed = new djs.RichEmbed()
        .setThumbnail(messageOld.author.displayAvatarURL)
        .setAuthor('A Message was Edited/Link Embed Change')
        .setColor('ORANGE')
        .addField('Old Message', messageOld.content)
        .addField('New Message', messageNew.content)
        //.setDescription(`**Action**: Message Edited\n**Old message:** ${messageOld.content}\n**New message:** ${messageNew.content}`)
        .addField('User', `<@${messageOld.author.id}>`)
        .addField('User ID', messageOld.author.id)
        .addField('Username + Tag', messageOld.author.tag)
        .setTimestamp(new Date());

    logChannel.send(embed);
};