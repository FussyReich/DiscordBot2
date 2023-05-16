const { SlashCommandBuilder,ButtonBuilder,ButtonStyle,ActionRowBuilder } = require('discord.js');
import  connection from "./connection.js"

module.exports = {
    data: new SlashCommandBuilder()
        .setName('join')
        .setDescription('ボイスチャンネルに参加します'),
    execute: async function (interaction) {
        if (interaction.commandName === connecionFile) {
            try {
                await connection(interaction)
            } catch (error) {
                console.error(error);
                if (interaction.replied || interaction.deferred) {
                    await interaction.followUp({content: 'コマンド実行時にエラーになりました。(joinで)', ephemeral: true});
                } else {
                    await interaction.reply({content: 'コマンド実行時にエラーになりました。(joinで)', ephemeral: true});
                }
            }
        }
    }
}