import * as Phaser from "phaser";
import playerAsset from '../assets/sprites/ship.png';
import FlappyGame from '../scenes/FlappyGame';

class Player extends Phaser.Physics.Arcade.Sprite {
  private canJump: boolean;
  private spaceKey: Phaser.Input.Keyboard.Key;
  scene: FlappyGame;

  constructor(scene: FlappyGame, x: number, y: number) {
    super(scene, x, y, 'player');
    this.init();
    return this;
  }

  static preload(scene) {
    scene.load.spritesheet('player', playerAsset,{ frameWidth: 32, frameHeight: 32 });
  }

  update(pipes, ...args) {
    super.update(...args);
    this.checkJump();
    this.scene.physics.overlap(this, pipes, () => this.hitPipe());
  }

  /**
   * init the player
   */
  init() {
    this.angle = 90;
    this.setAnimations()
    this.scene.add.existing(this);
    this.scene.physics.add.existing(this);
    this.setCollideWorldBounds(true);
    this.canJump = true;
    this.spaceKey = this.scene.input.keyboard.addKey('SPACE');
  }

  setAnimations() {
    var config = {
      key: 'idle',
      frames: this.scene.anims.generateFrameNumbers('player', {start: 0, end: 7}),
      frameRate: 4,
      yoyo: true,
      repeat: -1
    };
    this.scene.anims.create(config);
    this.anims.load('idle');
    this.anims.play('idle');

  }

  /**
   * Check if the space key is pressed down.
   * Makes sure a user cant just hold it down to fly up.
   */
  checkJump() {
    if (this.canJump && (this.spaceKey.isDown)) {
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
}

export default Player;
