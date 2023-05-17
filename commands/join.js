const { SlashCommandBuilder,ButtonBuilder,ButtonStyle,ActionRowBuilder } = require('discord.js');
const connection = require('./connection')


module.exports = {
    data: new SlashCommandBuilder()
        .setName('join')
        .setDescription('ボイスチャンネルに参加します'),
    execute: async function (interaction,client) {
        try {
            await connection(interaction,client)
        } catch (error) {
            console.error(error);
            if (interaction.replied || interaction.deferred) {
                await interaction.followUp({content: 'コマンド実行時にエラーになりました。', ephemeral: true});
            } else {
                await interaction.reply({content: 'コマンド実行時にエラーになりました。', ephemeral: true});
            }
        }
    }
}