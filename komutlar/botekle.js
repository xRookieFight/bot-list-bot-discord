const Discord = require('discord.js');
const config = require('../config.json')
exports.run = (client, message, args) => {
  let botid = args.slice(0).join(' ');
    let prefix = args.slice(1).join(' ');
if (botid.length < 1) return message.reply('Bir bot id yazmalısın.');
if (prefix.length < 1) return message.reply('Bir prefix yazmalısın.');
  message.delete();
    client.users.get(message.author).send(`${prefix} adlı prefixi olan <@${botid} adlı botunuz onaylanmayı bekliyor!`)
  client.channels.get(config.log).send(`${message.author} adlı yapımcı ${prefix} adlı prefixi olan <@${botid} adlı botu ile başvuru yaptı!`)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
};

exports.help = {
  name: 'bot-ekle',
};