module.exports = {
    nom: "salut",
    execute: (message, Discord, options) => {
        return message.channel.send(`Heureux de te voir *${options[0]}*`);
    },
    parametres: {
        verification: false,
        unique: false,
        help: "Souhaite la binevenue à un utilisateur qui a dit salut",
        utilisation: "!salut"
    }
}