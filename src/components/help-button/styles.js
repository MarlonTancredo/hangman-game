import styled from "styled-components";

//Importing global styles.
import { colors } from "../../styles/globalStyles";

export const HelpWrapper = styled.div``;

export const Help = styled.button`
  color: ${colors.white};
  background-color: ${colors.grey};
  padding: 1rem;
  font-weight: bold;
  border: none;
  border-radius: 0.3rem;
  :hover {
    background-color: ${colors.fullGrey};
    cursor: pointer;
  }
`;
