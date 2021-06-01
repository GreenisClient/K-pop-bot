const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = 'j!'

const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));

for(const file of commandFiles) {
    const command = require(`./commands/${file}`)
    
    client.commands.set(command.name, command);
}


client.on('ready', () => {
    console.log('JeLokaleBot is nu online!')
})


client.on('message', message =>{ 
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);

    const command = args.shift().toLocaleLowerCase();

    if(command === 'ping'){
        client.commands.get('ping').run(client, message, args, Discord)
    }
    else if(command === 'cat'){
        client.commands.get('cat').run(client, message, args, Discord)
    }
    else if(command === 'dog'){
        client.commands.get('dog').run(client, message, args, Discord)
    }
    else if(command === 'bird'){
        client.commands.get('bird').run(client, message, args, Discord)
    }
    else if(command === 'panda'){
        client.commands.get('panda').run(client, message, args, Discord)
    }
    else if(command === 'kick'){
        client.commands.get('kick').run(client, message, args, Discord)
    }
    else if(command === 'ban'){
        client.commands.get('ban').run(client, message, args, Discord)
    }
    else if(command === 'fox'){
        client.commands.get('fox').run(client, message, args, Discord)
    }
    else if(command === 'koala'){
        client.commands.get('koala').run(client, message, args, Discord)
    }
    else if(command === 'restart'){
        client.commands.get('restart').run(client, message, args, Discord)
    }
    else if(command === 'slowmode'){
        client.commands.get('slowmode').run(client, message, args, Discord)
    }
    else if(command === 'unban'){
        client.commands.get('unban').run(client, message, args, Discord)
    }




})



client.login('ODQ4ODMyNjQyNDM4NjYwMTE4.YLSXAA.pWWvEcPxZE02noOI2LWzjHXPmuA')