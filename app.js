const Discord = require("discord.js");
const client = new Discord.Client();
const axios = require("axios");
const prefix = "%";

const getChuckNorrisJoke = async (message) => {
  let result = await axios.get(`https://api.chucknorris.io/jokes/random`);
  console.log(result.data);

  message.channel.send({
    embed: { color: 3447003, description: result.data.value },
  });
};
const getTopNews = async (message) => {
  let result = await axios.get(
    `https://newsapi.org/v2/top-headlines?country=au&apiKey=${process.env.NEWS_KEY}`
  );

  //message.channel.send(result.data.articles[0].title);
  result.data.articles.forEach((article) => {
    if (article.source.name === "ABC News (AU)") {
      console.log(article);
      message.channel.send({
        embed: {
          color: 1022869,
          title: article.title,
          url: article.url,
          description: article.description,
        },
      });
    }
  });
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
  } else if (message.content.startsWith(`${prefix}top news`)) {
    getTopNews(message);
  }
});

client.login(process.env.BOT_TOKEN);
