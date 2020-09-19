import {Scene} from 'phaser';

class GameOver extends Scene {
  constructor(config) {
    super({
      key: "game-over"
    });
  }

  update(time: number, delta: number) {
    super.update(time, delta);
  }

  create() {
    this.add.text(this.scale.width / 2, this.scale.height / 2, 'Game Over', { fill: '#0f0', align: 'center' })
      .setOrigin(0.5, 0.5)
      .setInteractive()
      .on('pointerdown', () => {
        this.scene.start('game');
      });
  }
}

export default GameOver;
