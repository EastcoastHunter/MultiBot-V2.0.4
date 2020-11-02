module.exports = {
    config: {
        name: "shard",
        description: "sharding",
        usage: "<user> <reason>",
        accessableby: "owner",
        category: "developer",
        aliases: ["ss"]
    },
    run: async (bot, message, args) => {
        const Discord = require('discord.js');
        //Function part of command
        bot.shard.broadcastEval(`Who tf knows`).catch(err => console.log(err));

    }
}