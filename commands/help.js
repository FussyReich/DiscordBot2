const { EmbedBuilder, AttachmentBuilder } = require('discord.js');
const { SlashCommandBuilder } = require('discord.js');

const exampleEmbed = new EmbedBuilder()
	.setColor('#c0fc8a')
	.setTitle('使用できるコマンド一覧なのだ')
	.setAuthor({ name: 'ずんだもん', iconURL: 'https://stat.ameba.jp/user_images/20230529/22/suusan19680419/42/a7/j/o0554055415291263577.jpg' })
	.addFields(
		{ name: '/help', value: 'コマンド一覧と説明を表示するのだ' },
		{ name: '/join', value: 'ボイスチャンネルに参加するのだ'},
		{ name: '/close', value: 'ボイスチャンネルから切断するのだ'},
	)
	.setImage('https://media.tenor.com/1vcIRt2Ztn8AAAAC/%E3%81%9A%E3%82%93%E3%81%A0%E3%82%82%E3%82%93-%E8%B8%8A%E3%82%89%E3%81%AA%E3%81%84%E3%81%9A%E3%82%93%E3%81%A0.gif')
	.setFooter({ text: 'コマンド一覧と説明はこれで全部なのだ', iconURL: 'https://stat.ameba.jp/user_images/20230529/22/suusan19680419/42/a7/j/o0554055415291263577.jpg' });

// 以下の形式にすることで、他のファイルでインポートして使用できるようになります。
try {
	module.exports = {
	data: new SlashCommandBuilder()
		.setName('help')
		.setDescription('コマンド一覧と説明が表示されるのだ'),
	execute: async function(interaction) {
		await interaction.reply({embeds: [exampleEmbed]});
	},
};
} catch (error) {
	console.error(error)
}


