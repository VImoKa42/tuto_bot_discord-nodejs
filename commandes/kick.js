let fonctions = require("../fonctions/log.js");

module.exports = {
    nom: "kick",
    execute: (message, Discord, options) => {
        let member = message.mentions.members.first();
        
        if (!member) {
            fonctions.erreur("Erreur Kick",`${member.user.tag} pas trouvé ou pas spécifié`,options[2]);
            return
        }
        if (!member.kickable) {
            fonctions.erreur("Erreur Kick",`${member.user.tag} n'est pas kickable`,options[2]);
            return
        }
        member
            .kick()
            .then(fonctions.infos("Kick d'un membre",`${member.user.tag} a été kicked du serveur`,options[2]))
            .catch(error => console.log(error));
    },
    parametres: {
        verification: true,
        unique: false,
        help: "Supprime un nombre de messages définis",
        utilisation: "!kick @nom du kicked"
    }
}