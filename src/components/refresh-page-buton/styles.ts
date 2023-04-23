import styled from "styled-components";

//Importing global styles.
import { colors } from "../../styles/globalStyles";

export const ButtonWrapper = styled.div``;

export const Button = styled.button`
  color: ${colors.white};
  background-color: ${colors.red};
  padding: 1rem;
  font-weight: bold;
  border: none;
  border-radius: 0.3rem;
  :hover {
    background-color: ${colors.fullRed};
    cursor: pointer;
  }
`;
