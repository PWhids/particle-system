
class Vec2 {

    constructor(xx,yy) {
        this.x = xx;
        this.y = yy;
    }

    add(other) {
        this.x += other.x;
        this.y += other.y;
    }

    addNew(other) {
        return new Vec2(this.x+other.x, this.y+other.y);
    }

    sub(other) {
        this.x -= other.x;
        this.y -= other.y;
    }

    subNew(other) {
        return new Vec2(this.x-other.x,this.y-other.y);
    }

    mult(v) {
        this.x *= v;
        this.y *= v;
    }

    multNew(v) {
        return new Vec2(this.x*v,this.y*v);
    }

    mag() {
        return Math.sqrt(this.x*this.x+this.y*this.y);
    }

    angle() {
        return Math.atan2(this.x,this.y);
    }

}

module.exports = {
    Vec2
};