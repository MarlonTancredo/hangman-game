import * as S from "./styles";

type Props = {
  word: string;
  category: string;
};

//This component return the word passed in the parent component.
const WordDisplay = ({ word, category }: Props) => {
  return (
    <S.WordDisplayWrapper>
      <S.Word>Tip: {category}</S.Word>
      <S.Word>Word: {word}</S.Word>
    </S.WordDisplayWrapper>
  );
};

export default WordDisplay;
