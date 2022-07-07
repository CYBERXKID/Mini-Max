/*
    ╔═╦═╗╔══╗╔═╦╗╔══╗  ╔═╦═╗╔══╗╔╗╔╗╔══╗
║║║║║╚║║╝║║║║╚║║╝  ║║║║║║╔╗║╚╗╔╝║╔╗║
║║║║║╔║║╗║║║║╔║║╗  ║║║║║║╠╣║╔╝╚╗║╠╣║
╚╩═╩╝╚══╝╚╩═╝╚══╝  ╚╩═╩╝╚╝╚╝╚╝╚╝╚╝╚╝
─────────────────  ───────────────── 


╔╗─╔╗─╔╗─
║╚╦╝║╔╝║─
╚╗║╔╝╚╗║─
─╚═╝──║║─
─────╔╝╚╗
 
 𝙈𝙞𝙣𝙞 𝙈𝙖𝙭 𝘽𝙮 𝘾𝙮𝙗𝙚𝙧𝙭𝙠𝙞𝙙 
 𝙋𝙪𝙗𝙡𝙞𝙘 𝘿𝙖𝙩𝙚 - 2022 / 07 / 07 
 𝙏𝙝𝙖𝙣𝙠𝙨 𝙏𝙤 𝙎𝙘𝙧𝙞𝙥𝙩 𝙁𝙧𝙤 𝙂𝙤𝙟𝙤 𝙎𝙖𝙩𝙤𝙧𝙪
 
 𝙏𝙝𝙖𝙣𝙠𝙨 𝙏𝙤
           𝘼𝙡𝙡 𝙃𝙚𝙡𝙥𝙚𝙧𝙨 💞
*/



const fs = require('fs')
const chalk = require('chalk')

//global api
global.fbapi = 'dd79-1aeb-21a3' // Facebook download 2 api

global.APIs = {
	zenz: 'https://zenzapi.xyz', 
}
global.APIKeys = {
	'https://zenzapi.xyz': '01ABEB1E11', //Kalau habis beli sendiri
}

//other
global.owner = ['27686881509'] // Owner number , (අයිතිකරුගේ නම්බර් එක )
global.pemilik = ['27686881509'] //Change  it , ඔබට කැමති නම් වෙනස් කරන්න
global.premium = ['27686881509'] //Change it ඔබට කැමතිනම් වෙනස් කරන්න 
global.pengguna = '𝘾𝙔𝘽𝙀𝙍𝙓𝙆𝙄𝘿' // Your name ඔබේ නම 
global.botnma = '𖠌 𝙈𝙄𝙉𝙄 𝙈𝘼𝙓 𖠌' // Your bot name , ඔබගෙ බොට්ගේ නම 
global.ownernma = '𝓒𝓨𝓑𝓔𝓡𝓧𝓚𝓘𝓓' //ownernama,ownername
global.packname = 'Mini Max Sticker' // Sticker package name 
global.author = '𝘾𝙔𝘽𝙀𝙍𝙓𝙆𝙄𝘿' // Sticker Autor name 
global.sessionName = 'session'
global.prefa = ['#','!','/',''] 
global.sp = '🔵'
// Alive massage , ඔබේ බොගේ alive massage  එක මෙහි ඇති ` ` මෙම ලකුනු ඇතුලේ ඔබට අවශ්‍ය ඔනිම දෙයක් Type කරන්න.𖠌
global.alivelogo = `https://te.legra.ph/file/9fd052cabef54d2b404a8.jpg`
global.alive =`Hello im Mini Max bot  coded by cyberxkid l am alive

Download song type .yt 
Thanks fro using...`
// Welcome massage  ඔබට කැමති නම් මෙයට ඔබෙ welcome massage  එක යොදන්න 
global.welcome = `
🌀 Thanks Fro using sl mini max bot
✾ Some bugs fixing
😼♥️
`
// වෙල්කම් එක යවන්න ඔනි නම් add කියලා දාන්න 
global.sendwelcome = `add`
// Good bye එක ඔනි නම් remove කියලා දාන්න
global.sendgoodbye = `remove`
// Caption 
global.cap = `© 𝐆𝐞𝐧𝐞𝐫𝐚𝐭𝐞𝐝 𝐁𝐲 𝐌𝐢𝐧𝐢 𝐌𝐚𝐱 `
global.mess = {
    success: '✅ Done!',
    admin: 'you must be admin to use this cmd!',
    botAdmin: 'Bot must be admin neh!',
    owner: 'This cmd is for Elisa bot owner only',
    group: 'oooh sorry this cmd is for groups only!',
    private: 'goossssh it can only used in dms!',
    bot: 'This cmd  its only for the bot host',
    wait: 'Wait Elisa bot processing ',
    endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours',
}
global.limitawal = {
    premium: "Infinity", 
    free: 90 
}
    global.rpg = {
        darahawal: 100,
        besiawal: 15,
        goldawal: 10,
        emeraldawal: 5,
        umpanawal: 5,
        potionawal: 1
     }    

global.thumb = fs.readFileSync('./image/Max.jpg')
global.imgalive = fs.readFileSync('./image/Max.jpg')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
