import * as S from "./styles";

//This component return the word passed in the parent component.
const WordDisplay = ({ word }) => {
  return (
    <S.WordDisplayWrapper>
      <S.Word>Word: {word}</S.Word>
    </S.WordDisplayWrapper>
  );
};

export default WordDisplay;
