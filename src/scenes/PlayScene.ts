import { Scene, Types } from "phaser";

export class PlayScene extends Scene {
  config: Types.Core.GameConfig;

  constructor(config: Types.Core.GameConfig) {
    super("PlayScene");

    this.config = config;
  }

  create() {
    const map = this.make.tilemap({ key: "board" });
    const tileset = map.addTilesetImage("Tilemap", "tiles");

    const borderLayer = map.createLayer("border", tileset!);

    borderLayer?.setCollisionByProperty({ collides: true });

    // this.physics.add.collider(rectangle, borderLayer!);
    borderLayer?.setCollisionBetween(27, 27);
  }
}
