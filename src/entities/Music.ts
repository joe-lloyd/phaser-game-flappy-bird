import FlappyGame from "../scenes/FlappyGame";
import BackgroundMusic from '../assets/sound/main.mp3';

class MusicManager {
    scene: FlappyGame;
    music: Phaser.Sound.BaseSound;
    loopMarker = {
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

    constructor(scene: FlappyGame) {
        this.scene = scene;
        this.music  = scene.sound.add('music');
        this.music.addMarker(this.loopMarker);
        this.music.play('loop');
    }

    update() {
        if (this.scene.soundConfig.musicMute && this.music.isPlaying) {
            this.music.pause();
        } else if (!this.scene.soundConfig.musicMute && this.music.isPaused) {
            this.music.play('loop');
        }
    }

    static preload(scene: FlappyGame) {
        scene.load.audio('music', BackgroundMusic);
    }
}

export default MusicManager;
