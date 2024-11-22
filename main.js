import Phaser from 'phaser';
import LoadingScene from './src/scenes/LoadingScene';
import StartScene from './src/scenes/StartScene';
import GameScene from './src/scenes/GameScene';
import NavBar from './src/scenes/Navbar';


const config = {
  type: Phaser.AUTO,
  width: 640,
  height: 360,
  parent: 'game-container',
  scene: [LoadingScene, StartScene, GameScene, NavBar],
  physics: {
    default: 'arcade',
    arcade: {
      debug: false,
    },
  },
};

const game = new Phaser.Game(config);
