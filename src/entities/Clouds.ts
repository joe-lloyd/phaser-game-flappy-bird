import * as Phaser from 'phaser';
import cloudAsset from "../assets/cloud.png";

class Clouds extends Phaser.Physics.Arcade.Group {
    constructor(world, scene) {
        super(world, scene);
        this.scene = scene;
        this.defaults.setAllowGravity = false;
        this.defaults.setVelocityX = -10;
        const cloudPositions = [[80, 150], [350, 50], [650, 75]]
        cloudPositions.forEach(([x, y]) => {
            const cloud = new Cloud(scene, x, y);
            this.add(cloud, true)
        });
    }

    update() {
        this.children.entries.forEach((cloud: Cloud) => {
            if(cloud.body.position.x < -cloud.width) {
                cloud.reset();
            }
        })
    }
}

class Cloud extends Phaser.Physics.Arcade.Sprite {
    constructor(scene: Phaser.Scene, x: number, y: number) {
        super(scene, x, y, 'cloud');
        this.scene = scene;
    }

    reset() {
        this.body.x = this.scene.scale.width
        this.body.y = Phaser.Math.Between(0, this.scene.scale.height - this.height);
        return this;
    }

    static preload(scene) {
        scene.load.image('cloud', cloudAsset);
    }
}

export default Clouds
export { Cloud };
