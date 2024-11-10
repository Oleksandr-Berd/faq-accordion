import * as SC from "./CardQuestListStyled"

import data from "../../db/db.json"

import CardQuestUnit from "./CardQuestUnit"

const CardQuestList = () => {
   
    return (
      <SC.ListStyled>
        {data.map(({ question, text, id }) => (
          <CardQuestUnit  id={id} question={question} text={text} />
        ))}
      </SC.ListStyled>
    );
}
 
export default CardQuestList;