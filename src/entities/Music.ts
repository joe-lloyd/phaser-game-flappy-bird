import BackgroundMusic from '../assets/sound/main.mp3';

class MusicManager {
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
        const music  = scene.sound.add('music');
        music.addMarker(this.loopMarker);
        music.play('loop');
    }

    static preload(scene) {
        scene.load.audio('music', BackgroundMusic);
    }
}

export default MusicManager;
