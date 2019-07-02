
class ParticleInteraction {

    static attract(a, b, strength) {
        let diff = a.pos.subNew(b.pos);
        const mg = diff.mag();
        diff.mult(strength/(mg*mg*mg+10));
        a.vel.sub(diff);
        b.vel.add(diff);
    }

}

module.exports = {
    ParticleInteraction
};