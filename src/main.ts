import { Game, Types } from "phaser";

const config: Types.Core.GameConfig = {
    type: Phaser.AUTO,
    width: 800,
    height: 700,
    parent: 'game-container',
    scene: []
};

export default new Game(config);
