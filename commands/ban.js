const { ActionRowBuilder, ButtonBuilder, ButtonStyle, SlashCommandBuilder } = require('discord.js');
module.exports = {
	data: new SlashCommandBuilder()
        .setName('bantest')
        .setDescription('bantest'),
	async execute(interaction) {
		const target = interaction.options.getUser('target');
		const reason = interaction.options.getString('reason') ?? 'No reason provided';

		const confirm = new ButtonBuilder()
			.setCustomId('confirm')
			.setLabel('Confirm Ban')
			.setStyle(ButtonStyle.Danger);

		const cancel = new ButtonBuilder()
			.setCustomId('cancel')
			.setLabel('Cancel')
			.setStyle(ButtonStyle.Secondary);

		const row = new ActionRowBuilder()
			.addComponents(cancel, confirm);

		const response=await interaction.reply({
			content: `Are you sure you want to ban ${target} for reason: ${reason}?`,
			components: [row],
		});
        
        const collectorFilter = i => i.user.id === interaction.user.id;

        try {
	    const confirmation = await response.awaitMessageComponent({ filter: collectorFilter, time: 60000 });

            if (confirmation.customId === 'confirm') {
            await interaction.guild.members.ban(target);
            await confirmation.update({ content: `${target.username} has been banned for reason: ${reason}`, components: [] });
            } else if (confirmation.customId === 'cancel') {
            await confirmation.update({ content: 'Action cancelled', components: [] });
            }
        } catch (e) {
	    await interaction.editReply({ content: 'Confirmation not received within 1 minute, cancelling', components: [] });
	    }
    }
};