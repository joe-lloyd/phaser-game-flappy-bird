import * as Phaser from "phaser";
import playerAsset from '../assets/orb.png';
import FlappyGame from '../scenes/FlappyGame';

class Player extends Phaser.Physics.Arcade.Sprite {
  private canJump: boolean;
  private spaceKey: Phaser.Input.Keyboard.Key;
  private pointer: Phaser.Input.Pointer;
  scene: FlappyGame;

  constructor(scene: FlappyGame, x: number, y: number) {
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
    this.pointer = this.scene.rexGestures.add.tap({});
  }

  /**
   * Check if the space key is pressed down.
   * Makes sure a user cant just hold it down to fly up.
   */
  checkJump() {
    if (this.canJump && (this.spaceKey.isDown || this.pointer.isTapped)) {
      this.setVelocityY(-120);
      this.canJump = false;
    } else if (this.spaceKey.isUp) {
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
    this.angle = Phaser.Math.Clamp(angle, -60, 60);
  }
}

export default Player;
