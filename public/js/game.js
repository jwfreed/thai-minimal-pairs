// public/js/game.js

import { categories } from './data.js';

export class Game {
  constructor() {
    this.selectedCategoryIndex = 0;
    this.selectedPairIndex = 'all'; // "all" means random within the category
    this.currentPair = null;
    this.correctOption = null;
  }

  setCategory(categoryIndex) {
    this.selectedCategoryIndex = categoryIndex;
  }

  setPair(pairIndex) {
    this.selectedPairIndex = pairIndex;
  }

  loadNewPair() {
    const category = categories[this.selectedCategoryIndex];
    let pairObj;
    if (this.selectedPairIndex === 'all') {
      const randomIndex = Math.floor(Math.random() * category.pairs.length);
      pairObj = category.pairs[randomIndex];
    } else {
      pairObj = category.pairs[this.selectedPairIndex];
    }
    this.currentPair = pairObj.pair;
    this.correctOption = Math.floor(Math.random() * 2);
    return this.currentPair;
  }

  getCorrectAudioURL() {
    if (!this.currentPair || this.correctOption === null) return null;
    return this.currentPair[this.correctOption].audio;
  }

  checkAnswer(chosenOption) {
    return chosenOption === this.correctOption;
  }
}
