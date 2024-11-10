import * as SC from "./CardStyled"

import logo from "../../assets/pics/logo.png"
import CardQuestList from "../CardQuestList/CardQuestList";

const Card = () => {
    return (
      <SC.CardStyled>
        <SC.LogoCon>
          <img src={logo} alt="logo" />
          <SC.LogoText>
            <span>faq</span>s
          </SC.LogoText >
        </SC.LogoCon>
            <CardQuestList/>
      </SC.CardStyled>
    );
}
 
export default Card;<div>
<div>

</div></div>