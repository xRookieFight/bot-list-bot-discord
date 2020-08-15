const config = require('../config.json')
exports.run = (client, message, args) => {
  let sahipid = args.slice(0).join(' ');
  let botid = args.slice(1).join(' ');
  if (sahipid.length < 1) return message.reply('Bir sahip id yazmalısın.');
  if (botid.length < 1) return message.reply('Bir bot id yazmalısın.');
message.react('✅')
client.channels.get(config.log).send(`<@${sahipid}> adlı kişinin <@${botid}> adlı botu onaylandı! :white_check_mark:`)
}
exports.conf = {
enabled: true,
aliases: ["onayla", "kabul"],
permLevel: 0,
}
exports.help = {
name: "botonayla"
}
