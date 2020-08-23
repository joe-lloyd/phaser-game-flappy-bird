import * as Phaser from 'phaser';
import cloudAsset from "../assets/cloud.png";

class Clouds extends Phaser.Physics.Arcade.Group {
    constructor(world, scene) {
        super(world, scene);
        const cloudPositions = [[150, 150], [250, 50], [350, 75]]
        cloudPositions.forEach(([x, y]) => {
            const cloud = new Cloud(scene, x, y);
            this.add(cloud, true)
        });
        return this;
    }
}

class Cloud extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y) {
        super(scene, x, y, 'cloud');
        this.setGravityY(0);
        return this;
    }

    static preload(scene) {
        scene.load.image('cloud', cloudAsset);
    }
}

export default Clouds
export { Cloud };