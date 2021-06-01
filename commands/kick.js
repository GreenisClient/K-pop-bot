const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "kick",
    category: "moderator",
    run: async (client, message, args, Discord) => {

    const user = message.mentions.users.first();

    let mentioned = message.mentions.users.first();
    
    const member = message.guild.member(user);

    if (!message.member.hasPermission("KICK_MEMBERS")) return message.reply("Je bent niet gemachticht dit te doen.");

    if (!message.guild.me.hasPermission("KICK_MEMBERS")) return message.reply("Geen perms");

    if (!args[1]) return message.reply("Geen gebruiker opgegeven.");

    if (!args[2]) return message.reply("Gelieve een redenen op te geven.");

    var kickUser = message.guild.member(message.mentions.users.first() ||message.guild.members.cache.get(args[1]));
    let kReason = args.join(" ").slice(23);



    if (!kickUser) return message.reply("Kan de gebruiker niet vinden.");

              
    var text = (`Je bent gekickt van JeLokaleTransgender | ${kReason}`);


    
         
    mentioned.send(text)
    .then(() => {;

    if (user) {

      const member = message.guild.member(user);
  
      if (member) {

        member
          .kick('')
          .then(() => {

            var botEmbed = new Discord.MessageEmbed()
            .setColor("#2EF429")
            .setDescription(`${kickUser} **is gekickt!**`);
  
            return message.channel.send(botEmbed);
          
          }

    , LogEmbed = new Discord.MessageEmbed()
        .setColor("#2EF429")
        .setDescription(`${kickUser}***is gekickt voor:*** ***"${kReason}"***`))

        const log = client.channels.cache.find(channel => channel.id === "848924989196468224");
        log.send(LogEmbed)


      }

   
    }})}}