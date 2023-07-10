const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('pet')
    .setDescription('Replies with a pet and a sound!'),
  async execute(interaction) {
    const PETS = ['Dindin', 'Milo', 'Ahri', 'Benji', 'Eddie'];
    const SOUNDS = ['BORK', 'MEOW', 'ARF', 'HISS', "I'M FUCKIN\' JUICED", "I'm gonna start selling my items cuz I'm poor", "I'M AN OG", 'AVENGERS ASSEMBLE', 'KAGE BUNSHIN NO JUTSU'];
    const name = PETS[Math.floor(Math.random() * PETS.length)];
    const sound = SOUNDS[Math.floor(Math.random() * SOUNDS.length)];
    await interaction.reply(`${name} says ${sound}!`);
  },
};
