module.exports = {
	name: 'stop',
	description: 'Stop all songs in the queue!',
	execute(message) {
		const serverQueue = message.client.queue.get(message.guild.id);
		if (!message.member.voice.channel) return message.channel.send(':notes: :x: Vous devez être dans un canal vocal pour arrêter la musique! :x: :notes:');
		serverQueue.songs = [];
		serverQueue.connection.dispatcher.end();
	},
};