import * as Phaser from "phaser";

class MuteButton extends Phaser.GameObjects.Text {
    constructor(scene, x, y) {
        super(scene, x, y, `Mute Music: ${scene.soundConfig.musicMute}`, {
            fontFamily: '"Press Start 2P"',
            stroke: 'black',
            color: 'white',
            strokeThickness: 2,
            fontSize: '18px'
        });
        scene.add.existing(this);
        this.setInteractive()
            .on('pointerdown', () => {
                scene.soundConfig.musicMute = !scene.soundConfig.musicMute;
                this.setText(`MUTE: ${scene.soundConfig.musicMute}`)
            });
    }

    update(...args) {
        super.update(...args);
    }
}

export default MuteButton;
