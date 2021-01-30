module.exports = {
    commands: 'uptime',
    minArgs: 0,
    maxArgs: 0,
    callback: (message, arguments, text) => {
let seconds = Math.floor(message.client.uptime / 1000);
let minutes = Math.floor(seconds / 60);
let hours = Math.floor(minutes / 60);
let days = Math.floor(hours / 24);

seconds %= 60;
minutes %= 60;
hours %= 24;

return message
  .reply(`Uptime: \`${days} Dagen,${hours} Uren, ${minutes} minuten, ${seconds} Seconden Word Soms Gereset\``)
  .catch(console.error);
    }}