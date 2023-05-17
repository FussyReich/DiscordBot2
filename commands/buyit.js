const { SlashCommandBuilder } = require('discord.js');
const {AttachmentBuilder} = require('discord.js');
module.exports = {
	data: new SlashCommandBuilder()
		.setName('buyit')
		.setDescription('リョウに買い取ってもらう'),
	execute: async function(interaction) {
        const attachment = new AttachmentBuilder('./gifFile/Ryo-grass-eat.gif')
		//await interaction.reply('草を食べて生きていきます',{files: [attachment]});     
		await interaction.reply({content:`草を食べて生きていきます`,files: ["./gifFile/Ryo-grass-eat.gif"]})
	},
};