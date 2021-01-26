const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

        let userinfo = {};
        userinfo.bot = message.client.user.bot;
        userinfo.createdat = message.client.user.createdAt;
        userinfo.discrim = message.client.user.discriminator;
        userinfo.id = message.client.user.id;
        userinfo.mfa = message.client.user.mfaEnabled;
        userinfo.pre = message.client.user.premium;
        userinfo.presen = message.client.user.presence;
        userinfo.tag = message.client.user.tag;
        userinfo.uname = message.client.user.username;
        userinfo.verified = message.client.user.verified;
    
        userinfo.avatar = message.client.user.avatarURL;
    
        var myInfo = new discord.RichEmbed()
            .setAuthor(userinfo.uname, userinfo.avatar)
            .addField("Bot?",userinfo.bot, true)
            .addField("Created At",userinfo.createdat, true)
            .addField("Discriminator",userinfo.discrim, true)
            .addField("Client ID",userinfo.id, true)
            .addField("2FA/MFA Enabled?",userinfo.mfa, true)
            .addField("Paid Account?",userinfo.pre, true)
            .addField("Presence",userinfo.presen, true)
            .addField("Client Tag",userinfo.tag, true)
            .addField("Username",userinfo.uname, true)
            .addField("Verified?",userinfo.verified, true)
            .setColor(0xf0e5da)
            .setFooter('s!aboutserver')
            .setTitle("About this user...")
            .setThumbnail(userinfo.avatar)
    
    
            message.channel.sendEmbed(myInfo);
    
    }
    
    



module.exports.help = {
    name: "userinfo",
    description: "Geeft al de verschillende commands",
    category: "Informatie"
}