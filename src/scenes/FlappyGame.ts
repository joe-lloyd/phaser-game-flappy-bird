import {Scene} from 'phaser';
import Clouds, {Cloud} from "../entities/Clouds";
import Sky from "../entities/Sky";
import Pipes, { Pipe } from '../entities/Pipes';

class FlappyGame extends Scene {
    private clouds: Clouds;
    private pipes: Pipes;

    constructor(config) {
        super(config);
    }

    preload() {
        Sky.preload(this);
        Cloud.preload(this);
        Pipe.preload(this);
    }

    create() {
        new Sky(this, 400, 300)
        this.clouds = new Clouds(this.physics.world, this);
        this.pipes = new Pipes(this.physics.world, this);
    }

    update(time: number, delta: number) {
        super.update(time, delta);
        this.clouds.update();
        this.pipes.update();
    }
}

export default FlappyGame;
