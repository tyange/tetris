import { Scene, Types } from "phaser";

export class PlayScene extends Scene {
  config: Types.Core.GameConfig;

  constructor(config: Types.Core.GameConfig) {
    super("PlayScene");

    this.config = config;
  }

  create() {
    this.createBorderTileMap();
    this.createTetromino();
  }

  createBorderTileMap() {
    const map = this.make.tilemap({ key: "board" });
    const tileset = map.addTilesetImage("Tilemap", "tiles");

    const borderLayer = map.createLayer("border", tileset!);

    borderLayer?.setCollisionByProperty({ collides: true });

    borderLayer?.setCollisionBetween(27, 27);
  }

  createTetromino() {
    // 블록을 생성하고,
    const rectShape = [
      [1, 1],
      [1, 1],
    ];

    rectShape.forEach((row, rowIndex) => {
      for (let i = 0; i < row.length; i++) {
        console.log(row[rowIndex]);
        this.add
          .rectangle(20 * i, (rowIndex + 1) * 20, 20, 20, 0xff0000)
          .setOrigin(-5, -5);
      }
    });
  }

  // TODO: 블록을 board(배열)에 위치 시킴.
}
