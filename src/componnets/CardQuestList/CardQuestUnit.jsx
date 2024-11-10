import { useState } from "react";

import * as SC from "./CardQuestListStyled";

import buttonIconPlus from "../../assets/icons/ph_plus-circle-fill.png";
import buttonIconMinus from "../../assets/icons/ph_minus-circle-fill.png"

const CardQuestUnit = ({ id, question, text }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleQuest = () => setIsOpen(!isOpen);

  return (
    <li key={id}>
      <SC.QuestStyled>
        <SC.Question>{question}</SC.Question>
        <SC.ButtonStyled type="button" onClick={handleQuest}>
          <img src={isOpen ? buttonIconMinus : buttonIconPlus} alt="button" />
        </SC.ButtonStyled>
      </SC.QuestStyled>
      {isOpen && <SC.Answer>{text}</SC.Answer>}
    </li>
  );
};

export default CardQuestUnit;
