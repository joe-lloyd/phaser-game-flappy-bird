import * as Phaser from "phaser";
import playerAsset from '../assets/orb.png';

class Player extends Phaser.Physics.Arcade.Sprite {
  private canJump: boolean;
  private spaceKey: Phaser.Input.Keyboard.Key;
  private pointer: Phaser.Input.Pointer;

  constructor(scene: Phaser.Scene, x: number, y: number) {
    super(scene, x, y, 'player');
    this.init();
    return this;
  }

  static preload(scene) {
    scene.load.image('player', playerAsset);
  }

  update(pipes, ...args) {
    super.update(...args);
    this.checkJump();
    this.scene.physics.overlap(this, pipes, () => this.hitPipe())
    this.setFacing()
  }

  /**
   * init the player
   */
  init() {
    this.scene.add.existing(this);
    this.scene.physics.add.existing(this);
    this.setCollideWorldBounds(true);
    this.canJump = true;
    this.spaceKey = this.scene.input.keyboard.addKey('SPACE');
    this.pointer = this.scene.input.activePointer;
  }

  /**
   * Check if the space key is pressed down.
   * Makes sure a user cant just hold it down to fly up.
   */
  checkJump() {
    if (this.canJump && (this.spaceKey.isDown || this.pointer.isDown)) {
      this.setVelocityY(-120);
      this.canJump = false;
    } else if (this.spaceKey.isUp && !this.pointer.isDown) {
      this.canJump = true;
    }
  }

  /**
   * When hitting a pipe turn off any movement
   */
  hitPipe() {
    this.body.allowGravity = false;
    this.setVelocityY(0)
    this.setImmovable(true);
  }

  /**
   * Face more down as you fall and up as you fly up
   */
  setFacing() {
    const angle = this.angle + this.body.velocity.y * 0.01
    this.angle = Phaser.Math.Clamp(angle, -90, 90);
  }
}

export default Player;
