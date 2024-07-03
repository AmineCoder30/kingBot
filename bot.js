const TelegramBot = require("node-telegram-bot-api");
const members = require("./members");

const token = "7215476584:AAFrcIN7h-d0I2veq8JTQH1H64XktprbuXQ";
const bot = new TelegramBot(token, { polling: true });

// Handle every message
bot.on("message", (msg) => {
  bot.deleteMessage(msg.chat.id, msg.message_id);
});
