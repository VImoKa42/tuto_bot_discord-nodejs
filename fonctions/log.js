let { log } = require("../parametres.json");
let Discord = require("discord.js");

const infos = (titre, texte, client) => {
    let style = new Discord.MessageEmbed()
        .setColor("ORANGE")
        .addField(titre,texte,false);
    client.channels.cache.get(log).send({ embeds: [style] });
}
const erreur = (titre, texte, client) => {
    let style = new Discord.MessageEmbed()
        .setColor("RED")
        .addField(titre,texte,false);
    client.channels.cache.get(log).send({ embeds: [style] });
}

const message_log = (titre, texte, color, client) => {
    let style = new Discord.MessageEmbed()
        .setColor(color.toUpperCase())
        .addField(titre,texte,false);
    client.channels.cache.get(log).send({ embeds: [style] });
}

module.exports = {
    infos,
    erreur,
    message_log,
}