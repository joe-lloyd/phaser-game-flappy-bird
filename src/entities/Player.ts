import * as Phaser from "phaser";
import playerAsset from '../assets/sprites/ship.png';
import FlappyGame from '../scenes/FlappyGame';
import HitSound from '../assets/sound/hit.wav';
import JumpSound from '../assets/sound/jump.wav';

class Player extends Phaser.Physics.Arcade.Sprite {
  public isDead: boolean;
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
    scene.load.audio('hit', HitSound);
    scene.load.audio('jump', JumpSound);
  }

  update(...args) {
    super.update(...args);
    this.checkJump();
    this.scene.physics.overlap(this, this.scene.pipes, () => this.hitPipe());
  }

  /**
   * init the player
   */
  init() {
    this.isDead = false;
    this.angle = 90;
    this.setAnimations()
    this.scene.add.existing(this);
    this.scene.physics.add.existing(this);
    this.setCollideWorldBounds(true);
    this.canJump = true;
    this.spaceKey = this.scene.input.keyboard.addKey('SPACE');
  }

  setAnimations() {
    const config = {
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
      this.jumpSound();
    } else if (this.spaceKey.isUp) {
      this.canJump = true;
    }
  }

  /**
   * When hitting a pipe turn off any movement
   */
  hitPipe() {
    if(!this.isDead) {
      this.crashSound();
      this.scene.camera.shakeTime();
      this.isDead = true;
    }
  }

  /**
   * Apply and play the hit sound
   */
  crashSound() {
    const hit  = this.scene.sound.add('hit');
    hit.addMarker({
      name: 'hit-marker',
      start: 0,
      duration: 0.2,
    })
    hit.play('hit-marker');
  }

  /**
   * Apply and play the jump sound
   */
  jumpSound() {
    const jump  = this.scene.sound.add('jump');
    jump.addMarker({
      name: 'jump-marker',
      start: 0,
      duration: 0.6,
      config: {
        volume: 0.2,
      }
    })
    jump.play('jump-marker');
  }
}

export default Player;
