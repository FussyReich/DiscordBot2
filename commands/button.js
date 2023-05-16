const { SlashCommandBuilder,ButtonBuilder,ButtonStyle,ActionRowBuilder } = require('discord.js');
//const BUTTON_ID_PREFIX = "role_"
//const RoleId = "1107536977965891587"

module.exports = {
	data: new SlashCommandBuilder()
		.setName('buttontest')
		.setDescription('test'),
	execute: async function(interaction) {
        const button = new ButtonBuilder()
          //.setCustomId(`${BUTTON_ID_PREFIX}${RoleId}`)
		  	.setCustomId('waterplz')
            .setLabel('Click me!')
            .setStyle(ButtonStyle.Primary)
        
		await interaction.reply({content:`水？自分で取りに来て`,components: [new ActionRowBuilder().addComponents(button)]})
	},
};