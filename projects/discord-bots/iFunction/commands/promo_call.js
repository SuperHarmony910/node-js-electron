require('dotenv').config();
const PROMO = 'https://github.com/SuperHarmony910'
module.exports = {
  name: "promo",
  description: "Promotion of whoever you want it to be!",
  execute(msg, args) {
    msg.channel.send(PROMO);
  }
}
