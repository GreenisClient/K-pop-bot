const Discord = require('discord.js');
const ms = require('ms');

module.exports = {
    name: 'slowmode',
    catogory: 'moderator',
    run: async (client, message, args) => {

        if (!message.member.hasPermission('MANAGE_CHANNELS')) return;

        if (!args[0]) return message.channel.send('Graag een tijd meegeven').then(m => m.delete({ timeout: 5000}));

        const currentCooldown = message.channel.rateLimitPerUser;

        const reason = args[1] ? args.slice(1).join(' ') : '-';

        const embed = new MessageEmbed()
            .setFooter(`${message.author.tag} | ${message.author.id}`, message.author.displayAvatarURL({ dynamic: true }));

        if (args[0] === 'off') {

            if (currentCooldown === 0) return message.channel.send('Slowmode is al uitgeschakeld').then(m => m.delete({ timeout: 5000 }));

            embed.setTitle('Slowmode uitgeschakeld')
                .setColor('#00ff00')
            return message.channel.setRateLimitPerUser(0, reason)

        }

        const time = ms(args[0]) / 1000;

        if (isNaN(time)) return message.channel.send('Geen geldige tijd, probeer opnieuw.').then(m => m.delete({ timeout: 5000 }));

        if (time >= 21600) return message.channel.send('Te hoog, maximaal 6 uur').then(m => m.delete({ timeout: 5000 }));

        if (currentCooldown === time) return message.channel.send(`Slowmode staat al aan op: ${args[0]}`);

        embed.setTitle('Slowmode ingeschakeld')
            .addField('Slowmode: ', args[0])
            .addField('Reden: ', reason)
            .setColor('#ff0000');

        message.channel.setRateLimitPerUser(time, reason).then(m => m.send(embed));

    }
}