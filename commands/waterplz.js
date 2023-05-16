const { SlashCommandBuilder,AttachmentBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('waterplz')
		.setDescription('リョウから水をもらう'),
	execute: async function(interaction) {
        const attachment = new AttachmentBuilder('./Ryo-sighing.gif')   
		await interaction.reply({content:`水？自分で取りに来て`,files: ["./Ryo-sighing.gif"]})
	},
};