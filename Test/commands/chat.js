const discord = require("discord.js");
const fetch = require("node-fetch");
module.exports.run = async (client, message, args) => {

    let mesg = args.join(" ");
    if (!mesg) return message.channel.send("Zeg iets");
    fetch(`http://api.brainshop.ai/get?bid=154429&key=DmdojeFMoOAPVzft&uid=1&msg=${encodeURIComponent(mesg)}`)
}

module.exports.help = {
    name: "chat",
   
}