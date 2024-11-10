import styled from "styled-components";

export const CardStyled = styled.div`
  min-width: calc(100% - 48px * 2);

  position: absolute;
  top: 0;
  left: 50%;

  transform: translate(-50%, -86px);

  padding-left: 24px;
  padding-top: 24px;
  padding-right: 24px;
  padding-bottom: 24px;

  background-color: #fff;

  border-radius: 8px;

  @media (min-width: 1220px) {
    min-width: calc(100% - 420px * 2);

    padding-left: 40px;
    padding-top: 40px;
    padding-right: 40px;
    padding-bottom: 40px;
  }
`;

export const LogoCon = styled.div`
display: flex;
flex-direction: row;
align-items: center;

margin-bottom: 24px;

& > img{
    margin-right: 24px;

    @media (min-width: 1220px){
        width: 40px;
        height: 40px;
    }
}

& span{
    text-transform: uppercase;
}
`

export const LogoText = styled.h1`
  font-family: "Work Sans";
  font-weight: bold;
  font-size: 32px;
  color: #301534;

  @media (min-width: 1220px){
    font-size: 56px;
  }
`;