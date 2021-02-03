class Animation {
    srcs;
    frame;

    constructor(srcs) {
        this.srcs = [];
        this.frame = 0;

        for (var i = 0; i < srcs.length; i++) {
            let r = new Rectangle();
            r.x = srcs[i].x;
            r.y = srcs[i].y;
            r.width = srcs[i].width;
            r.height = srcs[i].height;

            this.srcs.push(r);
        }
    }

    currentFrame() {
        return this.srcs[this.frame];
    }

    nextFrame() {
        this.frame++;

        if (this.frame === this.srcs.length) {
            this.frame = 0;
        }
    }

    addSource(r) {
        this.srcs.push(r);
    }
}
