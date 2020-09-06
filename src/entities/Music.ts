import * as Phaser from 'phaser';
import BackgroundMusic from '../assets/sound/main.mp3';

class MusicManager extends Phaser.Sound.BaseSound {
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

    constructor(scene) {
        super(scene, 'music');
        scene.sound.add('music');
        scene.add.existing(scene.sound);

        this.addMarker(this.loopMarker);
        // const play = this.play('loop');
        // console.log(this);
    }

    static preload(scene) {
        scene.load.audio('music', BackgroundMusic);
    }
}

export default MusicManager;
