import {Scene} from 'phaser';
import skyAsset from '../assets/sky.png';

class FlappyGame extends Scene {
    constructor(config) {
        super(config);
    }

    preload() {
        this.load.image('sky', skyAsset);
    }

    create(data) {

    }

    update(time: number, delta: number) {
        super.update(time, delta);
    }
}

export default FlappyGame;