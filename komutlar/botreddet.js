const config = require('../config.json')

exports.run = (client, message, args) => {
  if (message.author.hasPermissions('MANAGE_MESSAGES')) return;
  
  let sahipid = args.slice(0).join(' ');
  let botid = args.slice(1).join(' ');
    let sebep = args.slice(2).join(' ');
  
  if (sahipid.length < 1) return message.reply('Bir sahip id yazmalısın.');
  if (botid.length < 1) return message.reply('Bir bot id yazmalısın.');  
  if (sebep.length < 1) return message.reply('Bir sebep yazmalısın.');

message.react('✅')
  
client.channels.get(config.log).send(`<@${sahipid}> adlı kişinin <@${botid} adlı botu reddedili! Sebebi: ${sebep} :X:`)
client.users.get(sahipid).send(`<@${botid}> adlı botunuz reddedildi! Sebebi: ${sebep} :X:`)
}

exports.conf = {
enabled: true,
aliases: ["red", "reddet"],
permLevel: 0,
}

exports.help = {
name: "botreddet"
}