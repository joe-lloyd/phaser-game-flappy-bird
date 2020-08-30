import * as Phaser from 'phaser';
import GesturesPlugin from 'phaser3-rex-plugins/plugins/gestures-plugin.js';
import FlappyGame from './scenes/FlappyGame';
import Splash from "./scenes/Splash";

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
    scene: [Splash, FlappyGame]
};

const game = new Phaser.Game(config);
