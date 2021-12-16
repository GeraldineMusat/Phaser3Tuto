var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: false
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var player;
var stars;
var platforms;
var cursors;

var game = new Phaser.Game(config);

function creerCiel (that) {
    that.add.image(400, 300, 'sky');
}

function initialiserPlatforms(that){
    platforms = that.physics.add.staticGroup();
    platforms.create(400, 568, 'ground').setScale(2).refreshBody();
}

function ajouterPlatform (x, y) {
    platforms.create(x, y, 'ground');
}

function ajouterJoueur(that) {
    player = that.physics.add.sprite(100, 450, 'dude');
    player.setBounce(0.2);
    player.setCollideWorldBounds(true);
    that.physics.add.collider(player, platforms);
}

function animerJoueur(that) {
    that.anims.create({
        key: 'left',
        frames: that.anims.generateFrameNumbers('dude', { start: 0, end: 3 }),
        frameRate: 10,
        repeat: -1
    }); 
    that.anims.create({
        key: 'turn',
        frames: [ { key: 'dude', frame: 4 } ],
        frameRate: 20
    }); 
    that.anims.create({
        key: 'right',
        frames: that.anims.generateFrameNumbers('dude', { start: 5, end: 8 }),
        frameRate: 10,
        repeat: -1
    });
    cursors = that.input.keyboard.createCursorKeys();
}

function ajouterEtoiles(that, total) {
    if (total > 200) {
        total = 200;
    }
    stars = that.physics.add.group({
        key: 'star',
        repeat: total -1
    }); 
    stars.children.iterate(function (child) {
        child.x = Phaser.Math.Between(20, 780);
        child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8)); 
    });
    that.physics.add.collider(stars, platforms);
}

function collectStar (player, star) {
    star.disableBody(true, true);
}

function collecterElement (that, element) {
    that.physics.add.overlap(player, element, collectStar, null, this);
}

function bougerJoueur() {
    if (cursors.left.isDown) {
        player.setVelocityX(-160);
        player.anims.play('left', true);
    } else if (cursors.right.isDown) {
        player.setVelocityX(160);
        player.anims.play('right', true); }
    else {
        player.setVelocityX(0);
        player.anims.play('turn');
    }
    if (cursors.up.isDown && player.body.touching.down) {
        player.setVelocityY(-330);
    }
}

function preload ()
{

}

function create ()
{
    
}

function update ()
{
    
}


