const mineflayer = require('mineflayer');

const bot = mineflayer.createBot({
  host: process.env.MC_HOST,
  port: parseInt(process.env.MC_PORT),
  username: process.env.MC_USERNAME,
});

bot.on('spawn', () => {
  console.log('✅ Bot conectado y listo para saltar');

  setInterval(() => {
    bot.setControlState('jump', true);
    setTimeout(() => {
      bot.setControlState('jump', false);
    }, 500);
  }, 5000);
});

bot.on('error', err => console.log('❌ Error:', err));
bot.on('end', () => console.log('⚠️ Bot desconectado'));
