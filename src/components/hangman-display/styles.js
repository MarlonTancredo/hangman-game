import styled from "styled-components";

import { colors, fontSize } from "../../styles/globalStyles";

export const HangmanWrapper = styled.div`
  margin-bottom: 3rem;
`;

export const HangmamImg = styled.img`
  color: ${colors.white};
`;

export const ErrorMessage = styled.h1`
  color: ${colors.white};
  font-size: ${fontSize.medium};
  text-align: center;
`;
