const axios = require('axios');
const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "fox",
    category: "animals",
    run: async (client, message, args, Discord) => {
        const url = "https://some-random-api.ml/img/fox";
        const facts = "https://some-random-api.ml/facts/cat"

        let image, response;
        let fact, responses;
        try {
            response = await axios.get(url);
            image = response.data;

            responses = await axios.get(facts)
            fact = responses.data

        } catch (e) {
            return message.channel.send(`An error occured, please try again!`)
        }

        const embed = new MessageEmbed()
            .setTitle(`:fox::fox::fox:`)
            .setColor(`#666bff`)
            .setImage(image.link)

        await message.channel.send(embed)
    }
}