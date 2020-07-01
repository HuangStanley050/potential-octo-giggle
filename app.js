const Discord = require("discord.js");
const client = new Discord.Client();
const axios = require("axios");
const prefix = "%";

const getChuckNorrisJoke = async (message) => {
  let result = await axios.get(`https://api.chucknorris.io/jokes/random`);
  console.log(result.data);
  message.channel.send(result.data.value);
};
client.on("ready", () => {
  console.log("I am ready!");
});

client.on("message", (message) => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;
  if (message.content.startsWith(`${prefix}rasengan`)) {
    message.channel.send("chidori");
  } else if (message.content.startsWith(`${prefix}chuck norris`)) {
    getChuckNorrisJoke(message);
  }
});

client.login(process.env.BOT_TOKEN);
