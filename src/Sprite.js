class Sprite {
    destination;
    source;
    img;
    constructor(img) {
        this.img = img;
        this.destination = new Rectangle();
        this.destination.width = img.width;
        this.destination.height = img.height;
        this.source = new Rectangle();
        this.source.width = img.width;
        this.source.height = img.height;
    }

    draw(ctx, camera) {
        ctx.drawImage(
            this.img,
            this.source.x,
            this.source.y,
            this.source.width,
            this.source.height,
            this.destination.x,
            this.destination.y,
            this.destination.width,
            this.destination.height);
    }
}

