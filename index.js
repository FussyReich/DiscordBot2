// hey.jsのmodule.exportsを呼び出します。
const heyFile = require('./commands/hey.js');
const buyitFile=require('./commands/buyit.js');
const helpFile=require('./commands/help.js');
const moneybackFile=require('./commands/moneyback.js');
const kitapowerFile=require('./commands/kitapower.js');
const chaseFile=require('./commands/chase.js');
const waterplzFile=require('./commands/waterplz.js');
const buttonFile=require('./commands/button.js');
const joinFile=require('./commands/join.js')
const closeFile=require('./commands/close')

const { applicationId, guildId, token } = require('./config.json');
const { REST, Routes } = require('discord.js');

// discord.jsライブラリの中から必要な設定を呼び出し、変数に保存します
const { Client, Events, GatewayIntentBits } = require('discord.js');

// クライアントインスタンスと呼ばれるオブジェクトを作成します
const client = new Client({ intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildMessageReactions
    ] 
});

// クライアントオブジェクトが準備OKとなったとき一度だけ実行されます
client.once(Events.ClientReady, c => {
	console.log(`準備OKです! ${c.user.tag}がログインします。`);
    // 登録コマンドを呼び出してリスト形式で登録
    const commands = [];

    commands.push(heyFile.data.toJSON())
    commands.push(buyitFile.data.toJSON())
    commands.push(helpFile.data.toJSON())
    commands.push(moneybackFile.data.toJSON())
    commands.push(kitapowerFile.data.toJSON())
    commands.push(chaseFile.data.toJSON())
    commands.push(waterplzFile.data.toJSON())
    commands.push(buttonFile.data.toJSON())
    commands.push(joinFile.data.toJSON())
    commands.push(closeFile.data.toJSON())

    // DiscordのAPIには現在最新のversion10を指定
    const rest = new REST({ version: '10' }).setToken(token);

    // Discordサーバーにコマンドを登録
    (async () => {
        try {
            await rest.put(
                Routes.applicationGuildCommands(applicationId, guildId),
                { body: commands },
            );
            console.log('サーバー固有のコマンドが登録されました！');
        } catch (error) {
            console.error('コマンドの登録中にエラーが発生しました:', error);
        }
    })();
});

const lastSendTime={}
const prefix='!'
//スラッシュコマンドに応答するには、interactionCreateのイベントリスナーを使う必要があります
client.on(Events.InteractionCreate, async interaction => {
    // スラッシュ以外のコマンドの場合は対象外なので早期リターンさせて終了します
    // コマンドにスラッシュが使われているかどうかはisChatInputCommand()で判断しています
    if (interaction.isChatInputCommand()){
        // heyコマンドに対する処理
        if (interaction.commandName === heyFile.data.name) {
            try {
                await heyFile.execute(interaction);
            } catch (error) {
                console.error(error);
                if (interaction.replied || interaction.deferred) {
                    await interaction.followUp({ content: 'コマンド実行時にエラーになりました。', ephemeral: true });
                } else {
                    await interaction.reply({ content: 'コマンド実行時にエラーになりました。', ephemeral: true });
                }
            }
        } else if (interaction.commandName === buyitFile.data.name){
            try {
                await buyitFile.execute(interaction);
            } catch (error) {
                console.error(error);
                if (interaction.replied || interaction.deferred) {
                    await interaction.followUp({ content: 'コマンド実行時にエラーになりました。', ephemeral: true });
                } else {
                    await interaction.reply({ content: 'コマンド実行時にエラーになりました。', ephemeral: true });
                }
            }
        }else if (interaction.commandName === helpFile.data.name){
            try {
                if (lastSendTime[interaction.channel.id]) {
                    if (Date.now() - lastSendTime[interaction.channel.id][interaction.user.id] <= 1000 /* ms */)
                        return await interaction.reply('スパムしないでください！')
                    lastSendTime[interaction.channel.id][interaction.user.id] = Date.now()
                    interaction.member.timeout(5*60*1000)
                        .then(() => console.log("Timed out member"))
                        .catch(console.log);
                }else {
                    lastSendTime[interaction.channel.id] = {}
                    lastSendTime[interaction.channel.id][interaction.user.id] = Date.now()
                }
                await helpFile.execute(interaction);
            } catch (error) {
                console.error(error);
                if (interaction.replied || interaction.deferred) {
                    await interaction.followUp({ content: 'コマンド実行時にエラーになりました。', ephemeral: true });
                } else {
                    await interaction.reply({ content: 'コマンド実行時にエラーになりました。', ephemeral: true });
                }
            }
        }else if (interaction.commandName === moneybackFile.data.name){
            try {
                await moneybackFile.execute(interaction);
            } catch (error) {
                console.error(error);
                if (interaction.replied || interaction.deferred) {
                    await interaction.followUp({ content: 'コマンド実行時にエラーになりました。', ephemeral: true });
                } else {
                    await interaction.reply({ content: 'コマンド実行時にエラーになりました。', ephemeral: true });
                }
            }
        }else if (interaction.commandName === kitapowerFile.data.name){
            try {
                await kitapowerFile.execute(interaction);
            } catch (error) {
                console.error(error);
                if (interaction.replied || interaction.deferred) {
                    await interaction.followUp({ content: 'コマンド実行時にエラーになりました。', ephemeral: true });
                } else {
                    await interaction.reply({ content: 'コマンド実行時にエラーになりました。', ephemeral: true });
                }
            }
        }else if (interaction.commandName === chaseFile.data.name){
            try {
                await chaseFile.execute(interaction);
            } catch (error) {
                console.error(error);
                if (interaction.replied || interaction.deferred) {
                    await interaction.followUp({ content: 'コマンド実行時にエラーになりました。', ephemeral: true });
                } else {
                    await interaction.reply({ content: 'コマンド実行時にエラーになりました。', ephemeral: true });
                }
            }
        }else if (interaction.commandName === waterplzFile.data.name){
            try {
                await waterplzFile.execute(interaction);
            } catch (error) {
                console.error(error);
                if (interaction.replied || interaction.deferred) {
                    await interaction.followUp({ content: 'コマンド実行時にエラーになりました。', ephemeral: true });
                } else {
                    await interaction.reply({ content: 'コマンド実行時にエラーになりました。', ephemeral: true });
                }
            }
        }else if (interaction.commandName === buttonFile.data.name){
            try {
                await buttonFile.execute(interaction);
            } catch (error) {
                console.error(error);
                if (interaction.replied || interaction.deferred) {
                    await interaction.followUp({ content: 'コマンド実行時にエラーになりました。', ephemeral: true });
                } else {
                    await interaction.reply({ content: 'コマンド実行時にエラーになりました。', ephemeral: true });
                }
            }
        }else if (interaction.commandName === joinFile.data.name){
            try {
                await joinFile.execute(interaction,client);
            } catch (error) {
                console.error(error);
                if (interaction.replied || interaction.deferred) {
                    await interaction.followUp({ content: 'コマンド実行時にエラーになりました。', ephemeral: true });
                } else {
                    await interaction.reply({ content: 'コマンド実行時にエラーになりました。', ephemeral: true });
                }
            }
        }else if (interaction.commandName === closeFile.data.name){
            try {
                await closeFile.execute(interaction,client);
                client.login(token);
            } catch (error) {
                console.error(error);
                if (interaction.replied || interaction.deferred) {
                    await interaction.followUp({ content: 'コマンド実行時にエラーになりました。', ephemeral: true });
                } else {
                    await interaction.reply({ content: 'コマンド実行時にエラーになりました。', ephemeral: true });
                }
            }
        }
    }else if(interaction.isButton){
        if (interaction.message.interaction.commandName === 'buttontest'){
            try {
                await interaction.reply({content:`水？自分で取りに来て`,files: ["./Ryo-sighing.gif"]})
            } catch (error) {
                console.error(error);
                if (interaction.replied || interaction.deferred) {
                    await interaction.followUp({ content: 'コマンド実行時にエラーになりました。', ephemeral: true });
                } else {
                    await interaction.reply({ content: 'コマンド実行時にエラーになりました。', ephemeral: true });
                }
            }
        }
    }else{
        console.error(`${interaction.commandName}というコマンドには対応していません。`);
    }
});

// ログインします
client.login(token);