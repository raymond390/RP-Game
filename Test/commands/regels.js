const discord = require("discord.js");

module.exports.run = async (client, message, argument) => {
    
    var botEmbed = new discord.MessageEmbed()
    
    .setTitle('Regels')
    .setColor("#f00c0c")
    .setDescription(`
Regels
Als u niet aan de onderstaande regels houdt,
kunnen er gevolgen komen.
Algemene Tekst/Foto Regels
- Niet vragen om mod.
- Geen seksueel expliciete inhoud.
- Geen pornografische/NSFW inhoud.
- Geen illegale inhoud.
- Geen mini-modding.
- Geen Racisme.
- Geen aanzetten tot haat.
- Geen beledigen inhoud naar iemand anders.
- Niet spammen
- Geen zelfpromotie. (Wel in vraag.).
Algemene Voice Regels:
- Geen earrape.
- Geen vervelende, luide of hoge toongeluiden.
- Geen voice changers.
- Geen muziek (bots) in openbare spraakkanalen.

Moderators behouden zich het recht voor om de verbinding
met een spraakkanaal te verbreken als de geluidskwaliteit slecht is.

De algemene Tekst/Foto regels gelden hier ook!
Regels Tegenover Staff
- U dient respect te tonen tegen over staff.
- Staff heeft altijd het laatste woord.
- Geen bedreiging tegen over HR of hoger.
Algemene Profiel Regels:
Profielfoto - Bij het hebben van een ongepaste of niet gewenste foto
kunnen er gevolgen komen.
Naam - Bij het hebben van een ongepaste of ongewenste naam kunnen er
gevolgen komen
Status - Bij het hebben van een ongepaste/negatieve status kunnen er
gevolgen komen.`)
    .setTimestamp()
    .setThumbnail('https://yt3.ggpht.com/a/AGF-l7_P42jUnWAoIvDDHzQH27EIOs5hAoDAwfdgug=s900-c-k-c0xffffffff-no-rj-mo')
    .setImage('')
    .setFooter('Defensie', '');

    var channel = message.member.guild.channels.cache.get("785197427464470578");

    if (!channel) return

    channel.send(botEmbed);
    }

module.exports.help = {
    name: "regels",
    description: "",
    category: "Informatie"
}