import { defaultLevel } from "./level";
import { DEFAULT_TILE, GAME_TO_TILE_MAP, TILES } from "../constants";
import { Scene } from "phaser";

export class DungeonManager {
  private static instance: DungeonManager;
  private static tileSize = 8;

  private level: number[][] = [];
  private map?: Phaser.Tilemaps.Tilemap;
  private scene?: Phaser.Scene;
  private layer?: Phaser.Tilemaps.TilemapLayer;

  private constructor() {}

  static getInstance(): DungeonManager {
    if (!DungeonManager.instance) {
      DungeonManager.instance = new DungeonManager();
    }

    return DungeonManager.instance;
  }

  initialize(scene: Scene): void {
    this.scene = scene;
    this.level = defaultLevel.map((row) => {
      return row.map((columnValue) => {
        return GAME_TO_TILE_MAP.get(columnValue) ?? DEFAULT_TILE;
      });
    });

    this.map = this.scene.make.tilemap({
      data: this.level,
      tileWidth: DungeonManager.tileSize * 2,
      tileHeight: DungeonManager.tileSize * 2,
      width: 37,
      height: 29,
    });

    const tileset = this.map.addTilesetImage(
      TILES,
      undefined,
      DungeonManager.tileSize,
      DungeonManager.tileSize,
      0,
      1
    );

    this.layer = this.map.createLayer(0, tileset, 0, 0);
  }

  get gameMap(): Phaser.Tilemaps.Tilemap {
    if (!this.map) {
      throw new Error("Failed to get map");
    }

    return this.map;
  }

  get gameScene(): Phaser.Scene {
    if (!this.scene) {
      throw new Error("Failed to get game scene");
    }

    return this.scene;
  }

  get gameLayer(): Phaser.Tilemaps.TilemapLayer {
    if (!this.layer) {
      throw new Error("Failed to get game layer");
    }

    return this.layer;
  }
}
