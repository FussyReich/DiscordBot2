const { joinVoiceChannel } = require('@discordjs/voice');
const {createAudioPlayer} = require('@discordjs/voice');


module.exports = async function(interaction,client) {
    const guild = interaction.guild
    const vc = await guild.members.fetch(interaction.member.id)

    try {
        const connection = joinVoiceChannel({
            channelId: vc.voice.channel.id,
            guildId: interaction.guildId,
            adapterCreator: interaction.guild.voiceAdapterCreator,
        });
        const player = createAudioPlayer()
        connection.subscribe(player)
        await interaction.reply('ボイスチャンネルに接続しました')
    } catch (error) {
        console.error(error);
    }
}

