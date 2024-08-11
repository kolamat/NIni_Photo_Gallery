// Array of image URLs
const images = [
  "/mage1.jpg",
  "/Image2.jpg",
  "/Image3.jpg",
  "/Image4.jpg",
  "/Image5.jpg",
  "/Image6.jpg",
  "/Image7.jpg",
  "/Image8.jpg",
  "/Image9.jpg",
  "/Image10.jpg",
  "/Image11.jpg",
  "/Image12.jpg",
  "/Image13.jpg",
  "/Image14.jpg",
];

// Get the image and button elements
const imageElement = document.getElementById("shuffle-image");
const playButton = document.getElementById("play-button");
const pauseButton = document.getElementById("pause-button");

// Function to shuffle images
function shuffleImages() {
  const randomIndex = Math.floor(Math.random() * images.length);
  const selectedImage = images[randomIndex];

  imageElement.style.opacity = 0; // Fade out
  setTimeout(() => {
    imageElement.src = selectedImage;
    imageElement.style.opacity = 1; // Fade in
  }, 500);
}

let intervalId; // Variable to hold the interval ID

// Function to start the image shuffling
function startShuffling() {
  if (!intervalId) {
    // Check if already running
    intervalId = setInterval(shuffleImages, 3000);
  }
}

// Function to stop the image shuffling
function stopShuffling() {
  clearInterval(intervalId);
  intervalId = null;
}

// Initial load
shuffleImages();

// Event listeners for buttons
playButton.addEventListener("click", startShuffling);
pauseButton.addEventListener("click", stopShuffling);

// Start the shuffle initially
startShuffling();
