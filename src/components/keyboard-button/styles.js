import styled from "styled-components";

//Importing global styles.
import { colors } from "../../styles/globalStyles";

export const ButtonWrapper = styled.div``;

export const Button = styled.button`
  cursor: pointer;
  background-color: ${colors.red};
  color: ${colors.white};
  border: none;
  border-radius: 0.3rem;
  width: 3rem;
  height: 3rem;
  font-weight: bold;
  :hover {
    background-color: ${colors.fullRed};
    cursor: pointer;
  }
`;
