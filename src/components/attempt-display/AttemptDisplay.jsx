import * as S from "./styles";

//This component returns the attempts got by props at parent components
const AttemptDisplay = ({ attempt }) => {
  return (
    <S.AttemptDisplayWrapper>
      <S.Attempts>Attempts: {attempt}</S.Attempts>
    </S.AttemptDisplayWrapper>
  );
};

export default AttemptDisplay;
