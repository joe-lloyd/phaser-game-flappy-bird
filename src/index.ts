import * as Phaser from 'phaser';
import FlappyGame from './scenes/FlappyGame';

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 200 }
        }
    },
    scene: [FlappyGame]
};

const game = new Phaser.Game(config);
