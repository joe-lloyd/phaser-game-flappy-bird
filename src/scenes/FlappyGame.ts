import {Scene} from 'phaser';
import Clouds, {Cloud} from "../entities/Clouds";
import Sky from "../entities/Sky";
import Pipes, { Pipe } from '../entities/Pipes';
import Player from '../entities/Player';
import Score from '../entities/Score';
import Music from '../entities/Music';
import MuteButton from '../entities/MuteButton';
import Camera from '../entities/Camera';

class FlappyGame extends Scene {
    private clouds: Clouds;
    public pipes: Pipes;
    public player: Player;
    public score: Score;
    public music: Music;
    public muteButton: MuteButton;
    public camera: Camera;
    public soundConfig: { musicMute: boolean };

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
        this.soundConfig = { musicMute: true };
        new Sky(this);
        this.camera = new Camera(this);
        this.music = new Music(this);
        this.clouds = new Clouds(this.physics.world, this);
        this.pipes = new Pipes(this.physics.world, this);
        this.player = new Player(this, 40, this.scale.height / 2);
        this.score = new Score(this, 50, 50, 0)
        this.muteButton = new MuteButton(this, this.scale.width - 200, 50)
    }

    update(time: number, delta: number) {
        super.update(time, delta);
        this.clouds.update();
        this.pipes.update();
        this.player.update();
        this.music.update();

        if (this.player.isDead) {
            this.scene.pause();
            this.scene.launch('game-over');
        }
    }
}

export default FlappyGame;
