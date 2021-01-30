require('dotenv').config();
const PROMO = 'https://github.com/SuperHarmony910'
module.exports = {
  name: "promo",
  description: "Promotion of whoever you want it to be!",
  execute(message, args) {
    message.channel.send(PROMO);
  }
}
