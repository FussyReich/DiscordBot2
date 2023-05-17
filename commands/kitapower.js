const { SlashCommandBuilder,AttachmentBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('kitapower')
		.setDescription('オムライスに喜多パワーをかける'),
	execute: async function(interaction) {
        const attachment = new AttachmentBuilder('./gifFile/Ryo-omelet.gif')
		await interaction.reply({content:`まろやか！！！`,files: ["./gifFile/Ryo-omelet.gif"]})
	},
};

/*

// should definitely increase the time in your collector.
const collector = interaction.createMessageComponentCollector({ time: 3500 });

collector.on('collect', async i => {
	if (!interaction.isButton()) return
	if(i.customId == 'waterplz'){
		const waterplzFile=require('waterplz.js')
		await waterplzFile.execute(interaction);
	}
});
*/