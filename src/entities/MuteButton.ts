import * as Phaser from "phaser";

class MuteButton extends Phaser.GameObjects.Text {
    constructor(scene, x, y) {
        super(scene, x, y, `MUTE: ${scene.config.mute}`, {
            fontFamily: '"Press Start 2P"',
            stroke: 'black',
            color: 'white',
            strokeThickness: 2,
            fontSize: '18px'
        });
        scene.add.existing(this);
        this.setInteractive()
            .on('pointerdown', () => {
                scene.config.mute = !scene.config.mute;
                this.setText(`MUTE: ${scene.config.mute}`)
            });
    }

    update(...args) {
        super.update(...args);
    }
}

export default MuteButton;
