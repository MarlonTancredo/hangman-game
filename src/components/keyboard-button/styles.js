import styled from "styled-components";

//Importing global styles.
import { colors } from "../../styles/globalStyles";

export const ButtonWrapper = styled.div``;

export const Button = styled.button`
  cursor: pointer;
  background-color: ${(props) => (props.isClicked ? colors.grey : colors.red)};
  color: ${colors.white};
  border: none;
  border-radius: 0.3rem;
  width: 3rem;
  height: 3rem;
  font-weight: bold;
  :hover {
    background-color: ${(props) =>
      props.isClicked ? colors.grey : colors.fullRed};
    cursor: ${(props) => (props.isClicked ? "not-allowed" : "pointer")};
  }
`;
