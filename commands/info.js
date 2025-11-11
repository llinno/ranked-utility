const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('info')
		.setDescription('Displays information about the server and bot.'),
	async execute(interaction) {
		const infoEmbed = new EmbedBuilder()
			.setColor('#0099ff')
			.setTitle('Server Information')
			.setDescription('Here are some useful details!')
			.addFields(
				{ name: 'Server IP', value: '`play.pika-network.net`', inline: true },
				{ name: 'Developer', value: '`muurt`', inline: true },
				{ name: 'Bot Version', value: '`1.1`', inline: true }
			)
			.setTimestamp();

		await interaction.reply({ embeds: [infoEmbed] });
	},
};
