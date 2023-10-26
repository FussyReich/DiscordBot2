const { SlashCommandBuilder,ButtonBuilder,ButtonStyle,ActionRowBuilder } = require('discord.js');
const roleId='1110169366898688062'
const roleMention=`<@&${roleId}>`

try {
    module.exports = {
        data: new SlashCommandBuilder()
            .setName('role')
            .setDescription('自分にロールを付与する'),
        execute: async function (interaction,ChannelId,RoleId,client) {
            const Button = new ButtonBuilder()
                .setCustomId('electricity')
                .setLabel(`電気代下げろ！を付与する`)
                .setStyle(ButtonStyle.Primary)
            const Button2=new ButtonBuilder()
                .setCustomId('remove')
                .setLabel('電気代下げろを剥奪する')
                .setStyle(ButtonStyle.Danger)
            await interaction.reply({
                content: `ロールを選択してください`,
                components: [new ActionRowBuilder().addComponents(Button,Button2)]
            })
        },
    };
}catch (error){
    console.error(error)
}