import "./styles/global.css";
import { Loading } from "./scenes/Loading";
import { Game } from "./scenes/Game";

const config = {
  type: Phaser.AUTO,
  backgroundColor: "#222323",
  width: 640,
  height: 480,
  scene: [Loading, Game],
  parent: "root",
  pixelArt: true,
};

window.addEventListener("load", () => {
  const game = new Phaser.Game(config);
});
