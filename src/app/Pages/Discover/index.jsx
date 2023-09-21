import { imgURL } from "../../statics";
import { CardsContainer, MovieCard, MovieCardSkeleton } from "../../components";
import { useEffect, useState } from "react";
import { axiosInstance } from "../../config/axios";
import { discoverMovieUrl } from "../../utils/queryUrls";

const Discover = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const res = await axiosInstance({
      method: "get",
      url: `${discoverMovieUrl}`,
    });
    setData((prev) => [...prev, ...res.data.results]);
  };

  useEffect(() => {
    fetchData();
    fetchData();
    fetchData();
    fetchData();
  }, []);

  return (
    <div className="page-container discover-container">
      {/* <h2>Discover</h2> */}

      <CardsContainer>
        {data
          ? data.map((item, index) => (
              <MovieCard index={index} key={`${item}${index}`} data={item} />
            ))
          : null}
      </CardsContainer>
    </div>
  );
};

export default Discover;
