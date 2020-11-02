const {
  Discord,
  Client,
  Collection,
  RichEmbed,
  Shard
} = require("discord.js");
// const { prefix } = require("./botconfig.json");
const bot = new Client();
require("dotenv").config();
const {
  aqua,
  green_light,
  gold,
  red_dark,
  dark_red,
  red_light
} = require("./colours.json");
["aliases", "commands"].forEach(x => (bot[x] = new Collection()));
["console", "command", "event"].forEach(x => require(`./handlers/${x}`)(bot));
bot.on("ready", () => {
  try {
    console.log(bot.user.username + " is online and operational");
  } catch (err) {
    console.log(err);
  }
});
bot.login(process.env.token);