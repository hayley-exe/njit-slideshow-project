let mCurrentIndex = 0;
let mImages = [];
const mWaitTime = 5000;
let timer = null;

// Complete JSON with all images and consistent imgLocation/biome fields
const sampleJSON = {
  "images": [
    {
      "imgPath": "img/vibes/title.jpeg",
      "imgLocation": "Old Minecraft Title Screen",
    },
    {
      "imgPath": "img/vibes/village.png",
      "imgLocation": "Village",
      "biome": "Plains"
    },
    {
      "imgPath": "img/vibes/trader-mountain.jpeg",
      "imgLocation": "Wandering Trader in Mountains",
      "biome": "Windswept Hills"
    },
    {
      "imgPath": "img/vibes/sunflower.png",
      "imgLocation": "Distant Pillager Outpost",
      "biome": "Sunflower Plains"
    },
    {
      "imgPath": "img/vibes/plains.png",
      "imgLocation": "Distant Village",
      "biome": "Plains"
    },
    {
      "imgPath": "img/vibes/fields.png",
      "imgLocation": "Moobloom Meadows",
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
      "biome": "Dark Forest"
    },
    {
      "imgPath": "img/vibes/taiga.png",
      "biome": "Taiga"
    },
    {
      "imgPath": "img/vibes/birch-forest.png",
      "biome": "Birch Forest"
    },
    {
      "imgPath": "img/vibes/swamp.png",
      "biome": "Swamp"
    },
    {
      "imgPath": "img/vibes/eroded-bad.png",
      "biome": "Eroded Badlands"
    },
    {
      "imgPath": "img/vibes/plateau-bad.png",
      "biome": "Badlands Plateau"
    },
    {
      "imgPath": "img/vibes/river.png",
      "biome": "River"
    },
    {
      "imgPath": "img/vibes/ocean.png",
      "imgLocation": "Ocean Monument",
      "biome": "Ocean"
    },
    {
      "imgPath": "img/vibes/lush.jpeg",
      "imgLocation": "Lush Cave Entrance",
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
      "imgPath": "img/vibes/jungle.png",
      "biome": "Jungle"
    },
    {
      "imgPath": "img/vibes/bamboo.png",
      "biome": "Bamboo Jungle"
    },
    {
      "imgPath": "img/vibes/frozen-river.png",
      "biome": "Frozen River"
    },
    {
      "imgPath": "img/vibes/frozen-ocean.png",
      "biome": "Frozen Ocean"
    },
    {
      "imgPath": "img/vibes/ice-spikes.png",
      "biome": "Ice Spikes"
    },
    {
      "imgPath": "img/vibes/mushroom-fields.png",
      "imgLocation": "Mushroom Island",
      "biome": "Mushroom Fields"
    },
    {
      "imgPath": "img/vibes/warped-forest.png",
      "imgLocation": "Nether",
      "biome": "Warped Forest"
    },
    {
      "imgPath": "img/vibes/crimson-forest.png",
      "imgLocation": "Nether",
      "biome": "Crimson Forest"
    },
    {
      "imgPath": "img/vibes/nether-wastes.png",
      "imgLocation": "Nether Fortress",
      "biome": "Nether Wastes"
    },
    {
      "imgPath": "img/vibes/soul-valley.png",
      "imgLocation": "Nether",
      "biome": "Soul Sand Valley"
    },
    {
      "imgPath": "img/vibes/basalt-delta.png",
      "imgLocation": "Nether",
      "biome": "Basalt Deltas"
    }
  ]
};

$(document).ready(() => {
  $('.details').hide();

  // Load all images
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
  $('#photo').attr('src', img.imgPath).on('load', function () {
    $(this).addClass('loaded');
  });

  // Show location only if it exists
  if (img.imgLocation) {
    $('.location').text(`Location: ${img.imgLocation}`).show();
  } else {
    $('.location').hide();
  }

  // Every image now has biome - safe to display
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
  startTimer();
}