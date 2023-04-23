import * as S from "./styles";

//This component display an alert showing instructions to the user.
const HelpButton = () => {
  //This function is triggered when the button is clicked.
  const displayHelp = () => {
    alert(
      `Hangman game!
      \nIn this game you need to guess the word within 5 attempts
      \nThe words are a list of many and random words.
      \nEnjoy the game!`
    );
  };

  return (
    <S.HelpWrapper>
      <S.Help onClick={displayHelp}>Help?</S.Help>
    </S.HelpWrapper>
  );
};

export default HelpButton;
