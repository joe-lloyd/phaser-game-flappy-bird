import * as Phaser from 'phaser';
import BackgroundMusic from '../assets/sound/main.wav';

class Music extends Phaser.Sound.BaseSound {
    scene: Phaser.Scene;

    constructor(scene, config) {
        super(config);
        this.init();
    }

    init() {
        const soundMarker = {
            name: 'music-guy',
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
        this.scene.add.existing(this);
        this.addMarker(soundMarker);
        this.play('music-guy');
    }

    static preload(scene) {
        scene.load.audio('music', BackgroundMusic);
    }
}

export default Music;
