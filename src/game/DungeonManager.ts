import { defaultLevel } from "./level";
import { DEFAULT_TILE, GAME_TO_TILE_MAP, TILES } from "../constants";
import { Scene } from "phaser";

export class DungeonManager {
  private static tileSize = 8;

  private level: number[][] = [];
  private scene: Phaser.Scene;
  private map?: Phaser.Tilemaps.Tilemap;

  constructor(scene: Scene) {
    this.scene = scene;
  }

  initialize = () => {
    this.level = defaultLevel.map((row) => {
      return row.map((columnValue) => {
        return GAME_TO_TILE_MAP.get(columnValue) ?? DEFAULT_TILE;
      });
    });

    this.map = this.scene.make.tilemap({
      data: this.level,
      tileWidth: DungeonManager.tileSize * 2,
      tileHeight: DungeonManager.tileSize * 2,
      width: 35,
      height: 27,
    });

    const tileset = this.map.addTilesetImage(
      TILES,
      undefined,
      DungeonManager.tileSize,
      DungeonManager.tileSize,
      0,
      1
    );

    this.map.createLayer(0, tileset, 0, 0);
  };
}
