const discord = require("discord.js");

module.exports.run = async (client, message, argument) => {
    if (!message.member.hasPermission("KICK_MEMBERS")) return message.reply("sorry jij kan dit niet");

    if (!message.guild.me.hasPermission("KICK_MEMBERS")) return message.reply("Geen perms");
    
    const categoryID = "791362597085511701";

    

    if (message.channel.parentID == categoryID) {

    var botEmbed = new discord.MessageEmbed()
    .setTitle('Staff Regels')
    .setDescription(`Ticket Informatie

    Wil jij een ticket aanmaken? Dat kan doe dat in #『📫』tickets door .ticket te doen, het staff-team komt u dan zo snel mogelijk helpen! 
    
    Algemene Informatie
    De ticket bot kan soms offline zijn daarom zou het kunnen zijn dat de tickets zijn gesloten! Wanneer je een ticket aanmaakt en er wordt niet binnen 24 uur gereageerd mag je een HR+ taggen! Ga niet HR+ taggen als het nog geen 24 uur is geweest! We zullen zo snel mogelijk bij je komen om je te helpen! Als je toch een HR+ taggt en het is nog geen 24 uur is geweest is er kan op een warn!
    
    Er zijn ook verschillende statussen voor de ticket i.v.m. met problemen etc.
    
    Ticket Status
    
    :green_circle:  = We zijn bij je in 1-15 minuten!
    :yellow_circle:  = We zijn bij je in 15-30 minuten!
    :orange_circle:  = We zijn bij je in 30-45 minuten!
    :red_circle:  = We zijn bij je in 45-60 minuten en of langer!
    :white_circle:  = We behandelen geen tickets!
    :purple_circle:  = Ticket bot offline!
    
    Wanneer mag ik tickets aanmaken?
    Je mag ticket aanmaken als je een vraag, suggesties, roles die je nog moet krijgen en/of als het in #『📢』announcements wordt vermeld! Zet altijd een reden neer als je een ticket aanmaakt! Doe je dit niet zou het kunnen zijn dat je ticket wordt gesloten! Maak geen onnodige tickets aan, doe je dit wil worden ze gesloten en zou je een warn kunnen krijgen! Dus doe dit niet! 
    
    
    We hopen u zo snel mogelijk te helpen indien nodig!
    
    Op dit moment is de ticket status :green_circle: `)
    .setThumbnail('https://yt3.ggpht.com/a/AGF-l7_P42jUnWAoIvDDHzQH27EIOs5hAoDAwfdgug=s900-c-k-c0xffffffff-no-rj-mo')
    .setImage('')
    .setTimestamp()
    .setFooter('Defensie', '');

    

return message.channel.send(botEmbed);

    } else {
        

    message.channel.send("Gelieve dit command te doen bij een ticket.");
    }
}

module.exports.help = {
    name: "tick",
    description: "Geeft al de verschillende commands",
    category: "Informatie"
}