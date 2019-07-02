const fs = require('fs');
const ParticleSystem = require('./ParticleSystem').ParticleSystem;
const ParticleRenderer = require('./ParticleRenderer').ParticleRenderer;

class Simulator {

    constructor() {
        this.components = [];
        // These parameters should probably be set/provided by owner
        this.maxSteps = 240;
        this.currentStep = 0;
        this.renderContext = null;
        this.canvas = null;
        this.outputDest = './output/';
        this.imgName = "test";
    }

    setRenderCanvasContext(context, canvas) {
        this.renderContext = context;
        this.canvas = canvas;
    }

    addComp(c) {
        this.components.push(c);
    }

    runSim() {
        if (this.currentStep > this.maxSteps) return;
        if (this.renderContext !== null) {
            this.renderContext.fillStyle = "rgba(0, 0, 0, 0.1)";
            this.renderContext.fillRect(0, 0, this.canvas.width, this.canvas.height);
            for (let c of this.components) {
                if (c instanceof ParticleSystem) {
                    ParticleRenderer.render(this.renderContext, c);
                }
            }
            this.saveImage();
        } 

        this.update();
        this.currentStep++;
        if (this.renderContext === null) {
            this.runSim();
        }

    }

    saveImage() {
        const fname = this.outputDest + this.imgName + this.currentStep + '.jpeg';
        const out = fs.createWriteStream(fname);
        // Disable 2x2 chromaSubsampling for deeper colors and use a higher quality
        const stream = this.canvas.createJPEGStream({
            quality: 0.9,
            chromaSubsampling: false
            });
        stream.pipe(out);
        out.on('finish', () =>  {
            console.log('Wrote file \'' + fname + '\'');
            this.runSim();
        });
    }

    update() {
        for (let c of this.components) c.update();
    }

}

module.exports = {
    Simulator
};