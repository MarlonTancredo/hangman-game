//List of words used at App component.
const words = [
  {
    category: "fruits",
    categoryList: ["orange", "banana", "strawberry", "raspberry"],
  },
  {
    category: "animals",
    categoryList: [
      "dog",
      "cat",
      "lion",
      "wolf",
      "elephant",
      "fox",
      "raven",
      "squirrel",
    ],
  },
  {
    category: "dishes",
    categoryList: ["lasagna", "pasta", "barbecue", "pizza"],
  },
  {
    category: "drinks",
    categoryList: [
      "milk",
      "coffee",
      "juice",
      "water",
      "wine",
      "coke",
      "soda",
      "tea",
    ],
  },
  {
    category: "countries",
    categoryList: [
      "brazil",
      "france",
      "spain",
      "italy",
      "portugal",
      "germany",
      "england",
    ],
  },
  {
    category: "environments",
    categoryList: ["montain", "ocean", "desert", "lake"],
  },
];

const wordsLength = words.length;
const wordsRandomIndex = Math.floor(Math.random() * wordsLength); //Get a random index from 0 to wordsLength.

const categoryList = words[wordsRandomIndex].categoryList;
const categoryListLength = categoryList.length;
const categoryListRandomIndex = Math.floor(Math.random() * categoryListLength);

const categoryWord = words[wordsRandomIndex].category;
const randomWord = categoryList[categoryListRandomIndex];

// console.log(categoryWord);
// console.log(randomWord);

//Count the charcters in randomWord and replace them with *.
let unknownWord = "";
for (let i = 0; i < randomWord.length; i++) {
  unknownWord = unknownWord + "*";
}

// console.log(unknownWord);

//Creating an object with random word and unknownWord.
const word = {
  category: categoryWord,
  random: randomWord,
  unknown: unknownWord,
};

//Exporting the object.
export { word };
