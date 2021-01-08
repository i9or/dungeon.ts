export const TILES = "TILES";

export const LOADING_SCENE = "LOADING_SCENE";
export const GAME_SCENE = "GAME_SCENE";

// Tiles mapping
export const FLOOR = 0;
export const OAK = 1;
export const SPRUCE = 2;
export const GRAVEL = 3;
export const GRASS = 4;
export const SMALL_TREES = 5;

export const FLOOR_TILE = 15;
export const OAK_TILE = 75;
export const SPRUCE_TILE = 74;
export const GRAVEL_TILE = 60;
export const GRASS_TILE = 61;
export const SMALL_TREES_TILE = 76;

export const DEFAULT_TILE = FLOOR_TILE;

export const GAME_TO_TILE_MAP = new Map<number, number>([
  [FLOOR, FLOOR_TILE],
  [OAK, OAK_TILE],
  [SPRUCE, SPRUCE_TILE],
  [GRAVEL, GRAVEL_TILE],
  [GRASS, GRASS_TILE],
  [SMALL_TREES, SMALL_TREES_TILE],
]);
