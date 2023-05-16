const { EmbedBuilder, AttachmentBuilder } = require('discord.js');
const { SlashCommandBuilder } = require('discord.js');

const file = new AttachmentBuilder('./Ryo-good-pose.gif');
const exampleEmbed = new EmbedBuilder()
	.setColor('#4c6ca9')
	.setTitle('使用できるコマンド')
	.setAuthor({ name: 'Ryo-Yamada', iconURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjPShtx36qw0-RU5qQPCT4HjWrYC45B1_Bhg&usqp=CAU' })
	.addFields(
		{ name: '/ryo', value: 'リョウに話しかける' },
		{ name: '/buit', value: 'リョウに買い取ってもらう' },
		{ name: '/help', value: 'コマンド一覧と説明を表示する' },
		{ name: '/moneyback', value: 'リョウからお金を返してもらう'},
		{ name: '/kitapower', value: '喜多パワーをオムライスにかける'},
		{ name: '/chase', value: 'リョウを追いかける'},
		{ name: '/waterplz', value: 'リョウから水をもらう'},
	)
	.setImage('attachment://Ryo-good-pose.gif')
	.setFooter({ text: 'コマンド一覧と説明は以上となります', iconURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjPShtx36qw0-RU5qQPCT4HjWrYC45B1_Bhg&usqp=CAU' });

// 以下の形式にすることで、他のファイルでインポートして使用できるようになります。
module.exports = {
	data: new SlashCommandBuilder()
		.setName('help')
		.setDescription('コマンド一覧と説明が表示されます'),
	execute: async function(interaction) {
		await interaction.reply({embeds: [exampleEmbed],files: [file]});
	},
};

