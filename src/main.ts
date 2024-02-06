import { Game, Types } from "phaser";
import { PreloadScene } from "./scenes/PreloadScene.ts";
import { PlayScene } from "./scenes/PlayScene.ts";

const SHARED_CONFIG = {
  width: 800,
  height: 800,
};

const config: Types.Core.GameConfig = {
  type: Phaser.AUTO,
  ...SHARED_CONFIG,
  backgroundColor: "#fff",
  parent: "game-container",
  physics: {
    default: "arcade",
    arcade: {
      debug: true,
    },
  },
  scene: [new PreloadScene(SHARED_CONFIG), new PlayScene(SHARED_CONFIG)],
};

export default new Game(config);
