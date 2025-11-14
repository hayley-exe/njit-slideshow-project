let mCurrentIndex = 0;
let mImages = [];
const mWaitTime = 5000;
let timer = null;

// Complete JSON with all images and consistent imgLocation fields
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
      "imgLocation": "Wandering Trader in Mountains",
      "biome": "Windswept Hills"
    },
    {
      "imgPath": "img/vibes/sunflower.png",
      "imgLocation": "Sunflower Fields",
      "biome": "Sunflower Plains"
    },
    {
      "imgPath": "img/vibes/plains.png",
      "imgLocation": "Open Plains",
      "biome": "Plains"
    },
    {
      "imgPath": "img/vibes/fields.png",
      "imgLocation": "Flower Fields",
      "biome": "Flower Forest"
    },
    {
      "imgPath": "img/vibes/coral.png",
      "imgLocation": "Warm Ocean Shipwreck",
      "biome": "Coral Reef"
    },
    {
      "imgPath": "img/vibes/beach-water.png",
      "imgLocation": "Sandy Beach",
      "biome": "Beach"
    },
    {
      "imgPath": "img/vibes/magic-forest.jpeg",
      "imgLocation": "Enchanted Dark Forest",
      "biome": "Dark Oak Forest"
    },
    {
      "imgPath": "img/vibes/taiga.png",
      "imgLocation": "Snowy Taiga Village",
      "biome": "Taiga"
    },
    {
      "imgPath": "img/vibes/birch-forest.png",
      "imgLocation": "Birch Forest Hills",
      "biome": "Birch Forest"
    },
    {
      "imgPath": "img/vibes/swamp.png",
      "imgLocation": "Witch Hut Swamp",
      "biome": "Swamp"
    },
    {
      "imgPath": "img/vibes/eroded-bad.png",
      "imgLocation": "Eroded Badlands Canyon",
      "biome": "Eroded Badlands"
    },
    {
      "imgPath": "img/vibes/plateau-bad.png",
      "imgLocation": "Badlands Plateau",
      "biome": "Badlands Plateau"
    },
    {
      "imgPath": "img/vibes/river.png",
      "imgLocation": "River Valley",
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
      "imgLocation": "Jungle Edge Transition",
      "biome": "Jungle Edge"
    },
    {
      "imgPath": "img/vibes/jungle.png",
      "imgLocation": "Dense Jungle",
      "biome": "Jungle"
    },
    {
      "imgPath": "img/vibes/bamboo.png",
      "imgLocation": "Bamboo Jungle",
      "biome": "Bamboo Forest"
    },
    {
      "imgPath": "img/vibes/frozen-river.png",
      "imgLocation": "Frozen River",
      "biome": "Frozen River"
    },
    {
      "imgPath": "img/vibes/frozen-ocean.png",
      "imgLocation": "Deep Frozen Ocean",
      "biome": "Deep Frozen Ocean"
    },
    {
      "imgPath": "img/vibes/ice-spikes.png",
      "imgLocation": "Ice Spikes Biome",
      "biome": "Ice Spikes"
    },
    {
      "imgPath": "img/vibes/mushroom-fields.png",
      "imgLocation": "Mushroom Island",
      "biome": "Mushroom Fields"
    },
    {
      "imgPath": "img/vibes/warped-forest.png",
      "imgLocation": "Warped Forest",
      "biome": "Warped Forest"
    },
    {
      "imgPath": "img/vibes/crimson-forest.png",
      "imgLocation": "Crimson Forest",
      "biome": "Crimson Forest"
    },
    {
      "imgPath": "img/vibes/nether-wastes.png",
      "imgLocation": "Nether Fortress",
      "biome": "Nether Wastes"
    },
    {
      "imgPath": "img/vibes/soul-sand.png",
      "imgLocation": "Soul Sand Valley",
      "biome": "Soul Sand Valley"
    },
    {
      "imgPath": "img/vibes/basalt-delta.png",
      "imgLocation": "Basalt Deltas",
      "biome": "Basalt Delta"
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

  // Show location if exists, otherwise hide
  if (img.imgLocation) {
    $('.location').text(`Location: ${img.imgLocation}`).show();
  } else {
    $('.location').hide();
  }

  // Always show biome
  $('.description').text(`${img.biome}`);
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