import * as Phaser from 'phaser';
import Splash from './scenes/Splash';
import FlappyGame from './scenes/FlappyGame';
import GameOver from './scenes/GameOver';

const initGame = () => {
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
                gravity: { y: 200 },
                debug: false,
            }
        },
        scene: [Splash, FlappyGame, GameOver]
    };

    const game = new Phaser.Game(config);
}

export default initGame;
