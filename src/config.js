require("dotenv").config()
module.exports = {
  MONGO_URI: process.env.MONGO_URI || null,
  APP_NAME: process.env.APP_NAME || null,
  PORT: process.env.PORT || null,
  URL_PREFIX: process.env.URL_PREFIX || null,
  ACCESSS_TOKEN_EXP: process.env.ACCESSS_TOKEN_EXP || null,
  REFREST_TOKEN_EXP: process.env.REFREST_TOKEN_EXP || null,
  KEYPHASE: process.env.KEYPHASE || null,
}