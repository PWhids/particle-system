const { createCanvas, loadImage } = require('canvas');
//import { createCanvas } from 'canvas';

const ParticleMaker = require('./ParticleMaker').ParticleMaker;
const ParticleSystem = require('./ParticleSystem').ParticleSystem;
const ParticleInteraction = require('./ParticleInteraction').ParticleInteraction;
const Simulator = require('./Simulator').Simulator;
const iterate = require('./util.js').iterate;

class ExperimentSim {

    constructor() {
        this.xSize = 400;
        this.ySize = 400;
        this.pCount = 10;
        this.partMake = new ParticleMaker(this.xSize, this.ySize);
        this.partSys = new ParticleSystem();
        this.partSys.addInteraction( (a,b) => ParticleInteraction.attract(a,b,5.0) );
        iterate(() => this.partSys.addPart(this.partMake.randomPart()), this.pCount);
        this.sim = new Simulator();
        const canvas = createCanvas(this.xSize, this.ySize);
        const ctx = canvas.getContext('2d');
        this.sim.setRenderCanvasContext(ctx, canvas);
        this.sim.addComp(this.partSys);
    }

    start() {
        this.sim.runSim();
    }

}

module.exports = {
    ExperimentSim
};