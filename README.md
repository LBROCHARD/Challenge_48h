# Challenge-48H

Le but de ce projet est de proposer, en 48 heures chrono, un Proof of Concept de boutique en ligne décentralisée permettant aux petits et moyens commerçants de se libérer des gros marketplaces centralisés. Chaque instances pourra en bloquer d'autres ou ajouter d'autre instances a son réseaux, ainsi toutes les données en transit doivent être sécurisé.

## Solution proposé

### Décentralisation

Afin de connecter nos instances entre elles sans passer par un serveur central et permettre de s'envoyer des données, nous avons mis en place une api qui appartiendra à chaque instances et dont elles pourront les agrémenter de ses produits disponible a la ventes, ainsi que la liste des autres api de son réseaux. De ce fait nous pouvons accéder a toutes les api sécuriser et récupérer leur produits en ventes

### Performance

Grâce a notre système d'api, chaque produit est associé à la boutique d'un serveur et pour envoyer une requete d'achat nous pouvons l'envoyer directement a l'instance qui vend le produit et permet de ne pas repasser par toute les autres instances pour retrouver le propriétaire. fin d'améliorer les performance du site web, nous aimerions récuperer les données sur les api de manière asynchrone pour les afficher au moment où on les récupère pour ne pas attendre que toutes les informations arrivent et perdre de la performance.

### Déploiement

Le déploiement de notre application n'ayant pas pus être terminé aurait été réalisé grâce a Docker, cette outil nous permet de créer des conteneur et de créer un chemin pour acceder à nos données local depuis un service. Depuis ce moment la, nous pourrions générer des instances pour chaque boutique et y accéder depuis les api de chacune. Ensuite React s'occupe d'afficher toutes les api reliés à celle de la boutique.

### Sécurisation

## Installation

Cloner le Project
`https://github.com/LBROCHARD/Challenge_48h.git`

Ensuite installer le projet à l'aide de npm

Dans 2 terminaux différents depuis le dossier Challenge-48H

Front :

```
cd .\Front\
cd .\jaja\
npm i
```

Back :

```
cd .\Back\
npm i
```

## Démarrage

Pour démarrer le projet, il suffit d'uttiliser la commande suivante

Front dans le dossier /Front/jaja:

```
npm run start
```

Back dans le dossier /Back:

```
npm run Dev
```

## Fabriqué avec

Entrez les programmes/logiciels/ressources que vous avez utilisé pour développer votre projet

_exemples :_

- [React](https://fr.reactjs.org/) - Framework JavaScript (front)
- [Node](https://nodejs.org/fr/) - Environnement d’exécution JavaScript
- [MongoDB](https://www.mongodb.com/fr-fr) - Base de donnée
- [Koa](https://www.npmjs.com/package/koa) - API
- [Axios](https://axios-http.com/fr/docs/intro) - Client HTTP
- [Docker]() - Outil de conteneurisation

## Auteurs

- **Brochard Louis** _alias_ [@LBROCHARD](https://github.com/LBROCHARD) B3
- **Pichot Romain** _alias_ [@romain-pichot](https://github.com/romain-pichot) B3
- **Youssouf Mohammed Yasser** _alias_ [@YasserSeryas](https://github.com/YasserSeryas) B3
- **Bourse Marius** _alias_ [@loguio](https://github.com/loguio) B2
- **Martin Dorian** _alias_ [@dodolerian](https://github.com/dodolerian) B1
