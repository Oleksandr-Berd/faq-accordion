import styled from "styled-components";

import headerBack from "../../assets/pics/background.png";
import headerBackDesk from "../../assets/pics/background_desk.png";

export const HeaderStyled = styled.header`
  min-height: 232px;

  background-image: url(${headerBack});

  @media (min-width: 1220px) {
    min-height: 320px;
    background-image: url(${headerBackDesk});
  }
`;
