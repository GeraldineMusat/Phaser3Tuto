# Phaser3Tuto
Ce tutoriel simplifie les etapes de ce tutoriel de Phaser3 : https://phaser.io/tutorials/making-your-first-phaser-3-game/part1

Pour commencer il faut telecharger ce projet sur son ordinateur et le dezipper. Ensuite, l'ideal est de l'ouvrir avec l'editeur de code *[Visual Studio Code](https://code.visualstudio.com/)*. 

## Etape 1
On va commencer par charger le ciel dans le jeu. L'image se trouve dans 'assets/sky.png'. 

Dans la fonction `preaload()` ajouter `this.load.image('sky', 'assets/sky.png');` Cette fonction donne a l'image le nom `sky`.

## Etape 2
On va maintenant afficher le ciel grace a la fonction `creerCiel(this);` que l'on va ajouter dans la fonction `create()`

## Etape 3
Pour pouvoir afficher des platformes on va devoir d'abord charger l'image dans la fonction `preload()` comme pour *l'etape 1*, on doit lui donner comme nom: `ground`.

## Etape 4
Ensuite, on doit initialiser la platforme dans la fonction `create()` en ajoutant `initialiserPlatforms(this);`. On peut voir ce que ca donne dans le jeu. 

## Etape 5
Pour pouvoir ajouter une autre plateforme, on peut utiliser `ajouterPlatform(x, y);` dans la fonction `create()`. La fonction `ajouterPlatform(x, y)` a deux parametres `x` et `y` qui sont les coordonnees pour placer les plateformes dans le jeu.

Par exemple, tu peux essayer d'ajouter une plateforme aux coordonnees x=600 et y=400. On peut ajouter autant de plateforme que l'on veut.

## Etape 6
Il nous faut un joueur! Pour ajouter le joueur `dude` on doit dans un premier temps charger l'image dans `preload()` grace a cette ligne: 

`this.load.spritesheet('dude', 'assets/dude.png', { frameWidth: 32, frameHeight: 48 });` 

Ensuite pour ajouter le joueur dans le jeu on doit ecrire cette ligne : `ajouterJoueur(this);` dans la fonction `create()`.

## Etape 7
Pour faire bouger le joueur dans le jeu on doit d'abord ajouter des animations au joueur. Pour cela, on va aller dans la fonction `create()` et ajouter la ligne `animerJoueur(this);`. Ensuite, on doit aller dans la fonction `update()` pour activer les mouvements `bougerJoueur();`.

## Etape 8
Maintenant passons aux etoiles. On doit d'abord charger l'image pour les etoiles. On va faire la meme chose que dans *l'etape 1*. L'image doit s'appeler `star`.
Maintenant, on peut ajouter des etoiles de facon aleatoir grace a la fonction `ajouterEtoiles(this, total);`. Il faut remplacer `total` par le nombre total d'etoile a afficher dans le jeu.

## Etapes 9
Si on veut que le joueur collect les etoiles, on doit ajouter dans la fonction `create()` cette ligne: `collecterElement(this, stars);`

## Pour aller plus loin voici l'etape suivante dans le tutoriel officiel de Phaser3
https://phaser.io/tutorials/making-your-first-phaser-3-game/part9
