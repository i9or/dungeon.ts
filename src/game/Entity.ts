export interface Entity {
  turn(): void;
  over(): boolean;
  refresh(): void;
}
