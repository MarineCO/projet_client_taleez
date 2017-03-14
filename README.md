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

ou 

**JQuery**
`npm install jquery`


	2) Mise en place :

	*2 options possibles : 	

		- déploiement de l'extension 
		- chargement de l'extension par l'ajout du dossier contenant l'extension dans la partie:  Plus d'outils => Extensions de votre navigateur chrome. Cette deuxième méthode implique qu'il faut fournir le dossier à chaque recruteur et qu'ils installent manuellement cette extension.


**Déploiement**


**Chargement manuel**


## III - Fonctionnement des fichiers

**background.js**



**app.js**



**popup.js**



**manifest.json**







## IV - L'extension



		


Auteurs : 

Marine Colonge : https://github.com/MarineCO
Bassem Rachdi : https://github.com/rachdi
Ru Tan : https://github.com/rutanjou
