const { SlashCommandBuilder,AttachmentBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('chase')
		.setDescription('リョウを追いかける'),
	execute: async function(interaction) {
        const attachment = new AttachmentBuilder('./Ryo-escape.gif')
		await interaction.reply({content:`ダサいからヤダ`,files: ["./Ryo-escape.gif"]})
	},
};