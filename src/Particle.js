const Vec2 = require('./Vec2').Vec2;

class Particle {

    constructor(xp, yp) {

        this.pos = new Vec2(xp === undefined ? 0 : xp, 
                            yp === undefined ? 0 : yp);
        this.vel = new Vec2(0,0);
        this.mass = 1.0;
        this.drag = 1.0; // ununsed for now
        this.step = 1.0;
    }

    update() {
        this.pos.add(this.vel.multNew(this.step));
    }

}

module.exports = {
    Particle
};