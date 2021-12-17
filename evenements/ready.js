let fonctions = require("../fonctions/log.js");
let { prefix } = require("../parametres.json");

module.exports = (client) => {
    console.log("Le bot est connecté");
    fonctions.message_log("Connection du BOT",`Le BOT tuto BOT est connecté.\nprefix: ${prefix}`,"blue",client);
}