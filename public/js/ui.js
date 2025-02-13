// public/js/ui.js

import { categories } from './data.js';

export function populateCategories() {
  const categorySelect = document.getElementById('categorySelect');
  categorySelect.innerHTML = '';
  categories.forEach((cat, index) => {
    const option = document.createElement('option');
    option.value = index;
    option.textContent = cat.name;
    categorySelect.appendChild(option);
  });
}

export function populatePairs(categoryIndex) {
  const pairSelect = document.getElementById('pairSelect');
  pairSelect.innerHTML = '';

  // "All Pairs" option
  const allOption = document.createElement('option');
  allOption.value = 'all';
  allOption.textContent = 'All Pairs';
  pairSelect.appendChild(allOption);

  const pairs = categories[categoryIndex].pairs;
  pairs.forEach((p, index) => {
    const option = document.createElement('option');
    option.value = index;
    option.textContent = `${p.pair[0].word} / ${p.pair[1].word}`;
    pairSelect.appendChild(option);
  });
}

export function updateOptionButtons(currentPair) {
  const optionButtons = document.querySelectorAll('.option');
  optionButtons.forEach((button, index) => {
    button.textContent = `${currentPair[index].word} (${currentPair[index].translit})`;
    button.disabled = false;
  });
}

export function updateFeedback(message, color) {
  const feedback = document.getElementById('feedback');
  feedback.textContent = message;
  feedback.style.color = color;
}

export function clearFeedback() {
  const feedback = document.getElementById('feedback');
  feedback.textContent = '';
}

export function hideNextButton() {
  document.getElementById('nextButton').style.display = 'none';
}

export function showNextButton() {
  document.getElementById('nextButton').style.display = 'inline-block';
}
