const Discord = require('discord.js')

const client = new Discord.Client();

const bot = new Discord.Client();

const prefix = '!';

client.once('ready', () => {
    console.log('JamalBot, up and running!');
});   

// Array list of replies
//let replies = ["punjabi poop", "arabic algorithm", "mashallah mujahideen"];
// Random number from 0 to 2 for the array index
//let random = Math.floor(Math.random() * 3);

// Send a random reply to a channel
//bot.send({
    //to: 785339724629016658,
    //message: replies[random]
//})

// Above code in green needs to be fixed, it gives TypeError: bot.send is not a function


  
bot.once('ready', () => {
bot.user.setActivity("jamalbot.rf.gd - Halal يميتكم پیپلز پارٹی free download 720p", { type: "PLAYING"})
});

setInterval(() => {
  var yourchannel = client.channels.cache.get('813541482450518056');
  yourchannel.send('Routine JamalBot Message - Sent every 5 minutes to maintain activity and for testing purposes. This is currently a placeholder message. Mashallah brother :star_and_crescent:');
}, "350000");
// Reminder: You can make multiple routine messages like this, that can pop up at various different times.
// It will make it seem as if JamalBot occassionally spits out some tips every once in a while!


client.on('message', message => {
  if (!message.guild) return;
  if (message.content.startsWith('!ban')) {
    const user = message.mentions.users.first();
    if (user) {
      const member = message.guild.member(user);
      if (member) {
        member
          .ban({
            reason: 'They were bad!',
          })
          .then(() => {
            message.reply(`MASHALLAH! EVIL INFIDEL ${user.tag} HAS BEEN ETERNALLY CONDEMNED TO HELL (Ban Successful)`);
          })
          .catch(err => {
            message.reply('Infidel is too strong! This is impossible, Islam always stronger!!!! :star_with_crescent: (Try removing the permissions from the infidel)');
            console.error(err);
          });
      } else {
        message.reply("Infidel is not in server");
      }
    } else {
      message.reply("Mention an infidel to condemn to hell");
    }
  }
});

client.on('message', message => {
    // Ignore messages that aren't from a guild
    if (!message.guild) return;
  
    // If the message content starts with "!kick"
    if (message.content.startsWith('!kick')) {
      const user = message.mentions.users.first();
      // If we have a user mentioned
      if (user) {
        // Now we get the member from the user
        const member = message.guild.member(user);
        // If the member is in the guild
        if (member) {
          /**
           * Kick the member
           * Make sure you run this on a member, not a user!
           * There are big differences between a user and a member
           */
          member
            .kick('Optional reason that will display in the audit logs')
            .then(() => {
              // We let the message author know we were able to kick the person
              message.reply(` Mashallah! Infidel ${user.tag} has been sent to hell!`);
            })
            .catch(err => {
              // An error happened
              // This is generally due to the bot not being able to kick the member,
              // either due to missing permissions or role hierarchy
              message.reply('Bad news brother, the infidel cannot be kicked! We must call upon Islam to strip the infidel of any permissions.');
              // Log the error
              console.error(err);
            });
        } else {
          // The mentioned user isn't in this guild
          message.reply("infidel is not in server!");
        }
        // Otherwise, if no user was mentioned
      } else {
        message.reply("Mention an infidel to exile");
      }
    } 
});


client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ + /)
    const command = args.shift().toLowerCase();
    if(command === 'jamal'){
        message.channel.send('JamalBot Default Testing Command. A new and versatile general-use bot. Created by YesItsJamal#5203. HEAVY WORK IN PROGRESS!')
    }
    if(command === 'pingall'){
        message.reply('has pinged @everyone')
    }
    if(command === 'pinghere'){
        message.reply('has pinged @here')
    }
    if(command === 'website'){
        message.channel.send('http://jamalbot.rf.gd/ - Still under heavy construction!')
    }
    if(command === 'poopoo'){
        message.channel.send('Aye yall, Peepeepoopoo check! (http://peepeepoopoo-is-a.great-site.net/)')
    } 
    if(command === 'commands'){
        message.channel.send('You may find the command list here: http://jamalbot.rf.gd/commands.html')
    } 
    if(command === 'fuckyou'){
        message.channel.send('Fuck you lol :middle_finger:')
    } 
    if(command === 'empire'){
        message.channel.send('Yo dudes, the empire is pretty chill. Maybe you could like join it or something!')
    }
    if(command === 'halal'){
        message.channel.send('mashallah brother! Yes I am halal. Read quran and make sure to pray 5 times a day!')
    }
    if(command === 'haram'){
        message.channel.send('OMG HARAM!!!!! DESTROY HARAM NOW!!! >>:(( Call the haram destroyers save pakistan تكم پیپلز')
    }
    if(command === 'anime'){
      message.reply('brother, no! You must follow path of true Quran! Do not seek shelter in this infidel anime! :star_and_crescent: https://cdn.discordapp.com/attachments/727590750300143638/813342941157916692/Allahu_Akbar.mp4')

    }
    if (command === 'tiananmen'){
      message.channel.send('动态网自由门 天安門 天安门 法輪功 李洪志 Free Tibet 六四天安門事件 The Tiananmen Square protests of 1989 天安門大屠殺 The Tiananmen Square Massacre 反右派鬥爭 The Anti-Rightist Struggle 大躍進政策 The Great Leap Forward 文化大革命 The Great Proletarian Cultural Revolution 人權 Human Rights 民運 Democratization 自由 Freedom 獨立 Independence 多黨制 Multi-party system 台灣 臺灣 Taiwan Formosa 中華民國 Republic of China 西藏 土伯特 唐古特 Tibet 達賴喇嘛 Dalai Lama 法輪功 Falun Dafa 新疆維吾爾自治區 The Xinjiang Uyghur Autonomous Region 諾貝爾和平獎 Nobel Peace Prize 劉暁波 Liu Xiaobo 民主 言論 思想 反共 反革命 抗議 運動 騷亂 暴亂 騷擾 擾亂 抗暴 平反 維權 示威游行 李洪志 法輪大法 大法弟子 強制斷種 強制堕胎 民族淨化 人體實驗 肅清 胡耀邦 趙紫陽 魏京生 王丹 還政於民 和平演變 激流中國 北京之春 大紀元時報 九評論共産黨 獨裁 專制 壓制 統一 監視 鎮壓 迫害 侵略 掠奪 破壞 拷問 屠殺 活摘器官 誘拐 買賣人口 遊進 走私 毒品 賣淫 春畫 賭博 六合彩 天安門 天安门 法輪功 李洪志 Winnie the Pooh 劉曉波动态网自由门')
      message.reply('https://cdn.discordapp.com/attachments/508877167812149249/813028513707196416/The_Bread_Man_on_Instagram___shit_post__245__CLiN3X6sE2eLSw0Z4_7bSmRgff1g_8cR5rprNU0_0MP4.mp4')
    }
    if (command === 'funfact'){
      message.channel.send('https://cdn.discordapp.com/attachments/766888181852798997/813030319442755614/proud_pakistan.png :ok_hand: Proud Pakistan :flag_pk:')
    }
}

,client.on('!message', message => {

  let args = message.content.substring(PREFIX.length).slice(" ")
  switch (args[0]) {
    case 'ping':
      if(!message.member.roles.find(r => r.name === "Owner")) return message.channel.send('No Perms!')
      message.reply('pong')
  }

})
// Note: How will I be able to make this into a typable command?????




)

client.login('CENSORED');


