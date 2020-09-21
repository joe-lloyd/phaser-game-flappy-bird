import FlappyGame from "../scenes/FlappyGame";

class Camera {
    scene: FlappyGame;

    constructor (scene: FlappyGame) {
        this.scene = scene;
    }

     shakeTime() {
      this.scene.cameras.main.shake(1000);
    }
}

export default Camera;
