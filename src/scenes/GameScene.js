import Phaser from "phaser";

export default class GameScene extends Phaser.Scene {
    constructor() {
      super('GameScene');
    }
  
    create() {
      // Latar belakang
      this.add.image(100,100, 'background ');
  
      // Skor awal
      this.score = 0;
      this.scoreText = this.add.text(10, 10, `Score: ${this.score}`, {
        font: '20px Arial',
        fill: '#ffffff',
      });
  
      // Pancing
      this.fishingRod = this.add.image(240, 300, 'fishingRod');
      this.fishingRod.setScale(0.5);
  
      // Grup ikan
      this.fishGroup = this.physics.add.group();
      this.time.addEvent({
        delay: 1000,
        callback: this.spawnFish,
        callbackScope: this,
        loop: true,
      });
  
      // Deteksi klik/tap untuk menangkap ikan
      this.input.on('pointerdown', this.catchFish, this);
  
      // Navigasi dengan NavBar
      this.scene.launch('NavBar');
    }
  
    spawnFish() {
      const x = Phaser.Math.Between(50, 430);
      const y = Phaser.Math.Between(50, 200);
  
      const fish = this.physics.add.sprite(x, y, 'fish');
      fish.setScale(0.3);
      this.fishGroup.add(fish);
  
      // Hapus ikan setelah 5 detik
      this.time.addEvent({
        delay: 5000,
        callback: () => fish.destroy(),
      });
    }
  
    catchFish(pointer) {
      const clickedFish = this.fishGroup.getChildren().find(fish => {
        return Phaser.Geom.Rectangle.Contains(fish.getBounds(), pointer.x, pointer.y);
      });
  
      if (clickedFish) {
        clickedFish.destroy(); // Hapus ikan
        this.score += 10; // Tambahkan skor
        this.scoreText.setText(`Score: ${this.score}`);
      }
    }
  }
  