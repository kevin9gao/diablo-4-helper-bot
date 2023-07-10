const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('meme')
    .setDescription('Replies with a random meme from Reddit.'),
  async execute(interaction) {
    const res = await fetch("https://meme-api.com/gimme");
    const data = await res.json();
    await interaction.reply(`From r/${data.subreddit}: ${data.url}`);
  }
}
