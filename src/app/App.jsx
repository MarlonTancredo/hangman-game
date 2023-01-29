//Importing App styles.
import * as S from "./styles";

//Importing hooks.
import { useEffect, useState } from "react";

//Importing components.
import AttemptDisplay from "../components/attempt-display/AttemptDisplay";
import WordDisplay from "../components/word-display/WordDisplay";
import KeyboardButton from "../components/keyboard-button/KeyboardButton";
import RefreshPageButton from "../components/refresh-page-buton/RefreshPageButton";
import HelpButton from "../components/help-button/HelpButton";

//List of letters used to assign button value.
import { letters } from "../data/alphabet-letters/letters";
//List of words returns a ramdom word from the list.
import { word } from "../data/word-list/words";

//The App component render a keyboard, a display to show the attempts, a word, a help button and refresh page button.
function App() {
  const [unknownWord, setUnknownWord] = useState(word.unknown);
  const [attempt, setAttempt] = useState(5);
  const [victory, setVictory] = useState(false);

  //See the word
  // console.log(word.random);

  //Each time the unknownWord value is updated will be compared to word.random.
  useEffect(() => {
    //When unknownWord wil be the same word word.random vicetory state will be updated.
    if (unknownWord === word.random) {
      setVictory(true);
    }
  }, [unknownWord]);

  //This function change attempt state if the user entered a letter that is not in the word.
  const attemptCounter = (isCorrect) => {
    if (attempt === 0) {
      return;
    }
    if (!isCorrect) {
      setAttempt(attempt - 1);
    }
  };

  //This function update the unknowWord state replacing the asterisk with the letter at the correct index.
  const replaceUnknownLetter = (buttonValue) => {
    let isCorrect = false;

    const buttonValueLowerCase = buttonValue.toLowerCase();
    let newWord = unknownWord.split("");

    //Iterates unknownWord if buttonValue is in word.random.
    for (let i = 0; i < word.random.length; i++) {
      if (word.random[i] === buttonValueLowerCase) {
        newWord[i] = buttonValueLowerCase;
        isCorrect = true;
      }
    }

    //Evoking attemptCounter and passing isCorrect value.
    attemptCounter(isCorrect);

    //Updating unknownWord state.
    setUnknownWord(newWord.join(""));
  };

  //Callback function used to get the button letter.
  const getButtonValue = (buttonValue) => {
    replaceUnknownLetter(buttonValue);
  };

  //Case victory is false and attempt is diferent than 0.
  return !victory && attempt !== 0 ? (
    <S.AppWrapper>
      <S.Title>Hangman Game</S.Title>
      <AttemptDisplay attempt={attempt} />
      <WordDisplay word={unknownWord} />
      <S.Keypad>
        {letters.map((letter) => {
          return (
            <KeyboardButton
              key={letter}
              letter={letter}
              sendToParent={getButtonValue}
            />
          );
        })}
      </S.Keypad>
      <S.Footer>
        <RefreshPageButton message={"Change word!"} />
        <HelpButton />
      </S.Footer>
    </S.AppWrapper>
  ) : victory ? (
    <S.AppWrapper>
      <S.DisplayMessage>Victory!</S.DisplayMessage>
      <WordDisplay word={unknownWord} />
      <RefreshPageButton />
    </S.AppWrapper>
  ) : (
    <S.AppWrapper>
      <S.DisplayMessage>Lost!</S.DisplayMessage>
      <S.DisplayMessage>The word was: {word.random}</S.DisplayMessage>
      <RefreshPageButton />
    </S.AppWrapper>
  );
}

export default App;
