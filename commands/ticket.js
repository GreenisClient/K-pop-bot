module.exports = {
	name: 'ticket',
	category: 'Ticket Systeem',
	description: 'Creates a new ticket.',
	aliases: [],
	usage: 'ticket',
	userperms: [],
	botperms: [],
	run: async (client, message, args, Discord) => {
		if(message.guild.channels.cache.find(channel => channel.name === `ticket-${message.author.id}`)) {
			return message.reply('Je hebt al een Ticket openstaan, sluit deze voordat je een nieuwe kunt maken!');
		}

		message.guild.channels.create(`ticket-${message.author.id}`, {
			permissionOverwrites: [
				{
					id: message.author.id,
					allow: ['SEND_MESSAGES', 'VIEW_CHANNEL'],
				},
                {
					id: message.guild.me,
					allow: ['SEND_MESSAGES', 'VIEW_CHANNEL'],
				},
                {
					id: message.guild.me,
					allow: ['SEND_MESSAGES', 'VIEW_CHANNEL'],
				},
				{
					id: message.guild.roles.everyone,
					deny: ['VIEW_CHANNEL'],
				},
			],
			type: 'text',
		}).then(async channel => {
			message.reply(`Succesvol een ticket aangemaakt. ${channel}.`);
			channel.send(`Ticket geopend door ${message.author}, ons staff-team zal je zo snel mogelijk helpen!`);
			let logchannel = message.guild.channels.cache.find(channel => channel.name === `logs`)
			if(logchannel) {
				logchannel.send(`Ticket ${message.author.id} created. Click the following to veiw <#${channel}.`);
			}
		});
	},
};