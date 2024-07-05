const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="benjaminkaptire@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Uganda";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "256785191109";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/758549f0de2219884f387.jpg,https://telegra.ph/file/9498496b010dfb5900b80.jpg,https://telegra.ph/file/59bf80efbb6e6576b5a52.jpg,https://telegra.ph/file/ee0e191363161e88e4743.jpg" // ramadan Theme Images
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923184474176,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_11_18_07_05_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDUsXG4gICAgICAgIDExMSxcbiAgICAgICAgNzgsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNDYsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNTgsXG4gICAgICAgIDM0LFxuICAgICAgICAyMTQsXG4gICAgICAgIDM5LFxuICAgICAgICAxOTIsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMzcsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjYsXG4gICAgICAgIDYyLFxuICAgICAgICAyMjMsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMjksXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTMsXG4gICAgICAgIDIzLFxuICAgICAgICAxMzksXG4gICAgICAgIDIzNCxcbiAgICAgICAgMzUsXG4gICAgICAgIDk4LFxuICAgICAgICAxNTQsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMDQsXG4gICAgICAgIDk0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NixcbiAgICAgICAgMjA0LFxuICAgICAgICAyMjcsXG4gICAgICAgIDMwLFxuICAgICAgICA3NSxcbiAgICAgICAgMTcsXG4gICAgICAgIDExNSxcbiAgICAgICAgNjYsXG4gICAgICAgIDcyLFxuICAgICAgICAxMSxcbiAgICAgICAgNzMsXG4gICAgICAgIDkwLFxuICAgICAgICAyMjksXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjI2LFxuICAgICAgICAzMyxcbiAgICAgICAgMjI5LFxuICAgICAgICA2NixcbiAgICAgICAgMTU5LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE0LFxuICAgICAgICAxMTMsXG4gICAgICAgIDEwLFxuICAgICAgICAxNDQsXG4gICAgICAgIDEsXG4gICAgICAgIDY5LFxuICAgICAgICAxNjAsXG4gICAgICAgIDkzLFxuICAgICAgICA5OCxcbiAgICAgICAgMTQ5LFxuICAgICAgICA1NCxcbiAgICAgICAgMTAyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NCxcbiAgICAgICAgNjEsXG4gICAgICAgIDM2LFxuICAgICAgICA2MCxcbiAgICAgICAgMTQ1LFxuICAgICAgICA3NSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMzYsXG4gICAgICAgIDIwLFxuICAgICAgICAxNDcsXG4gICAgICAgIDY1LFxuICAgICAgICAxMDYsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxODAsXG4gICAgICAgIDI0MixcbiAgICAgICAgMzcsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMzMsXG4gICAgICAgIDIwLFxuICAgICAgICAyNDksXG4gICAgICAgIDEyMyxcbiAgICAgICAgNzYsXG4gICAgICAgIDEyMyxcbiAgICAgICAgODQsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTY4LFxuICAgICAgICA3MCxcbiAgICAgICAgMTksXG4gICAgICAgIDIzMixcbiAgICAgICAgMTA4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDM5LFxuICAgICAgICA1MyxcbiAgICAgICAgMjE3LFxuICAgICAgICA1MSxcbiAgICAgICAgMTU1LFxuICAgICAgICAzLFxuICAgICAgICAyNDQsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjUsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMCxcbiAgICAgICAgOTgsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjAzLFxuICAgICAgICAxMTUsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMjAsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNDcsXG4gICAgICAgIDE2MCxcbiAgICAgICAgOSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNjksXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTA5LFxuICAgICAgICAyMTIsXG4gICAgICAgIDIxLFxuICAgICAgICAyNDAsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTE4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTYsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMDIsXG4gICAgICAgIDI0NixcbiAgICAgICAgNTksXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTIxLFxuICAgICAgICA3OSxcbiAgICAgICAgOTgsXG4gICAgICAgIDEwMSxcbiAgICAgICAgODAsXG4gICAgICAgIDk4LFxuICAgICAgICAyMTQsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjA4LFxuICAgICAgICA3MixcbiAgICAgICAgMTUxLFxuICAgICAgICAxMjksXG4gICAgICAgIDk3LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE0LFxuICAgICAgICA4NCxcbiAgICAgICAgMzEsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNDAsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNTIsXG4gICAgICAgIDIxLFxuICAgICAgICAyMTEsXG4gICAgICAgIDkwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNixcbiAgICAgICAgMTE2LFxuICAgICAgICA3LFxuICAgICAgICAzNixcbiAgICAgICAgMTA0LFxuICAgICAgICAxNzMsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNDUsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNTIsXG4gICAgICAgIDc1LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjAzLFxuICAgICAgICA5NCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMzQsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTQyLFxuICAgICAgICA3LFxuICAgICAgICAyMDksXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjIxLFxuICAgICAgICAzMyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNzUsXG4gICAgICAgIDQsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMjRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDEyNFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICA5MixcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDc3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQzLFxuICAgICAgICA0NCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMzAsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjEwLFxuICAgICAgICAxOTksXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTc5LFxuICAgICAgICA1NyxcbiAgICAgICAgNDAsXG4gICAgICAgIDc1LFxuICAgICAgICAxMjAsXG4gICAgICAgIDg2LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNzgsXG4gICAgICAgIDgzLFxuICAgICAgICA0NixcbiAgICAgICAgOTMsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTQ5LFxuICAgICAgICA5NyxcbiAgICAgICAgODYsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNDMsXG4gICAgICAgIDY1LFxuICAgICAgICAxMTYsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMyxcbiAgICAgICAgOTgsXG4gICAgICAgIDMwLFxuICAgICAgICAxOTEsXG4gICAgICAgIDcxLFxuICAgICAgICAxMTMsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNjQsXG4gICAgICAgIDkxLFxuICAgICAgICA5MyxcbiAgICAgICAgMjAyLFxuICAgICAgICA3NixcbiAgICAgICAgMTA1LFxuICAgICAgICAyMjIsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMzYsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMzgsXG4gICAgICAgIDc4LFxuICAgICAgICAyMzMsXG4gICAgICAgIDg3LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNTUsXG4gICAgICAgIDEwMixcbiAgICAgICAgOTQsXG4gICAgICAgIDgyLFxuICAgICAgICAxMCxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMzIsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEzMyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJxU3VKRGtNUjVhUDJoMjFzMGNwZ1ErN3Q0TzZKRllxTnllMTZEYzVSUHIwPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjI1Njc4NTE5MTEwOUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiNkY4MDU3MjQ2MEIzNTJCQzAyMzQ4RDVDMTAyM0MzNUNcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIwMTc4MzM2XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInRSakZRblZyUlMyOW9ZaTcwRURZYVFcIixcbiAgXCJwaG9uZUlkXCI6IFwiYTQwODJjODEtODg0YS00MjE2LTliYzQtMTA4YTViMjYwMDc1XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDExNSxcbiAgICAgIDE5MyxcbiAgICAgIDM4LFxuICAgICAgMjA5LFxuICAgICAgMjM5LFxuICAgICAgMTk3LFxuICAgICAgMTEyLFxuICAgICAgMTEwLFxuICAgICAgOTYsXG4gICAgICA4NCxcbiAgICAgIDM0LFxuICAgICAgMTE5LFxuICAgICAgMTA5LFxuICAgICAgMTEzLFxuICAgICAgNzYsXG4gICAgICAxOTMsXG4gICAgICAxNjAsXG4gICAgICA5NSxcbiAgICAgIDIwNixcbiAgICAgIDg0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE4NyxcbiAgICAgIDEwNyxcbiAgICAgIDE3MyxcbiAgICAgIDE1MyxcbiAgICAgIDI2LFxuICAgICAgODEsXG4gICAgICAxNjMsXG4gICAgICAxOTgsXG4gICAgICAxNjIsXG4gICAgICAzMSxcbiAgICAgIDE0NSxcbiAgICAgIDUzLFxuICAgICAgMTQ2LFxuICAgICAgMTc2LFxuICAgICAgMTc3LFxuICAgICAgOTAsXG4gICAgICA5NyxcbiAgICAgIDI0MyxcbiAgICAgIDc1LFxuICAgICAgMTgzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIk5WNlNISExLXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTY3ODUxOTExMDk6NDdAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCIjUmFyZV9TcGVjaWVzMTAwLjElXCIsXG4gICAgXCJsaWRcIjogXCIxNTE1Mjk0NjY1MTI0NTo0N0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPM2M1ZkFHRUpPdG43UUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImJXeEtsR0QwQkJsTVZVTW1FaTNjUjNMREpicHVQN0o2NExXaFcwZEUvbkU9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiS2VzdHlsWldOeS94MnJ0MVExNHdRUG0xSlpJTUsvdzhqNTBzeE1VMHdPTzV0QjY0UVBpcFptbVprRVZ5UHdKR2p0WHlnZ0tLODM3ZTBNbG9Na09GQWc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiSmFVK0xIakprV3p5NDFBUHJEb081RUZ0SVRSRnloT2lIYmpidUVLSWw1cHRQdS93SU5pbC9BYnZ0ZVZ6OEYwZ0xabGtxT0FFRkloS2Zpbm4zeHhZQkE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU2Nzg1MTkxMTA5OjQ3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxMTNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDE3ODMyOCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQVBjcFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBUGNwLmpzb24iOiAie1wia2V5RGF0YVwiOlwibWsrejNpQWphcE5VQXZLYlBzYW43MTU3eC9SaVJERXNmR0tqeTBKOFFNRT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxODQ3MTYwNDI4LFwiY3VycmVudEluZGV4XCI6MixcImRldmljZUluZGV4ZXNcIjpbMCwyXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0=" ;


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.1",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Musau MD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It's Musau",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};

























global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
