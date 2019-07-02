const Vec2 = require('./Vec2').Vec2;
const Particle = require('./Particle').Particle;

class ParticleMaker {

    constructor(boundX, boundY) {
        this.bounds = new Vec2(boundX, boundY);
    }

    randomPart() {
        const xp = Math.random()*this.bounds.x;
        const yp = Math.random()*this.bounds.y;
        const p = new Particle(xp,yp);
        p.vel.x = (Math.random() - 0.5)*1;
        p.vel.y = (Math.random() - 0.5)*1;
        return p;
    }

}

module.exports = {
    ParticleMaker
};