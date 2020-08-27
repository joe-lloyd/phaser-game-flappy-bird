import * as Phaser from 'phaser';

class Score extends Phaser.GameObjects.Text {
  public score: number;

  constructor(scene, x, y, score) {
    super(scene, x, y, `SCORE: ${score}`, {
      fontFamily: '"Press Start 2P"',
      stroke: 'black',
      color: 'white',
      strokeThickness: 3,
      fontSize: '24px'
    });
    this.score = 0
    this.scene.add.existing(this);
  }

  updateScore(score) {
    this.score += score;
    this.setText(`SCORE: ${this.score}`)
  }

  update(...args) {
    super.update(...args);
  }
}

export default Score;
