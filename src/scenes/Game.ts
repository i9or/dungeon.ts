import { Scene } from "phaser";

import {
  DEFAULT_TILE,
  GAME_SCENE,
  GAME_TO_TILE_MAP,
  TILES,
} from "../constants";
import { defaultLevel } from "../level";

export class Game extends Scene {
  constructor() {
    super({ key: GAME_SCENE });
  }

  create() {
    const remappedLevel = defaultLevel.map((row) => {
      return row.map((columnValue) => {
        return GAME_TO_TILE_MAP.get(columnValue) ?? DEFAULT_TILE;
      });
    });

    const tileSize = 8;

    const map = this.make.tilemap({
      data: remappedLevel,
      tileWidth: tileSize * 2,
      tileHeight: tileSize * 2,
      width: 35,
      height: 27,
    });

    const tileset = map.addTilesetImage(
      TILES,
      undefined,
      tileSize,
      tileSize,
      0,
      1
    );

    map.createLayer(0, tileset, 0, 0);
  }
}
