import * as S from "./styles";
type Props = {
  message?: boolean | string;
};

//This component return a button with a custom message seted in the parent component.
const RefreshPageButton = ({ message }: Props) => {
  const refreshPage = () => {
    window.location.reload();
  };

  return (
    <S.ButtonWrapper>
      <S.Button onClick={refreshPage}>
        {message ? message : "Restart game!"}
      </S.Button>
    </S.ButtonWrapper>
  );
};

export default RefreshPageButton;
