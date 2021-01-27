const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    var Scraper = require('images-scraper');

const google = new Scraper({
  puppeteer: {
    headless: false,
  },
});

(async () => {
  const results = await google.scrape('banana', 200);
  console.log('results', results);
})();

}

module.exports.help = {
    name: "hallo",
    description: "Geeft al de verschillende commands",
    category: "Informatie"
}