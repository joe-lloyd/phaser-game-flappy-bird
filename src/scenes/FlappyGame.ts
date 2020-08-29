import {Scene} from 'phaser';
import Clouds, {Cloud} from "../entities/Clouds";
import Sky from "../entities/Sky";
import Pipes, { Pipe } from '../entities/Pipes';
import Player from '../entities/Player';
import Score from '../entities/Score';
import Music from '../entities/Music';

class FlappyGame extends Scene {
    private clouds: Clouds;
    private pipes: Pipes;
    private player: Player;
    public score: Score;
    public music: Phaser.Sound.BaseSound;

    constructor(config) {
        super({
            key: "game"
        });
    }

    preload() {
        Music.preload(this)
        Sky.preload(this);
        Cloud.preload(this);
        Pipe.preload(this);
        Player.preload(this);
    }

    create() {
        new Music(this);
        new Sky(this, 400, 300)
        this.clouds = new Clouds(this.physics.world, this);
        this.pipes = new Pipes(this.physics.world, this);
        this.player = new Player(this, 40, this.scale.height / 2);
        this.score = new Score(this, 50, 50, 0)
    }

    update(time: number, delta: number) {
        super.update(time, delta);
        this.clouds.update();
        this.pipes.update(this.player);
        this.player.update(this.pipes);
    }
}

export default FlappyGame;
