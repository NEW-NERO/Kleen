require("./all/module.js")

//========== Setting Owner ==========//
global.owner = [ "19026088666",
                 "" ]
global.namaowner = "KleeMD"

//======== Setting Bot & Link ========//
global.namabot = "KleeMD" 
global.foother = "© KleeMD"
global.idsaluran = "not bad"
global.linkgc = false
global.linksaluran = ""
global.linkyt = 'https://www.flowfalcon.xyz/'
global.linktele = "https://www.flowfalcon.xyz/"
global.packname = "KleeMD"
global.author = "FlowFalcon"

//========== Setting Event ==========//
// true jika iya & false jika tidak
global.welcome = true
global.autoread = true
global.anticall = true 
global.gconlyoff = false

//==== Waktu Jeda Jpm & Pushkon ====//
global.delaypushkontak = 6000
global.delayjpm = 1000

//========= Setting Url Foto =========//
//Lihat Di Folder Media!

//========== Setting Panell ==========//
global.egg = "15"
global.loc = "1"
global.domain = "-"
global.apikey = "-"
global.capikey = "-"

//========= Setting Payment =========//
//Kalo Gak Ada Isi Aja jadi false
global.dana = "false"
global.gopay = "false"
global.ovo = "false"
global.qris = "false" //fs.readFileSync("./media/qris.jpg") ( jika ada )
                             
//=========== Api Domain ===========//
global.zone1 = "";
global.apitoken1 = "";
global.tld1 = ""

//========== Api Domain 2 ==========//
global.zone2 = "";
global.apitoken2 = "";
global.tld2 = "";
//========== Api Domain 3 ==========//
global.zone3 = "";
global.apitoken3 = "";
global.tld3 = "";
//========== Api Domain 4 ==========//
global.zone4 = "";
global.apitoken4 = "";
global.tld4 = "";

//========= Setting Message =========//
global.msg = {
"error": "Maaf Kakak Sepertinya fitur sedang error (⁠ᗒ⁠ᗩ⁠ᗕ⁠)",
"done": "Done Kak (⁠・⁠∀⁠・⁠)", 
"wait": "Bot Sedang Memproses Tunggu Sebentar . . .", 
"group": "*• Group Only* Fitur Ini Hanya Untuk Di Dalam Grup!", 
"private": "*• Private Chat* Fitur Ini Hanya Untuk Didalam Private Chat!", 
"admin": "*• Admin Only* Fitur Ini Hanya Untuk Admin Grup!", 
"adminbot": "*• Bot Admin* Fitur Ini Dapat Digunakan Ketika Bot Menjadi Admin", 
"owner": "*• Owner Only* Fitur Ini Hanya Untuk Owner Bot!", 
"developer": "*• Developer Only* Fitur Ini Hanya Untuk Developer"
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})