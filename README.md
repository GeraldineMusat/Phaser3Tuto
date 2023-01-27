# Phaser 3 Tutoriel Simplifie FR
Ce tutoriel simplifie les etapes de ce tutoriel Phaser3 : https://phaser.io/tutorials/making-your-first-phaser-3-game/part1

Pour commencer il faut telecharger ce projet sur son ordinateur et le dezipper. Ensuite, l'ideal est de l'ouvrir avec l'editeur de code *[Visual Studio Code](https://code.visualstudio.com/)*. 
Pour tester notre jeu il nous faut un server. Dans Visual Studio Code il existe une extension qui peut faire ca pour nous : [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)

Une fois le projet ouvert avec Visual Studio Code et l'extension Live Server installee, on peut faire un clique droit sur le fichier `index.html` et cliquer sur `Open with Live Server`. Le jeu s'ouvre alors dans un navigateur.

>Pour les etapes suivantes, vous allez devoir editer le ficher `script.js`.

## Etape 0
Le ficher `script.js` contient au debut `config` qui sont les configurations necessaire pour definir le jeu. 

Ensuite, on retrouve la declaration de nos variables dont on va avoir besoin dans les etapes suivantes. Puis une multitude de fonction. Ces fonctions `creerCiel(this);`, `initialiserPlatforms(this);`, ... sont les fonctions que vous allez devoir ajouter au bon endroit dans le script pour creer petit a petit votre jeu. Ces fonctions sont deja rempli, elles sont prete a etre utilisees.

A la fin, vous allez trouver 3 fonctions vides : `preload()`, `create()` et `update()`.

#### Prealod()
Cette fonction est appelee au tout debut du jeu et sert a charger les images pour notre jeu.

#### Create()
Cette fonction est appelee ensuite et sert a creer nos elements dans le jeu, c'est cette fonction qui nous sert a afficher nos images dans le jeu.

#### Update()
Cette fonction sera pour les mouvements, elle est appelee tous les X temps. 

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
