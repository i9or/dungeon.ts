import { Scene } from "phaser";

import { GAME_SCENE } from "../constants";
import { DungeonManager } from "../game/DungeonManager";

export class Game extends Scene {
  private dungeonManager;

  constructor() {
    super({ key: GAME_SCENE });
    this.dungeonManager = new DungeonManager(this);
  }

  create() {
    this.dungeonManager.initialize();
  }
}
