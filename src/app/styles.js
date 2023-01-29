import styled from "styled-components";

//Importing global styles.
import { colors, fontSize } from "../styles/globalStyles";

export const AppWrapper = styled.div`
  margin-left: 10rem;
  margin-right: 10rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.p`
  color: ${colors.white};
  font-size: ${fontSize.medium};
  font-weight: bold;
`;

export const Keypad = styled.div`
  width: 30rem;
  margin-right: 5rem;
  margin-left: 5rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.2rem;
`;

export const DisplayMessage = styled.p`
  color: ${colors.white};
  font-size: ${fontSize.medium};
  font-weight: bold;
`;

export const Footer = styled.div`
  margin-top: 2rem;
  display: flex;
  gap: 2rem;
`;
