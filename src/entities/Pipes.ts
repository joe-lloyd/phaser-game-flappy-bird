import * as Phaser from 'phaser';
import pipeUpAsset from "../assets/pipe.png";
import pipeDownAsset from "../assets/pipe-down.png";

class Pipes extends Phaser.Physics.Arcade.Group {
    constructor(world, scene) {
        super(world, scene);
        this.init()
    }

    init() {
        this.defaults.setAllowGravity = false;
        this.defaults.setVelocityX = -140;
        const sectionOfWidth = this.scene.scale.width / 3;
        const pipePositions = [[sectionOfWidth, 0], [sectionOfWidth * 2, 0], [sectionOfWidth * 3, 0]]
        pipePositions.forEach(([x, y]) => {
            const pipeDown = new Pipe(this.scene, x, Phaser.Math.Between(0, -100), 'pipe-down');
            const pipeUp = new Pipe(this.scene, x, Phaser.Math.Between(this.scene.scale.height, this.scene.scale.height + 100), 'pipe-up');
            this.add(pipeDown, true);
            this.add(pipeUp, true);
        });
    }

    hitPlayer() {
        this.setVelocityX(0);
    }

    update(player) {
        this.children.entries.forEach((pipe: Pipe) => {
            if (pipe.body.position.x < -pipe.width) {
                pipe.reset();
            }
        })
        this.scene.physics.overlap(this, player, () => this.hitPlayer())
    }
}

class Pipe extends Phaser.Physics.Arcade.Sprite {
    private readonly pipeType: 'pipe-up' | 'pipe-down';

    constructor(scene: Phaser.Scene, x: number, y: number, pipeType: 'pipe-up' | 'pipe-down') {
        super(scene, x, y, pipeType);
        this.scene = scene;
        this.pipeType = pipeType;
    }

    reset() {
        this.body.x = this.scene.scale.width
        this.scene.score += 0.5;
        this.scene.scoreText.setText(`SCORE: ${this.scene.score}`)
        if (this.pipeType === 'pipe-up') {
            this.body.y = Phaser.Math.Between(this.scene.scale.height - this.body.height * 0.4, this.scene.scale.height - this.body.height * 0.9);
        } else {
            this.body.y = Phaser.Math.Between(-this.body.height * 0.4, -this.body.height * 0.9);
        }
    }

    static preload(scene) {
        scene.load.image('pipe-up', pipeUpAsset);
        scene.load.image('pipe-down', pipeDownAsset);
    }
}

export default Pipes
export {Pipe};
