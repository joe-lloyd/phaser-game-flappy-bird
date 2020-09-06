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
    public music: Music;
    private musicStart = false;

    constructor(config) {
        super({
            key: "game"
        });
    }

    preload() {
        Music.preload(this);
        Sky.preload(this);
        Cloud.preload(this);
        Pipe.preload(this);
        Player.preload(this);
    }

    create() {
        new Sky(this, 400, 300);
        this.music = new Music(this);
        this.clouds = new Clouds(this.physics.world, this);
        this.pipes = new Pipes(this.physics.world, this);
        this.player = new Player(this, 40, this.scale.height / 2);
        this.score = new Score(this, 50, 50, 0)

        const loopMarker = {
            name: 'loop',
            start: 0,
            duration: 14,
            config: {
                mute: false,
                volume: 1,
                rate: 1,
                detune: 0,
                seek: 0,
                loop: true,
                delay: 0
            }
        };

        // const music  = this.sound.add('music');
        // music.addMarker(loopMarker);
        // music.play('loop');
    }

    update(time: number, delta: number) {
        if (!this.musicStart) {
            this.music.play();
            this.musicStart = true;
            console.log(this.music);
        }
        super.update(time, delta);
        this.clouds.update();
        this.pipes.update(this.player);
        this.player.update(this.pipes);
    }
}

export default FlappyGame;
