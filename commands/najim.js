const { MessageEmbed } = require('discord.js');
const ms = require('ms');

module.exports = {

    name: 'najim',
    catogory: 'admins',
    run: async (client, message, args, Discord) => {

        var Najim = new Discord.MessageEmbed()
        .setTitle("Najim")
        .addField("Rank:", "Moderator")
        .addField("Leeftijd:", "14")
        .addField("Verjaardag:", "30 juni")
        .addField("Volg Najim op:", "[Instagram](https://www.instagram.com/wasbeerbitch/)")
        .setColor("#8f69db")

        .setTimestamp()
        .setFooter('');

    return message.channel.send(Najim);
}

}