import { medium, small } from "../../statics";

import "./PeopleCard.css";

const PeopleCard = ({ data }) => {
  return (
    <div className="people-card-container">
      <img src={`${medium}${data.profile_path}`} alt="" />
      <div className="name">
        <strong>{data.original_name}</strong>
        <span className="dim">{data.character}</span>
      </div>
    </div>
  );
};

export default PeopleCard;
