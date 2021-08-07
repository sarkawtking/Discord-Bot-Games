const discord = require("discord.js");
const fs = require("fs");
const { MessageEmbed } = require("discord.js");
const array = require("array-sort");
//== BEERCODE (https://discord.gg/ew3dpTu4Z5) BEERCODE ==\\
const http = require("http");
const db = require("quick.db");
const moment = require("moment");
const ayarlar = require("./ayarlar.json");
const Discord = require("discord.js");
const express = require('express');
const app = express();
app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.listen(3000, () => {
  console.log('Server Started.');
});
const client = new Discord.Client();
client.login("ODQ0NTE2MzIyNTQ4Nzc2OTcw.YKTjHQ.ZBipl9-dVFdTzEfRHSAZR2JRKTA");
//== BEERCODE (https://discord.gg/ew3dpTu4Z5) BEERCODE ==\\

//=== BEERCODE (https://discord.gg/ew3dpTu4Z5) BEERCODE ==\\

const log = message => {
  console.log(` ${message}`);
};
require("./util/eventLoader.js")(client);

//===============================================================================\\
client.on("ready", async () => {
  client.user.setActivity(`Discord Bot Games`, {
    type: "PLAYING"
  });
});
//===============================================================================\\
client.on("message", message => {
  if (message.content === ";invite") {
    let embed = new Discord.MessageEmbed()
    .setColor("")
    .setTitle("Invite the bot!")
    .setDescription(`[invite]()`)
    message.channel.send(embed);
  }
});
//===============================================================================\\
client.on("message", message => {
  if (message.content === ";support") {
    let embed = new Discord.MessageEmbed()
    .setColor("")
    .setTitle("Join the server!")
    .setDescription(`[support]()`)
    message.channel.send(embed);
  }
});     
//===============================================================================\\
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir("./Destek/", (err, files) => {
  if (err) console.error(err);
  log(`${files.length} Installing support command...`);
  files.forEach(f => {
    //== BEERCODE (https://discord.gg/ew3dpTu4Z5) BEERCODE ==\\

    let props = require(`./Destek/${f}`);
    log(`Support Command Installed: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});
//== BEERCODE (https://discord.gg/ew3dpTu4Z5) BEERCODE ==\\

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./Destek/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

//===============================================================================\\
//===============================================================================\\
//===============================================================================\\

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir("./Ekonomi/", (err, files) => {
  if (err) console.error(err);
  log(`${files.length} Economy command Loading ...`);
  files.forEach(f => {
    //== BEERCODE (https://discord.gg/ew3dpTu4Z5) BEERCODE ==\\

    let props = require(`./Ekonomi/${f}`);
    log(`Economy Command Installed: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});
//== BEERCODE (https://discord.gg/ew3dpTu4Z5) BEERCODE ==\\

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./Ekonomi/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};
//== BEERCODE (https://discord.gg/ew3dpTu4Z5) BEERCODE ==\\
//===============================================================================\\
//===============================================================================\\
//===============================================================================\\

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir("./Oyunlar/", (err, files) => {
  if (err) console.error(err);
  log(`${files.length} Game command Loading ...`);
  files.forEach(f => {
    let props = require(`./Oyunlar/${f}`);
    log(`Game Command Installed: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});
//== BEERCODE (https://discord.gg/ew3dpTu4Z5) BEERCODE ==\\

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./Oyunlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
}; //== BEERCODE (https://discord.gg/ew3dpTu4Z5) BEERCODE ==\\
//====================================================//
client.on("message", msg => { 

if(msg.content === "Sclear") { 

let args = msg.content.split(" ").slice(1); 

if(!msg.member.hasPermission("MANAGE_MESSAGES")) return msg.channel.send("You can't use this command!"); 

if(!args[0]) return msg.channel.send("Specify how many messages you want to delete."); 

msg.delete(); 

msg.channel.bulkDelete(args[0]).catch(e => { msg.channel.send("You can only delete 100 messages at once.")}); 

msg.channel.send(`Delete Message`).then(m => m.delete({ timeout: 5000 })); 

}})
//===============================================================================\\
client.on("message", message => {
  if (message.content === "Sserver") {


    let embed = new Discord.MessageEmbed()
    .setTitle(`${message.guild.name}`)
    .setThumbnail(client.user.avatarURL())
    .setColor('#ffff00')
    .setFooter(`Requested | ${client.author.tag}`, client.author.avatarURL())
    .addField('ID Server :', `${russi.guild.id}`)
    .addField(':crown: Owner Server :', `${client.guild.owner}`)
    .addField(':calendar: Created : ', `${client.guild.createdAt.toLocaleString()}`)
    .addField(':busts_in_silhouette: Members : ', `${client.guild.memberCount}`)
    .addField(':speech_balloon: Channels : ', `${client.guild.channels.cache.size}`)
    .addField(':earth_americas: Region : ', `${client.guild.region}`)
    message.channel.send(embed);
  }
});
//===============================================================================\\
client.on('message', message => {
    if (message.content === "Skick") {
    if (!message.guild) return;
    if (!message.member.hasPermission('KICK_MEMBERS')) return message.reply('**You don t have a ram**');
   let user = message.mentions.users.first();
    if (!user) return message.reply('**Kick A Member User**');
      message.guild.member(user).kick();
      message.channel.send(`**✈ \`${user}\` Kicked from the server.**`);
}
}); 
//===============================================================================\\
client.on("message", message => {
  if (message.content === "Srole") {
    var roles = message.guild.roles.cache.map(roles => `${roles.name}, `).join(" ");
    let embed = new Discord.MessageEmbed()
      .setColor("#ffff00")
      .addField("**Roles Server:**", `**[${roles}]**`);
    message.channel.send(embed);
  }
});
//===============================================================================\\
client.on("message", message => {
    if (message.content === "Savatar") {
  var embed = new Discord.MessageEmbed()
         .setAuthor(`${message.author.username}`, message.author.avatarURL({dynamic: true}))
         .setColor('#ffff00')
         .setDescription(`**[Avatar Link](${message.author.avatarURL({dynamic: true, format: 'png', size: 1024})})**`)
         .setImage(message.author.avatarURL({dynamic: true, format: 'png', size: 1024}))
         .setFooter(`Requsted by ${message.author.tag}`, message.author.avatarURL({dynamic: true}))
    message.channel.send(embed);
}
});
//===============================================================================\\
client.on("message", message => {
  if (message.content === "Sbot") {
    const embed = new Discord.MessageEmbed().setColor("#ffff00").setDescription(`
 **Server**
${client.guilds.cache.size}
**Channel**
${client.channels.cache.size}
**User**
${client.guilds.cache.reduce((a, g) => a + g.memberCount, 0)}
`);
    message.channel.send(embed);
  }
});
//===============================================================================\\
client.on("message", message => {
  if (message.content === "Slock") {
    if (!message.member.hasPermission("MANAGE_CHANNELS")) return;
    message.delete();

    if (!message.channel.guild) return;

    let embed = new Discord.MessageEmbed()

      .setDescription(`Has Been Channel Lock`)
      .setColor("#ffff00")
    message.channel.send(embed);

    message.channel.updateOverwrite(message.guild.id, {
      SEND_MESSAGES: false
    });
  }
});
//////////////////////////////////////////////////////////////////
client.on("message", message => {
  if (message.content === "Sunlock") {
    if (!message.member.hasPermission("MANAGE_CHANNELS")) return;
    message.delete();

    if (!message.channel.guild) return message.reply("SORRY IM IN SERVER");
    let embed = new Discord.MessageEmbed()
      .setDescription(`Has Been Channel unlock`)
      .setColor("#ffff00")
    message.channel.send(embed);

    message.channel.updateOverwrite(message.guild.id, {
      SEND_MESSAGES: true
    });
  }
});
//===============================================================================\\
client.on("message", async message => {
  if (message.content.startsWith(`<@${client.user.id}>`)) {

let embed = new Discord.MessageEmbed()
      .setColor("#ffff00")
      .setAuthor(client.user.username, client.user.avatarURL())
      .setDescription(`DISCORD BOT GAMES PRERIX, `)

    message.channel.send(embed);
  }
});
