import {Scene} from 'phaser';
import skyAsset from '../assets/sky.png';
import Clouds, {Cloud} from "../entities/Clouds";

class FlappyGame extends Scene {
    private clouds: Clouds;

    constructor(config) {
        super(config);
    }

    preload() {
        this.load.image('sky', skyAsset);
        Cloud.preload(this);
    }

    create() {
        this.add.image(400, 300, 'sky');
        this.clouds = new Clouds(this.physics.world, this);
    }

    update(time: number, delta: number) {
        super.update(time, delta);
    }
}

export default FlappyGame;