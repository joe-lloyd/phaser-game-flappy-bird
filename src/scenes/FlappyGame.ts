import {Scene} from 'phaser';
import Clouds, {Cloud} from "../entities/Clouds";
import Sky from "../entities/Sky";

class FlappyGame extends Scene {
    private clouds: Clouds;

    constructor(config) {
        super(config);
    }

    preload() {
        Sky.preload(this);
        Cloud.preload(this);
    }

    create() {
        new Sky(this, 400, 300)
        this.clouds = new Clouds(this.physics.world, this);
    }

    update(time: number, delta: number) {
        super.update(time, delta);
        this.clouds.update();
    }
}

export default FlappyGame;