import Phaser from "phaser";
export default class NavBar extends Phaser.Scene {
    constructor() {
      super('NavBar');
    }
  
    create() {
      const buttonWidth = 100;
  
      // Tombol Home
      const homeButton = this.add.rectangle(50, 310, buttonWidth, 40, 0x3498db).setInteractive();
      this.add.text(25, 300, 'Home', { font: '16px Arial', fill: '#ffffff' });
  
      homeButton.on('pointerdown', () => {
        this.scene.stop('GameScene');
        this.scene.start('StartScene');
      });
  
      // Tombol Earn
      const earnButton = this.add.rectangle(150, 310, buttonWidth, 40, 0x2ecc71).setInteractive();
      this.add.text(125, 300, 'Earn', { font: '16px Arial', fill: '#ffffff' });
  
      earnButton.on('pointerdown', () => {
        alert('Feature coming soon!');
      });
  
      // Tombol Friend
      const friendButton = this.add.rectangle(250, 310, buttonWidth, 40, 0xe74c3c).setInteractive();
      this.add.text(225, 300, 'Friend', { font: '16px Arial', fill: '#ffffff' });
  
      friendButton.on('pointerdown', () => {
        alert('Feature coming soon!');
      });
  
      // Tombol Farming
      const farmingButton = this.add.rectangle(350, 310, buttonWidth, 40, 0xf1c40f).setInteractive();
      this.add.text(325, 300, 'Farming', { font: '16px Arial', fill: '#ffffff' });
  
      farmingButton.on('pointerdown', () => {
        alert('Feature coming soon!');
      });
    }
  }
  