import { DungeonManager } from "./DungeonManager";
import { Entity } from "./Entity";
import { OBSTACLES, FLOOR_TILE, HERO_TILE } from "../constants";

export class PlayerCharacter implements Entity {
  private movementPoints: number;
  private cursors?: Phaser.Types.Input.Keyboard.CursorKeys;
  private x: number;
  private y: number;
  private readonly sprite: number;
  private standingAtSprite: number;

  private dungeonManager: DungeonManager;

  constructor(x: number, y: number) {
    this.dungeonManager = DungeonManager.getInstance();
    this.movementPoints = 1;
    this.cursors = this.dungeonManager.gameScene.input.keyboard.createCursorKeys();
    this.x = x;
    this.y = y;
    this.sprite = HERO_TILE;

    this.standingAtSprite = this.dungeonManager.gameMap.getTileAt(x, y).index;
    this.dungeonManager.gameMap.putTileAt(this.sprite, this.x, this.y);
  }

  over(): boolean {
    return this.movementPoints === 0;
  }

  refresh(): void {
    this.movementPoints = 1;
  }

  turn(): void {
    const oldX = this.x;
    const oldY = this.y;
    let moved = false;

    if (this.movementPoints > 0) {
      if (this.cursors?.left.isDown) {
        this.x -= 1;
        moved = true;
      }

      if (this.cursors?.right.isDown) {
        this.x += 1;
        moved = true;
      }

      if (this.cursors?.up.isDown) {
        this.y -= 1;
        moved = true;
      }

      if (this.cursors?.down.isDown) {
        this.y += 1;
        moved = true;
      }

      if (moved) {
        this.movementPoints -= 1;
      }
    }

    const tileAtDestination = this.dungeonManager.gameMap.getTileAt(
      this.x,
      this.y
    )?.index;
    if (tileAtDestination && OBSTACLES.includes(tileAtDestination)) {
      this.x = oldX;
      this.y = oldY;
    }

    if (this.x !== oldX || this.y !== oldY) {
      this.dungeonManager.gameMap.putTileAt(this.sprite, this.x, this.y);
      this.dungeonManager.gameMap.putTileAt(this.standingAtSprite, oldX, oldY);
      this.standingAtSprite = tileAtDestination;
    }
  }
}
