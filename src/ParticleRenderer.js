
class ParticleRenderer {

    static render(ctx, pSystem) {
    
        ctx.fillStyle = 'white';
        for (let part of pSystem.parts) {
            this.circle(ctx, part, 3);
        }
    }

    static circle(ctx, p, radius) {
        ctx.beginPath();
        ctx.arc(p.pos.x, p.pos.y, radius, 0, 2 * Math.PI);
        ctx.fill();
    }

}

module.exports = {
    ParticleRenderer
};