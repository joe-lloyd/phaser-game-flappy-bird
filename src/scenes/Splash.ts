import {Scene} from 'phaser';

class Splash extends Scene {
    constructor(config) {
        super({
            key: "splash"
        });
    }

    update(time: number, delta: number) {
        super.update(time, delta);
    }

    create() {
        this.add.text(100, 100, 'Play Game!', { fill: '#0f0' })
            .setInteractive()
            .on('pointerdown', () => {
                this.scene.start('game');
            });
    }
}

export default Splash;
