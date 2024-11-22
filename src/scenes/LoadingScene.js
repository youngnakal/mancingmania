import Phaser from "phaser";
export default class LoadingScene extends Phaser.Scene {
    constructor() {
      super('LoadingScene');
    }
  
    preload() {
      this.load.image('background', '/background.png');
      this.load.image('startBtn', '/start.png');
      this.load.image('fishingRod', '/fishingRod.png');
      this.load.image('fish', '/fish.png');
      this.load.image('ribbon','/ribbon.png');

    }
  
    create() {
      this.add.image(0,0, 'background');
      this.add.text(10, 10, 'Loading Completed', {
        font: '20px Arial',
        fill: '#ffffff',
      });
      this.scene.start('StartScene');
    }
  }
  