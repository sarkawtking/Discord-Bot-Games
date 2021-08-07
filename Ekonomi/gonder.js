const Discord = require("discord.js");
const db = require("quick.db");
module.exports.run = async (client, message, args) => {
  //== BEERCODE (https://discord.gg/ew3dpTu4Z5) BEERCODE ==\\
  let para = db.fetch(`para_${message.author.id}`);

  let etiket = message.mentions.users.first();

  let miktar = args[1];

  if (!etiket)
    return message.channel.send(
      new Discord.MessageEmbed()
        .setColor("")
        .setAuthor(
          message.author.tag,
          message.author.avatarURL({ dynamic: true })
        )
        .setDescription(`You must tag a user to send money!`)
    );
  //== BEERCODE (https://discord.gg/ew3dpTu4Z5) BEERCODE ==\\
  if (!miktar)
    return message.channel.send(
      new Discord.MessageEmbed()
        .setColor("")
        .setAuthor(
          message.author.tag,
          message.author.avatarURL({ dynamic: true })
        ).setDescription(`You must enter the amount of money you want to send!
                     \`Ssend <quantity || all>\``)
    );
  if (miktar < 0 || miktar.startsWith("0"))
    return message.channel.send(
      new Discord.MessageEmbed()
        .setColor("") //== BEERCODE (https://discord.gg/ew3dpTu4Z5) BEERCODE ==\\
        .setAuthor(
          message.author.tag,
          message.author.avatarURL({ dynamic: true })
        )
        .setDescription(`The amount you entered is not a valid number !?`)
    );
  if (miktar === "all" || miktar === "all") {
    if (para < 0)
      return message.channel.send(
        new Discord.MessageEmbed()
          .setColor("")
          .setAuthor(
            message.author.tag,
            message.author.avatarURL({ dynamic: true })
          )
          .setDescription(`You don't have any money now.`)
      ); //== BEERCODE (https://discord.gg/ew3dpTu4Z5) BEERCODE ==\\
    db.add(`para_${etiket.id}`, para);
    db.add(`para_${message.author.id}`, -para);
    message.channel.send(
      new Discord.MessageEmbed()
        .setColor("")
        .setAuthor(
          message.author.tag,
          message.author.avatarURL({ dynamic: true })
        )
        .setDescription(`✅ Successful, ${etiket}'a ${para} 💸 you sent!`)
    );
    //== BEERCODE (https://discord.gg/ew3dpTu4Z5) BEERCODE ==\\
  } else {
    if (isNaN(miktar))
      return message.channel.send(
        new Discord.MessageEmbed()
          .setColor("")
          .setAuthor(
            message.author.tag,
            message.author.avatarURL({ dynamic: true })
          )
          .setDescription(`The amount you entered is not a valid number!`)
      );
  } //== BEERCODE (https://discord.gg/ew3dpTu4Z5) BEERCODE ==\\
  if (etiket.id === message.author.id)
    return message.channel.send(
      new Discord.MessageEmbed()
        .setColor("")
        .setAuthor(
          message.author.tag,
          message.author.avatarURL({ dynamic: true })
        )
        .setDescription(`You can't send money to yourself!`)
    );
  //== BEERCODE (https://discord.gg/ew3dpTu4Z5) BEERCODE ==\\
  if (miktar > para)
    return message.channel.send(
      new Discord.MessageEmbed()
        .setColor("")
        .setAuthor(
          message.author.tag,
          message.author.avatarURL({ dynamic: true })
        )
        .setDescription(
          `Now in your hand ${
            para ? "just " + para + " 💸 there is!" : "there is no money!"
          } `
        )
    );
  if (miktar === "all" || miktar === "all") {
    return;
  } else {
    //== BEERCODE (https://discord.gg/ew3dpTu4Z5) BEERCODE ==\\
    message.channel.send(`**💸 | ${message.author.username}**\nSend 💸 __${miktar}__ Banano to **${etiket}**`)
        
        
    db.add(`para_${etiket.id}`, miktar);
    db.add(`para_${message.author.id}`, -miktar);
  }
};
//== BEERCODE (https://discord.gg/ew3dpTu4Z5) BEERCODE ==\\
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "send"
}; //== BEERCODE (https://discord.gg/ew3dpTu4Z5) BEERCODE ==\\
