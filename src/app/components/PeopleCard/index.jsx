import { useNavigate } from "react-router-dom";
import { medium, small } from "../../statics";

import "./PeopleCard.css";

const PeopleCard = ({ width, data, quality, independent }) => {
  const navigate = useNavigate();

  const clickHandler = (e) => {
    console.log("navigating to ", data.name);
    navigate(`/person/${data.original_name.split(" ").join("-")}/${data.id}`);
  };

  return (
    <div
      style={{
        width: `${independent ? "" : width}`,
      }}
      className="people-card-container"
      onClick={clickHandler}
    >
      <img src={`${quality ? quality : medium}${data.profile_path}`} alt="" />
      <div className="name">
        <strong>{data.original_name}</strong>
        {!independent && <span className="dim">{data.character}</span>}
      </div>
    </div>
  );
};

export default PeopleCard;
