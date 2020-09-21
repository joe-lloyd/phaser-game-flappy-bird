import * as Phaser from 'phaser';
import FlappyGame from '../scenes/FlappyGame';

class Score extends Phaser.GameObjects.Text {
  public score: number;

  constructor(scene: FlappyGame, x: number, y: number, score: number) {
    super(scene, x, y, `SCORE: ${score}`, {
      fontFamily: '"Press Start 2P"',
      stroke: 'black',
      color: 'white',
      strokeThickness: 2,
      fontSize: '18px'
    });
    this.score = 0
    this.scene.add.existing(this);
  }

  updateScore(score: number) {
    this.score += score;
    this.setText(`SCORE: ${this.score}`)
  }
}

export default Score;
