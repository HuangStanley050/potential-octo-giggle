const Discord = require("discord.js");
const client = new Discord.Client();
const axios = require("axios");
const prefix = "%";
client.on("ready", () => {
  console.log("I am ready!");
});

client.on("message", (message) => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;
  if (message.content.startsWith(`${prfiex}rasengan`)) {
    message.channel.send("chidori");
  }
});

client.login(process.env.BOT_TOKEN);
