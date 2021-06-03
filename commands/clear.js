const { MessageEmbed } = require('discord.js')
module.exports = {
    name: "clear",
    category: "moderator",
    run: async (client, message, args, Discord) => {
        if (!message.member.permissions.has("MANAGE_MESSAGES"))
            return;
        if (!args[0]) {
            return message.channel.send(`Vul een getal van 1 tot 100 in.`)
        }

        let deleteAmount;

        if (parseInt(args[0]) > 100 ) {
            deleteAmount = 100;
        } else {
            deleteAmount = parseInt(args[0]);
        }

        await message.channel.bulkDelete(deleteAmount, true);

        const embed = new MessageEmbed()
            .setDescription(`***${deleteAmount} Berichten verwijderd!***`)
            .setColor('#00ff00')
        await message.channel.send(embed)

        ,
        
        LogEmbed = new Discord.MessageEmbed()
        .setColor("#ff0000")
        .setDescription(`<@${message.author.id}> ***Heeft ${deleteAmount} berichten verwijderd in <#${message.channel.id}>!***`)

        const log = client.channels.cache.find(channel => channel.id === "848924989196468224");
        log.send(LogEmbed)


      
    }



}