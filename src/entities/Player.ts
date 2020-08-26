import * as Phaser from "phaser";
import playerAsset from '../assets/orb.png';

class Player extends Phaser.Physics.Arcade.Sprite {
  constructor(scene: Phaser.Scene, x: number, y: number) {
    super(scene, x, y, 'player');
    scene.physics.add.existing(this);
    this.setGravityY(0);
    return this;
  }

  static preload(scene) {
    scene.load.image('player', playerAsset);
  }

  update(...args) {
    super.update(...args);
  }
}

export default Player;
