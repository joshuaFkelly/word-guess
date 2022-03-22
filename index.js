console.log("test");
const winsEl = document.querySelector("#wins");
const guessesEl = document.querySelector("#guesses");
const guessedEl = document.querySelector("#guessed");
const currentWordEl = document.querySelector("#currentWord");
let wins = 0;
let guesses = 10;
let guessed = [];
const words = [
  {
    word: "armbar",
    image: "images/Armbar.jpg",
  },
  {
    word: "triangle",
    image: "images/Triangle.jpg",
  },
  {
    word: "kimura",
    image: "images/Kimura.jpg",
  },
  {
    word: "kneebar",
    image: "images/Kneebar.jpg",
  },
];
