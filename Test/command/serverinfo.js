const discord = require("discord.js");

   // setting all the verifiaction levels so it looks nice
const verificationLevels = {
    NONE: 'None',
    LOW: 'Low',
    MEDIUM: 'Medium',
    HIGH: 'High',
    VERY_HIGHT: 'Very High'
}


// setting all the regions so it looks nice
const regions = {
    brazil: 'Brazil',
    europe: 'Europe',
    hongkong: 'Hong Kong',
    india: 'India',
    japan: 'Japan',
    russia: 'Russia',
    singapore: 'Singapore',
    southafrica: 'South Africa',
    sydeny: 'Sydeny',
    'us-central': 'US Central',
    'us-east': 'US East',
    'us-west': 'US West',
    'us-south': 'US South'
}

module.exports.run = async (client, message, args) => {
    
    // getting all the roles of the server
    const roles = message.guild.roles.cache.sort((a, b) => b.position - a.position).map(role => role.toString()).slice(0, -1)

    // getting all the members of the server
    const members = message.guild.members.cache;
    
    // getting all the channels of the server
    const channels = message.guild.channels.cache;
    
    // getting all the emojis of the server
    const emojis = message.guild.emojis.cache

    
    let rolesdisplay;

    // if the lenght is lower then 20, display all roles
    if(roles.length < 20) {
        rolesdisplay = roles.join(' ')
    } else {
    
        //if the lenght is more then 20, display only 20
        rolesdisplay = roles.slice(20).join(' ')
    }

    // if i typed guild it make ref to message.guild
    const { guild } = message
    
    // tyeping name, region, memberCount, owner isntead of guild.name
    const { name, region, memberCount, owner } = guild
    
    // getting the server's pfp
    const icon = guild.iconURL()

    // create an embed
    var botEmbed = new discord.MessageEmbed()
    .setColor("RANDOM") //sets the color
    
    // sets the title of the embed
    .setTitle(`Server info  ${name}`)
    
    // sets the pic of the embed to the server's pfp
    .setImage(message.guild.iconURL())
    
    // adding a field with the general info
    .addField(`General`, [
        `**Naam:** ${name}`, // server name
        `**ID:** ${message.guild.id}`, // server's id
        `**Owner:** ${message.guild.owner.user.tag}`, // server's owner
        `**Regio:** ${regions[message.guild.region]}`, // the region of the server
        `**Boost :** ${message.guild.premiumTier ? `Tier ${message.guild.premiumTier}` : 'None'}`, // boost tier
        `**Verification Level:** ${verificationLevels[message.guild.verificationLevel]}`, // the verification leve
     
    ])
    
    // adding a field with the stats info
    .addField('Stats', [
        `**Aantal rollen:** ${roles.length}`, // how many roles in the server
        `**Aantal emojis:** ${emojis.size}`, // how many emojis
        `**Aantal niet Geanimeerde Emoji's :** ${emojis.filter(emoji => !emoji.animated).size}`, // how many not animated emojis
        `**Aantal Geanimeerde Emoji's:** ${emojis.filter(emoji => emoji.animated).size}`, // how many animated emoji
        `**Aantal Members:** ${message.guild.memberCount}`, // how many members in the server
        `**Mensen:** ${members.filter(member => !member.user.bot).size}`, // how many are humans
        `**Bots:** ${members.filter(member => member.user.bot).size}`, // how many are bots
        `**Online:** ${members.filter(member => member.presence.status === 'online').size}`, // how many are online
        `**Offline:** ${members.filter(member => member.presence.status === 'offline').size}`, // how many are offline
        `**Niet storen:** ${members.filter(member => member.presence.status === 'dnd').size}`, // how many have DND
        `**Slaap stand:** ${members.filter(member => member.presence.status === 'idle').size}`, // how many have idle
        `**Text Channels:** ${channels.filter(channel => channel.type === 'text').size}`, // how many text channels
        `**Voice Channels:** ${channels.filter(channel => channel.type === 'voice').size}`, // how many voice channels
        '\u200b'
    ])
    
    // adding another field displaying the roles in it
    .addField(`Rollen [${roles.length - 1}]`, rolesdisplay)
    
    // sending the embed
    return message.channel.send(botEmbed)
}
module.exports.help = {
    name: "serverinfo",
    description: "Geeft al de verschillende commands",
    category: "Informatie"
}