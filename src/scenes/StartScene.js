import Phaser from 'phaser';

export default class StartScene extends Phaser.Scene {
  constructor() {
    super('StartScene');
  }

  preload() {
    // Memuat gambar latar dan tombol mulai
    this.load.image('background', '/background.png');
    this.load.image('startBtn', '/assets/startBtn.png');
    this.load.image('reborn','/ribbon.png');
  }

  create() {
    // Tambahkan tile sprite sebagai background
    this.background = this.add.tileSprite(0, 0, 640, 360, 'background')
      .setOrigin(0, 0);

    // Tambahkan tombol Start
    const startButton = this.add.sprite(320, 200, 'startBtn') // Posisikan tombol di tengah
      .setInteractive(); // Agar tombol dapat diklik

      const ribbon=this.add.sprite(320,60,'ribbon')
      .setOrigin(0.5)  

    // Aksi ketika tombol ditekan
    startButton.on('pointerdown', () => {
      this.scene.start('GameScene'); // Pindah ke GameScene
    });
  }

    update() {
      // Gerakkan background dengan mengubah offset tile
      this.background.tilePositionX += 0.8;
  
  }
}
