# Phaser3Tuto

## Etape 1
On va commencer par charger le ciel dans le jeu. L'image se trouve dans 'assets/sky.png'. 
Dans la fonction `preaload()` ajouter `this.load.image('sky', 'assets/sky.png');`

## Etape 2
On va maintenant afficher le ciel grace a la fonction `creerCiel(this);` que l'on va ajouter dans la fonction `create()`

## Etape 3
Pour pouvoir afficher des platformes on va devoir d'abord charger l'image dans la fonction `preload()` comme pour *l'etape 1*, on doit lui donner comme nom: `ground`.

## Etape 4
Ensuite, on doit initialiser la platforme dans la fonction `create()` en ajoutant `initialiserPlatforms(this);`. On peut voir ce que ca donne dans le jeu. 

## Etape 5
Pour pouvoir ajouter une autre plateforme, on peut utiliser `ajouterPlatform(x, y);` dans la fonction `create()`. La fonction `ajouterPlatform(x, y)` a deux parametres `x` et `y` qui sont les coordonnees pour placer les plateformes dans le jeu.

Par exemple, tu peux ajouter une plateforme aux coordonnees x=600 et y=400. On peut ajouter autant de plateforme que l'on veut.

## Etape 6
Il nous faut un joueur! Pour ajouter le joueur `dude` on doit ajouter dans la fonction `create()` ca: `ajouterJoueur(this);`

## Etape 7
Pour faire bouger le joueur dans le jeu on doit d'abord ajouter des animations au joueur. Pour cela, on va aller dans la fonction `create()` et ajouter la ligne `animerJoueur(this);`. Ensuite, on doit aller dans la fonction `update()` pour activer les mouvements `bougerJoueur();`.
