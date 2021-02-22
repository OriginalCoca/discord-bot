const { getUserFromMention } = require('../util/getUser')

module.exports = {
	name: 'ban',
	description: 'Ban a player',
	execute(message, client) {
		const split = message.content.split(/ +/);
		const args = split.slice(1);

		const member = getUserFromMention(args[0], client);

		if (!member) {
			return message.reply(':X: Vous devez mentionner le membre que vous souhaitez bannir :X:');
		}

		if (!message.member.permissions.has("BAN_MEMBERS")) {
			return message.reply('Je ne peux pas bannir cet utilisateur.');
		}

		return message.guild.members.ban(member)
			.then(() => message.reply(`L'utilisateur ${member.username} a été banni sur serveur discord Pantoufle Studio.`))
			.catch(error => message.reply(':X: Désolé, une erreur est survenue lors de la commande. (Code erreur : BA-09 à report à Florian.)'));
	},
};