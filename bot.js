const TelegramBot = require("node-telegram-bot-api");

const token = "7215476584:AAFrcIN7h-d0I2veq8JTQH1H64XktprbuXQ";
const bot = new TelegramBot(token, { polling: true });

bot.setWebHook(`https://king-bot.vercel.app/`);

module.exports = async (req, res) => {
  if (req.method === "POST") {
    // Process the update from Telegram
    bot.processUpdate(req.body);
    res.status(200).send("OK");
  } else {
    res.status(200).send("Hello from Telegram bot");
  }
};

// Handle every message
bot.on("message", (msg) => {
  // Delete the message
  bot.deleteMessage(msg.chat.id, msg.message_id);
});
