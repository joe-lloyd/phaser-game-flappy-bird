import * as Phaser from 'phaser';
import FlappyGame from './scenes/FlappyGame';

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 200 },
            debug: process.env.DEBUGMODE === 'true',
        }
    },
    scene: [FlappyGame]
};

console.log(process.env.DEBUGMODE);

const game = new Phaser.Game(config);
