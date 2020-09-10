import * as Phaser from 'phaser';
import skyAsset from "../assets/images/sky.png";
import FlappyGame from '../scenes/FlappyGame';

class Sky extends Phaser.GameObjects.Image {
    scene: FlappyGame;

    constructor(scene) {
        super(scene, 0, 0, 'sky');
        this.setOrigin(0, 0)
        this.setDisplaySize(scene.scale.width, scene.scale.height);
        scene.add.existing(this);
    }

    static preload(scene: FlappyGame) {
        scene.load.image('sky', skyAsset);
    }
}

export default Sky
