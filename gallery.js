let mCurrentIndex = 0;
let mImages = [];
const mWaitTime = 5000;
let timer = null;

// Exact JSON data provided
const sampleJSON = {
  "images": [
    {
      "imgPath": "img/vibes/title.jpeg",
      "imgLocation": "Old Minecraft Title Screen",
      "biome": "Loch Ard Gorge"
    },
    {
      "imgPath": "img/vibes/village.png",
      "imgLocation": "Village",
      "biome": "Plains"
    },
    {
      "imgPath": "img/vibes/trader-mountain.jpeg",
      "biome": "Windswept Hills"
    },
    {
      "imgPath": "img/vibes/sunflower.png",
      "biome": "Sunflower Plains"
    },
    {
      "imgPath": "img/vibes/plains.png",
      "biome": "Plains"
    },
    {
      "imgPath": "img/vibes/fields.png",
      "biome": "Flower Forest"
    },
    {
      "imgPath": "img/vibes/coral.png",
      "imgLocation": "Warm Ocean Shipwreck",
      "biome": "Coral Reef"
    },
    {
      "imgPath": "img/vibes/beach-water.png",
      "biome": "Beach"
    },
    {
      "imgPath": "img/vibes/magic-forest.jpeg",
      "biome": "Dark Oak Forest"
    },
    {
      "imgPath": "img/vibes/lush.jpeg",
      "biome": "Lush Caves"
    },
    {
      "imgPath": "img/vibes/desert.png",
      "imgLocation": "Desert Temple",
      "biome": "Desert"
    },
    {
      "imgPath": "img/vibes/jungle-edge.png",
      "biome": "Jungle Edge"
    },
    {
      "imgPath": "img/vibes/temple.jpeg",
      "imgLocation": "Jungle Temple",
      "biome": "Jungle"
    },
    {
      "imgPath": "img/vibes/bamboo.webp.jpg",
      "biome": "Bamboo Forest"
    },
    {
      "imgPath": "img/places/warped-forest.webp",
      "imgLocation": "Nether",
      "biome": "Warped Forest"
    },
    {
      "imgPath": "img/places/crimson-forest.webp",
      "imgLocation": "Nether",
      "biome": "Crimson Forest"
    }
  ]
};

$(document).ready(() => {
  $('.details').hide();

  // Load images from exact JSON
  mImages = sampleJSON.images;
  swapPhoto(); // Show first image
  startTimer();

  // More indicator toggle
  $('.moreIndicator').on('click', function () {
    $(this).toggleClass('rot90 rot270');
    $('.details').slideToggle(300);
  });

  // Navigation
  $('#nextPhoto').on('click', showNextPhoto);
  $('#prevPhoto').on('click', showPrevPhoto);
});

function swapPhoto() {
  if (mImages.length === 0) return;

  const img = mImages[mCurrentIndex];
  $('#photo').attr('src', img.imgPath);

  // Only show location if imgLocation exists
  if (img.imgLocation) {
    $('.location').text(`Location: ${img.imgLocation}`);
  } else {
    $('.location').text('');
  }

  // Always show biome as description
  $('.description').text(`Biome: ${img.biome}`);
}

function showNextPhoto() {
  mCurrentIndex = (mCurrentIndex + 1) % mImages.length;
  swapPhoto();
  restartTimer();
}

function showPrevPhoto() {
  mCurrentIndex = (mCurrentIndex - 1 + mImages.length) % mImages.length;
  swapPhoto();
  restartTimer();
}

function startTimer() {
  if (timer) clearInterval(timer);
  timer = setInterval(showNextPhoto, mWaitTime);
}

function restartTimer() {
  clearInterval(timer);
  timer = setInterval(showNextPhoto, mWaitTime);
}