import React, { useEffect, useState } from "react";
import { medium, original } from "../../statics";
import "./Person.css";
import Icon from "../../components/Icon";
import { ArrowLeft } from "../../icons";
import { useNavigate, useParams } from "react-router-dom";
import { axiosInstance } from "../../config/axios";
import { personDetailUrl } from "../../utils/queryUrls";

const Person = () => {
  const navigate = useNavigate();

  const { personId } = useParams();

  const [data, setData] = useState(null);

  const fetchData = async () => {
    const res = await axiosInstance({
      method: "get",
      url: `${personDetailUrl}/${personId}`,
    });
    console.log(res.data);
    setData((prev) => res.data);
  };

  useEffect(() => {
    if (personId) fetchData();
  }, []);

  if (!data) return <>loading</>;

  return (
    <div className="page-container person-page ">
      <div className="wrapper">
        <div className="header">
          <div
            className="goback"
            onClick={(e) => {
              navigate(-1);
            }}
          >
            <Icon icon={<ArrowLeft />} />
          </div>
        </div>
        <div className="image">
          <img src={`${original}${data.profile_path}`} alt="" />
          <div className="brief-info">
            <ul>
              <li>
                <span className="secondary-text">
                  <h3>{data.name}</h3>
                </span>
              </li>
              <li>
                <span className="secondary-text">
                  {data.birthday} {data.place_of_birth}
                </span>
              </li>
              <li>
                <span className="secondary-text">
                  {data.known_for_department}
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="details">
          <h2>Bio</h2>
          <p className="biography secondary-text">{data.biography}</p>
        </div>
        {/* <div className="known-for">
          <h2>Known For</h2>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, earum.
        </div> */}
      </div>
    </div>
  );
};

export default Person;

// const data = {
//   adult: false,
//   also_known_as: [
//     "Леонардо ДиКаприо",
//     "ليوناردو دي كابريو",
//     "레오나르도 디카프리오",
//     "レオナルド・ディカプリオ",
//     "ลีโอนาร์โด ดิแคพรีโอ",
//     "莱昂纳多·迪卡普里奥",
//     "Leo DiCaprio",
//     "Leonardo Wilhelm DiCaprio",
//     "Λεονάρντο Ντι Κάπριο",
//     "Ντι Κάπριο",
//     "Леонардо Ді Капріо",
//     "Леонардо ДіКапріо",
//     "לאונרדו דיקפריו",
//     "ലിയനാർഡോ ഡികാപ്രിയോ",
//     "Leonardo Di Caprio",
//     "ლეონარდო დიკაპრიო",
//   ],
//   biography:
//     "Leonardo Wilhelm DiCaprio (born November 11, 1974) is an American actor and film producer. Known for his work in biopics and period films, DiCaprio is the recipient of numerous accolades, including an Academy Award, a British Academy Film Award, and three Golden Globe Awards. As of 2019, his films have grossed over $7.2 billion worldwide, and he has been placed eight times in annual rankings of the world's highest-paid actors.\n\nBorn in Los Angeles, DiCaprio began his career in the late 1980s by appearing in television commercials. In the early 1990s, he had recurring roles in various television shows, such as the sitcom Parenthood, and had his first major film part as author Tobias Wolff in This Boy's Life (1993). At age 19, he received critical acclaim and his first Academy Award and Golden Globe Award nominations for his performance as a developmentally disabled boy in What's Eating Gilbert Grape (1993). He achieved international stardom with the star-crossed romances Romeo + Juliet (1996) and Titanic (1997).\n\nAfter the latter became the highest-grossing film at the time, he reduced his workload for a few years. In an attempt to shed his image of a romantic hero, DiCaprio sought roles in other genres, including crime drama in Catch Me If You Can (2002) and Gangs of New York (2002); the latter marked the first of his many successful collaborations with director Martin Scorsese. DiCaprio portrayed Howard Hughes in The Aviator (2004) and received acclaim for his performances in the political thriller Blood Diamond (2006), the crime drama The Departed (2006), and the romantic drama Revolutionary Road (2008).\n\nIn the following decade, DiCaprio starred in several high-profile directors' projects, including the science fiction thriller Inception (2010), the western Django Unchained (2012), the biopic The Wolf of Wall Street (2013), the survival drama The Revenant (2015), for which he won an Academy Award and a BAFTA Award for Best Actor in a Leading Role, and the comedy-drama Once Upon a Time in Hollywood (2019), all of which were critical and commercial successes.\n\nDiCaprio is the founder of Appian Way Productions, a production company that has produced some of his films and the documentary series Greensburg (2008–2010), and the Leonardo DiCaprio Foundation, a nonprofit organization devoted to promoting environmental awareness. He regularly supports charitable causes and has produced several documentaries on the environment. In 2005, he was named a Commander of the Ordre des Arts et des Lettres for his contributions to the arts, and in 2016, he appeared in Time magazine's 100 most influential people in the world.",
//   birthday: "1974-11-11",
//   deathday: null,
//   gender: 2,
//   homepage: "http://leonardodicaprio.com",
//   id: 6193,
//   imdb_id: "nm0000138",
//   known_for_department: "Acting",
//   name: "Leonardo DiCaprio",
//   place_of_birth: "Los Angeles, California, USA",
//   popularity: 56.867,
//   profile_path: "/wo2hJpn04vbtmh0B9utCFdsQhxM.jpg",
// };