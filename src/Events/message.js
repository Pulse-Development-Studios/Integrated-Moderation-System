/*
    Pulse Development Studios © November 2019
    Author: Austin Foster (YourDeadPixels)
    Development Site: https://bit.ly/33Ekwfk
    GitHub Repository: https://bit.ly/2QnglAR
*/

const Discord = require("discord.js")
const config = require("../database/settings.json");
module.exports = async (client, message) => {
    // Ignore all bots
    if (message.author.bot) return;

    // Ignore messages not starting with the prefix (in config.json)
    if (message.content.indexOf(client.config.prefix) !== 0) return;
  
    // Our standard argument/command name definition.
    const args = message.content.slice(client.config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
  
    // Grab the command data from the client.commands Enmap
    const cmd = client.commands.get(command);
  
    // If that command doesn't exist, throw error in chat.
  if (!cmd) {
    let embed = new Discord.RichEmbed()
      .setColor('RED')
      .setAuthor("ERROR")
      .setDescription('If Error is undefined, contact **pulsedevelopmentcontact@gmail.com**')
      .addField('Code', 'EC97213')
      .setFooter(config.footer)
      .setTimestamp(new Date())
      message.channel.send(embed)
  } else {
    cmd.run(client, message, args);
  }
    // Run the command
  //  cmd.run(client, message, args);
    
  };