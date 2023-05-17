const { getVoiceConnection } = require('@discordjs/voice');
//const connectionFile=require('./connection')

module.exports = async function(interaction,vc){
    try {
        const connection = getVoiceConnection(vc.voice.channel.id.guild.id);
    }catch (error){
        console.error(error)
        if (interaction.replied || interaction.deferred) {
            await interaction.followUp({content: 'コマンド実行時にエラーになりました。', ephemeral: true});
        } else {
            await interaction.reply({content: 'コマンド実行時にエラーになりました。', ephemeral: true});
        }
    }
};