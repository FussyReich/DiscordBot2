const { SlashCommandBuilder,AttachmentBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('moneyback')
		.setDescription('お金を返してもらう'),
	execute: async function(interaction) {
        const attachment = new AttachmentBuilder('./gifFile/Ryo-cat-ear.gif')
		await interaction.reply({content:`🤥`,files: ["./gifFile/Ryo-cat-ear.gif"]})
	},
};