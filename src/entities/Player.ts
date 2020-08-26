import * as Phaser from "phaser";
import playerAsset from '../assets/orb.png';

class Player extends Phaser.Physics.Arcade.Sprite {
  private canJump: boolean;
  private spaceKey: Phaser.Input.Keyboard.Key;

  constructor(scene: Phaser.Scene, x: number, y: number) {
    super(scene, x, y, 'player');
    this.init();
    return this;
  }

  init() {
    this.scene.add.existing(this);
    this.scene.physics.add.existing(this);
    this.setCollideWorldBounds(true);
    this.canJump = true;
    this.spaceKey = this.scene.input.keyboard.addKey('SPACE');
  }

  checkJump() {
    if (this.canJump && this.spaceKey.isDown) {
        this.setVelocityY(-120);
        this.canJump = false;
    } else if (this.spaceKey.isUp) {
      this.canJump = true;
    }
  }

  hitPipe() {
    this.body.allowGravity = false;
    this.setVelocityY(0)
    this.setImmovable(true);
  }

  static preload(scene) {
    scene.load.image('player', playerAsset);
  }

  update(pipes, ...args) {
    super.update(...args);
    this.checkJump();
    this.scene.physics.overlap(this, pipes, () => this.hitPipe())
  }
}

export default Player;
