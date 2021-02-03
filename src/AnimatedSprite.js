class AnimatedSprite extends Sprite {
    frameTimer;
    timeElapsed;
    animations;
    currentAnimation;

    constructor(img,animations) {
        super(img);

        this.frameTimer = 10 / 60;
        this.timeElapsed = 0;
        this.currentAnimation = 0;
        this.animations = [];
        this.isAnimating = false;

        animations.map((x) => {
          return  this.animations.push(x);
        });
    }

    update(delta) {
        this.timeElapsed += delta;

        if (this.timeElapsed >= this.frameTimer) {
            if (this.isAnimating) {
                this.animations[this.currentAnimation].nextFrame();
            }
            
            this.timeElapsed = 0;
        }
    }

    draw(ctx) {
        this.source = this.animations[this.currentAnimation].currentFrame();
        super.draw(ctx);
    }
}
