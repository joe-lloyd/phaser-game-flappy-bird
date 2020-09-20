import * as Phaser from 'phaser';
import Splash from './scenes/Splash';
import FlappyGame from './scenes/FlappyGame';
import GameOver from './scenes/GameOver';

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scale: {
        mode: Phaser.Scale.RESIZE,
    },
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {y: 200},
            debug: process.env.DEBUGMODE === 'true',
        }
    },
    scene: [Splash, FlappyGame, GameOver]
};

export default config;
