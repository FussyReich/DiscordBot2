const { SlashCommandBuilder,ButtonBuilder,ButtonStyle,ActionRowBuilder } = require('discord.js');
//const BUTTON_ID_PREFIX = "role_"
//const RoleId = "1107536977965891587"

module.exports = {
    data: new SlashCommandBuilder()
        .setName('role')
        .setDescription('自分にロールを付与する'),
    execute: async function(interaction) {
        const Button = new ButtonBuilder()
            //.setCustomId(`${BUTTON_ID_PREFIX}${RoleId}`)
            .setCustomId('aaaaaaa')
            .setLabel('確認ロールを付与する')
            .setStyle(ButtonStyle.Primary)

        await interaction.reply({content:`ロールを選択してください`,components: [new ActionRowBuilder().addComponents(Button)]})
    },
};