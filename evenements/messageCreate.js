module.exports = (message, prefix, Discord, client, log) => {
    if(message.author.bot) return;
    let contenu = message.content;
    let auteur = message.author;
    let commande = contenu.split(/ +/);

    let options = [auteur,contenu,client];

    if(message.channel.id==log) return message.delete().then(() => console.log('message supprimé')).catch(error => console.log(error));

    if(!client.commands.has(commande[0].substring(prefix.length))) return message.channel.send("Nom de commande invalide");

    let command = client.commands.get(commande[0].substring(prefix.length));
    if(command.parametres.unique && contenu===`${prefix}${command.nom}`){
        if(command.parametres.verification){
            if(auteur.id==="915606269753167924"){
                command.execute(message, Discord, options);
            }else{
                message.reply("Tu n'as pas les droits pour executer cette commande");
            }
        }else{
            command.execute(message, Discord, options);
        }
    }else{
        command.execute(message, Discord, options);
    }
}