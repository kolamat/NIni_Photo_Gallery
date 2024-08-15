// Array of image URLs
const images1 = [
  "images1/nin1.jpg",
  "images1/nin2.jpg",
  "images1/nin3.jpg",
  "images1/nin4.jpg",
  "images1/nin5.jpg",
  "images1/nin6.jpg",
  "images1/nin7.jpg",
  "images1/nin8.jpg",
  "images1/nin9.jpg",
  "images1/nin10.jpg",
  "images1/nin11.jpg",
  "images1/nin12.jpg",
  "images1/nin13.jpg",
  "images1/nin14.jpg",
  "images1/nin15.jpg",
  "images1/nin16.jpg",
  "images1/nin17.jpg",
  "images1/nin18.jpg",
  "images1/nin19.jpg",
  "images1/nin20.jpg",
  "images1/nin21.jpg",
  "images1/nin22.jpg",
  "images1/nin23.jpg",
  "images1/nin24.jpg",
  "images1/nin25.jpg",
  "images1/nin26.jpg",
  "images1/nin27.jpg",
  "images1/nin28.jpg",
];

const body = document.querySelector("body");
body.style.display = "grid";
body.style.width = "100%   ";
body.style.padding = "0px";
body.style.margin = "0px";
body.style.alignItems = "center";
body.style.justifyItems = "center";
body.style.textAlign = "center";
body.style.overflowX = "hidden";

//HEADER_SECTION
const div = document.createElement("div");
div.id = "div";
div.style.display = "flex";
div.style.justifyContent = "space-between";
document.getElementById("header").appendChild(div);

const headerImage = document.createElement("img");
headerImage.src = "images1/fisayo.jpg";
headerImage.style.width = "160px";
headerImage.style.borderRadius = "10px";
document.getElementById("div").appendChild(headerImage);

const headerImage1 = document.createElement("img");
headerImage1.src = "images1/fisayo&hubby.jpg";
headerImage1.style.borderRadius = "10px";
headerImage1.style.width = "160px";
document.getElementById("div").appendChild(headerImage1);

function startCountdown(startNumber) {
  const countdownElement = document.getElementById("countdown");
  let currentNumber = startNumber;

  countdownElement.textContent = currentNumber;

  const intervalId = setInterval(() => {
    currentNumber -= 1;
    countdownElement.textContent = currentNumber;
    countdownElement.style.fontSize = "60px";

    if (currentNumber <= 0) {
      clearInterval(intervalId);
      countdownElement.textContent = "Picture Slides⬇!";
      countdownElement.style.background = "#000"; // Change background when time's up
      countdownElement.style.color = "#fff"; // Change color when time's up
      countdownElement.style.width = "auto";
      countdownElement.style.padding = "20px";
      countdownElement.style.borderRadius = "20px";
    }
  }, 500);
}

startCountdown(15);

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

// Section_One
const button = document.createElement("button");
button.id = "Button";
button.textContent = "Click Me";
button.addEventListener("click", prayerButton);
document.querySelector("body").appendChild(button);

function prayerButton() {
  button.textContent =
    "Welcome to your best year on earth wishing you Long life and  prosperity in life and a Happy Birthday ";
  button.style.background = "black";
  button.style.color = "white";
  document.getElementById("Button").appendChild(button);
}
