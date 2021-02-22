module.exports = {
	name: 'purge',
	description: 'Delete the last messages in all chats.',
	async execute(message) {
		const args = message.content.split(' ');
		let deleteCount = 0;
		try {
			deleteCount = parseInt(args[1], 10);
		}catch(err) {
			return message.reply(':X: Veuillez indiquer le nombre de messages à supprimer. (max 100) :X:')
		}
        

		if (!deleteCount || deleteCount < 2 || deleteCount > 100)
			return message.reply('Veuillez indiquer un nombre entre 2 et 100 pour le nombre de messages à supprimer');

		const fetched = await message.channel.messages.fetch({
			limit: deleteCount,
		});
		message.channel.bulkDelete(fetched)
			.catch(error => message.reply(`:X: Impossible de supprimer les messages en raison de: ${error} :X:`));
	},
};