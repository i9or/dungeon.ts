import { Entity } from "./Entity";

export class TurnManager {
  private static instance: TurnManager;

  private entities: Set<Entity> = new Set();

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

  private constructor() {}
}
