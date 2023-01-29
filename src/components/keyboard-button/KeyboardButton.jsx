import * as S from "./styles";

//This component return a button with a letter value to the parend component.
const KeyboardButton = ({ letter, sendToParent }) => {
  //When button is clicked the sendToParent returns the letter value.
  const buttonClick = () => {
    sendToParent(letter);
  };

  return (
    <S.ButtonWrapper>
      <S.Button onClick={buttonClick}>{letter}</S.Button>
    </S.ButtonWrapper>
  );
};

export default KeyboardButton;
