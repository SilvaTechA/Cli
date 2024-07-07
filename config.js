const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="sylivanusmomanyi@gmail.com"
global.location="Kisii,Kenya."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363180849475037@g.us, 120363024254662025@g.us"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Nairobi";
global.github=process.env.GITHUB|| "https://github.com/Sylivanu/s-ilva";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VaAkETLLY6d8qhLmZt2v";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VaAkETLLY6d8qhLmZt2v" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/751eef74109e0e5c8916c.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "𝑺𝒊𝒍𝒗𝒂 𝒕𝒆𝒄𝒉-ᴍᴅ" 


global.devs = "254700143167" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "254743706010";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254743706010";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || "3"  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,254xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,254xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "254700143167, 254743706010";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://silvatech.vercel.app";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_20_44_07_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICA5MSxcbiAgICAgICAgMTExLFxuICAgICAgICAyMjQsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTQ0LFxuICAgICAgICA4MixcbiAgICAgICAgODAsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNjQsXG4gICAgICAgIDE2NyxcbiAgICAgICAgOTksXG4gICAgICAgIDkwLFxuICAgICAgICAxNzgsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNDIsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTUxLFxuICAgICAgICAzNCxcbiAgICAgICAgNjEsXG4gICAgICAgIDUzLFxuICAgICAgICAyMDEsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMTMsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxNSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNTAsXG4gICAgICAgIDIyLFxuICAgICAgICAxMjdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI4LFxuICAgICAgICAxMjEsXG4gICAgICAgIDk0LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTA2LFxuICAgICAgICA3MyxcbiAgICAgICAgMjI0LFxuICAgICAgICAxNDksXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTQ1LFxuICAgICAgICA5LFxuICAgICAgICAyMTIsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTkyLFxuICAgICAgICAzMixcbiAgICAgICAgMTkyLFxuICAgICAgICAxMjksXG4gICAgICAgIDIzLFxuICAgICAgICAxMyxcbiAgICAgICAgNCxcbiAgICAgICAgNzQsXG4gICAgICAgIDgzLFxuICAgICAgICA0MyxcbiAgICAgICAgMTY4LFxuICAgICAgICAyLFxuICAgICAgICA1NixcbiAgICAgICAgMTA2LFxuICAgICAgICA5NCxcbiAgICAgICAgMjU0LFxuICAgICAgICAyMDIsXG4gICAgICAgIDVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk2LFxuICAgICAgICAzNixcbiAgICAgICAgNDgsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjE1LFxuICAgICAgICAxOSxcbiAgICAgICAgOTQsXG4gICAgICAgIDQyLFxuICAgICAgICAxNDIsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxNCxcbiAgICAgICAgMjEwLFxuICAgICAgICA4LFxuICAgICAgICA2MSxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMjQsXG4gICAgICAgIDg4LFxuICAgICAgICAxMyxcbiAgICAgICAgNjMsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNjAsXG4gICAgICAgIDk0LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMjgsXG4gICAgICAgIDQwLFxuICAgICAgICA3NSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxODQsXG4gICAgICAgIDEyM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjMsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjAwLFxuICAgICAgICA0MixcbiAgICAgICAgMTM5LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNDYsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNzksXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMjUsXG4gICAgICAgIDEzMCxcbiAgICAgICAgOTQsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMDUsXG4gICAgICAgIDUwLFxuICAgICAgICAxNTgsXG4gICAgICAgIDEwNixcbiAgICAgICAgOTMsXG4gICAgICAgIDksXG4gICAgICAgIDkzLFxuICAgICAgICA5MSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjQyLFxuICAgICAgICA2MyxcbiAgICAgICAgOThcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2LFxuICAgICAgICA4NixcbiAgICAgICAgMjU1LFxuICAgICAgICAyMTAsXG4gICAgICAgIDkwLFxuICAgICAgICAxMjQsXG4gICAgICAgIDk5LFxuICAgICAgICAxMzcsXG4gICAgICAgIDUsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMTUsXG4gICAgICAgIDExNixcbiAgICAgICAgMTMzLFxuICAgICAgICA2MSxcbiAgICAgICAgMTQsXG4gICAgICAgIDE4MixcbiAgICAgICAgMzEsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjA1LFxuICAgICAgICAyMTksXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxODgsXG4gICAgICAgIDk3LFxuICAgICAgICAyMDcsXG4gICAgICAgIDMyLFxuICAgICAgICAxNjUsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTM1LFxuICAgICAgICA0OCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMTlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTk4LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNjgsXG4gICAgICAgIDM2LFxuICAgICAgICAxNzQsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNTAsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTMzLFxuICAgICAgICAyNSxcbiAgICAgICAgMjUsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTA4LFxuICAgICAgICA2MixcbiAgICAgICAgMTMxLFxuICAgICAgICAzNixcbiAgICAgICAgMTAyLFxuICAgICAgICAxMjgsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjM3LFxuICAgICAgICAxNjYsXG4gICAgICAgIDY4LFxuICAgICAgICA4NixcbiAgICAgICAgMTI2LFxuICAgICAgICAxMixcbiAgICAgICAgMzAsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNCxcbiAgICAgICAgMjUwLFxuICAgICAgICA5N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICA0NSxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICA4M1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgNjNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2MSxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNCxcbiAgICAgICAgMTE1LFxuICAgICAgICA5NixcbiAgICAgICAgMTYsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjcsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTY0LFxuICAgICAgICAzLFxuICAgICAgICAxOTEsXG4gICAgICAgIDI1LFxuICAgICAgICAxNSxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMDUsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMDcsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjMxLFxuICAgICAgICA1NyxcbiAgICAgICAgMTkzLFxuICAgICAgICA1NixcbiAgICAgICAgMTAyLFxuICAgICAgICA1NyxcbiAgICAgICAgMzQsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjA0LFxuICAgICAgICA0NyxcbiAgICAgICAgMTkyLFxuICAgICAgICA4OCxcbiAgICAgICAgMTg0LFxuICAgICAgICA4NSxcbiAgICAgICAgMjA1LFxuICAgICAgICA0MixcbiAgICAgICAgMTM5LFxuICAgICAgICA0OCxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMDUsXG4gICAgICAgIDg2LFxuICAgICAgICAxMzksXG4gICAgICAgIDg4LFxuICAgICAgICA2LFxuICAgICAgICA2NCxcbiAgICAgICAgMjIxLFxuICAgICAgICAwLFxuICAgICAgICAxMDIsXG4gICAgICAgIDE0NixcbiAgICAgICAgODksXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjcsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNDcsXG4gICAgICAgIDU1LFxuICAgICAgICAxODUsXG4gICAgICAgIDU2LFxuICAgICAgICAxNjMsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxOTcsXG4gICAgICAgIDc4LFxuICAgICAgICAxOSxcbiAgICAgICAgMTQzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA4MCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJJV0h0T0JhMkl6VEFiS2dBa2pnd0x4OVgwNVJkeDA3Y2RnMHZwMXhtcTVRPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJ1LTMtWGFPOVRsR3pGdDA5ZlNaaE9nXCIsXG4gIFwicGhvbmVJZFwiOiBcImU3M2Q3NmQwLWI2ZGQtNGNkMS04OTgxLTk1NzcyNTRhNGJhZVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNzMsXG4gICAgICAxOTMsXG4gICAgICAxOCxcbiAgICAgIDE4LFxuICAgICAgMTYwLFxuICAgICAgMjA5LFxuICAgICAgMTksXG4gICAgICAxOTEsXG4gICAgICAyMzUsXG4gICAgICAxMzksXG4gICAgICAyMyxcbiAgICAgIDIzNCxcbiAgICAgIDMsXG4gICAgICAxOTYsXG4gICAgICA3MCxcbiAgICAgIDE4LFxuICAgICAgNjQsXG4gICAgICA2OSxcbiAgICAgIDU3LFxuICAgICAgNzFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjA2LFxuICAgICAgMTQ1LFxuICAgICAgMTQ4LFxuICAgICAgNTgsXG4gICAgICA4NCxcbiAgICAgIDE0NCxcbiAgICAgIDEwNyxcbiAgICAgIDEzMixcbiAgICAgIDI0MyxcbiAgICAgIDEyOCxcbiAgICAgIDEyOCxcbiAgICAgIDEwNSxcbiAgICAgIDEzMyxcbiAgICAgIDEzNSxcbiAgICAgIDg0LFxuICAgICAgNjYsXG4gICAgICAxMTUsXG4gICAgICAxMixcbiAgICAgIDIxMixcbiAgICAgIDE2N1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJGU1ZCU1ZRRFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU0NzI1MjkwMjA4OjI3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxODUzNzk3MTM5Nzg0OTc6MjdAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSWppdzhJRkVJVDhxN1FHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJ1WXhBT2grUGZUVnR2T21YWUx1S1pCTXdzcmo2VlgzVnBFa0RhVUwwa2g4PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlkrWi9WUStBYzRSYnlBSHRHZDlINWZWenFTeTVGTm84c25JbUV3NkdzNCt1VlpBdEJab1hkUGRDYTlsWG5ESDJ5Uk9LTldqd1FSZ2lYYi92V2VCQkRBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkdseDk5QTd3OU1LWWgwZE1rTURIWXpLNDIvOURnN1pPQ0NnR2cvd3FKeHI1Sk1zc2c3Nzg4WE5kSWN0WTdUQTdIYnRxTHhLc0pKVUFPUFg0SS93eWh3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1NDcyNTI5MDIwODoyN0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAzMVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwMzg1MDMyLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQVE3XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFBUTcuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJsNStPVXh4SGp3eWVMVDdEOVVKZi9RR1d6SUU1dWFjOHBKNXM3RHVReXVNPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE0ODE2OTk1OTEsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjAzODUwMDQ1MjVcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "2", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "『 𝑺𝒊𝒍𝒗𝒂 𝒕𝒆𝒄𝒉-ᴍᴅ 』" , // ```『 𝑺𝒊𝒍𝒗𝒂 𝒕𝒆𝒄𝒉-ᴍᴅ 』```", //*『𝑺𝒊𝒍𝒗𝒂 𝒕𝒆𝒄𝒉』*\n tiktok.com/@silva.edits6"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "𝑺𝒊𝒍𝒗𝒂 𝒕𝒆𝒄𝒉-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It's silva",


  errorChat : process.env.ERROR_CHAT || "254700143167",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SILVA"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















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
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
