import * as S from "./styles";

//This component return a button with a letter value to the parend component.
const KeyboardButton = ({ letter, sendToParent, isClicked }) => {
  const buttonClick = () => {
    if (sendToParent === undefined) {
      alert("You have already enter this letter!");
      return;
    }
    sendToParent(letter);
  };

  return (
    <S.ButtonWrapper>
      <S.Button isClicked={isClicked} onClick={buttonClick}>
        {letter}
      </S.Button>
    </S.ButtonWrapper>
  );
};

export default KeyboardButton;
