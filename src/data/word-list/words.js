//List of words used at App component.
const words = [
  "milk",
  "egg",
  "meat",
  "lasagna",
  "orange",
  "banana",
  "strawberry",
  "olive",
  "coffee",
  "sugar",
  "salt",
  "raspberry",
];

const wordsLength = words.length;
const randomWordIndex = Math.floor(Math.random() * wordsLength); //Get a random index from 0 to wordsLength.
const randomWord = words[randomWordIndex]; //Assign the random index to word.

//Count the charcters in randomWord and replace them with *.
let unknownWord = "";
for (let i = 0; i < randomWord.length; i++) {
  unknownWord = unknownWord + "*";
}

//Creating an object with random word and unknownWord.
const word = {
  random: randomWord,
  unknown: unknownWord,
};

//export the object.
export { word };
