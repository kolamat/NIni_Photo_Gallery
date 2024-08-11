// Array of image URLs
const images = [
  "/images/image1.jpg",
  "/images/image2.jpg",
  "/images/image3.jpg",
  "/images/image4.jpg",
  "/images/image5.jpg",
  "/images/image6.jpg",
  "/images/image7.jpg",
  "/images/image8.jpg",
  "/images/image9.jpg",
  "/images/image10.jpg",
  "/images/image11.jpg",
  "/images/image12.jpg",
  "/images/image13.jpg",
  "/images/image14.jpg",
  "/images/image15.jpg",
  "/images/image16.jpg",
  "/images/image17.jpg",
  "/images/image18.jpg",
  "/images/image19.jpg",
  "/images/image20.jpg",
  "/images/image21.jpg",
  "/images/image22.jpg",
  "/images/image23.jpg",
  "/images/image24.jpg",
  "/images/image25.jpg",
  "/images/image26.jpg",
  "/images/image27.jpg",
  "/images/image28.jpg",
  "/images/image29.jpg",
  "/images/image30.jpg",
  "/images/image31.jpg",
  "/images/image32.jpg",
  "/images/image33.jpg",
  "/images/image34.jpg",
  "/images/image35.jpg",
  "/images/image36.jpg",
  "/images/image37.jpg",
  "/images/image38.jpg",
  "/images/image39.jpg",
];

const images1 = [
  "/images/nin1",
  "/images1/nin2",
  "/images1/nin3",
  "/images1/nin4",
  "/images1/nin5",
  "/images1/nin6",
  "/images1/nin7",
  "/images1/nin8",
  "/images1/nin9",
  "/images1/nin10",
  "/images1/nin11",
  "/images1/nin12",
  "/images1/nin13",
  "/images1/nin14",
  "/images1/nin15",
  "/images1/nin16",
  "/images1/nin17",
  "/images1/nin18",
  "/images1/nin19",
  "/images1/nin20",
  "/images1/nin21",
  "/images1/nin22",
  "/images1/nin23",
  "/images1/nin24",
  "/images1/nin25",
  "/images1/nin26",
  "/images1/nin27",
  "/images1/nin28",
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
  }, 1000);
}

let intervalId; // Variable to hold the interval ID

// Function to start the image shuffling
function startShuffling() {
  if (!intervalId) {
    // Check if already running
    intervalId = setInterval(shuffleImages, 500);
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
