module.exports = {
    nom: "help",
    execute: (message, Discord, options) => {
        let style = new Discord.MessageEmbed()
            .setAuthor(options[0].username,options[0].displayAvatarURL())
            .setColor("GREEN")
            .setTitle("Listes des commandes du BOT")
            .addField("__!salut__:"," - Souhaite le bonjour à l'utilisateur.\n!salut",false)
            .addField("__!delete__:"," - Supprime un nombre *n* de messages.\n!delete nombre",false)
            .setTimestamp()
            .setFooter("#BOT");
        message.channel.send({ embeds: [style] });
    },
    parametres: {
        verification: false,
        unique: true,
        help: "Indique la liste des commandes du BOT",
        utilisation: "!help"
    }
}