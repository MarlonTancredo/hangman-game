import * as S from "./styles";
type Props = {
  letter: string;
  sendToParent?: (letter: string) => string | void;
  isClicked?: boolean;
};

//This component return a button with a letter value to the parend component.
const KeyboardButton = ({ letter, sendToParent, isClicked }: Props) => {
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
