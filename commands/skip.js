module.exports = {
	name: 'skip',
	description: 'Skip a song!',
	execute(message) {
		const serverQueue = message.client.queue.get(message.guild.id);
		if (!message.member.voice.channel) return message.channel.send(':notes: :X: Vous devez être dans un canal vocal pour arrêter la musique! :X: :notes:');
		if (!serverQueue) return message.channel.send(':notes: :x: Il n y a aucune chanson que je pourrais sauter! :x: :notes:');
		serverQueue.connection.dispatcher.end();
	},
};