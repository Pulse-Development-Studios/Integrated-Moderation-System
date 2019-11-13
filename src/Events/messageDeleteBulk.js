/*
    Pulse Development Studios © November 2019
    Author: Austin Foster (YourDeadPixels)
    Development Site: https://bit.ly/33Ekwfk
    GitHub Repository: https://bit.ly/2QnglAR
*/

const edjf = require('edit-json-file');
const djs = require('discord.js');

module.exports = async (client, messages) => {
    if (message.author.bot) return;
    if (messagesArray.length > 102) {
        messagesIds = ['Sorry, there were too many messages deleted in a short time frame (over 100) to display in logs.'];
    } else {
        messages.forEach((msg) => {
            messagesIds.push(msg.id);
        });
    }

    const data = edjf(`./database/Secure/Guild Data/${client.guild.id}/data.json`);
    try {
        data.get().LogChannel;
    } catch {
        return;
    }

    const logChannel = client.channels.get(data.get().LogChannel);

    const embed = new djs.RichEmbed()
        .setAuthor(`${messagesArray.length} messages in channel #${messagesArray[0].channel.name}`)
        .setColor('RED')
        .setDescription(`**Action**: Messages Bulk Deleted\n**Deleted messages:** ` + '``' + messagesIds.join('``, ``') + '``')
        .setTimestamp(new Date());

    logChannel.send(embed);
};
