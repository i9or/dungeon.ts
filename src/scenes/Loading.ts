import { Scene } from "phaser";

import tiles from "../assets/colored_tilemap.png";

import { GAME_SCENE, LOADING_SCENE, TILES } from "../constants";

export class Loading extends Scene {
  constructor() {
    super({ key: LOADING_SCENE });
  }

  preload() {
    const progress = this.add.graphics();

    this.load.on("progress", (value: number) => {
      progress.clear();
      progress.fillStyle(0xeac235, 1);
      progress.fillRect(
        0,
        (this.sys.game.config.height as number) - 5,
        (this.sys.game.config.width as number) * value,
        5
      );
    });

    this.load.on("complete", () => {
      progress.destroy();
      this.scene.start(GAME_SCENE);
    });

    this.load.image(TILES, tiles);
  }
}
