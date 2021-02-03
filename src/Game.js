let lastUpdate = new Date();
let delta = 0;

let timer = 0;
let animations = [];
let sprites = [];
let player = null;

function preload() {
    let animation = new Animation(
        [
            { x: 0, y: 0, width: 32, height: 32 },
            { x: 32, y: 0, width: 32, height: 32 },
            { x: 64, y: 0, width: 32, height: 32 }
        ]);

    animations.push(animation);

    animation = new Animation(
        [
            { x: 0, y: 32, width: 32, height: 32 },
            { x: 32, y: 32, width: 32, height: 32 },
            { x: 64, y: 32, width: 32, height: 32 }
        ]);

    animations.push(animation);

    animation = new Animation(
        [
            { x: 0, y: 64, width: 32, height: 32 },
            { x: 32, y: 64, width: 32, height: 32 },
            { x: 64, y: 64, width: 32, height: 32 }
        ]);

    animations.push(animation);

    animation = new Animation(
        [
            { x: 0, y: 96, width: 32, height: 32 },
            { x: 32, y: 96, width: 32, height: 32 },
            { x: 64, y: 96, width: 32, height: 32 }
        ]);

    animations.push(animation);

    let img = new Image();

    img = new Image();
    img.src = 'sprites/femaleFighter.png';
    sprites.push({ name: 'femaleFighter', img: img });

    player = new AnimatedSprite(sprites[0].img, animations);
    player.destination.width = 128;
    player.destination.height = 128;
}

function update() {
    let current = new Date();
    delta = (current - lastUpdate) / 1000;
    lastUpdate = current;

    player.isAnimating = true;
    player.update(delta);

    window.requestAnimationFrame(update);
}

function render() {
    var game = document.getElementById('game');

    if (game === null) {
        return;
    }

    var ctx = game.getContext('2d');
    ctx.setTransform(1, 0, 0, 1, 0, 0);

    ctx.fillStyle = 'cornflowerblue';
    ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);

    if (player !== null)
        player.draw(ctx);

    requestAnimationFrame(render);
}

preload();

window.addEventListener('resize', () => {
    if (document.getElementById('game') !== null) {
        document.getElementById('game').height = window.innerHeight;
        document.getElementById('game').width = window.innerWidth;
    }
});

window.requestAnimationFrame(update);
window.requestAnimationFrame(render);
document.getElementById('game').height = window.innerHeight;
document.getElementById('game').width = window.innerWidth;
