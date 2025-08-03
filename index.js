const mineflayer = require('mineflayer');

const bot = mineflayer.createBot({
  host: 'WarsMCs.aternos.me',  // <-- Aquí va tu IP de Aternos
  port: 64599,                   // <-- Cambia si tu Aternos usa otro puerto
  username: 'BotActivo'        // <-- El nombre del bot en Minecraft
});

bot.on('spawn', () => {
  console.log('🤖 Bot conectado y saltando');
  setInterval(() => {
    bot.setControlState('jump', true);
    setTimeout(() => {
      bot.setControlState('jump', false);
    }, 500);
  }, 5000);
});

bot.on('error', err => console.log('❌ Error:', err));
bot.on('end', () => console.log('⚠️ Bot desconectado'));
