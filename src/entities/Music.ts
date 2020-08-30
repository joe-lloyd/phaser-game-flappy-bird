import * as Phaser from 'phaser';
import BackgroundMusic from '../assets/sound/main.wav';

class MusicManager extends Phaser.Sound.BaseSoundManager {
    private mainTrack: Music;

    constructor(scene) {
        super(scene.game);
        this.mainTrack = new Music(this);
        scene.add.existing(this);
        return this
    }

    playTrack() {
        this.mainTrack.play();
    }

    static preload(scene) {
        scene.load.audio('music', BackgroundMusic);
    }
}

class Music extends Phaser.Sound.BaseSound {
    constructor(musicManager) {
        super(musicManager, 'music');
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
        this.addMarker(soundMarker);
    }

    play(): boolean {
        console.log('play the track')
        return super.play('music-guy');
    }
}

export default MusicManager;
