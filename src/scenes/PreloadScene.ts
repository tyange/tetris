import { Scene, Types } from "phaser";

export class PreloadScene extends Scene {
  config: Types.Core.GameConfig;

  constructor(config: Types.Core.GameConfig) {
    super("PreloadScene");

    this.config = config;
  }

  preload() {
    this.load.image("tiles", "assets/Tilemap.png");
    this.load.tilemapTiledJSON("board", "assets/board.json");
  }

  create() {
    this.scene.start("PlayScene");
  }
}
