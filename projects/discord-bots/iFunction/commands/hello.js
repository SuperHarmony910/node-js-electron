module.exports = {
  name: 'hello',
  description: 'A simple greeting!',
  execute(msg, args) {
    msg.reply('Hello!');
    msg.channel.send('Hello, World!');
  },
};
