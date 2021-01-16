import { Scene } from "phaser";

import { GAME_SCENE } from "../constants";
import { DungeonManager } from "../game/DungeonManager";
import { PlayerCharacter } from "../game/PlayerCharacter";
import { TurnManager } from "../game/TurnManager";

export class Game extends Scene {
  private dungeonManager;
  private turnManager;

  constructor() {
    super({ key: GAME_SCENE });
    this.dungeonManager = DungeonManager.getInstance();
    this.turnManager = TurnManager.getInstance();
  }

  create() {
    this.dungeonManager.initialize(this);
    const player = new PlayerCharacter(18, 14);
    this.turnManager.addEntity(player);

    const mapWidth = this.dungeonManager.gameMap.widthInPixels;
    const mapHeight = this.dungeonManager.gameMap.heightInPixels;
    const cameraWidth = this.cameras.main.width;
    const cameraHeight = this.cameras.main.height;

    const offsetX = (cameraWidth - mapWidth) / 2;
    const offsetY = (cameraHeight - mapHeight) / 2;

    this.dungeonManager.gameLayer.setPosition(offsetX, offsetY);
  }

  update() {
    if (this.turnManager.over()) {
      this.turnManager.refresh();
    }

    this.turnManager.turn();
  }
}
