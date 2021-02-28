# Wiki

## Lancement du projet

### Docker : 
1. Lancer l'exe Docker
2. Lancer le terminal Windows
    * Aller dans le dossier du projet (contenant le fichier docker-compose.yaml)
    * Entré la commande suivante : docker-compose up -d
3. Vérifier si "projet_qcm" à le status "is running" sur Docker ou lancer dans le navigateur "http://localhost:8081/"
4. Ne surtout pas quitter le terminal Windows (pour éviter de fermer Docker)

### Visual Code : 
1. Lancer un "npm start" dans le dossier du projet

### Postman : 
1. Afficher toute les questions : GET -> http://localhost:333/question/
2. Afficher une question spécifique : GET -> http://localhost:333/question/[id de la question]
3. Création d'une question : POST -> http://localhost:333/question/
    * Entrer les questions dans l'onglet "Body", selectionner "Raw", puis l'option "JSON" dans Postman
4. Suppression d'une question : DELETE -> http://localhost:333/question/[id de la question]
5. Mettre à jour une question : PUT -> http://localhost:333/question/[id de la question]
    * Reprendre le schéma de la question complète dans l'onglet "Body", selectionner "Raw", puis l'option "JSON" dans Postman.
    * Modifier notre question, puis l'envoyer
    * Faire un GET de la question pour révifier la modification à bien était prise en compte