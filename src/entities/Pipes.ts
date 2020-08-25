import * as Phaser from 'phaser';
import pipeUpAsset from "../assets/pipe.png";
import pipeDownAsset from "../assets/pipe-down.png";

class Pipes extends Phaser.Physics.Arcade.Group {
    constructor(world, scene) {
        super(world, scene);
        this.scene = scene;
        this.defaults.setAllowGravity = false;
        this.defaults.setVelocityX = -60;
        const pipePositions = [[80, 150], [350, 50], [650, 75]]
        pipePositions.forEach(([x, y]) => {
            const pipeDown = new Pipe(scene, x, Phaser.Math.Between(0, this.scene.scale.height / 3), 'pipe-down');
            const pipeUp = new Pipe(scene, x, Phaser.Math.Between(this.scene.scale.height / 1.5, this.scene.scale.height), 'pipe-up');
            this.add(pipeDown, true);
            this.add(pipeUp, true);
        });
    }

    update() {
        this.children.entries.forEach((pipe: Pipe) => {
            if(pipe.body.position.x < -pipe.width) {
                pipe.reset();
            }
        })
    }
}

class Pipe extends Phaser.Physics.Arcade.Sprite {
    private pipeType: 'pipe-up' | 'pipe-down';
    constructor(scene: Phaser.Scene, x: number, y: number, pipeType: 'pipe-up' | 'pipe-down') {
        super(scene, x, y, pipeType);
        this.scene = scene;
        this.pipeType = pipeType;
    }

    reset() {
        this.body.x = this.scene.scale.width
        if (this.pipeType === 'pipe-up') {
            this.body.y = Phaser.Math.Between(this.scene.scale.height / 1.5, this.scene.scale.height);
        } else {
            this.body.y = Phaser.Math.Between(0, this.scene.scale.height / 3);
        }
        return this;
    }

    static preload(scene) {
        scene.load.image('pipe-up', pipeUpAsset);
        scene.load.image('pipe-down', pipeDownAsset);
    }
}

export default Pipes
export { Pipe };
