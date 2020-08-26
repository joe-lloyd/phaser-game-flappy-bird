import {Scene} from 'phaser';
import Clouds, {Cloud} from "../entities/Clouds";
import Sky from "../entities/Sky";
import Pipes, { Pipe } from '../entities/Pipes';
import Player from '../entities/Player';

class FlappyGame extends Scene {
    private clouds: Clouds;
    private pipes: Pipes;
    private player: Player;
    public score: number;
    public scoreText: Text;

    constructor(config) {
        super(config);
    }

    preload() {
        Sky.preload(this);
        Cloud.preload(this);
        Pipe.preload(this);
        Player.preload(this);
    }

    create() {
        this.score = 0;
        new Sky(this, 400, 300)
        this.clouds = new Clouds(this.physics.world, this);
        this.pipes = new Pipes(this.physics.world, this);
        this.player = new Player(this, 40, this.scale.height / 2);
        this.scoreText = this.add.text(50, 50, `SCORE: ${this.score}`, {
            font: '"Press Start 2P"',
            stroke: 'black',
            color: 'white',
            strokeThickness: 3,
            fontSize: '60px'
        });
    }

    update(time: number, delta: number) {
        super.update(time, delta);
        this.clouds.update();
        this.pipes.update(this.player);
        this.player.update(this.pipes);
    }
}

export default FlappyGame;
