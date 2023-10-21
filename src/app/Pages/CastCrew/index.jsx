import React, { useEffect, useState } from "react";
import { CardsContainer, PeopleCard } from "../../components";
import { useNavigate, useParams } from "react-router-dom";
import { movieCastUrl } from "../../utils/queryUrls";
import { axiosInstance } from "../../config/axios";
import "./CastCrew.css";
import Icon from "../../components/Icon";
import { ArrowLeft } from "../../icons";

const CastCrew = ({}) => {
  const { movieName, movieId } = useParams();

  const navigate = useNavigate();

  const [data, setData] = useState({});

  const fetchData = async () => {
    const res = await axiosInstance({
      method: "get",
      url: `${movieCastUrl}${movieId}/credits`,
    });
    setData((prev) => res.data);
    console.log(res.data);
  };

  useEffect(() => {
    if (movieId) fetchData();
  }, []);

  console.log("data = ", data);

  return (
    <div className="page-container castcrewContainer ">
      <div className="header">
        <div className="wrapper">
          <div
            className="goback"
            onClick={(e) => {
              navigate(-1);
            }}
          >
            <Icon icon={<ArrowLeft />} />
          </div>
          <h2 className="">{movieName}</h2>
        </div>
      </div>
      <div className="content">
        <CardsContainer gap="0em">
          {data?.cast?.map((c) =>
            c.profile_path ? <PeopleCard data={c} independent={false} /> : null
          )}
        </CardsContainer>
      </div>
    </div>
  );
};

export default CastCrew;
