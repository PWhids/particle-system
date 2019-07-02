
class ParticleSystem {

    constructor() {
        this.parts = [];
        this.interactions = [];
    }

    addPart(part) {
        this.parts.push(part);
    }

    addInteraction(inter) {
        this.interactions.push(inter);
    }

    update() {
        this.interactPairs();
        for (let p of this.parts) p.update();
    }

    interactPairs() {
        for (let i=0; i<this.parts.length-1; i++) {
            let a = this.parts[i];
            for (let j=i+1; j<this.parts.length; j++) {
                let b = this.parts[j];
                if (i === 0 && j === 1) {
                    console.log(a.vel.x);
                }
                for (let inter of this.interactions) {
                    inter(a,b);
                }
            }
        }
    }

}

module.exports = {
    ParticleSystem
};