const Discord = require('discord.js')

module.exports = {
    name: 'shop',
    description: 'Display the shop menu for the bot\'s economy',
    usage: 'shop',
    aliases: [],
    required: [],
    user: [],
    category: __dirname.split("commands\\")[1],

    premium: false,
    guildOnly: false,
    async execute(message, args, client, data) {
        let items = client.config.shop
        let itemMessage = Object.keys(items).map(c => `**${c}**: ${client.emoji.misc.coin} ${Number(items[c]).toLocaleString()}`)
        return message.sendE(`${client.user.username} Shop`, `Use the command \`${client.config.defaultSettings.prefix}buy <item>\` to purchase an item!\nMake sure you have enough money though! :wink:\n\n${itemMessage.join('\n')}`, client.colors.gold)
    }
}