// Rafli Fernazer
const {
	MessageType,
	mentionedJid,
    waChatKey,	
} = require("@adiwajshing/baileys");
const fs = require("fs-extra");
const axios = require("axios")
const fetch = require('node-fetch')
const encodeUrl = require('encodeurl')
const { forks, wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close, waktoonyabro, calender} = require('../lib/functions')
const PhoneNumber = require('awesome-phonenumber');
const moment = require("moment-timezone");
const { color, bgcolor } = require('../lib/color');
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
module.exports = welcome = async (client, anj, jid, mek, key) => {
        const welkom = JSON.parse(fs.readFileSync('./database/group/welcome.json'))
        const isWelcome = welkom.includes(anj.jid)
        const mdata = await client.groupMetadata(anj.jid)
        const groupMet = await client.groupMetadata(anj.jid);
        const groupMembers = groupMet.participants;
        const groupAdmins = getGroupAdmins(groupMembers);
        const groupName = mdata.subject
        const sender = client.user.jid
        const conts = client.contacts[anj.participants[0]] || { notify: jid.replace(/@.+/, '') }
    	const pushname = conts.notify || conts.vname || conts.name || PhoneNumber('+' + anj.participants[0].replace('@s.whatsapp.net', '')).getNumber('international') 
        taguser = `${anj.participants[0].split("@")[0]}`	    
	    if (!isWelcome) return
		try {
			const mdata = await client.groupMetadata(anj.jid)
			console.log(anj)
			if (anj.action == 'add') {
				num = anj.participants[0]
				try {
					ppimg = await client.getProfilePicture(`${num.split('@')[0]}@c.us`)
				} catch {
				    ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
			    } 			
				let buff = await getBuffer(ppimg)
		        const rafli1 = await client.prepareMessage("0@s.whatsapp.net", buff, MessageType.location,{ thumbnail: buff})
			 
				const rafli2 = rafli1.message["ephemeralMessage"] ? rafli1.message.ephemeralMessage : rafli1				
                await client.prepareMessageMedia(buff, "imageMessage", {
                thumbnail: buff,
               })
 
          usernya = `*Hello @${taguser}*
_WWelcome Bre Di ${mdata.subject}_
*Intro Dulu Bre Biar Dapat Janda*
® Nama :
® Umur :
® P/L :
® Askot :
_Jangan Lupa Nimbrung Trus Bre_`,
          buttonya = `_Welcome Message_`,	    
                   welcomeBut = [
                   {buttonId:`00`,buttonText:{displayText:'WELCOME'},type:1}]
                welcomeButt = { contentText: `${usernya}`, footerText: `${buttonya}`, buttons: welcomeBut, headerType: 6, locationMessage: bosco2.message.locationMessage}
                client.sendMessage(mdata.id, welcomeButt, MessageType.buttonsMessage, { caption: 'buff', "contextInfo": { "mentionedJid" : [num], },})
				} else if (anj.action == 'remove') {
				num = anj.participants[0]
				try {
					ppimg = await client.getProfilePicture(`${num.split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				let buff = await getBuffer(ppimg)
				const rafli3 = await client.prepareMessage("0@s.whatsapp.net", buff, MessageType.location,{ thumbnail: buff})
				const rafli4 = rafli3.message["ephemeralMessage"] ? rafli3.message.ephemeralMessage : rafli3				

                await client.prepareMessageMedia(buff, "imageMessage", {
                thumbnail: buff,
               })
          raflioy = `*Byee @${taguser}*
_Out Of ${mdata.subject}_
          
_GoodBye :)_`,
          keluar = `_Leave Message_`,
           welcomeBut = [
                   {buttonId:`00`,buttonText:{displayText:'SAYONARA'},type:1}]
                welcomeButt = { contentText: `${raflioy}`, footerText: `${keluar}`, buttons: welcomeBut, headerType: 6, locationMessage: rafli4.message.locationMessage}
                client.sendMessage(mdata.id, welcomeButt, MessageType.buttonsMessage, { caption: 'buff', "contextInfo": { "mentionedJid" : [num], },})
			     }
			else if (anj.action == 'promote') {
num = anj.participants[0]
try {
					ppimg = await client.getProfilePicture(`${num.split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				let buff = await getBuffer(ppimg)
				const rafli5 = await client.prepareMessage("0@s.whatsapp.net", buff, MessageType.location,{ thumbnail: buff})
				const rafli6 = rafli5.message["ephemeralMessage"] ? rafli5.message.ephemeralMessage : rafli5				

                await clientprepareMessageMedia(buff, "imageMessage", {
                thumbnail: buff,
               })
          promote = `*P R O M O T E - D E T E C T E D*\nUsername: @${num.split('@')[0]}\nTime : ${moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')}\nGroup: ${mdata.subject}\n\nSelamat Su - Pri atas Kenaikan Pangkatnya 🔥`,
          loter = `_Promote Message_`,
         welcomeBut = [
                   {buttonId:`00`,buttonText:{displayText:'Congralutions'},type:1}]
                welcomeButt = { contentText: `${promote}`, footerText: `${loter}`, buttons: welcomeBut, headerType: 6, locationMessage: rafli6.message.locationMessage}
                client.sendMessage(mdata.id, welcomeButt, MessageType.buttonsMessage, { caption: 'buff', "contextInfo": { "mentionedJid" : [num], },})
} else if (anj.action == 'demote') {
num = anj.participants[0]
try {
					ppimg = await client.getProfilePicture(`${num.split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				let buff = await getBuffer(ppimg)
				const rafli7 = await client.prepareMessage("0@s.whatsapp.net", buff, MessageType.location,{ thumbnail: buff})
				const rafli8 = rafli7.message["ephemeralMessage"] ? rafli7.message.ephemeralMessage : rafli7				

                await client.prepareMessageMedia(buff, "imageMessage", {
                thumbnail: buff,
               })
          demote = `*D E M O T E - D E T E C T E D*\nUsername: @${num.split('@')[0]}\nTime : ${moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')}\nGroup: ${mdata.subject}\n\nGpp Nggak jadi Admin lagi, ..!!`,
          mote = `_Demote Message_`,
          welcomeBut = [
                   {buttonId:`00`,buttonText:{displayText:'Congralutions'},type:1}]
                welcomeButt = { contentText: `${demote}`, footerText: `${mote}`, buttons: welcomeBut, headerType: 6, locationMessage: rafli8.message.locationMessage}
                client.sendMessage(mdata.id, welcomeButt, MessageType.buttonsMessage, { caption: 'buff', "contextInfo": { "mentionedJid" : [num], },})
			    
}
  metdata = await client.groupMetadata(anj.jid)
    if(anj.announce == 'false'){
    teks = `- [ Group Opened ] -\n\n_Group telah dibuka oleh admin_\n_Sekarang semua member bisa mengirim pesan_`
    client.sendMessage(metdata.id, teks, MessageType.text, {quoted: fkontakk})
    console.log(`- [ Group Opened ] - In ${metdata.subject}`)
  }
  else if(anj.announce == 'true'){
    teks = `- [ Group Closed ] -\n\n_Group telah ditutup oleh admin_\n_Sekarang hanya admin yang dapat mengirim pesan_`
    client.sendMessage(metdata.id, teks, MessageType.text, {quoted: fkontakk})
    console.log(`- [ Group Closed ] - In ${metdata.subject}`)
  }
  else if(!anj.desc == ''){
    tag = anj.descOwner.split('@')[0] + '@s.whatsapp.net'
    teks = `- [ Group Description Change ] -\n\nDeskripsi Group telah diubah oleh Admin @${anj.descOwner.split('@')[0]}\n• Deskripsi Baru : ${anj.desc}`
    client.sendMessage(metdata.id, teks, MessageType.text, {contextInfo: {"mentionedJid": [tag]}, quoted: fkontakk})
    console.log(`- [ Group Description Change ] - In ${metdata.subject}`)
  }
  else if(anj.restrict == 'false'){
    teks = `- [ Group Setting Change ] -\n\nEdit Group info telah dibuka untuk member\nSekarang semua member dapat mengedit info Group Ini`
    client.sendMessage(metdata.id, teks, MessageType.text, {quoted: fkontakk})
    console.log(`- [ Group Setting Change ] - In ${metdata.subject}`)
  }
  else if(anj.restrict == 'true'){
    teks = `- [ Group Setting Change ] -\n\nEdit Group info telah ditutup untuk member\nSekarang hanya admin group yang dapat mengedit info Group Ini`
    client.sendMessage(metdata.id, teks, MessageType.text, {quoted: fkontakk})
    console.log(`- [ Group Setting Change ] - In ${metdata.subject}`)
  }
     } catch (e) {
         console.log('Error : %s', color(e, 'red'))
      }
}
		 	   