//HEADER_SECTION
const home = document.createElement("a");
home.textContent = "CountDown";
home.href = "#countdown";
document.getElementById("header").appendChild(home);

const gallery = document.createElement("a");
gallery.textContent = "Gallery";
gallery.href = "#gallery";
document.getElementById("header").appendChild(gallery);

const video = document.createElement("a");
video.textContent = "Video";
video.href = "#video";
document.getElementById("header").appendChild(video);

//Section_One
const nini = document.createElement("h1");
nini.textContent =
  "Welcome to your best and second year on earth wishing you Long life and more prosperity in life and a Happy Birthday ";
document.querySelector("body").appendChild(nini);

function startCountdown(startNumber) {
  const countdownElement = document.getElementById("countdown");
  let currentNumber = startNumber;

  countdownElement.textContent = currentNumber;

  const intervalId = setInterval(() => {
    currentNumber -= 1;
    countdownElement.textContent = currentNumber;
    countdownElement.style.fontSize = "100px";

    if (currentNumber <= 0) {
      clearInterval(intervalId);
      countdownElement.textContent = "Time's up!";
      countdownElement.style.color = "#ff6b6b"; // Change color when time's up
    }
  }, 500);
}

startCountdown(15);

// Array of image URLs
const images1 = [
  "/images1/nin1.jpg",
  "/images1/nin2.jpg",
  "/images1/nin3.jpg",
  "/images1/nin4.jpg",
  "/images1/nin5.jpg",
  "/images1/nin6.jpg",
  "/images1/nin7.jpg",
  "/images1/nin8.jpg",
  "/images1/nin9.jpg",
  "/images1/nin10.jpg",
  "/images1/nin11.jpg",
  "/images1/nin12.jpg",
  "/images1/nin13.jpg",
  "/images1/nin14.jpg",
  "/images1/nin15.jpg",
  "/images1/nin16.jpg",
  "/images1/nin17.jpg",
  "/images1/nin18.jpg",
  "/images1/nin19.jpg",
  "/images1/nin20.jpg",
  "/images1/nin21.jpg",
  "/images1/nin22.jpg",
  "/images1/nin23.jpg",
  "/images1/nin24.jpg",
  "/images1/nin25.jpg",
  "/images1/nin26.jpg",
  "/images1/nin27.jpg",
  "/images1/nin28.jpg",
];

// Get the image and button elements
const imageElement = document.getElementById("shuffle-image");
const playButton = document.getElementById("play-button");
const pauseButton = document.getElementById("pause-button");

// Function to shuffle images
function shuffleImages() {
  const randomIndex = Math.floor(Math.random() * images1.length);
  const selectedImage = images1[randomIndex];

  imageElement.style.opacity = 0; // Fade out
  setTimeout(() => {
    imageElement.src = selectedImage;
    imageElement.style.opacity = 1; // Fade in
  }, 9500);
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
