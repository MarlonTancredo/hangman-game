import * as S from "./styles";

import firstStep from "../../img/hangman/0.jpg";
import secondStep from "../../img/hangman/1.jpg";
import thirdStep from "../../img/hangman/2.jpg";
import fourthStep from "../../img/hangman/3.jpg";
import fifthStep from "../../img/hangman/4.jpg";
import sixthStep from "../../img/hangman/5.jpg";
import seventhStep from "../../img/hangman/6.jpg";

type Props = {
  attempt: number;
};

//This component return an image dipending of the step in the app component and an error message.
const HangmanDisplay = ({ attempt }: Props) => {
  return attempt === 6 ? (
    <S.HangmanWrapper>
      <S.HangmamImg src={firstStep} alt="firstStep" />
    </S.HangmanWrapper>
  ) : attempt === 5 ? (
    <S.HangmanWrapper>
      <S.HangmamImg src={secondStep} alt="secondStep" />
    </S.HangmanWrapper>
  ) : attempt === 4 ? (
    <S.HangmanWrapper>
      <S.HangmamImg src={thirdStep} alt="thirdStep" />
    </S.HangmanWrapper>
  ) : attempt === 3 ? (
    <S.HangmanWrapper>
      <S.HangmamImg src={fourthStep} alt="fourthStep" />
    </S.HangmanWrapper>
  ) : attempt === 2 ? (
    <S.HangmanWrapper>
      <S.HangmamImg src={fifthStep} alt="fifthStep" />
    </S.HangmanWrapper>
  ) : attempt === 1 ? (
    <S.HangmanWrapper>
      <S.HangmamImg src={sixthStep} alt="sixthStep" />
    </S.HangmanWrapper>
  ) : attempt === 0 ? (
    <S.HangmanWrapper>
      <S.HangmamImg src={seventhStep} alt="seventhStep" />
    </S.HangmanWrapper>
  ) : (
    <S.HangmanWrapper>
      <S.ErrorMessage>
        Set the attempt at app component to 6 please!
      </S.ErrorMessage>
    </S.HangmanWrapper>
  );
};

export default HangmanDisplay;
