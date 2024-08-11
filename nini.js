// Array of image URLs
const images = [
  "/image1.jpg",
  "/image2.jpg",
  "/image3.jpg",
  "/image4.jpg",
  "/image5.jpg",
  "/image6.jpg",
  "/image7.jpg",
  "/image8.jpg",
  "/image9.jpg",
  "/image10.jpg",
  "/image11.jpg",
  "/image12.jpg",
  "/image13.jpg",
  "/image14.jpg",
  "/image15.jpg",
  "/image16.jpg",
  "/image17.jpg",
  "/image18.jpg",
  "/image19.jpg",
  "/image20.jpg",
  "/image21.jpg",
  "/image22.jpg",
  "/image23.jpg",
  "/image24.jpg",
  "/image25.jpg",
  "/image26.jpg",
  "/image27.jpg",
  "/image28.jpg",
  "/image29.jpg",
  "/image30.jpg",
  "/image31.jpg",
  "/image32.jpg",
  "/image33.jpg",
  "/image34.jpg",
  "/image35.jpg",
  "/image36.jpg",
  "/image37.jpg",
  "/image38.jpg",
  "/image39.jpg",
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
