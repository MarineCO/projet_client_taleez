# Extension Google Chrome 

##Sommaire
I. Introduction
II. Guide d'installation
III. L'extension


## I - Introduction

Boxmyjob, entreprise créée en 2014, propose une solution permettant d’épingler les offres d’emploi, les répertorier et de toutes les piloter dans un espace personnel sur Boxmyjob.

Le projet Taleez est né de l'envie de la startup de se rapprocher des entreprises, et plus particulièrement des recruteurs, plutôt que des candidats.

Cette extension chrome a pour objectif de faciliter le travail des recruteurs pour la recherche proactive de candidats. 
Elle permet de sauvegarder une sélection de données extraites d'un profil (type Linkedin) au format JSON.

	{"name":"Bassem Rachdi","headline":"En recherche de stage ( web développeur junior)","linkedin":"  linkedin.com\/in\/bassem-rachdi-69a231128","email":"  bigking3100@gmail.com","tel":"Pas de téléphone"}

	{"name":"Marine Colonge","headline":"Actuellement en formation : web développeuse junior","linkedin":"  linkedin.com\/in\/marine-colonge-b90a24128","email":"  marinecolonge@gmail.com","tel":"Pas de téléphone"}

	{"name":"Ru Tan","headline":"Cofondatrice - SAS INNOSIDE ","linkedin":"  linkedin.com\/in\/ru-tan-4543a390","email":"  rtan@innoside.com","tel":"Pas de téléphone"}

Ces données sont ensuite rapatriées vers l'environnement taleez du recruteur.


## II - Guide d'installation

	1) Prérequis 

Pour pouvoir profiter pleinement de cette extension, une dépendance est nécessaire. Toutes les commandes sont à taper en ligne de commande dans un terminal  : 

**Axios**
`npm install axios`

Les requêtes axios peuvent être remplacées par des requêtes ajax (et donc utilisation de jQuery à la place d'axios), la configuration de ces 2 formes de requêtes sont quasiment identiques.


	2) Mise en place :

2 options possibles : 	

		- déploiement de l'extension 
		- chargement de l'extension par l'ajout du dossier contenant l'extension dans la partie:  Plus d'outils => Extensions de votre navigateur chrome. Cette deuxième méthode implique qu'il faut fournir le dossier à chaque recruteur et qu'ils installent manuellement cette extension.


**Déploiement via le Chrome Web Store**

Pour déployer votre extension, il convient de procéder comme suit :
	1) Créer un fichier zip de votre application
	2) Créer un compte développeur
	3) Téléchargez votre application via le dashboard développeur de chrome
	4) Préparer une fiche contenu précisant la description détaillée de l'application, une icone, une vidéo ou une capture d'écran montrant ce que l'application fait, la catégorie principale de l'application ainsi que la langue.
	5) Payer les frais d'inscription développeur (5$). Pour plus d'informations sur l'enregistrement [ici](https://developer.chrome.com/webstore?visit_id=1-636252590093195208-2055888407&rd=2)
	6) Publier votre application


Pour plus de précisions concernant la publication d'une extension, je vous invite à lire ceci :
[Publier votre extension](https://developer.chrome.com/webstore/publish)
[Installation](https://developer.chrome.com/webstore/inline_installation)


**Chargement manuel**

Pour charger manuellement l'extension, il faut se rendre dans l'option "Plus d'outils" de votre navigateur chrome, puis "Extensions" et activer le mode développeur. 
Il ne vous reste plus qu'à charger l'extension non empaquetée via le bouton dédié.
Pour tout changement apporté dans vos fichiers, n'oubliez pas d'actualiser l'extension avant de l'utiliser.

Pour plus de détails, vous pouvez vous rendre sur la doc de chrome : [ici](https://developer.chrome.com/extensions/external_extensions)

## III - Fonctionnement des fichiers

**background.js**

En liaison avec app.js
Script de fond

**app.js**

En liaison avec popup.js
Gère le scrappage des informations


**popup.js**

En liaison avec index.html
Ne pas oublier de modifier la variable serverUrl (1ère variable dans le fichier)
Gère l'affichage des données dans la popup


**index.html**
Gère l'affichage de la popup


**manifest.json**

Mise en place de la structure de la popup et de ces fonctionnalités/options.    

## IV - L'extension

Il faut dans un premier temps se connecter sur Linkedin et se rendre sur le profil choisi, puis cliquer sur l'extension qui se matérialise sous la forme du logo de Taleez et apparait en haut à droite de la barre d'adresse du navigateur Chrome.
Si vous n'êtes pas sur un profil linkedin, la récupération des données ne pourra s'effectuer correctement.

Activation extension sur un site lambda :
![Imgur](http://i.imgur.com/lXFauDM.png)


Activation extension sur un profil linkedin :
![Imgur](http://i.imgur.com/k5V1xRJ.png)

Une fois le profil voulu scanné, il ne vous reste plus qu'à sauvegarder ce dernier.

La réussite de l'opération se matérialisera par un message de réussite :      
![Imgur](http://i.imgur.com/5w9Hdr8.png)

ou un message d'erreur :       
![Imgur](http://i.imgur.com/SDSv5Jz.png)


Si la sauvegarde s'est bien déroulé, le recruteur peut poursuivre sa recherche et se diriger sur un autre profil après la fermeture automatique de la popup.


Auteurs : 

Marine Colonge : https://github.com/MarineCO
Bassem Rachdi : https://github.com/rachdi
Ru Tan : https://github.com/rutanjou
