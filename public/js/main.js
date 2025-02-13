// public/js/main.js

import {
  populateCategories,
  populatePairs,
  updateOptionButtons,
  updateFeedback,
  clearFeedback,
  hideNextButton,
  showNextButton,
} from './ui.js';
import { Game } from './game.js';

const game = new Game();
let currentAudio = null; // Reference to the currently playing Audio object
let currentAudioURL = null; // The audio URL for the current pair (stored when the pair is loaded)

function init() {
  populateCategories();
  populatePairs(game.selectedCategoryIndex);
  loadPair();

  // Category change event
  document.getElementById('categorySelect').addEventListener('change', (e) => {
    const categoryIndex = parseInt(e.target.value, 10);
    game.setCategory(categoryIndex);
    populatePairs(categoryIndex);
    game.setPair('all');
    loadPair();
  });

  // Pair change event
  document.getElementById('pairSelect').addEventListener('change', (e) => {
    const value = e.target.value;
    game.setPair(value === 'all' ? 'all' : parseInt(value, 10));
    loadPair();
  });

  // Play Audio button event with debugging logs
  document.getElementById('playButton').addEventListener('click', () => {
    // Stop any currently playing audio before starting a new one.
    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
      currentAudio = null;
    }
    // Log the current state using the stored audio URL.
    console.log('Current Pair:', game.currentPair);
    console.log('Correct Option:', game.correctOption);
    console.log('Audio URL being played:', currentAudioURL);

    if (currentAudioURL) {
      currentAudio = new Audio(currentAudioURL);
      currentAudio.play();
    }
  });

  // Answer option buttons event
  const optionButtons = document.querySelectorAll('.option');
  optionButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const chosenOption = parseInt(button.getAttribute('data-option'), 10);
      optionButtons.forEach((btn) => (btn.disabled = true));
      if (game.checkAnswer(chosenOption)) {
        updateFeedback('✓ Correct!', 'green');
      } else {
        updateFeedback('✗ Incorrect', 'red');
      }
      showNextButton();
    });
  });

  // Next button event
  document.getElementById('nextButton').addEventListener('click', () => {
    loadPair();
  });
}

function loadPair() {
  // Stop any currently playing audio when a new pair is loaded.
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
    currentAudio = null;
  }
  clearFeedback();
  hideNextButton();

  // Load the new pair and update the UI.
  const currentPair = game.loadNewPair();
  updateOptionButtons(currentPair);

  // Immediately store the audio URL for the current pair.
  currentAudioURL = game.getCorrectAudioURL();

  // Debug logging to verify the new pair and its audio URL.
  console.log('Loaded new pair:', game.currentPair);
  console.log('New correct option:', game.correctOption);
  console.log('Stored audio URL:', currentAudioURL);
}

document.addEventListener('DOMContentLoaded', init);
