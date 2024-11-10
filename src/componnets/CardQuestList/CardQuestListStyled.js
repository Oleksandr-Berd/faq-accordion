import styled from "styled-components";

export const ListStyled = styled.ul`
& >li{
    padding-top: 20px;
}

  & > li:not(:last-child) {
    padding-bottom: 20px;

    border-bottom:1px solid #f8eeff;
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
`;

export const Answer = styled.p`
  text-align: left;

  font-family: "Work Sans";
  font-size: 14px;
  line-height: 1.5;

  color: #8b6990;
`;

export const ButtonStyled = styled.button`
background-color: transparent;
border: none;
`

