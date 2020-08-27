import * as Phaser from 'phaser';
import skyAsset from "../assets/images/sky.png";

class Sky extends Phaser.GameObjects.Image {
    constructor(scene, x, y) {
        super(scene, x, y, 'sky');
        scene.add.existing(this);
    }

    static preload(scene) {
        scene.load.image('sky', skyAsset);
    }
}

export default Sky