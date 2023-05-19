const { SlashCommandBuilder } = require('discord.js');
const connection = require('./connection')
const { AudioPlayerStatus,createAudioResource,StreamType } = require('@discordjs/voice')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('join')
        .setDescription('ボイスチャンネルに参加します'),
    execute: async function (interaction,client) {
        const guild = interaction.guild;
        const member = await guild.members.fetch(interaction.member.id);
        const memberVC = member.voice.channel;

        try {
            if(!memberVC){
                await interaction.reply('vcが見つかりません')
            } else if(!memberVC.joinable){
                await interaction.reply('vcに接続できません')
            } else if (!memberVC.speakable){
                await interaction.reply('権限がありません')
            }else{
                await connection(interaction,client)
                await interaction.reply('接続しました')
            }
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