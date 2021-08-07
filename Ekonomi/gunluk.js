const Discord = require('discord.js');
const db = require('quick.db')
const ms = require('parse-ms')
exports.run = async(client, message) => {
//== BEERCODE (https://discord.gg/ew3dpTu4Z5) BEERCODE ==\\
  function rastgeleMiktar(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
} 
//== BEERCODE (https://discord.gg/ew3dpTu4Z5) BEERCODE ==\\
let times = await db.fetch(`worktime_${message.author.id}`)
  let day = 86400000
//== BEERCODE (https://discord.gg/ew3dpTu4Z5) BEERCODE ==\\
  if (times !== null && day - (Date.now() - times) > 0) {
        let time = ms(day - (Date.now() - times));
    
                        message.channel.send(`**${message.author.username}**, Cool down (**${time.hours ? time.hours + " hour": ""} ${time.minutes ? time.minutes + ' minute' : ''} ${time.seconds ? time.seconds+ '' : ''}** left)`)
  return
  }
let moneys = rastgeleMiktar(5000, 7000);
      message.channel.send(`**💸 | ${message.author.username}**\nwas added to your balance 💸 __${moneys}__`)

db.set(`worktime_${message.author.id}`, Date.now())

  db.add(`para_${message.author.id}`, moneys)
    
 };
//=== BEERCODE (https://discord.gg/ew3dpTu4Z5) BEERCODE ==\\
exports.conf = {
  enabled: true,
  aliases: ["d"],
};

exports.help = {
  name: 'daily',
};
