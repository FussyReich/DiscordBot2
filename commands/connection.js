const { joinVoiceChannel } = require('@discordjs/voice');

export default async function connection (interactino){
    const connection = joinVoiceChannel({
        channelId: channel.id,
        guildId: channel.guild.id,
        adapterCreator: channel.guild.voiceAdapterCreator,
    });
}

