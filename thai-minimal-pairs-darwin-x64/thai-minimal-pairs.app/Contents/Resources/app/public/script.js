// Define all minimal pairs organized by category.
const categories = [
  {
    name: 'Consonant Minimal Pairs: Unaspirated vs. Aspirated',
    pairs: [
      {
        pair: [
          {
            word: 'กา',
            translit: 'kaa',
            meaning: 'crow',
            audio: 'audio/กา.mp3',
          },
          {
            word: 'ขา',
            translit: 'khaa',
            meaning: 'leg',
            audio: 'audio/ขา.mp3',
          },
        ],
      },
      {
        pair: [
          {
            word: 'ตา',
            translit: 'taa',
            meaning: 'eye',
            audio: 'audio/ตา.mp3',
          },
          {
            word: 'ทา',
            translit: 'thaa',
            meaning: 'apply',
            audio: 'audio/ทา.mp3',
          },
        ],
      },
      {
        pair: [
          {
            word: 'ปลา',
            translit: 'plaa',
            meaning: 'fish',
            audio: 'audio/ปลา.mp3',
          },
          {
            word: 'พลา',
            translit: 'phlaa',
            meaning: 'group',
            audio: 'audio/พลา.mp3',
          },
        ],
      },
      {
        pair: [
          {
            word: 'จาน',
            translit: 'jaan',
            meaning: 'plate',
            audio: 'audio/จาน.mp3',
          },
          {
            word: 'ชาน',
            translit: 'chaan',
            meaning: 'porch',
            audio: 'audio/ชาน.mp3',
          },
        ],
      },
    ],
  },
  {
    name: 'Consonant Minimal Pairs: Voiced vs. Unvoiced',
    pairs: [
      {
        pair: [
          {
            word: 'บ้าน',
            translit: 'baan',
            meaning: 'house',
            audio: 'audio/บ้าน.mp3',
          },
          {
            word: 'ปาน',
            translit: 'paan',
            meaning: 'scar',
            audio: 'audio/ปาน.mp3',
          },
        ],
      },
      {
        pair: [
          {
            word: 'ดี',
            translit: 'dee',
            meaning: 'good',
            audio: 'audio/ดี.mp3',
          },
          {
            word: 'ตี',
            translit: 'tee',
            meaning: 'hit',
            audio: 'audio/ตี.mp3',
          },
        ],
      },
      {
        pair: [
          {
            word: 'ฟ้า',
            translit: 'fáa',
            meaning: 'sky',
            audio: 'audio/ฟ้า.mp3',
          },
          {
            word: 'พา',
            translit: 'phaa',
            meaning: 'to lead',
            audio: 'audio/พา.mp3',
          },
        ],
      },
    ],
  },
  {
    name: 'Consonant Minimal Pairs: Sibilant Sounds',
    pairs: [
      {
        pair: [
          {
            word: 'ซี่',
            translit: 'sîi',
            meaning: 'piece',
            audio: 'audio/ซี่.mp3',
          },
          {
            word: 'ชี้',
            translit: 'chíi',
            meaning: 'point',
            audio: 'audio/ชี้.mp3',
          },
        ],
      },
    ],
  },
  {
    name: 'Vowel Minimal Pairs: Short vs. Long Vowels',
    pairs: [
      {
        pair: [
          {
            word: 'มัน',
            translit: 'man',
            meaning: 'it',
            audio: 'audio/มัน.mp3',
          },
          {
            word: 'มาน',
            translit: 'maan',
            meaning: 'to come',
            audio: 'audio/มาน.mp3',
          },
        ],
      },
      {
        pair: [
          {
            word: 'กิน',
            translit: 'kin',
            meaning: 'eat',
            audio: 'audio/กิน.mp3',
          },
          {
            word: 'กีน',
            translit: 'kiin',
            meaning: 'to crawl',
            audio: 'audio/กีน.mp3',
          },
        ],
      },
      {
        pair: [
          {
            word: 'เละ',
            translit: 'lé',
            meaning: 'messy',
            audio: 'audio/เละ.mp3',
          },
          {
            word: 'เล',
            translit: 'lee',
            meaning: 'sail',
            audio: 'audio/เล.mp3',
          },
        ],
      },
      {
        pair: [
          {
            word: 'ปุ',
            translit: 'puʔ',
            meaning: 'dust',
            audio: 'audio/ปุ.mp3',
          },
          {
            word: 'ปู',
            translit: 'puu',
            meaning: 'crab',
            audio: 'audio/ปู.mp3',
          },
        ],
      },
      {
        pair: [
          {
            word: 'แคะ',
            translit: 'khɛ́',
            meaning: 'pick (e.g., pick nose)',
            audio: 'audio/แคะ.mp3',
          },
          {
            word: 'แข',
            translit: 'khɛɛ',
            meaning: 'strong',
            audio: 'audio/แข.mp3',
          },
        ],
      },
    ],
  },
  {
    name: 'Vowel Minimal Pairs: Front vs. Back Vowels',
    pairs: [
      {
        pair: [
          {
            word: 'มือ',
            translit: 'mɯɯ',
            meaning: 'hand',
            audio: 'audio/มือ.mp3',
          },
          {
            word: 'มุ',
            translit: 'mu',
            meaning: 'pearl',
            audio: 'audio/มุ.mp3',
          },
        ],
      },
      {
        pair: [
          {
            word: 'ตัว',
            translit: 'tua',
            meaning: 'body',
            audio: 'audio/ตัว.mp3',
          },
          {
            word: 'ตา',
            translit: 'taa',
            meaning: 'eye',
            audio: 'audio/ตา.mp3',
          },
        ],
      },
    ],
  },
  {
    name: 'Tone Minimal Pairs',
    pairs: [
      {
        pair: [
          {
            word: 'มา',
            translit: 'maa',
            meaning: 'come',
            audio: 'audio/มา_come.mp3',
          },
          {
            word: 'ม่า',
            translit: 'mâa',
            meaning: 'grandmother',
            audio: 'audio/ม่า.mp3',
          },
        ],
      },
      {
        pair: [
          {
            word: 'ใหม่',
            translit: 'mài',
            meaning: 'new',
            audio: 'audio/ใหม่.mp3',
          },
          {
            word: 'ไหม',
            translit: 'mǎi',
            meaning: 'question particle',
            audio: 'audio/ไหม.mp3',
          },
        ],
      },
      {
        pair: [
          {
            word: 'ข้าว',
            translit: 'khâao',
            meaning: 'rice',
            audio: 'audio/ข้าว.mp3',
          },
          {
            word: 'ข่าว',
            translit: 'khàao',
            meaning: 'news',
            audio: 'audio/ข่าว.mp3',
          },
        ],
      },
      {
        pair: [
          {
            word: 'ป่า',
            translit: 'pàa',
            meaning: 'forest',
            audio: 'audio/ป่า.mp3',
          },
          {
            word: 'ปา',
            translit: 'paa',
            meaning: 'throw',
            audio: 'audio/ปา.mp3',
          },
        ],
      },
      {
        pair: [
          {
            word: 'ใบ',
            translit: 'bai',
            meaning: 'leaf',
            audio: 'audio/ใบ.mp3',
          },
          {
            word: 'ใบ้',
            translit: 'bâi',
            meaning: 'mute',
            audio: 'audio/ใบ้.mp3',
          },
        ],
      },
    ],
  },
  {
    name: 'Final Consonant Minimal Pairs',
    pairs: [
      {
        pair: [
          {
            word: 'วัน',
            translit: 'wan',
            meaning: 'day',
            audio: 'audio/วัน.mp3',
          },
          {
            word: 'วัง',
            translit: 'waŋ',
            meaning: 'palace',
            audio: 'audio/วัง.mp3',
          },
        ],
      },
      {
        pair: [
          {
            word: 'บิน',
            translit: 'bin',
            meaning: 'to fly',
            audio: 'audio/บิน.mp3',
          },
          {
            word: 'บิม',
            translit: 'bim',
            meaning: '(contrast)',
            audio: 'audio/บิม.mp3',
          },
        ],
      },
      {
        pair: [
          {
            word: 'หลอด',
            translit: 'lɔ̀ɔt',
            meaning: 'tube',
            audio: 'audio/หลอด.mp3',
          },
          {
            word: 'หลอบ',
            translit: 'lɔ̀ɔb',
            meaning: '(contrast)',
            audio: 'audio/หลอบ.mp3',
          },
        ],
      },
      {
        pair: [
          {
            word: 'ปิด',
            translit: 'pìt',
            meaning: 'close',
            audio: 'audio/ปิด.mp3',
          },
          {
            word: 'ปิต',
            translit: 'pìtʰ',
            meaning: 'emotional closure',
            audio: 'audio/ปิต.mp3',
          },
        ],
      },
    ],
  },
];

// Global variables for the current pair and the correct option (0 or 1)
let currentPair;
let correctOption;

// Variables to track the user’s selections.
let selectedCategoryIndex = 0;
let selectedPairIndex = 'all'; // "all" means randomly pick a pair from the category

// --- UI Population Functions ---

// Populate the category dropdown with all available categories.
function populateCategories() {
  const categorySelect = document.getElementById('categorySelect');
  categorySelect.innerHTML = '';
  categories.forEach((cat, index) => {
    const option = document.createElement('option');
    option.value = index;
    option.textContent = cat.name;
    categorySelect.appendChild(option);
  });
}

// Populate the pair dropdown based on the selected category.
function populatePairs(categoryIndex) {
  const pairSelect = document.getElementById('pairSelect');
  pairSelect.innerHTML = '';

  // Add the option for "All Pairs"
  const allOption = document.createElement('option');
  allOption.value = 'all';
  allOption.textContent = 'All Pairs';
  pairSelect.appendChild(allOption);

  const pairs = categories[categoryIndex].pairs;
  pairs.forEach((p, index) => {
    const option = document.createElement('option');
    option.value = index;
    // Display both words (for example, "กา / ขา")
    option.textContent = `${p.pair[0].word} / ${p.pair[1].word}`;
    pairSelect.appendChild(option);
  });
}

// --- Game Logic ---

// Load a new minimal pair based on the current selections.
function loadNewPair() {
  // Clear previous feedback and hide the Next button.
  document.getElementById('feedback').innerHTML = '';
  document.getElementById('nextButton').style.display = 'none';

  const category = categories[selectedCategoryIndex];
  let pairObj;
  if (selectedPairIndex === 'all') {
    // Choose a random pair from the selected category.
    const randomIndex = Math.floor(Math.random() * category.pairs.length);
    pairObj = category.pairs[randomIndex];
  } else {
    // Use the specific pair selected.
    pairObj = category.pairs[selectedPairIndex];
  }

  currentPair = pairObj.pair;
  // Randomly decide which word’s audio to play.
  correctOption = Math.floor(Math.random() * 2);

  // Update the option buttons with the words and transliterations.
  const optionButtons = document.querySelectorAll('.option');
  optionButtons.forEach((button, index) => {
    button.textContent = `${currentPair[index].word} (${currentPair[index].translit})`;
    button.disabled = false;
  });
}

// Play the audio file for the word designated as correct.
function playAudio() {
  const audioURL = currentPair[correctOption].audio;
  const audio = new Audio(audioURL);
  audio.play();
}

// --- Event Listeners Setup ---

document.addEventListener('DOMContentLoaded', () => {
  // Populate the dropdown menus.
  populateCategories();
  populatePairs(0);

  // When the category selection changes, update the pairs and reload a pair.
  document.getElementById('categorySelect').addEventListener('change', (e) => {
    selectedCategoryIndex = parseInt(e.target.value, 10);
    populatePairs(selectedCategoryIndex);
    selectedPairIndex = 'all'; // Reset to "All Pairs"
    loadNewPair();
  });

  // When the pair selection changes, update the current pair.
  document.getElementById('pairSelect').addEventListener('change', (e) => {
    const value = e.target.value;
    selectedPairIndex = value === 'all' ? 'all' : parseInt(value, 10);
    loadNewPair();
  });

  // Play button: play the designated audio.
  document.getElementById('playButton').addEventListener('click', () => {
    playAudio();
  });

  // Option buttons: check the answer and display feedback.
  const optionButtons = document.querySelectorAll('.option');
  optionButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const chosenOption = parseInt(button.getAttribute('data-option'), 10);
      const feedback = document.getElementById('feedback');

      // Disable both buttons to avoid multiple answers.
      optionButtons.forEach((btn) => (btn.disabled = true));

      if (chosenOption === correctOption) {
        feedback.textContent = '✓ Correct!';
        feedback.style.color = 'green';
      } else {
        feedback.textContent = '✗ Incorrect';
        feedback.style.color = 'red';
      }
      document.getElementById('nextButton').style.display = 'inline-block';
    });
  });

  // Next button: load another pair.
  document.getElementById('nextButton').addEventListener('click', () => {
    loadNewPair();
  });

  // Load the first pair when the page is ready.
  loadNewPair();
});
