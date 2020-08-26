import * as Phaser from 'phaser';
import GesturesPlugin from 'phaser3-rex-plugins/plugins/gestures-plugin.js';
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
    plugins: {
        scene: [{
            key: 'rexGestures',
            plugin: GesturesPlugin,
            mapping: 'rexGestures'
        }],
    },
    scene: [FlappyGame]
};

console.log(process.env.DEBUGMODE);

const game = new Phaser.Game(config);
