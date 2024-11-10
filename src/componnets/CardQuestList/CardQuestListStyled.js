import styled from "styled-components";

export const ListStyled = styled.ul`
  & > li {
    padding-top: 20px;

    @media (min-width: 1220px) {
      padding-top: 24px;

      h3 {
        transition: color 1s cubic-bezier(0.075, 0.82, 0.165, 1);
      }

      &:hover h3,
      &:focus h3,
      &:active h3 {
        color: #ad28eb;
        cursor: pointer;
      }
    }
  }

  & > li:not(:last-child) {
    padding-bottom: 20px;

    border-bottom: 1px solid #f8eeff;

    @media (min-width: 1220px) {
      padding-bottom: 24px;
    }
  }
`;

export const QuestStyled = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  text-align: left;
`;

export const Question = styled.h3`
  font-size: 16px;
  font-weight: 600;
  color: #301534;

  @media (min-width: 1220px){
    font-size: 18px;
  }
`;

export const Answer = styled.p`
  text-align: left;

  font-family: "Work Sans";
  font-size: 14px;
  line-height: 1.5;

  color: #8b6990;

  @media (min-width: 1220px){
    font-size: 16px;
  }
`;

export const ButtonStyled = styled.button`
background-color: transparent;
border: none;

&:hover, &:focus, &:active{
    cursor: pointer;
}
`

