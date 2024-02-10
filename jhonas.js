const fs = require('fs')
const P = require('pino')
const { Boom } = require('@hapi/boom')
const fetch = require('node-fetch')
const chalk = require('chalk')
const { color } = require('./lib/color')
const moment = require('moment-timezone')
const ytttts = require("yt-search");
const yttts = require("yt-search");
const hora = moment.tz('America/Sao_Paulo').format('HH:mm:ss')
const data = moment.tz('America/Sao_Paulo').format('DD/MM/YY')
const yts = require('yt-search');
const speed = require('performance-now')
const { banner, getGroupAdmins, getBuffer, getRandom, getExtension } = require('./lib/funções')
const { fetchJson } = require('./lib/fetcher')
const sotoy = JSON.parse(fs.readFileSync('./lib/sotoy.json'))
const configurações = JSON.parse(fs.readFileSync('./config.json'))
const textobv = JSON.parse(fs.readFileSync('./lib/TextoDoBemvindo.json'))
const { convertSticker } = require("./lib/swm.js");
const premium = JSON.parse(fs.readFileSync('./lib/premium.json'));
const ffmpeg = require('fluent-ffmpeg')
const { exec, spawn, execSync } = require("child_process")
const axios = require("axios")
const linkfy = require('linkifyjs');
const anikit = require('trevo-api');
// Definições
const prefixo = configurações.prefix
const prefix = configurações.prefix
const nomeBot = configurações.nomeBot
const NomeDoBot = nomeBot
const nomeDono = configurações.nomeDono
const numeroDono = configurações.owner
const username = configurações.username_anikit
const key = configurações.key_anikit
const log = ["lib/fotos/jhonas-bot.png"]
const im = log[Math.floor(Math.random() * log.length)];
const imagens = fs.readFileSync(`./${im}`)
const logo = imagens
let girastamp = speed()
let latensi = speed() - girastamp

const { default: makeWASocket, downloadContentFromMessage, useMultiFileAuthState, makeInMemoryStore, DisconnectReason, WAGroupMetadata, relayWAMessage, MediaPathMap, mentionedJid, processTime, MediaType, Browser, MessageType, Presence, Mimetype, Browsers, delay, fetchLatestBaileysVersion, MessageRetryMap, extractGroupMetadata, generateWAMessageFromContent, proto } = require('@whiskeysockets/baileys');
const { response } = require('express')


module.exports = client = async (client, info, settings, color) => {

  try {
    const altpdf = Object.keys(info.message)
    const type = altpdf[0] == 'senderKeyDistributionMessage' ? altpdf[1] == 'messageContextInfo' ? altpdf[2] : altpdf[1] : altpdf[0]
    global.prefixo
    const content = JSON.stringify(info.message)
    const from = info.key.remoteJid
    selectedButton = (type == 'buttonsResponseMessage') ? info.message.buttonsResponseMessage.selectedButtonId : ''
    var body = (type === 'conversation') ?
      info.message.conversation : (type == 'imageMessage') ?
        info.message.imageMessage.caption : (type == 'videoMessage') ?
          info.message.videoMessage.caption : (type == 'extendedTextMessage') ?
            info.message.extendedTextMessage.text : (type == 'buttonsResponseMessage') ?
              info.message.buttonsResponseMessage.selectedButtonId : (type == 'listResponseMessage') ?
                info.message.listResponseMessage.singleSelectReply.selectedRowId : (type == 'templateButtonReplyMessage') ?
                  info.message.templateButtonReplyMessage.selectedId : ''
    const args = body.trim().split(/ +/).slice(1)
    const isCmd = body.startsWith(prefixo)
    const comando = isCmd ? body.slice(1).trim().split(/ +/).shift().toLocaleLowerCase() : null
    const argsButton = selectedButton.trim().split(/ +/)
    bady = (type === 'conversation') ? info.message.conversation : (type == 'imageMessage') ? info.message.imageMessage.caption : (type == 'videoMessage') ? info.message.videoMessage.caption : (type == 'extendedTextMessage') ? info.message.extendedTextMessage.text : (info.message.listResponseMessage && info.message.listResponseMessage.singleSelectReply.selectedRowId) ? info.message.listResponseMessage.singleSelectReply.selectedRowId : ''
    budy = (type === 'conversation') ? info.message.conversation : (type === 'extendedTextMessage') ? info.message.extendedTextMessage.text : ''
    button = (type == 'buttonsResponseMessage') ? info.message.buttonsResponseMessage.selectedDisplayText : ''
    button = (type == 'buttonsResponseMessage') ? info.message.buttonsResponseMessage.selectedButtonId : ''
    listMessage = (type == 'listResponseMessage') ? info.message.listResponseMessage.title : ''
    var pes = (type === 'conversation' && info.message.conversation) ? info.message.conversation : (type == 'imageMessage') && info.message.imageMessage.caption ? info.message.imageMessage.caption : (type == 'videoMessage') && info.message.videoMessage.caption ? info.message.videoMessage.caption : (type == 'extendedTextMessage') && info.message.extendedTextMessage.text ? info.message.extendedTextMessage.text : ''
    bidy = budy.toLowerCase()


    const getFileBuffer = async (mediakey, MediaType) => {
      const stream = await downloadContentFromMessage(mediakey, MediaType)

      let buffer = Buffer.from([])
      for await (const chunk of stream) {
        buffer = Buffer.concat([buffer, chunk])
      }
      return buffer
    }

    const antilink = JSON.parse(fs.readFileSync('./lib/antilink.json'))
    const messagesC = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
    const arg = body.substring(body.indexOf(' ') + 1)
    const argss = body.split(/ +/g)
    const testat = body
    const ants = body
    const isGroup = info.key.remoteJid.endsWith('@g.us')
    const tescuk = ['0@s.whatsapp.net']
    const q = args.join(' ')
    const sender = isGroup ? info.key.participant : info.key.remoteJid
    const pushname = info.pushName ? info.pushName : ''
    const groupMetadata = isGroup ? await client.groupMetadata(from) : ''
    const groupName = isGroup ? groupMetadata.subject : ''
    const groupDesc = isGroup ? groupMetadata.desc : ''
    const groupMembers = isGroup ? groupMetadata.participants : ''
    const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
    const text = args.join(' ')
    var isAntilink = isGroup ? antilink.includes(from) : false

    // Selos de verificado
    const ContatVR = { key: { participant: '0@s.whatsapp.net' }, message: { contactMessage: { displayName: `${pushname}` } } }
    const LiveVR = { key: { participant: '0@s.whatsapp.net' }, message: { liveLocationMessage: { displayName: `${pushname}` } } }
    const ImagenVR = { key: { participant: '0@s.whatsapp.net' }, message: { imageMessage: { displayName: `${pushname}` } } }
    const VideoVR = { key: { participant: '0@s.whatsapp.net' }, message: { videoMessage: { displayName: `${pushname}` } } }
    const DocVR = { key: { participant: '0@s.whatsapp.net' }, message: { documentMessage: { displayName: `${pushname}` } } }


    // Consts dono/adm etc...
    let bancht = JSON.parse(fs.readFileSync('./lib/banchat.json'));
    const quoted = info.quoted ? info.quoted : info
    const mime = (quoted.info || quoted).mimetype || ""
    const numeroBot = client.user.id.split(':')[0] + '@s.whatsapp.net'
    const isBot = info.key.fromMe ? true : false
    const isBotGroupAdmins = groupAdmins.includes(numeroBot) || false
    const isGroupAdmins = groupAdmins.includes(sender) || false
    const argis = bidy.trim().split(/ +/)
    const isOwner = sender.includes(numeroDono)
  const sleep = async (ms) => { return new Promise(resolve => setTimeout(resolve, ms)) }
    const enviar = (texto) => {
      client.sendMessage(from, { text: texto }, { quoted: info })
    }
    const reply = (texto) => {
      client.sendMessage(from, { text: texto }, { quoted: info })
    }
    const participants = isGroup ? await groupMetadata.participants : ''



    const welkom = JSON.parse(fs.readFileSync('./lib/welkom.json'));
    const isWelkom = isGroup ? welkom.includes(from) : false


const registros = JSON.parse(fs.readFileSync('./lib/registros.json'))

    // Consts isQuoted
    const isImage = type == 'imageMessage'
    const isVideo = type == 'videoMessage'
    const isAudio = type == 'audioMessage'
    const isSticker = type == 'stickerMessage'
    const isContact = type == 'contactMessage'
    const isLocation = type == 'locationMessage'
    const isProduct = type == 'productMessage'
    const isPremium = premium.includes(sender)
    const isRegistro = registros.includes(sender)
    const isBanchat = isGroup ? bancht.includes(from) : false
    const isMedia = (type === 'imageMessage' || type === 'videoMessage' || type === 'audioMessage')
    typeMessage = body.substr(0, 50).replace(/\n/g, '')
    if (isImage) typeMessage = 'Image'
    else if (isVideo) typeMessage = 'Video'
    else if (isAudio) typeMessage = 'Audio'
    else if (isSticker) typeMessage = 'Sticker'
    else if (isContact) typeMessage = 'Contact'
    else if (isLocation) typeMessage = 'Location'
    else if (isProduct) typeMessage = 'Product'
    const isQuotedMsg = type === 'extendedTextMessage' && content.includes('textMessage')
    const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
    const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
    const isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage')
    const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
    const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
    const isQuotedContact = type === 'extendedTextMessage' && content.includes('contactMessage')
    const isQuotedLocation = type === 'extendedTextMessage' && content.includes('locationMessage')
    const isQuotedProduct = type === 'extendedTextMessage' && content.includes('productMessage')

    var msg = {
      espere: "agrade um momento...."
    }
    resposta = {
      espere: "[⚙️️]Aguarde...enviando ",
      aguarde: "[⚙️️]Aguarde...enviando ",
      dono: "[⚙️️]Esse comando so pode ser usado pelo meu dono!!! ",
      grupo: "[⚙️️]Esse comando só pode ser usado em grupo ",
      premium: "[⚙️️]comando so pra usuários premium",
      privado: "[⚙️️]Esse comando só pode ser usado no privado ",
      adm: "[⚙️️]Esse comando só pode ser usado por administradores de grupo",
      botadm: "[⚙️️]Este comando só pode ser usado quando o bot se torna administrador ",
      registro: `[⚙️️] Você não se registrou utilize ${prefix}rg para se registrar `,
      norg: "[⚙️️] Você ja está registrado ",
      erro: "[⚙️️] Error, tente novamente mais tarde ",
      menu: "aaaaa"
    }

        const getLevelingXp = (userId) => {
          let position = false
          Object.keys(_level).forEach((i) => {
            if (_level[i].jid === userId) {
              position = i
            }
          })
          if (position !== false) {
            return _level[position].xp
          }
        }
        const getLevelingLevel = (userId) => {
          let position = false
          Object.keys(_level).forEach((i) => {
            if (_level[i].jid === userId) {
              position = i
            }
          })
          if (position !== false) {
            return _level[position].level
          }
        }
        const getLevelingId = (userId) => {
          let position = false
          Object.keys(_level).forEach((i) => {
            if (_level[i].jid === userId) {
              position = i
            }
          })
          if (position !== false) {
            return _level[position].jid
          }
        }
        const addLevelingXp = (userId, amount) => {
          let position = false
          Object.keys(_level).forEach((i) => {
            if (_level[i].jid === userId) {
              position = i
            }
          })
          if (position !== false) {
            _level[position].xp += amount
            fs.writeFileSync('./lib/level.json', JSON.stringify(_level))
          }
        }
        const addLevelingLevel = (userId, amount) => {
          let position = false
          Object.keys(_level).forEach((i) => {
            if (_level[i].jid === userId) {
              position = i
            }
          })
          if (position !== false) {
            _level[position].level += amount
            fs.writeFileSync('./lib/level.json', JSON.stringify(_level))
          }
        }
        const addLevelingId = (userId) => {
          const obj = { jid: userId, xp: 1, level: 1 }
          _level.push(obj)
          fs.writeFileSync('./lib/level.json', JSON.stringify(_level))
        }

    const isUrl = (url) => {
      if (linkfy.find(url)[0]) return true
      return false
    }
    if (isUrl(body) && isAntilink && isGroup && isBotGroupAdmins) {
      if (!isAntilink) return
      if (!isUrl(body)) return
      if (body.includes("http")) {
        if (!budy.includes("http")) return
        if (isBot) return
        linkgpp = await client.groupInviteCode(from)
        if (budy.match(`${linkgpp}`)) return reply('*Link do nosso grupo, não irei remover.. *')
        if (isGroupAdmins) return reply("*Link detectado, porém usuário é admin*")
        if (!JSON.stringify(groupMembers).includes(sender)) return
        client.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: [sender] } })
        client.groupParticipantsUpdate(from, [sender], 'remove')
      }
    }

    const mentions = (teks, memberr, id) => {
      (id == null || id == undefined || id == false) ? client.sendMessage(from, { text: teks.trim(), mentions: memberr }) : client.sendMessage(from, { text: teks.trim(), mentions: memberr })
    }
    const { validmove, setGame } = require('./lib/tictactoe/index.js');
        
        const _level = JSON.parse(fs.readFileSync('./lib/level.json'))
        const _leveling = JSON.parse(fs.readFileSync('./lib/leveling.json'))
        const levelingOn = JSON.parse(fs.readFileSync('./lib/leveling.json'))
        const isLevelingOn = isGroup ? _leveling.includes(from) : true
        const { getUserRank, addCooldown, leveltab } = require('./lib/leveling.js')
        if (isGroup && fs.existsSync(`./lib/anagrama-${from}.json`)) {
          let dataAnagrama = JSON.parse(fs.readFileSync(`./lib/anagrama-${from}.json`))
          if (budy.slice(0, 4).toUpperCase() == dataAnagrama.original.slice(0, 4).toUpperCase() && budy.toUpperCase() != dataAnagrama.original) return reply('está perto')
          xp = Math.floor(Math.random() * 14) + 3000
          if (budy.toUpperCase() == dataAnagrama.original) {

            let ano = {
              text: `Parabéns ${pushname} 🥳 você ganhou o jogo\nPalavra : ${dataAnagrama.original}\nIniciando o proximo jogo em 5 segundos..
  `,
              //ifooter: "",
              //buttons: buttons,
              headerType: 4
            }

            client.sendMessage(from, ano, { "mentionedJid": [sender] }), fs.unlinkSync(`./lib/anagrama-${from}.json`)
            addLevelingXp(sender, xp)
            recompensa = `🎉🎉RECOMPENSA🎉🎉\nVocê ganhou ${xp} em *xp*`
            reply(recompensa)
            setTimeout(async () => {
              fs.writeFileSync(`./lib/anagrama-${from}.json`, `${JSON.stringify(palavrasANA[Math.floor(Math.random() * palavrasANA.length)])}`)
              let dataAnagrama2 = JSON.parse(fs.readFileSync(`./lib/anagrama-${from}.json`))

              let ani = {
                text: `
  ╭─────≽「 👾 ANAGRAMA 👾 」
  │➽ DESCUBRA A PALAVRA
  │➽ ANAGRAMA: ${dataAnagrama2.embaralhada}
  │➽ DICA: ${dataAnagrama2.dica}
  ╰────────────────────────
  `,
                //lfooter: `${nomeBot}`,
                //buttons: buttons,
                headerType: 4
              }

              client.sendMessage(from, ani)
            }, 5000)
          }
        }
                if (isGroup && fs.existsSync(`./lib/quizanimais-${from}.json`)) {
          let dataQuizanimais = JSON.parse(fs.readFileSync(`./lib/quizanimais-${from}.json`))
          if (budy.slice(0, 4).toUpperCase() == dataQuizanimais.original.slice(0, 4).toUpperCase() && budy.toUpperCase() != dataQuizanimais.original) return reply('está perto')
          xp1 = Math.floor(Math.random() * 14) + 3000
          if (budy.toUpperCase() == dataQuizanimais.original) {

            let ano1 = {
              text: `Parabéns ${pushname} 🥳 você ganhou o jogo\nPalavra : ${dataQuizanimais.original}\nIniciando o proximo jogo em 5 segundos..
  `,
              //ifooter: "",
              //buttons: buttons,
              headerType: 4
            }

            client.sendMessage(from, ano1, { "mentionedJid": [sender] }), fs.unlinkSync(`./lib/quizanimais-${from}.json`)
            addLevelingXp(sender, xp1)
            recompensa1 = `🎉🎉RECOMPENSA🎉🎉\nVocê ganhou ${xp1} em *xp*`
            reply(recompensa1)
            setTimeout(async () => {
              fs.writeFileSync(`./lib/quizanimais-${from}.json`, `${JSON.stringify(quizanimais[Math.floor(Math.random() * quizanimais.length)])}`)
              let dataQuizanimais2 = JSON.parse(fs.readFileSync(`./lib/quizanimais-${from}.json`))

              let ani1 = {
                text: `
  ╭─────≽「 👾 QUIZ ANIMAIS 👾 」
  │➽ DESCUBRA O ANIMAL
  ╰────────────────────────
  `,
                //lfooter: `${nomeBot}`,
                //buttons: buttons,
                headerType: 4
              }

              client.sendMessage(from, ani1)
            }, 5000)
          }
        }
                if (isGroup && fs.existsSync(`./lib/quizanime-${from}.json`)) {
          let dataQuizanime = JSON.parse(fs.readFileSync(`./lib/quizanime-${from}.json`))
          if (budy.slice(0, 4).toUpperCase() == dataQuizanime.original.slice(0, 4).toUpperCase() && budy.toUpperCase() != dataQuizanime.original) return reply('está perto')
          xp2 = Math.floor(Math.random() * 14) + 3000
          if (budy.toUpperCase() == dataQuizanime.original) {

            let ano2 = {
              text: `Parabéns ${pushname} 🥳 você ganhou o jogo\nPalavra : ${dataQuizanime.original}\nIniciando o proximo jogo em 5 segundos..
  `,
              //ifooter: "",
              //buttons: buttons,
              headerType: 4
            }

            client.sendMessage(from, ano2, { "mentionedJid": [sender] }), fs.unlinkSync(`./lib/quizanime-${from}.json`)
            addLevelingXp(sender, xp2)
            recompensa2 = `🎉🎉RECOMPENSA🎉🎉\nVocê ganhou ${xp1} em *xp*`
            reply(recompensa2)
            setTimeout(async () => {
              fs.writeFileSync(`./lib/quizanime-${from}.json`, `${JSON.stringify(quizanime[Math.floor(Math.random() * quizanime.length)])}`)
              let dataQuizanime2 = JSON.parse(fs.readFileSync(`./lib/quizanime-${from}.json`))

              let ani2 = {
                text: `
  ╭─────≽「 👾 QUIZ ANIME 👾 」
  │➽ DESCUBRA O PERSONAGEM OU CLÃ
  ╰────────────────────────
  `,
                //lfooter: `${nomeBot}`,
                //buttons: buttons,
                headerType: 4
              }

              client.sendMessage(from, ani2)
            }, 5000)
          }
        }
  const logo = 'https://telegra.ph/file/d9c57e36dd7f10e99256a.jpg'
  
        /********** FUCTION LEVELING **********/
        var per = '*[▒▒▒▒▒▒▒▒▒▒] 0%*'
        const peri = 5000 * (Math.pow(2, getLevelingLevel(sender)) - 1)
        const perl = peri - getLevelingXp(sender)
        const resl = Math.round(100 - ((perl / getLevelingXp(sender)) * 100))
        if (resl <= 10) {
          per = `*[█▒▒▒▒▒▒▒▒▒] ${resl}%*`
        } else if (resl <= 20) {
          per = `*[██▒▒▒▒▒▒▒▒] ${resl}%*`
        } else if (resl <= 30) {
          per = `*[███▒▒▒▒▒▒▒] ${resl}%*`
        } else if (resl <= 40) {
          per = `*[████▒▒▒▒▒▒] ${resl}%*`
        } else if (resl <= 50) {
          per = `*[█████▒▒▒▒▒] ${resl}%*`
        } else if (resl <= 60) {
          per = `*[██████▒▒▒▒] ${resl}%*`
        } else if (resl <= 70) {
          per = `*[███████▒▒▒] ${resl}%*`
        } else if (resl <= 80) {
          per = `*[████████▒▒] ${resl}%*`
        } else if (resl <= 90) {
          per = `*[█████████▒] ${resl}%*`
        } else if (resl <= 100) {
          per = `*[██████████] ${resl}%*`
        }
        const levelRole = getLevelingLevel(sender)
        var role = 'Bronze I🥉'
        if (levelRole <= 3) {
          role = 'Bronze I 🥉'
        } else if (levelRole <= 5) {
          role = 'Bronze II 🥉'
        } else if (levelRole <= 10) {
          role = 'Bronze III 🥉'
        } else if (levelRole <= 15) {
          role = 'Bronze IV 🥉'
        } else if (levelRole <= 20) {
          role = 'Bronze V 🥉'
        } else if (levelRole <= 25) {
          role = 'Prata I 🥈'
        } else if (levelRole <= 30) {
          role = 'Prata II 🥈'
        } else if (levelRole <= 35) {
          role = 'Prata III 🥈'
        } else if (levelRole <= 40) {
          role = 'Prata IV 🥈'
        } else if (levelRole <= 45) {
          role = 'Prata V 🥈'
        } else if (levelRole <= 50) {
          role = 'Ouro I 🥇'
        } else if (levelRole <= 55) {
          role = 'Ouro II 🥇'
        } else if (levelRole <= 60) {
          role = 'Ouro III 🥇'
        } else if (levelRole <= 65) {
          role = 'Ouro IV 🥇'
        } else if (levelRole <= 70) {
          role = 'Ouro V 🥇'
        } else if (levelRole <= 75) {
          role = 'Campeão I 🏆'
        } else if (levelRole <= 80) {
          role = 'Campeão II 🏆'
        } else if (levelRole <= 85) {
          role = 'Campeão III 🏆'
        } else if (levelRole <= 90) {
          role = 'Campeão IV 🏆'
        } else if (levelRole <= 95) {
          role = 'Campeão V 🏆'
        } else if (levelRole <= 100) {
          role = 'Diamante I 💎'
        } else if (levelRole <= 110) {
          role = 'Diamante II 💎'
        } else if (levelRole <= 120) {
          role = 'Diamante III 💎'
        } else if (levelRole <= 130) {
          role = 'Diamante IV 💎'
        } else if (levelRole <= 140) {
          role = 'Diamante V 💎'
        } else if (levelRole <= 150) {
          role = 'Mestre I 🔥'
        } else if (levelRole <= 170) {
          role = 'Mestre II 🔥'
        } else if (levelRole <= 180) {
          role = 'Mestre III 🔥'
        } else if (levelRole <= 190) {
          role = 'Mestre IV 🔥'
        } else if (levelRole <= 200) {
          role = 'Mestre V 🔥'
        } else if (levelRole <= 250) {
          role = 'Mítico I 🔮'
        } else if (levelRole <= 300) {
          role = 'Mítico II 🔮'
        } else if (levelRole <= 350) {
          role = 'Mítico III 🔮'
        } else if (levelRole <= 400) {
          role = 'Mítico IV 🔮'
        } else if (levelRole <= 450) {
          role = 'Mítico V 🔮'
        } else if (levelRole <= 500) {
          role = 'Lenda I ⚡'
        } else if (levelRole <= 550) {
          role = 'Lenda II ⚡'
        } else if (levelRole <= 600) {
          role = 'Lenda III ⚡'
        } else if (levelRole <= 650) {
          role = 'Lenda IV ⚡'
        } else if (levelRole <= 700) {
          role = 'Lenda V ⚡'
        } else if (levelRole <= 750) {
          role = 'Lendário I 🎑'
        } else if (levelRole <= 800) {
          role = 'Lendário II 🎑'
        } else if (levelRole <= 850) {
          role = 'Lendário III 🎑'
        } else if (levelRole <= 900) {
          role = 'Lendário IV 🎑'
        } else if (levelRole <= 910) {
          role = 'Lendário V 🎑'
        } else if (levelRole <= 920) {
          role = 'EL MESTRE I 🏅'
        } else if (levelRole <= 930) {
          role = 'EL MESTRE II 🏅'
        } else if (levelRole <= 940) {
          role = 'EL MESTRE III 🏅'
        } else if (levelRole <= 950) {
          role = 'EL MESTRE IV 🏅'
        } else if (levelRole <= 10000) {
          role = '⚡️ BRIGADEIRO ⚡️'
        }
        if (isGroup && isLevelingOn) {
          const currentLevel = getLevelingLevel(sender)
          const checkId = getLevelingId(sender)
          try {
            if (currentLevel === undefined && checkId === undefined) addLevelingId(sender)
            const amountXp = Math.floor(Math.random() * 10) + 500
            const requiredXp = 10000 * (Math.pow(2, currentLevel) - 1)
            const getLevel = getLevelingLevel(sender)
            addLevelingXp(sender, amountXp)
            if (requiredXp <= getLevelingXp(sender)) {
              addLevelingLevel(sender, 1)
              await client.sendMessage(sender, { text: `*「 LEVEL UP 」*\n\n➸ *Nome*: ${pushname}\n*Número*: ${sender}➸ *XP*: ${getLevelingXp(sender)}\n➸ *Level*: ${getLevel} -> ${getLevelingLevel(sender)}\n\nParabéns!!  🎉🎉` })
            }
          } catch (err) {
            console.error(err)
          }
        }
        
        const { palavrasANA, quizanime, quizanimais } = require('./lib/jogos.js');
        const { bancoDeDadosArma } = require('./lib/armas.js');
        const { palavras } = require('./lib/conselhos.js');
//       const bancoDeDadosArma = JSON.parse(fs.readFileSync('./lib/armas.json'));
        const getLevel = getLevelingLevel(sender)
        
        const sendBimg = async (id, img1, text1, desc1, but = [], vr) => {
          buttonMessage = { image: { url: img1 }, caption: text1, footerText: desc1, buttons: but, headerType: 4 }
          client.sendMessage(id, buttonMessage, { quoted: vr })
        }

        const sendBimgT = async (id, img1, text1, desc1, but = [], vr) => {
          templateMessage = { image: { url: img1 }, caption: text1, footer: desc1, templateButtons: but, }
          client.sendMessage(id, templateMessage, { quoted: vr })
        }

        const sendGifButao = async (id, gif1, text1, desc1, but = [], vr) => {
          buttonMessage = { video: { url: gif1 }, caption: text1, gifPlayback: true, footerText: desc1, buttons: but, headerType: 4 }
          client.sendMessage(id, buttonMessage, { quoted: vr })
        }
        //*******************************************//


        // VERIFICADOS ⭐️
        const live = info
        const imgm = info
        const vid = info
        const contato = info
        const doc = info
        
    if (!isGroup && isCmd) console.log(`${color('╭━━━━━━━━━━━━━━━━━━━━━━━━━╮', 'cyan')}\n${color('┃', 'cyan')} ${color('Número:', 'yellow')} ${color(sender.split('@')[0], 'purple')}\n${color('┃', 'cyan')} ${color('Nome:', 'yellow')} ${color(pushname, 'purple')}\n${color('┃', 'cyan')} ${color('Horário:', 'yellow')} ${color(hora, 'magenta')}\n${color('┃', 'cyan')} ${color('Comando:', 'yellow')} ${color(comando)}\n${color('┃', 'cyan')} ${color('Palavras:', 'yellow')} ${color(budy.length, 'magenta')}\n${color('╰━━━━━━━━━━━━━━━━━━━━━━━━━╯', 'cyan')}`)
    if (!isGroup && !isCmd) console.log(`${color('╭━━━━━━━━━━━━━━━━━━━━━━━━━╮', 'cyan')}\n${color('┃', 'cyan')} ${color('Número:', 'yellow')} ${color(sender.split('@')[0], 'magenta')}\n${color('┃', 'cyan')} ${color('Nome:', 'yellow')} ${color(pushname, 'magenta')}\n${color('┃', 'cyan')} ${color('Horário:', 'yellow')} ${color(hora, 'magenta')}\n${color('┃', 'cyan')} ${color('Mensagem:', 'yellow')} ${color(budy, 'magenta')}\n${color('┃', 'cyan')} ${color('Palavras:', 'yellow')} ${color(budy.length, 'magenta')}\n${color('╰━━━━━━━━━━━━━━━━━━━━━━━━━╯', 'cyan')}`)
    if (isGroup && isCmd) console.log(`${color('╭━━━━━━━━━━━━━━━━━━━━━━━━━╮', 'cyan')}\n${color('┃', 'cyan')} ${color('Número:', 'yellow')} ${color(sender.split('@')[0], 'magenta')}\n${color('┃', 'cyan')} ${color('Nome:', 'yellow')} ${color(pushname, 'purple')}\n${color('┃', 'cyan')} ${color('Horário:', 'yellow')} ${color(hora, 'magenta')}\n${color('┃', 'cyan')} ${color('Comando:', 'yellow')} ${color(comando)}\n${color('┃', 'cyan')} ${color('Palavras:', 'yellow')} ${color(budy.length, 'magenta')}\n${color('┃', 'cyan')} ${color('Grupo:', 'yellow')} ${color(groupName, 'magenta')}\n${color('╰━━━━━━━━━━━━━━━━━━━━━━━━━╯', 'cyan')}`)
    if (!isCmd && isGroup) console.log(`${color('╭━━━━━━━━━━━━━━━━━━━━━━━━━╮', 'cyan')}\n${color('┃', 'cyan')} ${color('Número:', 'yellow')} ${color(sender.split('@')[0], 'magenta')}\n${color('┃', 'cyan')} ${color('Nome:', 'yellow')} ${color(pushname, 'purple')}\n${color('┃', 'cyan')} ${color('Horário:', 'yellow')} ${color(hora, 'magenta')}\n${color('┃', 'cyan')} ${color('Mensagem:', 'yellow')} ${color(budy, 'magenta')}\n${color('┃', 'cyan')} ${color('Palavras:', 'yellow')} ${color(budy.length, 'magenta')}\n${color('┃', 'cyan')} ${color('Grupo:', 'yellow')} ${color(groupName, 'magenta')}\n${color('╰━━━━━━━━━━━━━━━━━━━━━━━━━╯', 'cyan')}`)


    var command = comando
    switch (comando) {
      // COMANDOS COM PREFIXO COMEÇAM A PARTIR DAQUI!!! \\

      case "comandos":
      case "help":
      case "start":
      case 'menu': {
        client.sendMessage(from, {
          image: fs.readFileSync('./lib/fotos/jhonas-bot.png'), caption: `
╭━━━━━━━━━━━━━━━━━━━━━━━━━╮
┃~> MENU ADM
┃━━━━━━━━━━━━━━━━━━━━━━━━━╯
┃ ${prefix}ban
┃ ${prefix}reviver
┃ ${prefix}bemvindo 1/0
┃ ${prefix}marcar
┃ ${prefix}hidetag
┃ ${prefix}tagall
┃ ${prefix}grupo a 
┃ ${prefix}grupo f
┃ ${prefix}nomegp
┃ ${prefix}descgp
┃ ${prefix}fotogp
┃ ${prefix}resetarlink
┃ ${prefix}gplink
┃ ${prefix}promover
┃ ${prefix}rebaixar
┃ ${prefix}antilink 1/0
┃ ${prefix}
┃ ${prefix}
╰━━━━━━━━━━━━━━━━━━━━━━━━━╯
╭━━━━━━━━━━━━━━━━━━━━━━━━━╮
┃~> MENU BRINCADEIRA
┃━━━━━━━━━━━━━━━━━━━━━━━━━╯
┃ ${prefix}feio
┃ ${prefix}gay
┃ ${prefix}gostoso
┃ ${prefix}lindo
┃ ${prefix}punheteiro
┃ ${prefix}cassino
┃ ${prefix}ppt
╭━━━━━━━━━━━━━━━━━━━━━━━━━╮
┃~> MENU ANIME
┃━━━━━━━━━━━━━━━━━━━━━━━━━╯
┃ ${prefix}eps-recentes
┃━━━━━━━━━━━━━━━━━━━━━━━━
┃ ${prefix}cosplay
┃ ${prefix}waifu
┃ ${prefix}waifu2
┃ ${prefix}shota
┃ ${prefix}loli
┃ ${prefix}yotsuba
┃ ${prefix}shinomiya
┃ ${prefix}yumeko
┃ ${prefix}tejina
┃ ${prefix}chiho
┃ ${prefix}shizuka
┃ ${prefix}boruto
┃ ${prefix}kagori
┃ ${prefix}kaga
┃ ${prefix}kotori
┃ ${prefix}mikasa
┃ ${prefix}akiyama
┃ ${prefix}hinata
┃ ${prefix}minato
┃ ${prefix}naruto
┃ ${prefix}nezuko
┃ ${prefix}yuki
┃ ${prefix}hestia
┃ ${prefix}emilia
┃ ${prefix}itachi
┃ ${prefix}elaina
┃ ${prefix}madara
┃ ${prefix}sasuke
┃ ${prefix}deidara
┃ ${prefix}sakura
┃ ${prefix}tsunade
┃━ HENTAI
┃ ${prefix}ahegao
┃ ${prefix}ass
┃ ${prefix}bdsm
┃ ${prefix}blowjob
┃ ${prefix}cuckold
┃ ${prefix}cum
┃ ${prefix}ero
┃ ${prefix}kasedaiki
┃ ${prefix}femdom
┃ ${prefix}foot
┃ ${prefix}gangbang
┃ ${prefix}glasses
┃ ${prefix}hentai2
┃ ${prefix}jahy
┃ ${prefix}manga
┃ ${prefix}masturbation
┃ ${prefix}neko
┃ ${prefix}orgy
┃ ${prefix}panties
┃ ${prefix}pussy
┃ ${prefix}neko2
┃ ${prefix}neko
┃ ${prefix}tentacles
┃ ${prefix}thighs
┃ ${prefix}yuri
┃ ${prefix}zettai
╰━━━━━━━━━━━━━━━━━━━━━━━━━╯
os comandos nao estao todos listados aqui entao vc nao pode achar alguns nesse menu...
          `})
      } break


      case 'play-vídeo':
      case 'play-video': {
        if (!args.join(' ' < 1)) return reply("Coloque o nume do video junto ou o link mas tem que ser do youtube...")
        const pedido = args.join('');
        reply("enviando...")
        anikit.playMP4(`${q}`, username, key).then((response) => {
          //console.log(response);
          client.sendMessage(from, {
            image: { url: `${response.thumb}` }, caption: `
          Titulo: ${response.title}
          Canal: ${response.channel}
          Views: ${response.views}
          `});

          client.sendMessage(from, { video: { url: `${response.url}` } });
        })
      } break

      case 'play-áudio':
      case 'play-audio': {
        if (!args.join(' ' < 1)) return reply("Coloque o nume do video junto ou o link mas tem que ser do youtube...")
        const pedido = args.join('');
        reply("enviando...")
        anikit.playMP3(`${q}`, username, key).then((response) => {
          //console.log(response);
          client.sendMessage(from, {
            image: { url: `${response.thumb}` }, caption: `
          Titulo: ${response.title}
          Canal: ${response.channel}
          Views: ${response.views}
          `});

          client.sendMessage(from, { audio: { url: `${response.url}` }, mimetype: 'audio/mpeg' });
        })
      } break

      /*
      client.sendMessage(from, {
            image: { url: `${response.thumb}` }, caption: `
          Titulo: ${response.title}
          Canal: ${response.channel}
          Views: ${response.views}
          `});

          client.sendMessage(from, { video: { url:`${response.url}` } });
           */

      case 'novamensagem':
        if (!isOwner) return reply(resposta.dono);
        const novaMensagem = `${q}`;
        textobv.texto = novaMensagem
        fs.writeFileSync('./lib/TextoDoBemvindo.json', JSON.stringify(textobv, null, '\t'))
        reply('A mensagem de boas-vindas foi alterada com sucesso.');
        break;



      case 'welcome':
      case 'bemvindo':
        if (!isGroup) return reply(`SÓ EM GRUPO`)
        if (!isGroupAdmins) return reply(`PRECISA SER ADMININASTROR`)
        if (!isBotGroupAdmins) return reply(`BOT PREPRECISA SER ADMININASTROR`)
        if (Number(args[0]) === 1) {
          if (isWelkom) return reply('Ja esta ativo')
          welkom.push(from)
          fs.writeFileSync('./lib/welkom.json', JSON.stringify(welkom))
          reply(' Ativou com sucesso o recurso de bem vindo neste grupo 📝')
        } else if (Number(args[0]) === 0) {
          if (!isWelkom) return reply('Ja esta Desativado')
          pesquisar = from
          processo = welkom.indexOf(pesquisar)
          while (processo >= 0) {
            welkom.splice(processo, 1)
            processo = welkom.indexOf(pesquisar)
          }
          fs.writeFileSync('./lib/welkom.json', JSON.stringify(welkom))
          reply('‼️ Desativou com sucesso o recurso de bemvindo neste grupo✔️')
        } else {
          reply("1 para ativar, 0 para desativar")
        }
        break



      case 'gerarlink':
      case 'imgpralink':
      case "telegra.ph":
        try {
          if (isQuotedImage) {
            boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(info).replace("quotedM", "m")).message.extendedTextMessage.contextInfo.message.imageMessage : info
            const fetch = require('node-fetch');
            const FormData = require('form-data');
            const fs = require('fs');
            async function uploadImageToTelegraph(imageBuffer) {
              const form = new FormData();
              form.append('file', imageBuffer, { filename: 'image.jpg' });

              const response = await fetch('https://telegra.ph/upload', {
                method: 'POST',
                body: form,
              });
              const data = await response.json();
              if (data && data[0] && data[0].src) {
                return 'https://telegra.ph' + data[0].src;
              } else {
                throw new Error('Failed to retrieve the image URL from the response.');
              }
            }
            const owgi = await getFileBuffer(boij, "image");
            const imageUrl = await uploadImageToTelegraph(owgi);
            reply(imageUrl);
          } else {
            reply('marque a ft')
          }
        } catch (e) {
          console.log(e)
          reply('error...')
        }
        break

      case 'tagall':
      case 'marcar': {
        if (!isGroup) return reply(resposta.group)
        if (!isGroupAdmins) return reply(resposta.adm)
        let metadata = await client.groupMetadata(from)
        let teks = `
\n ${metadata.participants.length ? metadata.participants.length : "undefined"} participantes do grupo
\n ${args.join(" ") ? args.join(" ") : 'kosong'}*\n\n`
        for (let mem of participants) {
          teks += `┃❖ @${mem.id.split('@')[0]}\n`
        }
        client.sendMessage(from, { text: teks, mentions: participants.map(a => a.id) }, { quoted: info })
      }
        break

      case 'videourl':
      case 'videopralink':
        try {
          if (isQuotedVideo) {
            boij = isQuotedVideo ? info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage
              : info.message.videoMessage;
            const fetch = require('node-fetch');
            const FormData = require('form-data');
            const fs = require('fs');
            async function uploadVideoToTelegraph(videoBuffer) {
              const form = new FormData();
              form.append('file', videoBuffer, { filename: 'media' });

              const response = await fetch('https://telegra.ph/upload', {
                method: 'POST',
                body: form,
              });
              const data = await response.json();
              if (data && data[0] && data[0].src) {
                return 'https://telegra.ph' + data[0].src;
              } else {
                throw new Error('Failed to retrieve the image URL from the response.');
              }
            }
            const owgi = await getFileBuffer(boij, "video");
            const imageUrl = await uploadVideoToTelegraph(owgi);
            reply(imageUrl);
          } else {
            reply('marque o video')
          }
        } catch (e) {
          console.log(e)
          reply('error...')
        }
        break



      case 'totag':
      case 'cita':
      case 'hidetag':
        if (!isGroup) return reply('Este comando só deve ser utilizado em Grupo.')
        if (!isGroupAdmins) return reply('Você precisa ser ADM pra utilizar este comando')
        if (q.includes(`${prefix}`)) return reply("Não pode utilizar comandos nesse comando")
        if (q.includes("=>") || q.includes(">")) return
        membros = (groupId, membros1) => {
          array = []
          for (let i = 0; i < membros1.length; i++) {
            array.push(membros1[i].id)
          }
          return array
        }
        var yd = membros(from, groupMembers)
        if ((isMedia && !info.message.videoMessage || isQuotedSticker) && args.length == 0) {
          media = isQuotedSticker ? info.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage : info.message.stickerMessage
          rane = getRandom('.' + await getExtension(media.mimetype))
          img = await getFileBuffer(media, 'sticker')
          fs.writeFileSync(rane, img)
          fig = fs.readFileSync(rane)
          var options = {
            sticker: fig,
            mentions: yd
          }
          client.sendMessage(from, options)
        } else if ((isMedia && !info.message.videoMessage || isQuotedImage) && args.length == 0) {
          media = isQuotedImage ? info.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage : info.message.imageMessage
          rane = getRandom('.' + await getExtension(media.mimetype))
          img = await getFileBuffer(media, 'image')
          fs.writeFileSync(rane, img)
          buff = fs.readFileSync(rane)
          client.sendMessage(from, { image: buff, mentions: yd }, { quoted: info })
        } else if ((isMedia && !info.message.videoMessage || isQuotedVideo) && args.length == 0) {
          media = isQuotedVideo ? info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage : info.message.videoMessage
          rane = getRandom('.' + await getExtension(media.mimetype))
          vid = await getFileBuffer(media, 'video')
          fs.writeFileSync(rane, vid)
          buff = fs.readFileSync(rane)
          client.sendMessage(from, { video: buff, mimetype: 'video/mp4', mentions: yd }, { quoted: info })
        } else if ((isMedia && !info.message.videoMessage || isQuotedAudio) && args.length == 0) {
          media = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
          rane = getRandom('.' + await getExtension(media.mimetype))
          aud = await getFileBuffer(media, 'audio')
          fs.writeFileSync(rane, aud)
          buff = fs.readFileSync(rane)
          client.sendMessage(from, { audio: buff, mimetype: 'audio/mp4', ptt: true, mentions: yd }, { quoted: info })
        } else if ((isMedia && !info.message.videoMessage || isQuotedDocument) && args.length == 0) {
          media = isQuotedDocument ? info.message.extendedTextMessage.contextInfo.quotedMessage.documentMessage : info.message.documentMessage
          rane = getRandom('.' + await getExtension(media.mimetype))
          doc = await getFileBuffer(media, 'document')
          fs.writeFileSync(rane, doc)
          buff = fs.readFileSync(rane)
          client.sendMessage(from, { document: buff, mimetype: 'text/plain', mentions: yd }, { quoted: info })
        } else if (budy) {
          if (q.length < 1) return reply('Citar oq?')
          client.sendMessage(from, { text: body.slice(command.length + 2), mentions: yd })
        } else {
          reply(`Responder imagem/documento/gif/adesivo/áudio/vídeo com legenda ${prefix + command}`)
        }
        break



      case 'reviver':
      case 'add':
        if (!isGroup) return reply('🌸COMANDO SO PARA GRUPO🌸')
        if (!isOwner) return reply(resposta.dono)
        if (!isGroupAdmins) return reply('😂COMANDO SO PARA ADM😂')
        if (!isBotGroupAdmins) return reply("🌸BOT PRECISA SER ADM🌸")
        if (info.message.extendedTextMessage === undefined || info.message.extendedTextMessage === null) return reply('🌸MARQUE A MENSAGEM DO USUÁRIO PRA MIM ADICIONA🌸')
        response2 = await client.groupParticipantsUpdate(from, [menc_prt], "add")
        reply('🌸USUÁRIO ADICIONADO COM SUCESSO 🌸')
        break

      case 'sairgp':
        if (isGroup && !isOwner && !info.key.fromMe) return reply("🌸COMANDO SO PARA DONO🌸")
        try {
          client.groupLeave(from)
        } catch (erro) {
          reply(String(erro))
        }
        break



      case 'abrirgp':
      case 'fechagp':
      case 'grupo':
        if (!isGroup) return reply(`SÓ EM GRUPO`)
        if (!isGroupAdmins) return reply(`PRECISA SER ADMININASTROR`)
        if (!isBotGroupAdmins) return reply(`BOT PREPRECISA SER ADMININASTROR`)
        if (args[0] === 'a') {
          reply(`*GRUPO ABERTO COM SUCESSO*`)
          await client.groupSettingUpdate(from, 'not_announcement')
        } else if (args[0] === 'f') {
          reply(`*GRUPO FECHADO COM SUCESSO*`)
          await client.groupSettingUpdate(from, 'announcement')
        }
        break



      case 'novolink':
      case 'redefinir':
        if (!isGroupAdmins) return reply(resposta.adm)
        if (!isGroup) return reply(resposta.grupo)
        if (!isBotGroupAdmins) return reply(resposta.botadm)
        try {
          await client.groupRevokeInvite(from)
          reply('🌸LINK DO GRUPO REDEFINIDO🌸')
        } catch (e) {
          console.log(e)
          reply(`ERRO`)
        }
        break



      case 'setfotogp':
      case 'fotogp':
        addFilter(from)
        if (!isGroup) return reply('🌸ESTE COMANDO SO PODE SER UTILIZANDO EM GRUPO🌸')
        if (!isGroupAdmins) return reply('🌸COMANDO SO PARA ADM🌸')
        if (!isBotGroupAdmins) return reply('🌸O BOT PRECISA SER ADM🌸')
        if (!isQuotedImage) return reply(`Use: ${prefix + command} Marque uma foto`)
        ftgp = isQuotedImage ? info.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage : info.message.imageMessage
        rane = getRandom('.' + await getExtension(ftgp.mimetype))
        buffimg = await getFileBuffer(ftgp, 'image')
        fs.writeFileSync(rane, buffimg)
        medipp = rane
        await client.updateProfilePicture(from, { url: medipp })
        reply(`🌸FOTO DO GRUPO ALTERADA COM SUCESSO🌸`)
        break



      case 'nomegp':
        {
          if (!isGroup) return reply(resposta.grupo)
          if (!isGroupAdmins) return reply(resposta.adm)
          if (!isBotGroupAdmins) return reply(resposta.botadm)
          blat = args.join(" ")
          client.groupUpdateSubject(from, `${blat}`)
          client.sendMessage(from, { text: '🌸NOME DO GRUPO ALTERADO COM SUCESSO 🌸' }, { quoted: info }).catch((err) => {
            reply(`erro`);
          })
        }
        break



      case 'descgp':
      case 'descriçãogp':
        if (!isGroup) return reply(resposta.grupo)
        if (!isGroupAdmins) return reply(resposta.adm)
        if (!isBotGroupAdmins) return reply(resposta.botadm)
        blabla = args.join(" ")
        client.groupUpdateDescription(from, `${blabla}`)
        client.sendMessage(from, { text: 'Sucesso, alterou a descrição do grupo' }, { quoted: info })
        break


      case 'setfotogp':
      case 'fotogp':
        addFilter(from)
        if (!isGroup) return reply('Só pode ser utilizado em Grupo')
        if (!isGroupAdmins) return reply('Você precisa ser ADM')
        if (!isBotGroupAdmins) return reply('O bot Precisa ser ADM')
        if (!isQuotedImage) return reply(`Use: ${prefix + command} <Marque uma foto>`)
        ftgp = isQuotedImage ? info.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage : info.message.imageMessage
        rane = getRandom('.' + await getExtension(ftgp.mimetype))
        buffimg = await getFileBuffer(ftgp, 'image')
        fs.writeFileSync(rane, buffimg)
        medipp = rane
        await client.updateProfilePicture(from, { url: medipp })
        reply(`Foto do grupo alterada com sucesso`)
        break


      case 'fotobot':
        if (!isOwner) return reply(resposta.dono)
        if (!isQuotedImage) return reply(`Envie fotos com legendas ${prefix}fotobot ou tags de imagem que já foram enviadas`)
        buff = await getFileBuffer(info.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage, 'image')
        await client.updateProfilePicture(botNumber, buff)
        reply('Obrigado pelo novo perfil vlw')
        break


      case 's':
      case 'stickergif':
      case 'sgif':
      case 'f':
      case 'figu':
      case 'st':
      case 'stk':
        {
          (async function () {
            var legenda = q ? q?.split("/")[0] : ` `
            var autor = q ? q?.split("/")[1] : q?.split("/")[0] ? '' : `  `
            if (isMedia && !info.message.videoMessage || isQuotedImage) {
              var encmedia = isQuotedImage ? info.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage : info.message.imageMessage
              rane = getRandom('.' + await getExtension(encmedia.mimetype))
              buffimg = await getFileBuffer(encmedia, 'image')
              fs.writeFileSync(rane, buffimg)
              rano = getRandom('.webp')
              exec(`ffmpeg -i ${rane} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
                fs.unlinkSync(rane)
                // "android-app-store-link": "https://play.google.com/store/search?q=%2B55%2094%209147-2796%20%F0%9F%94%A5%F0%9F%94%A5%F0%9F%94%A5%F0%9F%94%A5%F0%9F%94%A5&c=apps",
                var json = {
                  "sticker-pack-name": nomeDono,
                  "sticker-pack-publisher": nomeBot
                }
                var exifAttr = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00, 0x00, 0x00, 0x00, 0x00, 0x16, 0x00, 0x00, 0x00])
                var jsonBuff = Buffer.from(JSON.stringify(json), "utf-8")
                var exif = Buffer.concat([exifAttr, jsonBuff])
                exif.writeUIntLE(jsonBuff.length, 14, 4)
                let nomemeta = Math.floor(Math.random() * (99999 - 11111 + 1) + 11111) + ".temp.exif"
                fs.writeFileSync(`./${nomemeta}`, exif)
                exec(`webpmux -set exif ${nomemeta} ${rano} -o ${rano}`, () => {
                  client.sendMessage(from, { sticker: fs.readFileSync(rano) }, { quoted: info })
                  fs.unlinkSync(nomemeta)
                  fs.unlinkSync(rano)
                })
              })
            } else if (isMedia && info.message.videoMessage.seconds < 11 || isQuotedVideo && info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 35) {
              var encmedia = isQuotedVideo ? info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage : info.message.videoMessage
              rane = getRandom('.' + await getExtension(encmedia.mimetype))
              buffimg = await getFileBuffer(encmedia, 'video')
              fs.writeFileSync(rane, buffimg)
              rano = getRandom('.webp')
              await ffmpeg(`./${rane}`)
                .inputFormat(rane.split('.')[1])
              exec(`ffmpeg -i ${rane} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 200:200 ${rano}`, (err) => {
                fs.unlinkSync(rane)
                let json = {
                  "sticker-pack-name": legenda,
                  "sticker-pack-publisher": autor
                }
                let exifAttr = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00, 0x00, 0x00, 0x00, 0x00, 0x16, 0x00, 0x00, 0x00])
                let jsonBuff = Buffer.from(JSON.stringify(json), "utf-8")
                let exif = Buffer.concat([exifAttr, jsonBuff])
                exif.writeUIntLE(jsonBuff.length, 14, 4)
                let nomemeta = "temp.exif"
                fs.writeFileSync(`./${nomemeta}`, exif)
                exec(`webpmux -set exif ${nomemeta} ${rano} -o ${rano}`, () => {
                  client.sendMessage(from, { sticker: fs.readFileSync(rano) }, { quoted: info })
                  fs.unlinkSync(nomemeta)
                  fs.unlinkSync(rano)
                })
              })
            } else {
              reply(`Você precisa enviar ou marcar uma imagem ou vídeo com no máximo 10 segundos`)
            }
          })().catch(e => {
            console.log(e)
            reply("Hmm deu erro")
            try {
              if (fs.existsSync("temp.exif")) fs.unlinkSync("temp.exif");
              if (fs.existsSync(rano)) fs.unlinkSync(rano);
              if (fs.existsSync(media)) fs.unlinkSync(media);
            } catch { }
          })
        }
        break


      case 'rename':
      case 'roubar':
        if (!isQuotedSticker) return reply('Marque uma figurinha...')
        encmediats = await getFileBuffer(info.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage, 'sticker')
        var kls = q
        var pack = kls.split("/")[0];
        var author2 = kls.split("/")[1];
        if (!q) return reply('*E o autor e o nome do pacote?*')
        if (!pack) return reply(`*por favor escreve o formato certo: ${prefix + command} sad/bla*`)
        if (!author2) return reply(`*por favor escreve o formato certo: ${prefix + command} sad/dms*`)
        bas64 = `data:image/jpeg;base64,${encmediats.toString('base64')}`
        var mantap = await convertSticker(bas64, `${author2}`, `${pack}`)
        var sti = new Buffer.from(mantap, 'base64');
        client.sendMessage(from, { sticker: sti, contextInfo: { externalAdReply: { title: `${pack}|${author2}`, body: "", previewType: "PHOTO", thumbnail: sti } } }, { quoted: info })
          .catch((err) => {
            reply(`❎ Error, tenta mais tarde`);
          })
        break

      case 'bc': case 'bcgroup': case 'transmitir': case 'transmissão': {
        if (!isOwner) return reply(resposta.dono)
        if (!q) return reply(`Texto onde?\n\nExemplo : ${prefix + command} BOM DIA `)
        let getGroups = await client.groupFetchAllParticipating()
        let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
        let anu = groups.map(v => v.id)
        for (let i of anu) {
          await delay(150)
          let txt = `「 TRANSMISSÃO DO BOT 」\n\n ${q}`
          client.sendMessage(i, { text: txt })
        }
        reply(`Enviando com sucesso `)
      }
        break







      case 'cassino':
        // CincoFolhas
        //CASSINO
        const soto = [
          '🍊 : 🍒 : 🍐',
          '🍒 : 🔔 : 🍊',
          '🍇 : 🍇 : 🍇',
          '🍊 : 🍋 : 🔔',
          '🔔 : 🍒 : 🍐',
          '🔔 : 🍒 : 🍊',
          '🍊 : 🍋 : ??',
          '🍐 : 🍒 : 🍋',
          '🍐 : 🍐 : 🍐',
          '🍊 : 🍒 : 🍒',
          '🔔 : 🔔 : 🍇',
          '🍌 : 🍒 : 🔔',
          '🍐 : 🔔 : 🔔',
          '🍊 : 🍋 : 🍒',
          '🍋 : 🍋 : 🍌',
          '🔔 : 🔔 : 🍇',
          '🔔 : 🍐 : 🍇',
          '🔔 : 🔔 : 🔔',
          '🍒 : 🍒 : 🍒',
          '🍌 : 🍌 : 🍌'
        ]
        monty = Math.floor(Math.random() * 415) + 80
        const mining = Math.ceil(Math.random() * 200) + 1
        const somtoy2 = sotoy[Math.floor(Math.random() * sotoy.length)]
        if ((somtoy2 == '🥑 : 🥑 : 🥑') || (somtoy2 == '🍉 : 🍉 : 🍉') || (somtoy2 == '🍓 : 🍓 : 🍓') || (somtoy2 == '🍎 : 🍎 : 🍎') || (somtoy2 == '🍍 : 🍍 : 🍍') || (somtoy2 == '🥝 : 🥝 : 🥝') || (somtoy2 == '🍑 : 🍑 : 🍑') || (somtoy2 == '🥥 : 🥥 : 🥥') || (somtoy2 == '🍋 : 🍋 : 🍋') || (somtoy2 == '🍐 : ?? : 🍐') || (somtoy2 == '🍌 : 🍌 : 🍌') || (somtoy2 == '🍒 : 🍒 : 🍒') || (somtoy2 == '🔔 : 🔔 : 🔔') || (somtoy2 == '🍊 : 🍊 : 🍊') || (somtoy2 == '🍇 : 🍇 : 🍇')) {
          var Vitória = `Você ganhou Botcoin: ${monty} 🔮`
          addKoinUser(sender, monty)
        } else {
          var Vitória = `Você perdeu...`
        }

        const cassino = `╔═════💦︎═════╗
┣► ${somtoy2}◄┛
╚═════💦︎═════╝

*${Vitória}*`
        enviar(cassino)
        if (Vitória == "Você ganhou!!!") {

        }
        //await client(sender)
        break

      case "ping":
        // CincoFolhas
        enviar(`💦 Velocidade de resposta ${latensi.toFixed(4)} segundos `)
        break

      case "ppt":
        // CincoFolhas
        if (!isGroup) return enviar(resposta.grupo)
        if (args.length < 1) return enviar('exemplo: /ppt pedra')
        ppt = ["pedra", "papel", "tesoura"]
        ppy = ppt[Math.floor(Math.random() * ppt.length)]
        ppg = Math.floor(Math.random() * 50)
        pptb = ppy
        pph = `Você ganhou ${ppg} em money`
        if ((pptb == "pedra" && args == "papel") ||
          (pptb == "papel" && args == "tesoura") ||
          (pptb == "tesoura" && args == "pedra")) {
          var vit = "vitoria"
        } else if ((pptb == "pedra" && args == "tesoura") ||
          (pptb == "papel" && args == "pedra") ||
          (pptb == "tesoura" && args == "papel")) {
          var vit = "derrota"
        } else if ((pptb == "pedra" && args == "pedra") ||
          (pptb == "papel" && args == "papel") ||
          (pptb == "tesoura" && args == "tesoura")) {
          var vit = "empate"
        } else if (vit = "undefined") {
          return enviar(linguagem.tterro())
        }
        if (vit == "vitoria") {
          var tes = `Você ganhou ${ppg} em money`
        }
        if (vit == "derrota") {
          var tes = "A vitória é do bot"
        }
        if (vit == "empate") {
          var tes = "O jogo terminou em empate"
        }
        enviar(`Bot jogou: ${pptb}\nO jogador jogou: ${args}\n\n${tes}`)
        if (tes == "Vitória do jogador") {
          //enviar(pph)
        }
        break

      case 'gay':// Sem Fotos
        // CincoFolhas
        const aleta = `${Math.floor(Math.random() * 105)}`
        enviar('Aguarde, confiscando sua porcentagem...')
        await delay(5000)
        enviar(`${pushname} Sua Porcentagem De Gay é De : ${aleta}%`)
        break
      case 'feio': // Sem Fotos
        // CincoFolhas
        const aletb = `${Math.floor(Math.random() * 105)}`
        enviar('Aguarde, confiscando sua porcentagem...')
        await delay(5000)
        enviar(`${pushname} Sua Porcentagem De Feio é De : ${aletb}%`)
        break
        break
      case 'lindo':
        // CincoFolhas
        const aletc = `${Math.floor(Math.random() * 105)}`
        enviar('Aguarde, confiscando sua porcentagem...')
        await delay(5000)
        enviar(`${pushname} Sua Porcentagem De Lindo(a) é De : ${aletc}%`)
        break
      case 'gostoso':
        // CincoFolhas
        const aletd = `${Math.floor(Math.random() * 105)}`
        enviar('Aguarde, confiscando sua porcentagem...')
        await delay(5000)
        enviar(`${pushname} Sua Porcentagem De Gostoso(a) é De : ${aletd}%`)
        break

      case 'gado':
        // CincoFolhas
        const alete = `${Math.floor(Math.random() * 105)}`
        enviar('Aguarde, confiscando sua porcentagem...')
        await delay(5000)
        enviar(`${pushname} Sua Porcentagem De Gado(a) é De : ${alete}%`)
        break
      case 'punheteiro':
        // CincoFolhas
        const aletl = `${Math.floor(Math.random() * 105)}`
        enviar('Aguarde, confiscando sua porcentagem...')
        await delay(5000)
        enviar(`${pushname} Sua Porcentagem De punheteiro(a) é De : ${aletl}%`)
        break

      case "gplink":
        if (!isGroup) return enviar(resposta.grupo)
        if (!isGroupAdmins) return enviar(resposta.adm)
        if (!isBotGroupAdmins) return enviar(resposta.botadm)
        const link = await client.groupInviteCode(from)
        enviar(`💦 Link do grupo : https://chat.whatsapp.com/${link} `)
        break

      case "resetarlink":
        if (!isGroup) return enviar(resposta.grupo)
        if (!isGroupAdmins) return enviar(resposta.adm)
        if (!isBotGroupAdmins) return enviar(resposta.botadm)
        try {
          await client.groupRevokeInvite(from)
          enviar("💦 Link de convite resetado com sucesso ✓ ")
        } catch (e) {
          console.log(e)
          enviar(resposta.erro)
        }
        break
      case "rebaixar":
        // CincoFolhas
        if (!isGroup) return enviar(resposta.grupo)
        if (!isGroupAdmins) return enviar(resposta.adm)
        if (!isBotGroupAdmins) return enviar(resposta.botadm)
        if (q < 1) return enviar("💦 Digite o número, animal ")
        if (!isBotGroupAdmins) return enviar(resposta.botadm)
        try {
          client.groupParticipantsUpdate(from, [`${q}@s.whatsapp.net`], "demote")
          enviar(`💦 ${q} Foi rebaixado a membro comum com sucesso `)
        } catch (e) {
          console.log(e)
          enviar(resposta.erro)
        }
        break

      case "promover":
        // CincoFolhas
        if (!isGroup) return enviar(resposta.grupo)
        if (!isGroupAdmins) return enviar(resposta.adm)
        if (!isBotGroupAdmins) return enviar(resposta.botadm)
        if (q < 1) return enviar("💦 Cade o número, mongolóide ")
        if (!isBotGroupAdmins) return enviar(resposta.botadm)
        try {
          client.groupParticipantsUpdate(from, [`${q}@s.whatsapp.net`], "promote")
          enviar(`💦 ${q} Foi promovido a adm com sucesso `)
          kak = fs.readFileSync("./audios/promover.mp3")
          client.sendMessage(from, { audio: kak, mimetype: "audio/mp4", ptt: true }, { quoted: info })
        } catch (e) {
          console.log(e)
          enviar(resposta.erro)
        }
        break
        l
      case "ban":
        // CincoFolhas
        if (!isGroup) return enviar(resposta.grupo)
        if (!isGroupAdmins) return enviar(resposta.adm)
        if (q < 1) return enviar("💦 Cade o número, mongolóide ")
        if (!isBotGroupAdmins) return enviar(resposta.botadm)
        if (info.message.extendedTextMessage != undefined || info.message.extendedTextMessage != null) {
          kicka = info.message.extendedTextMessage.contextInfo.participant
          cod = fs.readFileSync("./arquivos/audios/ban.mp3")
          client.sendMessage(from, { audio: cod, mimetype: "audio/mp4", ptt: true }, { quoted: info })
          client.groupParticipantsUpdate(from, [`${q}@s.whatsapp.net`], "remove")
        } else {
          enviar("࿐ Marque a mensagem da pessoa")
        }
        break

      case "grupo":
        // CincoFolhas
        if (!isGroup) return enviar(resposta.grupo)
        if (!isGroupAdmins) return enviar(resposta.adm)
        if (!isBotGroupAdmins) return enviar(resposta.botadm)
        try {
          if (q == "a") {
            await client.groupSettingUpdate(from, "not_announcement")
            enviar("Grupo aberto com sucesso")
          }
          if (q == "f") {
            await client.groupSettingUpdate(from, "announcement")
            enviar("Grupo fechado com sucesso ")
          }
        } catch (e) {
          console.log(e)
          enviar(resposta.erro)
        }
        break

      case "infogp":
        // CincoFolhas
        if (!isGroup) return enviar(resposta.grupo)
        if (!isBotGroupAdmins) return enviar(resposta.botadm)
        enviar(`
 Nome : ${groupName}
 Descrição : ${groupDesc}
 Id : ${from}
 Data : ${data}
 Horário : ${hora}
`)
        break

      case 'listadm':
        if (!isGroup) return enviar(resposta.grupo)
        teks = `List admin of group *${groupMetadata.subject}*\nTotal : ${groupAdmins.length}\n\n`
        no = 0
        for (let admon of groupAdmins) {
          no += 1
          teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
        }
        mentions(teks, groupAdmins, true)
        break

      case 'antilink':
        if (!isGroupAdmins) return enviar(resposta.adm)
        if (!isBotGroupAdmins) return enviar(resposta.botadm)
        if (args.length < 1) return enviar('digite 1 para ativar ou 0 para desativar ')
        if (Number(args[0]) === 1) {
          if (isAntilink) return enviar('o anti-link está ativo')
          antilink.push(from)
          fs.writeFileSync('./lib/antilink.json', JSON.stringify(antilink))
          enviar('O anti-link foi ativo no grupo ✔️')
        } else if (Number(args[0]) === 0) {
          antilink.splice(from, 1)
          fs.writeFileSync('./lib/antilink.json', JSON.stringify(antilink))
          enviar('O anti-link foi desativado com sucesso neste grupo✔️')
        } else {
          enviar('1 para ativar, 0 para desativar ')
        }
        break


      case 'report':
      case 'bug':
        if (!q) return enviar('Ex: bug no menu..')
        enviar(`Obrigada pela colaboração, o bug foi reportado ao meu criador...
<♨️>bugs falsos nao serão respondidos`)
        let templateMesssage = {
          image: {
            url: './lib/fotos/jhonas-bot.png',
            quoted: info
          },
          caption: `♨️𝗨𝗺 𝗕𝘂𝗴♨️\nDo Número: @${sender.split('@')[0]},\nReportou:\n${q}`,
          footer: 'jhonas'
        }
        client.sendMessage(`${numeroDono}@s.whatsapp.net`, templateMesssage)
        break

      case 'novocmd':
        if (!q) return enviar('Ex: novocmd coloca antilink')
        enviar(`Obrigada pela colaboração, a sua idea foi reportada ao meu criador 😊`)
        const qp = args.join(" ")
        let templateMessage = {
          image: {
            url: './lib/fotos/jhonas-bot.png',
            quoted: info
          },
          caption: `♨️IDEIA DE CMD♨️\nDo Número: @${sender.split('@')[0]},\nA Ideia É:\n ${q}`,
          footer: 'jhonas'
        }
        client.sendMessage(`${numeroDono}@s.whatsapp.net`, templateMessage)
        break


      case "cosplay":
      case "waifu":
      case "waifu2":
      case "shota":
      case "loli":
      case "yotsuba":
      case "shinomiya":
      case "yumeko":
      case "tejina":
      case "chiho":
      case "shizuka":
      case "boruto":
      case "kagori":
      case "kaga":
      case "kotori":
      case "mikasa":
      case "akiyama":
      case "hinata":
      case "minato":
      case "naruto":
      case "nezuko":
      case "yuki":
      case "hestia":
      case "emilia":
      case "itachi":
      case "elaina":
      case "madara":
      case "sasuke":
      case "deidara":
      case "sakura":
      case "tsunade":
        try {
          client.sendMessage(from, { react: { text: '🕚', key: info.key } })
          anikit.getAnimeInfo(`${command}`, username, key).then((response) => {
            let buttonMessage4 = {
              image: { url: `${response.url}` },
              caption: `🏕 Olá ${pushname}, aqui está sua imagem 🎲`,
              footer: '',
              //buttons: buttons,
              headerType: 4
            }
            client.sendMessage(from, buttonMessage4, { quoted: info })
          })
        } catch (e) {
          console.log(e)
          reply("nao achei a foto, tente novamente mais tarde")
        }
        break

      case 'ahegao':
      case 'ass':
      case 'bdsm':
      case 'blowjob':
      case 'cuckold':
      case 'cum':
      case 'ero':
      case 'kasedaiki':
      case 'femdom':
      case 'foot':
      case 'gangbang':
      case 'glasses':
      case 'hentai2':
      case 'jahy':
      case 'manga':
      case 'masturbation':
      case 'neko':
      case 'orgy':
      case 'panties':
      case 'pussy':
      case 'neko2':
      case "neko":
      case 'tentacles':
      case 'thighs':
      case 'yuri':
      case 'zettai':
        try {
          client.sendMessage(from, { react: { text: '🕚', key: info.key } })
          anikit.getNSFWInfo(`${command}`, username, key).then((response) => {
            let buttonMessage4 = {
              image: { url: `${response.url}` },
              caption: `🏕 Olá ${pushname}, aqui está sua imagem 🎲`,
              footer: '',
              //buttons: buttons,
              headerType: 4
            }
            client.sendMessage(sender, buttonMessage4, { quoted: info })
          })
        } catch (e) {
          console.log(e)
          reply("nao achei a foto, tente novamente mais tarde")
        }
        break

        case "eps-recentes": {
          anikit.getRecentEpisodes(username, key).then((response) => {
            let resultInstance = ""; // Inicialize resultInstance como uma string vazia
        
            for (let i = 0; i < response.length; i++) {
              // Concatene os resultados de cada episódio a resultInstance
              resultInstance += `-------------------------------------
                Anime: ${response[i].title}
                Ep: ${response[i].episodeNum}
              `;
            }
        
            reply("ANIMES LANÇAMENTOS\n\n" + resultInstance + "\n\n-------------------------------------");
          });
        } break;
        
case 'toimg':// BY ALIZINDEV BY ALIZIN DEV 
if (!isQuotedSticker) return reply('Marca uma fig')
buff = await getFileBuffer(info.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage, 'sticker')
try {
client.sendMessage(from, {image: buff}, {quoted: info})
} catch(e) {
console.log(e)
}
break

          case "perfil":
            try {
              ppimg = await client.profilePictureUrl(`${sender.split("@")[0]}@c.us`, "image")
            } catch (e) {
              ppimg = logo
            }
            var conselho = palavras[Math.floor(Math.random() * palavras.length)]
            const nivelgado = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
            const nivelgado2 = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
            const nivelgador = nivelgado[Math.floor(Math.random() * (nivelgado.length))]
            const nivelgado2r = nivelgado2[Math.floor(Math.random() * (nivelgado2.length))]
            const gostosura = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
            const gostosura2 = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
            const gostosurar = gostosura[Math.floor(Math.random() * (gostosura.length))]
            const gostosurar2 = gostosura2[Math.floor(Math.random() * (gostosura2.length))]
            const programa = Math.ceil(Math.random() * 10000)
            perfil = await getBuffer(ppimg)
            reply("enviando..")
            let groupInfo = ' '
            if (isGroup) {
            groupInfo = `\n  👥 *Grupo*: ${groupName}`
            }
            try {
              client.sendMessage(from, {
                image: perfil,
                caption: `「 ~_*PERFIL*_~ 」
  
  📄 *Nome* : ${pushname}
  👤 *Número* : ${sender.split("@")[0]}
  🔮 *Wa.me* : https://wa.me/${sender.split("@")[0]}${groupInfo}
  🐂 *Nível gado(a)* : ${nivelgador}${nivelgado2r}%
  📱 *Seu Dispositivo* : ${info.key.id.length > 21 ? 'Android 📱' : info.key.id.substring(0, 2) == '3A' ? 'IOS 📱' : 'WhatsApp Web 💻'}
  😋 *Nível de gostoso(a)* : ${gostosurar}${gostosurar2}%
  
  ➻ *~_CONSELHO_~* :
  ${conselho}`
              }, { quoted: live })
            } catch (e) {
              console.log("erro")
              reply(resposta.erro)
            }
            break

case 'randomstk':
if(!Number(q)) return reply(`Digite a quantidade de figurinhas\nExemplo: ${prefix+command} 7`)
if(q >= 100) return reply("Coloque abaixo de 100...")
async function figuss() {
var rnd = Math.floor(Math.random() * 8051)
client.sendMessage(from, { sticker: { url: `https://raw.githubusercontent.com/badDevelopper/Testfigu/main/fig (${rnd}).webp` } })}
for (i = 0; i < q; i++) {
await sleep(680)
figuss()
}
break

case 'emojistkmix': {
let [emoji1, emoji2] = text.split`+`
if (!emoji1) reply(`Example : ${prefix + comando} 😅+🤔`)
if (!emoji2)  reply( `Example : ${prefix + comando} 😅+🤔`)
let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
for (let res of anu.results) {
let encmedia = await client.sendImageAsSticker(info.chat, res.url, info)
 await fs.unlinkSync(encmedia)
}
}
break

case 'emojistk': {
if (!text)  reply( `Example : ${prefix + command} 😅`)
let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(text)}`)
for (let res of anu.results) {
let encmedia = await client.sendImageAsSticker(info.chat, res.url, info)
await fs.unlinkSync(encmedia)
}
}
break

case 'duvidap':
if(!q) return reply(`Digite a duvida e a linguagem\nExemplo: ${prefix+command} const javascript `)

// Função para verificar o comando e fornecer uma resposta
function verificarComando(comando) {
//  const partes = comando.split(' ');
  
  if (q[0] === '/duvidap' && q.length === 3) {
    const termo = q[1];
    const linguagem = q[2];

    // Aqui você pode adicionar lógica para encontrar e exibir uma resposta
    // Esta é apenas uma estrutura básica de exemplo
    const resposta = `Você tem dúvidas sobre o termo "${termo}" na linguagem "${linguagem}"?`;
    return resposta;
  } else {
    return 'Comando inválido. Por favor, digite /duvidap (termo) (linguagem).';
  }
}

// Exemplo de uso:
const comandoUsuario = '/duvidap const javascript';
const resposta = verificarComando(comandoUsuario);
console.log(resposta); // Aqui você pode exibir a resposta onde desejar, no console por exemplo/
break

          case 'gerarcpf':
            //const isPremium = premium.includes(sender)
            if (!isPremium) return reply(resposta.premium)
            cp1 = `${Math.floor(Math.random() * 300) + 600}`
            cp2 = `${Math.floor(Math.random() * 300) + 600}`
            cp3 = `${Math.floor(Math.random() * 300) + 600}`
            cp4 = `${Math.floor(Math.random() * 30) + 60}`
            cpf = `${cp1}.${cp2}.${cp3}-${cp4}`
            await client.sendMessage(from, { text: `CPF GERADO COM SUCESSO  ${cpf}` }, { quoted: info })
            break

          case 'delpremium':
            if (!q) return reply(`Digite ${prefix + command} @(usuário)`)
            if (!isGroup) return reply(resposta.grupo)
            if (!isOwner) return reply(resposta.dono)
            if (!budy.includes("@55")) {
              num = info.message.extendedTextMessage.contextInfo.participant
              bla = premium.includes(num)
              if (!bla) return reply("*Este número não está incluso na lista premium..*")
              pesquisar = num
              processo = premium.indexOf(pesquisar)
              while (processo >= 0) {
                premium.splice(processo, 1)
                processo = premium.indexOf(pesquisar)
              }
              fs.writeFileSync('./lib/premium.json', JSON.stringify(premium))
              client.sendMessage(from, { text: `@${mentioned.split("@")[0]} foi tirado da lista premium com sucesso..` }, { quoted: info })
            } else {
              mentioned = args.join(" ").replace("@", "") + "@s.whatsapp.net"
              bla = premium.includes(mentioned)
              if (!bla) return reply("*Este número não está incluso na lista premium..*")
              pesquisar = mentioned
              processo = premium.indexOf(pesquisar)
              while (processo >= 0) {
                premium.splice(processo, 1)
                processo = premium.indexOf(pesquisar)
              }
              fs.writeFileSync('./lib/premium.json', JSON.stringify(premium))
              client.sendMessage(from, { text: `@${tedtp} foi tirado da lista premium com sucesso..` }, { quoted: info })
            }
            break
            
          case 'addpremium':
            if (!q) return reply(`Digite ${prefix + command} @(usuário)`)
            if (!isGroup) return reply(resposta.grupo)
            if (!isOwner) return reply(resposta.dono)
            if (info.message.extendedTextMessage === undefined || info.message.extendedTextMessage === null) return
            if (!budy.includes("@55")) {
              mentioned = info.message.extendedTextMessage.contextInfo.participant
              bla = premium.includes(mentioned)
              if (bla) return reply("*Este número já está incluso*")
              premium.push(`${mentioned}`)
              fs.writeFileSync('./lib/premium.json', JSON.stringify(premium))
              client.sendMessage(from, { text: `@${mentioned.split("@")[0]} foi adicionado à lista de usuários premium com sucesso 😎` }, { quoted: info })
            } else {
              mentioned = args.join(" ").replace("@", "") + "@s.whatsapp.net"
              bla = premium.includes(mentioned)
              if (bla) return reply("*Este número já está incluso..*")
              premium.push(`${mentioned}`)
              fs.writeFileSync('./lib/premium.json', JSON.stringify(premium))
              tedtp = args.join(" ").replace("@", "")
              client.sendMessage(from, { text: `@${tedtp} foi adicionado à lista de usuários premium com sucesso 😎`, mentions: [mentioned] }, { quoted: info })
            }
            break

          case 'premiumlist':
            if (!isPremium) return reply(resposta.premium)
            tkks = '╭────*「 *PREMIUM USERS * 」\n'
            for (let V of premium) {
              tkks += `│+  @${V.split('@')[0]}\n`
            }
            tkks += `│+ Total : ${premium.length}\n╰──────*「 *${nomeBot}* 」*────`
            reply(tkks.trim())
            break

/*          case 'getquoted':
          case 'getinfo':
          case 'get':
            if (!isPremium) return reply(resposta.premium)
            reply(JSON.stringify(info.message.extendedTextMessage.contextInfo, null, 3))
            break
*/
          case 'encurtalink':
            if (!isPremium) return reply(resposta.premium)
            if (args.length < 1) return reply(`Exemplo:\n${prefix}encurtalink https://www.google.com`)
            try {
//              link = args[0]
              anuel = await axios.get(`https://tinyurl.com/api-create.php?url=${q}`)
              reply(`${anuel.data}`)
            } catch (e) {
              emror = String(e)
              reply(`${e}`)
            }
            await limitAdd(sender)
            break
            
          case 'ddd':
            if (!isPremium) return reply(resposta.premium)
            if (args.length < 1) return reply(`Use ${prefix + command} 21`)
            ddd = body.slice(5)
            ddds = await axios.get(`https://brasilapi.com.br/api/ddd/v1/${ddd}`)
            dddlist = `Lista de Cidades de ${ddds.data.state} com este DDD ${q}>\n\n`
            for (let i = 0; i < ddds.data.cities.length; i++) { dddlist += `${i + 1} ⪧ *${ddds.data.cities[i]}*\n` }
            client.sendMessage(from, { text: dddlist }, { quoted: info })
break

          case 'clima':
          case 'tempo':
            client.sendMessage(from, { react: { text: `📡`, key: info.key } })
            if (!q) return reply(`*Sintaxe correta para uso:* ${prefix + command} nome da cidade\n• Caso tenha algum acento, retire ok?`)
            if (args.length < 1) return reply(`*Sintaxe correta para uso:* ${prefix + command} nome da cidade ou estado\n• Caso tenha algum acento, retire ok?`)
            cidade = body.slice(7)
            clima = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${q}&appid=f5c0840c2457fbb64188a6d4be05618f&units=metric&lang=pt_br`)
            if (clima.error) return reply(resposta.erro)
            jr = `╭────*「 *${clima.data.name}* 」
│• 🌞 Temperatura agora: ${clima.data.main.temp}ºC
│• 🔥 Temperatura Máxima: ${clima.data.main.temp_max}°C
│• ❄ Temperatura Mínima: ${clima.data.main.temp_min}°C
│• 🌦 Clima: ${clima.data.weather[0].description}
│• 💧 Umidade de ar: ${clima.data.main.humidity}%
│• 🌫 Ventos: ${clima.data.wind.speed}
╰────*「 *${clima.data.name}* 」
Solicitado por: ${pushname}`

            await client.sendMessage(from, { text: jr }, { quoted: info, contextInfo: { "mentionedJid": jr } })
            break

          case 'Fazernick':
          case 'fazernick':
            let { pinterest } = require('./lib/scraper')
            if (!q) return reply("cade o texto?")
            let anu = await pinterest(q)
/*            let teks = `𝐋𝐈𝐒𝐓𝐀 𝐃𝐄 𝐍𝐈𝐂𝐊𝐒: ${q}\n\n`
            for (let i of anu) {
              teks += `➽ ${i.result}\n\n`
            }*/
            console.log(result)
            break

          case 'leveling':
            if (!isGroupAdmins) return reply('comando apenas para admins')
            if (!isBotGroupAdmins) return reply(resposta.botadm)
            if (args.length < 1) return reply('digite 1 para ativar ou 0 para desativar ')
            if (Number(args[0]) === 1) {
              if (isLevelingOn) return reply('o level está ativo')
              levelingOn.push(from)
              fs.writeFileSync('./lib/leveling.json', JSON.stringify(levelingOn))
              reply('O level foi ativo no grupo ✔️')
            } else if (Number(args[0]) === 0) {
              levelingOn.splice(from, 1)
              fs.writeFileSync('./lib/leveling.json', JSON.stringify(levelingOn))
              reply('O level foi desativado com sucesso neste grupo✔️')
            } else {
              reply('1 para ativar, 0 para desativar ')
            }
            break

          case 'anagrama':
            if (!isGroup) return reply(resposta.grupo)
            const anaaleatorio = Math.floor(Math.random() * palavrasANA.length)
            if (!isGroupAdmins) return reply('comando apenas para admins')
            if (args.length == 0) return reply('use 1 para ativar o jogo do anagrama\npara desativar use anagrama 0')
            if (args.join(' ') === '1') {
              if (fs.existsSync(`./lib/anagrama-${from}.json`)) {
                let dataAnagrama2 = JSON.parse(fs.readFileSync(`./lib/anagrama-${from}.json`))
                reply(`o jogo já foi iniciado neste grupo:
  palavra: ${dataAnagrama2.embaralhada}
  dica: ${dataAnagrama2.dica}
  `)
              } else {
                fs.writeFileSync(`./lib/anagrama-${from}.json`, `${JSON.stringify(palavrasANA[anaaleatorio])}`)

                let atr = {
                  text: `
  ╭─────≽「 👾 ANAGRAMA 👾 」
  │➽ DESCUBRA A PALAVRA
  │➽ PALAVRA: ${palavrasANA[anaaleatorio].embaralhada}
  │➽ DICA: ${palavrasANA[anaaleatorio].dica}
  ╰────────────────
  `,
                  //lfooter: `${nomeBot}`,
                  //buttons: buttons,
                  headerType: 4
                }


                client.sendMessage(from, atr)
              }
            } else if (args.join(' ') === '0') {
              if (!fs.existsSync(`./lib/anagrama-${from}.json`)) return reply('não tem como desativar o jogo do anagrama pois ele não foi ativado')
              fs.unlinkSync(`./lib/anagrama-${from}.json`)
              reply("desativado com sucesso")
            }
            //await limitAdd(sender)
            break
            
          case 'quizanime':
            if (!isGroup) return reply('comando apenas para grupos')
            const quizaaaleatorio = Math.floor(Math.random() * quizanime.length)
          const quizanimelogo = `${quizanime[quizaaaleatorio].foto}`
          logo = quizanimelogo
            if (!isGroupAdmins) return reply('comando apenas para admins')
            if (args.length == 0) return reply(`use 1 para ativar o jogo do quiz de anime\npara desativar use ${prefix + command}quizanime 0`)
            if (args.join(' ') === '1') {
              if (fs.existsSync(`./lib/quizanime-${from}.json`)) {
                let dataQuizanime2 = JSON.parse(fs.readFileSync(`./lib/quizanime-${from}.json`))
                reply(`o jogo já foi iniciado neste grupo:
  imagem acima
  `)
              } else {
                fs.writeFileSync(`./lib/quizanime-${from}.json`, `${JSON.stringify(quizanime[quizaaaleatorio])}`)

                let atr = {
                  image: { url: logo },
                  caption: `
  ╭─────≽「 👾 QUIZ DE ANIME 👾 」
  │➽ DESCUBRA O PERSONAGEM OU CLÃ
  ╰───────────────────
  `,
                  lfooter: `${nomeBot}`,
                  //buttons: buttons,
                  headerType: 4
                }


                client.sendMessage(from, atr)
              }
            } else if (args.join(' ') === '0') {
              if (!fs.existsSync(`./lib/quizanime-${from}.json`)) return reply('não tem como desativar o jogo do anagrama pois ele não foi ativado')
              fs.unlinkSync(`./lib/quizanime-${from}.json`)
              reply("desativado com sucesso")
            }
            //await limitAdd(sender)
            break
            
          case 'quizanimais':
            if (!isGroup) return reply('comando apenas para grupos')
            const quizaaleatorio = Math.floor(Math.random() * quizanimais.length)
          const quizanimaislogo = `${quizanimais[quizaaleatorio].foto}`
          logo = quizanimaislogo
            if (!isGroupAdmins) return reply('comando apenas para admins')
            if (args.length == 0) return reply(`use 1 para ativar o jogo do quiz de animais\npara desativar use ${prefix + command}quizanimais 0`)
            if (args.join(' ') === '1') {
              if (fs.existsSync(`./lib/quizanimais-${from}.json`)) {
                let dataQuizanimais2 = JSON.parse(fs.readFileSync(`./lib/quizanimais-${from}.json`))
                reply(`o jogo já foi iniciado neste grupo:
  imagem acima
  `)
              } else {
                fs.writeFileSync(`./lib/quizanimais-${from}.json`, `${JSON.stringify(quizanimais[quizaaleatorio])}`)

                let atr = {
                  image: { url: logo },
                  caption: `
  ╭─────≽「 👾 QUIZ DE ANIMAIS 👾 」
  │➽ DESCUBRA O ANIMAL
  ╰───────────────────
  `,
                  lfooter: `${nomeBot}`,
                  //buttons: buttons,
                  headerType: 4
                }


                client.sendMessage(from, atr)
              }
            } else if (args.join(' ') === '0') {
              if (!fs.existsSync(`./lib/quizanimais-${from}.json`)) return reply('não tem como desativar o jogo do anagrama pois ele não foi ativado')
              fs.unlinkSync(`./lib/quizanimais-${from}.json`)
              reply("desativado com sucesso")
            }
            //await limitAdd(sender)
            break
            
          case "level":
            if (!isLevelingOn) return reply("o leveling nao ta ativo, peça pra algum adm ativar!!!")
            reply(`Ola ${pushname} aqui esta suas informações
  
  Patente: ${role}
  Level: ${getLevel}
  porcentagem: ${per}
  `)
            break

          case 'wallpaperanimepc':
            if (!isPremium) return reply(resposta.premium)
            {
              json = JSON.parse(fs.readFileSync('./lib/fotos/wall.json').toString())
              random = json[Math.floor(Math.random() * json.length)]
              /*
              let proximo = [
                {buttonId: `${prefix + command}`, buttonText: {displayText: '🍉PROXIMO🍉'}, type: 1},
                ]
                */
              templateMassage = {
                image: {
                  url: random,
                  quoted: live
                },
                footer: `${nomeBot}`,
              }
              client.sendMessage(from, templateMassage)
            }
            break

          case 'figfundo':
          case 'figvideo':
          case 'figusemfundo':
          case 'sfundo':
            if (!isQuotedImage) return reply(`Marque uma imagem`)
            if ((isMedia && !info.message.videoMessage || isQuotedImage) && args.length == 0) {
              manu = isQuotedImage ? info.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage : info = message.imageMessage
              buff = await getFileBuffer(manu, 'image')
              bas64 = `data:image/jpeg;base64,${buff.toString('base64')}`
              anuFigSemFundo = args.join(' ').split('|')
              satu = anuFigSemFundo[0] !== '' ? anuFigSemFundo[0] : `${pushname}`
              sd = `${nomeBot}`
              dua = typeof anuFigSemFundo[1] !== 'undefined' ? anuFigSemFundo[1] : `${sd}`
              var mantap = await convertSticker(bas64, `${dua}`, `${satu}`)
              var sti = new Buffer.from(mantap, 'base64');
              client.sendMessage(from, { sticker: sti }, { quoted: info })
            } else {
              return reply(`So imagem mn -_-`)
            }
            break

          case 'fotofundo':
          case 'fotovideo':
          case 'fotosemfundo':
          case 'ffundo':
            if (!isQuotedImage) return reply(`Marque uma imagem`)
            if ((isMedia && !info.message.videoMessage || isQuotedImage) && args.length == 0) {
              manuSF = isQuotedImage ? info.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage : info = message.imageMessage
              buffSF = await getFileBuffer(manu, 'image')
              bas64SF = `data:image/jpeg;base64,${buff.toString('base64')}`
              anuImgSemFundo = args.join(' ').split('|')
              satuSF = anuImgSemFundo[0] !== '' ? anuFigSemFundo[0] : `${pushname}`
              sdSF = `${nomeBot}`
              duaSF = typeof anuImgSemFundo[1] !== 'undefined' ? anuImgSemFundo[1] : `${sdSF}`
              var mantapImg = await convertSticker(bas64SF, `${duaSF}`, `${satuSF}`)
              var imgSF = new Buffer.from(mantapImg, 'base64');
              client.sendMessage(from, { image: imgSF }, { quoted: info })
            } else {
              return reply(`So imagem mn -_-`)
            }
            break

          case 'casal':
            if (!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')
            membr = []
            const suamae11 = groupMembers
            const suamae21 = groupMembers
            const teupai11 = suamae11[Math.floor(Math.random() * suamae11.length)]
            const teupai21 = suamae21[Math.floor(Math.random() * suamae21.length)]
            var shipted1 = ["1%", `2%`, `3%`, `4%`, `5%`, `6%`, `7`, `%`, `9%`, `10`, `11%`, `12%`, `13%`, `14%`, `15%`, `16%`, `17%`, `1%`, `19%`, `20%`, `21%`, `22`, `23%`, `24%`, `25%`, `26%`, `27%`, `2%`, `27%`, `2%`, `29%`, `30%`, `31%`, `32%`, `33%`, `34%`, `35%`, `36%`, `37%`, `3%`, `39%`, `40%`, `41%`, `42%`, `43%`, `44%`, `45%`, `46%`, `47%`, `4%`, `49%`, `50%`, `51%`, `52%`, `53%`, `54%`, `55%`, `56%`, `57%`, `5%`, `59%`, `60%`, `61%`, `62%`, `63%`, `64%`, `65%`, `66%`, `67%`, `6%`, `69%`, `70%`, `71%`, `72%`, `73%`, `74%`, `75%`, `76%`, `77%`, `7%`, `79%`, `0%`, `1%`, `2%`, `5%`, `4%`, `5%`, `6%`, `7%`, `%`, `9%`, `90%`, `91%`, `92%`, `93%`, `94%`, `95%`, `96%`, `97%`, `9%`, `99%`, `100%`]
            const shipted = shipted1[Math.floor(Math.random() * shipted1.length)]
            jet = `*Hmmm.... Eu Shipo eles 2💘💘*\n\n1= @${teupai11.id.split('@')[0]}\ne esse\n2= @${teupai21.id.split('@')[0]}\ncom uma porcentagem de: ${shipted}`
            membr.push(teupai11.id)
            membr.push(teupai21.id)
            mentions(jet, membr, true)
            break
            
          case 'alma-gemeas':
            if (!isGroup) return reply(`Só pode ser utilizado este comando, em grupo.`)
            if (!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')
            membr = []
            const suamae121 = groupMembers
            const suamae251 = groupMembers
            const teupai117 = suamae121[Math.floor(Math.random() * suamae121.length)]
            const teupai251 = suamae251[Math.floor(Math.random() * suamae251.length)]
            var shipted11 = ["1%", `2%`, `3%`, `4%`, `5%`, `6%`, `7`, `%`, `9%`, `10`, `11%`, `12%`, `13%`, `14%`, `15%`, `16%`, `17%`, `1%`, `19%`, `20%`, `21%`, `22`, `23%`, `24%`, `25%`, `26%`, `27%`, `2%`, `27%`, `2%`, `29%`, `30%`, `31%`, `32%`, `33%`, `34%`, `35%`, `36%`, `37%`, `3%`, `39%`, `40%`, `41%`, `42%`, `43%`, `44%`, `45%`, `46%`, `47%`, `4%`, `49%`, `50%`, `51%`, `52%`, `53%`, `54%`, `55%`, `56%`, `57%`, `5%`, `59%`, `60%`, `61%`, `62%`, `63%`, `64%`, `65%`, `66%`, `67%`, `6%`, `69%`, `70%`, `71%`, `72%`, `73%`, `74%`, `75%`, `76%`, `77%`, `7%`, `79%`, `0%`, `1%`, `2%`, `5%`, `4%`, `5%`, `6%`, `7%`, `%`, `9%`, `90%`, `91%`, `92%`, `93%`, `94%`, `95%`, `96%`, `97%`, `9%`, `99%`, `100%`]
            const shipteddd = shipted11[Math.floor(Math.random() * shipted11.length)]
            jet = `*Hmmm....  alma-gemeas eles 2 💘💘*\n\n1= @${teupai117.id.split('@')[0]}\n2= @${teupai251.id.split('@')[0]}\ncom uma porcentagem de: ${shipteddd}`
            membr.push(teupai117.id)
            membr.push(teupai251.id)
            mentions(jet, membr, true)
            break


          case 'shipo':
            if (!isGroup) return reply(`Só pode ser utilizado este comando, em grupo.`)
            teks = args.join(" ")
            if (teks.length < 10) return reply('Marque uma pessoa do grupo para encontrar o par dela')
            membrr = []
            const suamae111 = groupMembers
            const suamae211 = groupMembers
            const teupai111 = suamae111[Math.floor(Math.random() * suamae111.length)]
            const teupai211 = suamae211[Math.floor(Math.random() * suamae211.length)]
            var shipted1 = ["1%", `2%`, `3%`, `4%`, `5%`, `6%`, `7`, `%`, `9%`, `10`, `11%`, `12%`, `13%`, `14%`, `15%`, `16%`, `17%`, `1%`, `19%`, `20%`, `21%`, `22`, `23%`, `24%`, `25%`, `26%`, `27%`, `2%`, `27%`, `2%`, `29%`, `30%`, `31%`, `32%`, `33%`, `34%`, `35%`, `36%`, `37%`, `3%`, `39%`, `40%`, `41%`, `42%`, `43%`, `44%`, `45%`, `46%`, `47%`, `4%`, `49%`, `50%`, `51%`, `52%`, `53%`, `54%`, `55%`, `56%`, `57%`, `5%`, `59%`, `60%`, `61%`, `62%`, `63%`, `64%`, `65%`, `66%`, `67%`, `6%`, `69%`, `70%`, `71%`, `72%`, `73%`, `74%`, `75%`, `76%`, `77%`, `7%`, `79%`, `0%`, `1%`, `2%`, `5%`, `4%`, `5%`, `6%`, `7%`, `%`, `9%`, `90%`, `91%`, `92%`, `93%`, `94%`, `95%`, `96%`, `97%`, `9%`, `99%`, `100%`]
            const shiptedd = shipted1[Math.floor(Math.random() * shipted1.length)]
            jet = `*Hmmm.... Eu Shipo eles 2💘💘*\n\n1 = @${teupai111.id.split('@')[0]}\n2 = ${teks}\ncom uma porcentagem de: ${shiptedd}`
            membrr.push(teupai111.id)
            membrr.push(teupai211.id)
            mentions(jet, membrr, true)
            break
            
          case 'ttp':
            if (!q) return reply(`Exemplo: ${prefix + command} Texto`)
            client.sendMessage(from, { sticker: { url: `https://api.brizaloka-api.tk/ttp/ttp3?apikey=brizaloka&text=${q}` } }, { quoted: info }).catch(e => {
              console.error(e)
            })
            break
            
          case 'attp':
            if (args.length == 0) return reply(`Exemplo: ${prefix + command} Texto`)
            client.sendMessage(from, { sticker: { url: `https://amandaapis.onrender.com/api/attp?texto=${q}&apikey=SuaApikey` } }, { quoted: info }).catch(e => {
              console.error(e)
            })
            break

          case 'attp6':
            if (args.length == 0) return reply(`Exemplo: ${prefix + command} Texto`)
            client.sendMessage(from, { sticker: { url: `https://amandaapis.onrender.com/api/attp?texto=${q}&apikey=SuaApikey` } }, { quoted: info }).catch(e => {
              console.error(e)
            })
            break

          case 'attp5':
            if (args.length == 0) return reply(`Exemplo: ${prefix + command} Texto`)
            client.sendMessage(from, { sticker: { url: `https://amandaapis.onrender.com/api/attp?texto=${q}&apikey=SuaApikey` } }, { quoted: info }).catch(e => {
              console.error(e)
            })
            break

          case 'attp4':
            if (args.length == 0) return reply(`Exemplo: ${prefix + command} Texto`)
            client.sendMessage(from, { sticker: { url: `https://amandaapis.onrender.com/api/attp?texto=${q}&apikey=SuaApikey` } }, { quoted: info }).catch(e => {
              console.error(e)
            })
            break

          case 'attp3':
            if (args.length == 0) return reply(`Exemplo: ${prefix + command} Texto`)
            client.sendMessage(from, { sticker: { url: `https://amandaapis.onrender.com/api/attp?texto=${q}&apikey=SuaApikey` } }, { quoted: info }).catch(e => {
              console.error(e)
            })
            break
          case 'attp2':
            if (args.length == 0) return reply(`Exemplo: ${prefix + command} Texto`)
            client.sendMessage(from, { sticker: { url: `https://amandaapis.onrender.com/api/attp?texto=${q}&apikey=SuaApikey` } }, { quoted: info }).catch(e => {
              console.error(err)
            })
            break
            
          case 'metadinha':
          case 'metadinha2':
          case 'metadinha3':
            if (!isGroup) return reply(resposta.grupo)
            anuu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')

            random = anuu[Math.floor(Math.random() * anuu.length)]
            let buttonssMessssage = {
              image: { url: random.male },
              caption: `🚹 MASCULINO 🚹`,
              footer: `${nomeBot}`,
              headerType: 4
            }
            await client.sendMessage(from, buttonssMessssage, { quoted: info }).catch(err => {
              return ('Error!')
            })
            let buttonssMesssage = {
              image: { url: random.female },
              caption: `🚺 FEMININO 🚺`,
              footer: `${nomeBot}`,
              headerType: 4
            }
            await client.sendMessage(from, buttonssMesssage, { quoted: info }).catch(err => {
              return ('Error!')
            })
            break
            
          case 'google': {
            if (!q) return reply(`Examplo : ${prefix}google bot de WhatsApp`)
            reply("aguarde um momento ")
            let google = require('images-scraper')
            google({ 'query': q }).then(res => {
              let teks = `*Resultado* \n\n`
              for (let g of res) {
                teks += `⭔ *Titulo* : ${g.title}\n`
                teks += `⭔ *Descrição* : ${g.snippet}\n`
                teks += `⭔ *Link* : ${g.link}\n\n────────────────────────\n\n`
              }
              reply(teks)
            })
          }
            break
            
          case 'gtts':
            if (args.length < 1) return reply(`Cade o texto?, digite algo Exemplo:\n${prefix}gtts pt Oi`)
            const gtts = require('./lib/gtts/gtts')(args[0])
            if (args.length < 2) return reply('Falta colocar o código do idioma!')
            dtt = body.slice(8)
            ranm = './lib/gtts/gtts.mp3'
            rano = './lib/gtts/gtts.ogg'
            if (dtt.length > 4000) return reply('Para reduzir spam o máximo de letras permitidas são 4000!')
            gtts.save(ranm, dtt, function () {
              exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
                buffer = fs.readFileSync(rano)
                client.sendMessage(from, { audio: buffer, ptt: true }, { quoted: live })
                fs.unlinkSync(rano)
              })
            })
            break
            
case 'ping':
timestampe = speed();
latensie = speed() - timestampe
uptime = process.uptime()
const texto = `┏━╼┈┈╼⊳⊰ 𖤍 ⊱⊲╾┈┈╾═༻
┃Ola ${pushname}
┃Velocidade: ${latensie.toFixed(4)}
┃${!isGroup ? `Usuario: ${pushname}` :  `Grupo: ${groupName}`}
┃Tempo Ativo: ${runtime(uptime)}
┗━╼┈┈╼⊳⊰ ${tempo} ⊱⊲╾┈┈╾═༻`
reply(texto)
break

case 'login':
registros.push(sender)
fs.writeFileSync('./lib/registros.json',JSON.stringify(registros))
enviar('enviando...')
await delay(5000)
enviar(`◥◣★◢◤
❴ ${tempo} ❵
❴ Login Feito Com Sucesso ❵

❴ Nome: ${pushname} ❵
❴ Número: ${sender.split('@')[0]} ❵
❴ Celular: ${info.key.id.length > 21 ? 'Android 😴' : info.key.id.substring(0, 2) == '3A' ? 'IOS 😑' : 'WhatsApp web 😅'} ❵
❴ Horário: ${hora} ❵
❴ Data: ${data} ❵

❴😎❵ Parabéns Por Registrar-Se ❴😎❵`)
break
            
case 'calculadora': case 'calcular':  case 'calc':
rsp = q.replace("x", "*").replace('"', ":").replace(new RegExp("[()abcdefghijklmnopqrstwuvxyz]", "gi"), "").replace("÷", "/")
console.log('[', color('EVAL', 'silver'),']', color(moment(info.messageTimestamp * 1000).format('DD/MM HH:mm:ss'), 'yellow'), color(rsp))
return enviar(JSON.stringify(eval(`${rsp}`,null,'\t')))
break 

case 'letramusica':
  reply('enviando')

let cantor = args[0]
let musica = args[1]

if (args[0], args[1], args[2]) {
    cantor = `${args[0]} ${args[1]}`; // Se args[2] existir, concatena args[0] e args[1] como artista
    musica = args[2]; // Define args[2] como nome da música
}

if (args[0], args[1]) {
    cantor = args[0]; // Se args[2] existir, concatena args[0] e args[1] como artista
    musica = `${args[1]} ${args[2]}`; // Define args[2] como nome da música
}

if (args[0], args[1], args[2], args[3]) {
    cantor = `${args[0]} ${args[1]}`; // Se args[2] existir, concatena args[0] e args[1] como artista
    musica = `${args[1]} ${args[2]}`; // Define args[2] como nome da música
}

const linkAPI = `https://api.vagalume.com.br/search.php?art=${encodeURIComponent(cantor)}&mus=${encodeURIComponent(musica)}&apikey=${keyL}`
axios.get(linkAPI)
    .then(response => {
        if (response.data.mus && response.data.mus.length > 0) {
            reply(response.data.mus[0].text);
        } else {
            reply(`Letra da música não encontrada. \nlink: ${linkAPI}`);
        }
    })
    .catch(error => {
        console.error(error);
    });
  break
  
          case "arma": {
            bancoDeDados = {
              "M1887": {
                "nome": "M1887",
                "descrição": "Uma espingarda de cano duplo que inflige danos massivos em curta distância.",
                "dano": "Alto",
                "alcance": "Curto",
                "taxa_de_disparo": "Baixa",
                "capacidade_do_pente": 2
              },
              "AK47": {
                "nome": "AK47",
                "descrição": "Rifle de assalto de alta potência com alta taxa de disparo e precisão moderada.",
                "dano": "Moderado",
                "alcance": "Médio",
                "taxa_de_disparo": "Alta",
                "capacidade_do_pente": 30
              },
              "AWM": {
                "nome": "AWM",
                "descrição": "Rifle de precisão capaz de derrubar inimigos com um único tiro.",
                "dano": "Extremo",
                "alcance": "Longo",
                "taxa_de_disparo": "Baixa",
                "capacidade_do_pente": 5
              },
              "Groza": {
                "nome": "Groza",
                "descrição": "Rifle de assalto altamente poderoso com uma taxa de disparo e precisão excepcionais.",
                "dano": "Alto",
                "alcance": "Médio",
                "taxa_de_disparo": "Muito alta",
                "capacidade_do_pente": 30
              },
              "UMP45": {
                "nome": "UMP45",
                "descrição": "Submetralhadora de alta cadência de tiro, equilibrada em termos de dano e controle de recuo.",
                "dano": "Moderado",
                "alcance": "Curto",
                "taxa_de_disparo": "Alta",
                "capacidade_do_pente": 25
              },
              "M1014": {
                "nome": "M1014",
                "descrição": "Uma espingarda de combate próxima com uma taxa de disparo e dano impressionantes.",
                "dano": "Muito alto",
                "alcance": "Curto",
                "taxa_de_disparo": "Baixa",
                "capacidade_do_pente": 6
              },
              "M60": {
                "nome": "M60",
                "descrição": "Metralhadora com alto poder de fogo, ideal para suprimir inimigos e combates a média distância.",
                "dano": "Alto",
                "alcance": "Médio",
                "taxa_de_disparo": "Baixa",
                "capacidade_do_pente": 60
              },
              "XM8": {
                "nome": "XM8",
                "descrição": "Rifle de assalto de alta eficiência, com ótimo equilíbrio entre dano, alcance e taxa de disparo.",
                "dano": "Moderado",
                "alcance": "Médio",
                "taxa_de_disparo": "Alta",
                "capacidade_do_pente": 30
              },
              "SCAR": {
                "nome": "SCAR",
                "descrição": "Rifle de assalto confiável, com boa precisão e controle de recuo.",
                "dano": "Moderado",
                "alcance": "Médio",
                "taxa_de_disparo": "Média",
                "capacidade_do_pente": 30
              },
              "M4A1": {
                "nome": "M4A1",
                "descrição": "Rifle de assalto versátil e equilibrado, adequado para várias situações de combate.",
                "dano": "Moderado",
                "alcance": "Médio",
                "taxa_de_disparo": "Média",
                "capacidade_do_pente": 30
              },
              "SVD": {
                "nome": "SVD",
                "descrição": "Rifle de precisão semi-automático, com ótimo alcance e dano significativo.",
                "dano": "Alto",
                "alcance": "Longo",
                "taxa_de_disparo": "Baixa",
                "capacidade_do_pente": 10
              },
              "MP5": {
                "nome": "MP5",
                "descrição": "Submetralhadora compacta e precisa, adequada para combates em espaços confinados.",
                "dano": "Moderado",
                "alcance": "Curto",
                "taxa_de_disparo": "Alta",
                "capacidade_do_pente": 30
              },
              "SPAS12": {
                "nome": "SPAS12",
                "descrição": "Uma espingarda de ação por bombeamento, eficaz a curta distância com alto dano.",
                "dano": "Alto",
                "alcance": "Curto",
                "taxa_de_disparo": "Baixa",
                "capacidade_do_pente": 6
              },
              "KAR98K": {
                "nome": "KAR98K",
                "descrição": "Rifle de precisão de ação por ferrolho, com excelente precisão e dano letal.",
                "dano": "Extremo",
                "alcance": "Longo",
                "taxa_de_disparo": "Baixa",
                "capacidade_do_pente": 5
              },
              "M249": {
                "nome": "M249",
                "descrição": "Metralhadora leve com grande capacidade de munição, ideal para controle de área.",
                "dano": "Alto",
                "alcance": "Médio",
                "taxa_de_disparo": "Baixa",
                "capacidade_do_pente": 100
              },
              "Thompson": {
                "nome": "Thompson",
                "descrição": "Submetralhadora clássica de alta cadência de tiro e bom controle de recuo.",
                "dano": "Moderado",
                "alcance": "Curto",
                "taxa_de_disparo": "Alta",
                "capacidade_do_pente": 30
              },
              "VSS": {
                "nome": "VSS",
                "descrição": "Rifle de assalto silencioso com escopo integrado e baixo recuo.",
                "dano": "Moderado",
                "alcance": "Médio",
                "taxa_de_disparo": "Média",
                "capacidade_do_pente": 15
              },
              "MP40": {
                "nome": "MP40",
                "descrição": "Submetralhadora de alta cadência de tiro e bom controle de recuo.",
                "dano": "Moderado",
                "alcance": "Curto",
                "taxa_de_disparo": "Muito alta",
                "capacidade_do_pente": 30
              },
              "AUG": {
                "nome": "AUG",
                "descrição": "Rifle de assalto com excelente precisão, alcance e taxa de disparo.",
                "dano": "Moderado",
                "alcance": "Médio",
                "taxa_de_disparo": "Alta",
                "capacidade_do_pente": 30
              },
              "G18": {
                "nome": "G18",
                "descrição": "Pistola automática com alta taxa de disparo, ideal para combate próximo.",
                "dano": "Moderado",
                "alcance": "Curto",
                "taxa_de_disparo": "Muito alta",
                "capacidade_do_pente": 20
              },
              "P90": {
                "nome": "P90",
                "descrição": "Submetralhadora de alta cadência de tiro e capacidade de munição elevada.",
                "dano": "Moderado",
                "alcance": "Curto",
                "taxa_de_disparo": "Muito alta",
                "capacidade_do_pente": 50
              },
              "Desert Eagle": {
                "nome": "Desert Eagle",
                "descrição": "Pistola de alta potência e precisão, com uma grande parada de energia.",
                "dano": "Alto",
                "alcance": "Curto",
                "taxa_de_disparo": "Média",
                "capacidade_do_pente": 7
              },
              "Vector": {
                "nome": "Vector",
                "descrição": "Submetralhadora compacta com alta cadência de tiro e boa precisão.",
                "dano": "Moderado",
                "alcance": "Curto",
                "taxa_de_disparo": "Muito alta",
                "capacidade_do_pente": 30
              },
              "M14": {
                "nome": "M14",
                "descrição": "Rifle semiautomático de alta precisão, ideal para combates de longa distância.",
                "dano": "Alto",
                "alcance": "Longo",
                "taxa_de_disparo": "Baixa",
                "capacidade_do_pente": 10
              },
              "CG15": {
                "nome": "CG15",
                "descrição": "Rifle de sinalização que causa dano explosivo aos inimigos.",
                "dano": "Moderado",
                "alcance": "Médio",
                "taxa_de_disparo": "Baixa",
                "capacidade_do_pente": 1
              },
              "USP": {
                "nome": "USP",
                "descrição": "Pistola de médio alcance com boa precisão e taxa de disparo.",
                "dano": "Moderado",
                "alcance": "Médio",
                "taxa_de_disparo": "Média",
                "capacidade_do_pente": 12
              },
              "M1873": {
                "nome": "M1873",
                "descrição": "Revólver de ação simples com alto dano, mas taxa de disparo baixa.",
                "dano": "Alto",
                "alcance": "Curto",
                "taxa_de_disparo": "Baixa",
                "capacidade_do_pente": 2
              },
              "AN94": {
                "nome": "AN94",
                "descrição": "Rifle de assalto com um modo de disparo especial que aumenta a taxa de disparo.",
                "dano": "Moderado",
                "alcance": "Médio",
                "taxa_de_disparo": "Alta",
                "capacidade_do_pente": 30
              },
              "M79": {
                "nome": "M79",
                "descrição": "Lançador de granadas que causa danos em área com alto poder de explosão.",
                "dano": "Extremo",
                "alcance": "Longo",
                "taxa_de_disparo": "Baixa",
                "capacidade_do_pente": 1
              },
              "M14": {
                "nome": "M14",
                "descrição": "Rifle semiautomático de alta precisão, ideal para combates de longa distância.",
                "dano": "Alto",
                "alcance": "Longo",
                "taxa_de_disparo": "Baixa",
                "capacidade_do_pente": 10
              },
              "CG15": {
                "nome": "CG15",
                "descrição": "Rifle de sinalização que causa dano explosivo aos inimigos.",
                "dano": "Moderado",
                "alcance": "Médio",
                "taxa_de_disparo": "Baixa",
                "capacidade_do_pente": 1
              },
              "USP": {
                "nome": "USP",
                "descrição": "Pistola de médio alcance com boa precisão e taxa de disparo.",
                "dano": "Moderado",
                "alcance": "Médio",
                "taxa_de_disparo": "Média",
                "capacidade_do_pente": 12
              },
              "M1873": {
                "nome": "M1873",
                "descrição": "Revólver de ação simples com alto dano, mas taxa de disparo baixa.",
                "dano": "Alto",
                "alcance": "Curto",
                "taxa_de_disparo": "Baixa",
                "capacidade_do_pente": 2
              },
              "AN94": {
                "nome": "AN94",
                "descrição": "Rifle de assalto com um modo de disparo especial que aumenta a taxa de disparo.",
                "dano": "Moderado",
                "alcance": "Médio",
                "taxa_de_disparo": "Alta",
                "capacidade_do_pente": 30
              },
              "M79": {
                "nome": "M79",
                "descrição": "Lançador de granadas que causa danos em área com alto poder de explosão.",
                "dano": "Extremo",
                "alcance": "Longo",
                "taxa_de_disparo": "Baixa",
                "capacidade_do_pente": 1
              },
              "M82B": {
                "nome": "M82B",
                "descrição": "Rifle de precisão de ação por ferrolho com alto dano e capacidade de penetração.",
                "dano": "Extremo",
                "alcance": "Longo",
                "taxa_de_disparo": "Baixa",
                "capacidade_do_pente": 5
              },
              "P90": {
                "nome": "P90",
                "descrição": "Submetralhadora de alta cadência de tiro e capacidade de munição elevada.",
                "dano": "Moderado",
                "alcance": "Curto",
                "taxa_de_disparo": "Muito alta",
                "capacidade_do_pente": 50
              },
              "Desert Eagle": {
                "nome": "Desert Eagle",
                "descrição": "Pistola de alta potência e precisão, com uma grande parada de energia.",
                "dano": "Alto",
                "alcance": "Curto",
                "taxa_de_disparo": "Média",
                "capacidade_do_pente": 7
              },
              "M1887": {
                "nome": "M1887",
                "descrição": "Espingarda de ação por ferrolho com alto dano em combates de curta distância.",
                "dano": "Extremo",
                "alcance": "Curto",
                "taxa_de_disparo": "Baixa",
                "capacidade_do_pente": 2
              },
              "XM8": {
                "nome": "XM8",
                "descrição": "Rifle de assalto com boa precisão e cadência de tiro.",
                "dano": "Moderado",
                "alcance": "Médio",
                "taxa_de_disparo": "Média",
                "capacidade_do_pente": 30
              },
              "KAR98K": {
                "nome": "KAR98K",
                "descrição": "Rifle de precisão de ação por ferrolho com alto dano e precisão.",
                "dano": "Extremo",
                "alcance": "Longo",
                "taxa_de_disparo": "Baixa",
                "capacidade_do_pente": 5
              },
              "M79": {
                "nome": "M79",
                "descrição": "Lançador de granadas que causa danos em área com alto poder de explosão.",
                "dano": "Extremo",
                "alcance": "Longo",
                "taxa_de_disparo": "Baixa",
                "capacidade_do_pente": 1
              },
              "MP40": {
                "nome": "MP40",
                "descrição": "Submetralhadora de alta cadência de tiro e bom controle de recuo.",
                "dano": "Moderado",
                "alcance": "Curto",
                "taxa_de_disparo": "Muito alta",
                "capacidade_do_pente": 30
              },
              "M14": {
                "nome": "M14",
                "descrição": "Rifle semiautomático de alta precisão, ideal para combates de longa distância.",
                "dano": "Alto",
                "alcance": "Longo",
                "taxa_de_disparo": "Baixa",
                "capacidade_do_pente": 10
              }
            }


            const armaPesquisada = args.join(" "); // Substitua pelo valor desejado
            let resultado = null;

            for (const arma in bancoDeDados) {
              if (arma.toLowerCase() === armaPesquisada.toLowerCase()) {
                resultado = bancoDeDados[arma];
                break;
              }
            }

            if (resultado) {
              reply(`*${resultado.nome}*\n*${resultado.descrição}*\n\n*Dano: ${resultado.dano}*\n\n*Alcance: ${resultado.alcance}*\n\n*Taxa de Disparo: ${resultado.taxa_de_disparo}*\n\n*Capacidade do Pente: ${resultado.capacidade_do_pente}*`);
            } else {
              reply('Erro: Arma não encontrada no banco de dados.');
            }
          } break
          
          case 'bangp':
            if (!isGroup) return reply(resposta.grupo)
            if (!isOwner && !isCmdy && !isnit && !issupre && !ischyt && !info.key.fromMe) return reply(resposta.Dono)
            if (isBanchat) return reply(`Este grupo ja está banido`)
            bancht.push(from)
            fs.writeFileSync('./lib/banchat.json', JSON.stringify(bancht))
            reply(`Grupo banido com sucesso`)
            break

          case 'unbangp':
            if (!isGroup) return reply(resposta.grupo)
            if (!isOwner) return reply(resposta.Dono)
            let cur = bancht.indexOf(from)
            bancht.splice(cur, 1)
            fs.writeFileSync('./lib/banchat.json', JSON.stringify(bancht))
            reply(`Grupo desbanido com sucesso...`)
            break

          case "limpar":
          case "clear":
            if (!isGroup) return reply(resposta.grupo)
            if (!isGroupAdmins) return reply('comando apenas para admins')
            reply(`L I M P A N D U 😎🤙\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n ${nomeBot}`)
            break
            
          case "play4": {
            client.sendMessage(from, { react: { text: '🍉', key: info.key } })
            if (!q) return reply("digite o nome da música que você deseja exemplo: /play teto m4")
            ab = args.join(" ")
            res = await ytttts(ab)
            reply("aguarde enviando..")
            blaimg = await getBuffer(res.all[0].image)

            bla = `
  𝑻𝑰𝑻𝑼𝑳𝑶: ${res.all[0].title}
  𝑽𝑰𝑺𝑼𝑨𝑳𝑰𝒁𝑨𝑪̧𝑶̃𝑬𝑺: ${res.all[0].views}\n
  𝑻𝑬𝑴𝑷𝑶: ${res.all[0].timestamp}
  𝑪𝑨𝑵𝑨𝑳: ${res.all[0].author.name}
  𝘚𝘦 𝘷𝘰𝘤𝘦̂ 𝘯𝘢̃𝘰 𝘤𝘰𝘯𝘴𝘦𝘨𝘶𝘪𝘳 𝘷𝘪𝘴𝘶𝘢𝘭𝘪𝘻𝘢𝘳 𝘰𝘴 𝘣𝘰𝘵𝘰̃𝘦𝘴,𝘦𝘹𝘦𝘤𝘶𝘵𝘦 𝘰 𝘱𝘭𝘢𝘺𝘢𝘶𝘥𝘪𝘰, 𝘱𝘭𝘢𝘺𝘷𝘪𝘥𝘦𝘰 𝘤𝘰𝘮𝘰 𝘴𝘦𝘨𝘶𝘯𝘥𝘢 𝘰𝘱𝘤̧𝘢̃𝘰.`

            sendBimg(from, `${res.all[0].image}`, bla, nomeBot, [
              { buttonId: `${prefix}playmp3 ${res.all[0].url}`, buttonText: { displayText: '『𝐀𝐔𝐃𝐈𝐎』' }, type: 1 }, { buttonId: `${prefix}playmp4 ${res.all[0].url}`, buttonText: { displayText: '『𝐕𝐈́𝐃𝐄𝐎』' }, type: 1 }], live)
          }
            break

          case 'audio': case 'ytaudio':
            enviar('*enviando ✨*')
            bla = await fetchJson(`https://api.brizaloka-api.tk/sociais/v2/ytplaymp3?apikey=brizaloka&query=${q}`)
            audbla = bla.link_src
            client.sendMessage(from, { audio: { url: audbla }, mimetype: 'audio/mp4' }, { quoted: live })
            break
            
case 'flood':
var kls = q
var textfl = kls.split(" ")[0];
var numberfl = kls.split(" ")[1];
if(!numberfl) return reply(`Digite a quantidade\nExemplo: ${prefix+command} 7`)
if(!textfl) return reply("Digite o texto")
for (let i = 0; i < numberfl; i++) {
await client.sendMessage(from, { text: textfl });
}
break/*

case 'flood':
var kls = q
function 
var mediafl = kls.split(" ")[1];
if(!mediafl) return reply(`Digite a quantidade\nExemplo: ${prefix+command} 7`)
for (let i = 0; i < mediafl; i++) {
        if ((isMedia && !info.message.videoMessage || isQuotedSticker) && args.length == 0) {
          media = isQuotedSticker ? info.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage : info.message.stickerMessage
          rane = getRandom('.' + await getExtension(media.mimetype))
          img = await getFileBuffer(media, 'sticker')
          fs.writeFileSync(rane, img)
          fig = fs.readFileSync(rane)
          var options = {
            sticker: fig,
            mentions: yd
          }
          client.sendMessage(from, options)
        } else if ((isMedia && !info.message.videoMessage || isQuotedImage) && args.length == 0) {
          media = isQuotedImage ? info.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage : info.message.imageMessage
          rane = getRandom('.' + await getExtension(media.mimetype))
          img = await getFileBuffer(media, 'image')
          fs.writeFileSync(rane, img)
          buff = fs.readFileSync(rane)
          client.sendMessage(from, { image: buff, mentions: yd }, { quoted: info })
        } else if ((isMedia && !info.message.videoMessage || isQuotedVideo) && args.length == 0) {
          media = isQuotedVideo ? info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage : info.message.videoMessage
          rane = getRandom('.' + await getExtension(media.mimetype))
          vid = await getFileBuffer(media, 'video')
          fs.writeFileSync(rane, vid)
          buff = fs.readFileSync(rane)
          client.sendMessage(from, { video: buff, mimetype: 'video/mp4', mentions: yd }, { quoted: info })
        } else if ((isMedia && !info.message.videoMessage || isQuotedAudio) && args.length == 0) {
          media = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
          rane = getRandom('.' + await getExtension(media.mimetype))
          aud = await getFileBuffer(media, 'audio')
          fs.writeFileSync(rane, aud)
          buff = fs.readFileSync(rane)
          client.sendMessage(from, { audio: buff, mimetype: 'audio/mp4', ptt: true, mentions: yd }, { quoted: info })
        } else if ((isMedia && !info.message.videoMessage || isQuotedDocument) && args.length == 0) {
          media = isQuotedDocument ? info.message.extendedTextMessage.contextInfo.quotedMessage.documentMessage : info.message.documentMessage
          rane = getRandom('.' + await getExtension(media.mimetype))
          doc = await getFileBuffer(media, 'document')
          fs.writeFileSync(rane, doc)
          buff = fs.readFileSync(rane)
          client.sendMessage(from, { document: buff, mimetype: 'text/plain', mentions: yd }, { quoted: info })
        } else if (budy) {
          if (q.length < 1) return reply(`Responder imagem/documento/gif/adesivo/áudio/vídeo com legenda ${prefix + command}`)
          client.sendMessage(from, { text: body.slice(command.length + 2), mentions: yd })
        } else {
          reply(`Responder imagem/documento/gif/adesivo/áudio/vídeo com legenda ${prefix + command}`)
        }
break
            
case 'ttt':
const posicao = q
const jogadorHumano = 'X';
const jogadorBot = 'O';
let tabuleiro = Array(9).fill(' ');

async function enviarMensagem(mensagem) {
client.sendMessage(mensagem);
}

async function jogadorJoga() {
  return new Promise(resolve => {
    reply('Digite a posição (1-9): ' {
      posicao = parseInt(posicao) - 1;

      if (tabuleiro[posicao] === ' ') {
        tabuleiro[posicao] = jogadorHumano;
        resolve();
      } else {
        console.log('Posição ocupada. Tente novamente.');
        jogadorJoga().then(resolve);
      }
    });
  });
}

async function botJoga() {
  let posicao;

  do {
    posicao = Math.floor(Math.random() * 9);
  } while (tabuleiro[posicao] !== ' ');

  tabuleiro[posicao] = jogadorBot;
  await enviarMensagem(`O bot jogou na posição ${posicao + 1}`);
}

function exibirTabuleiro() {
  const mensagem =
    `${tabuleiro.slice(0, 3).join(' | ')}\n` +
    '---------\n' +
    `${tabuleiro.slice(3, 6).join(' | ')}\n` +
    '---------\n' +
    `${tabuleiro.slice(6).join(' | ')}`;

  console.log(mensagem);
}

function verificarVitoria(jogador) {
  const linhasVitoria = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let linha of linhasVitoria) {
    if (
      tabuleiro[linha[0]] === jogador &&
      tabuleiro[linha[1]] === jogador &&
      tabuleiro[linha[2]] === jogador
    ) {
      return true;
    }
  }

  return false;
}

function tabuleiroCompleto() {
  return !tabuleiro.includes(' ');
}

async function jogarJogo() {
  do {
    exibirTabuleiro();
    await jogadorJoga();

    if (verificarVitoria(jogadorHumano)) {
      exibirTabuleiro();
      await enviarMensagem('Parabéns! Você ganhou!');
      return;
    }

    if (tabuleiroCompleto()) {
      exibirTabuleiro();
      await enviarMensagem('Empate!');
      return;
    }

    botJoga();

    if (verificarVitoria(jogadorBot)) {
      exibirTabuleiro();
      await enviarMensagem('Você perdeu. O bot ganhou!');
      return;
    }
  } while (!tabuleiroCompleto());
}

// Substitua 'suaConnection' com a instância da conexão do WhatsApp
// Exemplo: const connection = new WAConnection();
// ...

// Iniciar o jogo
jogarJogo();
break*/

          case 'deletar': case 'apagar': case 'delete': case 'del': case 'd':
            if (!isGroup) return reply(resposta.grupo)
            if (!SoDono && !isGroupAdmins && !isPremium) return reply(resposta.adm)
            client.sendMessage(from, { delete: { remoteJid: from, fromMe: true, id: info.message.extendedTextMessage.contextInfo.stanzaId, participant: sender } })
              .catch((err) => {
                console.log(err)
                reply('A mensagem não foi enviado pelo bot...')
              })
            break
            
            case 'delall':
            const messageContainsEmoji = (message, emoji) => {
  // Verifica se a mensagem contém o emoji
  return message.message.conversation.includes(emoji);
};

// Função para apagar mensagens com um emoji específico
const deleteMessagesWithEmoji = async (from, emoji) => {
  const chat = await client.loadMessages(from, 100); // Carrega as últimas 25 mensagens
  const messagesToDelete = chat.messages.filter((msg) => messageContainsEmoji(msg, emoji));

  // Apaga as mensagens encontradas
  for (const msg of messagesToDelete) {
    await client.deleteMessage(chatId, msg.key);
  }
};

// Exemplo de uso
const chatId = 'ID_DO_SEU_GRUPO_OU_CONVERSA';
const emojiToDelete = '😃😡';

deleteMessagesWithEmoji(from, emojiToDelete);
break
            

        





      default:
        if (isCmd && command) {
          const buttonMessage = {
            text: `comando nem existe kkkkkkk...`,
            //   footer: '𝙻𝚎𝚒𝚊 𝚘 𝚖𝚎𝚗𝚞 𝚌𝚘𝚖 𝚊𝚝𝚎𝚗𝚌̧𝚊̃𝚘!',
            headerType: 1
          }
          client.sendMessage(from, buttonMessage)
        }

    }
    // Fim do switch \\


  } catch (erro) {
    console.log(erro)
  }
}

let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update file: ${__filename}`);
  delete require.cache[file];
  require(file);
});