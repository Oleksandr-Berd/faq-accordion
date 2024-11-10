import data from "../../db/db.json"

import buttonIcon from "../../assets/icons/ph_plus-circle-fill.png"

const CardQuestList = () => {
    return (
      <ul>
        {data.map(({ title, id }) => (
          <li key={id}>
            <p>{title}</p>
            <button>
              <img src={buttonIcon} alt="button" />
            </button>
          </li>
        ))}
      </ul>
    );
}
 
export default CardQuestList;