const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    
    var catergoryID = "790289966923644939";
    var staff = "790291727889858570";
    var person = message.author;

    var channelName = "Sollicitatie" + message.author.username;

    var ticket = false;

    message.guild.channels.cache.forEach(channel => {
        
        if(channel.name.toLowerCase() === channelName.toLowerCase()){
            ticket = true;
            return message.reply("je hebt al een ticket").then(msg => msg.delete({ timeout: 3000}))
        }

    });

    if (ticket) return;

    var embed = new discord.MessageEmbed()
        .setTitle("Hoi" + message.author.username)
        .setColor("#00BFFF")
        .setFooter("kanaal wordt aangemaakt.");

    message.channel.send(embed).then(msg => msg.delete({ timeout: 3000 }))

    message.guild.channels.create(channelName, {type: 'text' }).then(
        (createdChannel) => {
            createdChannel.setParent(catergoryID).then(
                (settedParent) => {

                    settedParent.updateOverwrite(message.guild.roles.find(role => role.name === "@everyone"), {
                        SEND_MESSAGES: false,
                        VIEW_CHANNEL: false
                    });
                    
                    settedParent.updateOverwrite(message.author.id, {
                        SEND_MESSAGES: true,
                        CREATE_INSTANT_INVITE: false,
                        READ_MESSAGES: true,
                        ATTACH_FILES: true,
                        ADD_REACTIONS: true,
                        CONNECT: true,
                        READ_MESSAGES_HISTORY: true,
                        VIEW_CHANNEL: true                      
                    });

                    settedParent.updateOverwrite(message.guild.roles.get(staff), {
                        SEND_MESSAGES: true,
                        READ_MESSAGES: true,                    
                        READ_MESSAGES_HISTORY: true,
                        VIEW_CHANNEL: true                      
                    });
                    
                    var embedParent = new discord.MessageEmbed()
                        .setTitle("Hoi" + message.author.username)
                        .setColor("#00BFFF")
                        .setDescription("Hier is u Sollictatie");
                    
                    var vraag1 = new discord.MessageEmbed()
                        .setTitle("sollicitatie vraag 1")
                        .setColor("#00BFFF")
                        .setDescription("Wie bent je");    
                    
                    var vraag2 = new discord.MessageEmbed()
                        .setTitle("sollicitatie vraag 1")
                        .setColor("#00BFFF")
                        .setDescription("Waarom wil je staff worden"); 
                        
                    var vraag3 = new discord.MessageEmbed()
                        .setTitle("sollicitatie vraag 1")
                        .setColor("#00BFFF")
                        .setDescription("waarom bent u beter dan de andere sollicitanten"); 
                    
                    var vraag4 = new discord.MessageEmbed()
                        .setTitle("sollicitatie vraag 1")
                        .setColor("#00BFFF")
                        .setDescription("Heb je ervaring?"); 
                    
                    var vraag5 = new discord.MessageEmbed()
                        .setTitle("sollicitatie vraag 1")
                        .setColor("#00BFFF")
                        .setDescription("Wat zijn je plus punten"); 

                    var vraag6 = new discord.MessageEmbed()
                        .setTitle("sollicitatie vraag 1")
                        .setColor("#00BFFF")
                        .setDescription("wat zijn je minpunten"); 

                    var vraag7 = new discord.MessageEmbed()
                        .setTitle("sollicitatie vraag 1")
                        .setColor("#00BFFF")
                        .setDescription("Nog Vragen?");

                   settedParent.send(message.author.id);
                   settedParent.send(embedParent);
                   settedParent.send(vraag1);

                   settedParent.awaitMessages(s => s.author.id == message.author.id, {max: 1}).then(antwoord => {
                       var antwoord1 = antwoord.first();
                       settedParent.send(vraag2);

                       settedParent.awaitMessages(s => s.author.id == message.author.id, {max: 1}).then(antwoord => {
                        var antwoord2 = antwoord.first();
                        settedParent.send(vraag3);

                        settedParent.awaitMessages(s => s.author.id == message.author.id, {max: 1}).then(antwoord => {
                            var antwoord3 = antwoord.first();
                            settedParent.send(vraag4);

                            settedParent.awaitMessages(s => s.author.id == message.author.id, {max: 1}).then(antwoord => {
                                var antwoord4 = antwoord.first();
                                settedParent.send(vraag5);

                                settedParent.awaitMessages(s => s.author.id == message.author.id, {max: 1}).then(antwoord => {
                                    var antwoord5 = antwoord.first();
                                    settedParent.send(vraag6);

                                    settedParent.awaitMessages(s => s.author.id == message.author.id, {max: 1}).then(antwoord => {
                                        var antwoord6 = antwoord.first();
                                        settedParent.send(vraag7);

                                      settedParent.awaitMessages(s => s.author.id == message.author.id, {max: 1}).then(antwoord => {
                                        var antwoord7 = antwoord.first();
                                        

                                        var uitkomst = new discord.MessageEmbed()
                                        .setTitle("Bedankt voor het solliciteren")
                                        .setColor("#00FF00")
                                        .setTimestamp()
                                        .setDescription(`**vraag 1**: ${antwoord1}\n\n**vraag 2**: ${antwoord2}\n\n**vraag 3**: ${antwoord3}\n\n**vraag 4**: ${antwoord4}\n\n**vraag 5**: ${antwoord5}\n\n**vraag 6**: ${antwoord6}\n\n**vraag 7**: ${antwoord7}`)
                                    

                                        settedParent.bulkDelete(14).then(
                                            settedParent.send(uitkomst)
                                        )
                                    })
                                })
                            })
                        })
                    })
                })     
            })
                
                   settedParent.send(`${person}, <@&${staff}>`).then(msg => msg.delete({ timeout: 1000 }));

                }).catch(err => {
                    message.channel.send("Er is iets mis gelopen");
                })
                
            })
        
    
    
}

module.exports.help = {
    name: "sollicitatie",
    description: "Geeft al de verschillende commands",
    category: "Informatie"
}