import * as S from "./styles";

//This component return the word passed in the parent component.
const WordDisplay = ({ word, category }) => {
  return (
    <S.WordDisplayWrapper>
      <S.Word>Tip: {category}</S.Word>
      <S.Word>Word: {word}</S.Word>
    </S.WordDisplayWrapper>
  );
};

export default WordDisplay;
