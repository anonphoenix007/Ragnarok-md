let options = {
    temp: {
      type: Object,
      default: {}
    },
    rent: {
      type: Object,
      default: {}
    }
  };
  const mongoose = require("mongoose");
  const Alive = new mongoose.Schema({
    id: {
      type: String,
      unique: true,
      required: true,
      default: "Asta_Md"
    },
    alive_text: {
      type: String,
      default: "*ʀᴀɢɴᴀʀᴏᴋ-ᴍᴅ is Up and running.*"
    },
    alive_get: {
      type: String,
      default: "you did'nt set alive message yet\nType [.alive info] to get alive message information"
    },
    alive_url: {
      type: String,
      default: ""
    },
    alive_image: {
      type: Boolean,
      default: false
    },
    alive_video: {
      type: Boolean,
      default: false
    },
    antiviewonce: {
      type: String,
      default: "false"
    },
    antidelete: {
      type: String,
      default: "false"
    },
    autobio: {
      type: String,
      default: "false"
    },
    levelup: {
      type: String,
      default: "false"
    },
    anticall: {
      type: String,
      default: "false"
    },
    autoreaction: {
      type: String,
      default: "true"
    },
    permit: {
      type: Boolean,
      default: false
    },
    permit_values: {
      type: String,
      default: "all"
    },
    chatbot: {
      type: String,
      default: "false"
    },
    bgm: {
      type: Boolean,
      default: false
    },
    bgmarray: {
      type: Object,
      default: {}
    },
    plugins: {
      type: Object,
      default: {}
    },
    notes: {
      type: Object,
      default: {}
    },
    mention: {
      type: Object,
      default: {"ptt":true , "contextInfo": { "forwardingScore": 5, "isForwarded": true,  "externalAdReply": { "title": "", "body": Tᴀɪʀᴀ ʀᴀɢɴᴀʀᴏᴋ-ᴍᴅ", "mediaType": 2, "thumbnail": "https://telegra.ph/file/d2c61eac67addb31507fa.jpg", "sourceUrl": "https://wa.me/2347080968564" }}  
https://telegra.ph/file/0de1bc8d342588e897113.mp4 type/audio
https://telegra.ph/file/d04cf4fc2473f570d58d5.mp4 type/audio
https://telegra.ph/file/b36ddfaa095ea8f6768c3.mp4 type/audio
https://telegra.ph/file/879ff8080b4dfc2bcd54f.mp4 type/audio
https://telegra.ph/file/4004a6ef862f713444c21.jpg  type/sticker
https://telegra.ph/file/ae31326ba22358c4126c5.jpg type/sticker
https://telegra.ph/file/a756c9316c200429e4b72.jpg type/sticker
https://telegra.ph/file/09d12a595008be119d728.jpg type/sticker
https://telegra.ph/file/21df7ee44e18101e308f3.jpg type/sticker
https://telegra.ph/file/d2c61eac67addb31507fa.jpg type/sticker
    },
    filter: {
      type: Object,
      default: {
        taira: "what?",
        makino: "what?",
        fred: "what?"
      }
    },
    afk: {
      type: Object,
      default: {}
    },
    ...options
  });
  const alive = mongoose.model("alive", Alive);
  module.exports = {
    alive: alive
  };
