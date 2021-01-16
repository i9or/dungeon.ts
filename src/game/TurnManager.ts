import { Entity } from "./Entity";

export class TurnManager {
  private static instance: TurnManager;
  private static interval = 100;

  private entities: Set<Entity> = new Set();
  private lastCall: number = Date.now();

  static getInstance(): TurnManager {
    if (!TurnManager.instance) {
      TurnManager.instance = new TurnManager();
    }

    return TurnManager.instance;
  }

  addEntity = (entity: Entity) => {
    this.entities.add(entity);
  };

  removeEntity = (entity: Entity) => {
    this.entities.delete(entity);
  };

  turn(): void {
    const now = Date.now();
    const limit = this.lastCall + TurnManager.interval;

    if (now > limit) {
      for (let entity of this.entities) {
        if (!entity.over()) {
          entity.turn();
          break;
        }
      }
      this.lastCall = Date.now();
    }
  }

  over(): boolean {
    let isOver = true;
    for (let entity of this.entities) {
      if (!entity.over()) {
        isOver = false;
      }
    }

    return isOver;
  }

  refresh(): void {
    for (let entity of this.entities) {
      entity.refresh();
    }
  }

  private constructor() {}
}
