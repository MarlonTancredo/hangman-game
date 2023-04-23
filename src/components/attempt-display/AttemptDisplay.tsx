import * as S from "./styles";

type Props = {
  attempt: number;
};

//This component returns the attempts got by props at parent components
const AttemptDisplay = ({ attempt }: Props) => {
  return (
    <S.AttemptDisplayWrapper>
      <S.Attempts>Attempts: {attempt}</S.Attempts>
    </S.AttemptDisplayWrapper>
  );
};

export default AttemptDisplay;
