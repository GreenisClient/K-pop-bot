const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'unban',
    run: async (client, message, args) => {

        if (!message.member.hasPermission('BAN_MEMBERS')) return;

        if (!args[0]) return message.channel.send('Plaats een "UserID".').then(m => m.delete({ timeout: 5000 }));

        let member;

        try {
            member = await client.users.fetch(args[0])
        } catch (e) {
            console.log(e)
            return message.channel.send('Geen geldige gebruiker!').then(m => m.delete({ timeout: 5000 }));
        }

        const reason = args[1] ? args.slice(1).join(' ') : '-';

        const embed = new MessageEmbed()
            .setFooter(`${message.author.tag} | ${message.author.id}`, message.author.displayAvatarURL({ dynamic: true }));

        message.guild.fetchBans().then( bans => {

            const user = bans.find(ban => ban.user.id === member.id );

            if (user) {
                embed.setTitle(`Successfully  Unbanned ${user.user.tag}`)
                    .setColor('#00ff00')
                    .addField('Gebruiker ID:', user.user.id, true)
                    .addField('Gebruiker Naam:', user.user.tag, true)
                    .addField('Reden voor unban:', reason)
                message.guild.members.unban(user.user.id, reason).then(() => message.channel.send(embed))
            } else {
                embed.setTitle(`Gebruiker ${member.tag} is niet verbannen`)
                    .setColor('#ff0000')
                message.channel.send(embed)
            }
            

        }).catch(e => {
            console.log(e)
            message.channel.send('Error')
        });

    }
}