const { SlashCommandBuilder,ButtonBuilder,ButtonStyle,ActionRowBuilder } = require('discord.js');
const connection = require('./disconnection');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('close')
        .setDescription('ボイスチャンネルを切断します'),
    execute: async function(interaction,connection){
        try {
            connection.destroy();
            await interaction.reply('ボイスチャンネルを切断しました')
        }catch (error){
            console.error(error)
        }
    }
}
