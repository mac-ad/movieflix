import { useState, useEffect } from "react";

import {
  AutoScrollCarousel,
  Button1,
  CardsContainer,
  PeopleCard,
} from "../../components";

import { axiosInstance } from "../../config/axios";
import { movieCastUrl } from "../../utils/queryUrls";
import "./CastCrew.css";
import { medium, original, small } from "../../statics";
import { ArrowRight, ClockLight, CompassSolid } from "../../icons";
import Icon from "../../components/Icon";
import { useNavigate } from "react-router-dom";

const CastCrew = ({ movieId, movieName }) => {
  const [data, setData] = useState([]);

  const navigate = useNavigate();

  const fetchData = async () => {
    const res = await axiosInstance({
      method: "get",
      url: `${movieCastUrl}${movieId}/credits`,
    });
    setData((prev) => res.data);
    console.log(res.data);
  };

  const onClickHandler = (e) => {
    navigate(`castcrew`);
  };

  useEffect(() => {
    if (movieId) fetchData();
  }, [movieId]);

  return (
    <div
      className={`castcrew-container ${
        window.innerWidth > 800 ? "wrapper" : ""
      } wrapper`}
    >
      <div className="header">
        <h2>Cast/Crew</h2>
        <Button1
          text="more"
          type="small"
          icon={<ArrowRight />}
          onClick={onClickHandler}
        />
      </div>
      <div className="content">
        {data?.cast
          ?.slice(0, 10)
          ?.map((detail) =>
            detail.profile_path ? (
              <PeopleCard
                width="unset"
                key={detail.cast_id}
                data={detail}
                independent={false}
                quality={medium}
              />
            ) : null
          )}
      </div>
    </div>
  );
};

export default CastCrew;
