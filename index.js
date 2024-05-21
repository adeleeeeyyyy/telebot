const telebot = require('node-telegram-bot-api')
const token = "6701500674:AAGEBIKLLDeJirXwcuWMDCI_ADOYJN1NinI"
const bot = new telebot(token, { polling: true });

bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  const messageText = msg.text;

  if (messageText === '/start') {
    bot.sendMessage(chatId, 'Pesan ini dikirim melalui node-telegram-bot-api');
  }
});
