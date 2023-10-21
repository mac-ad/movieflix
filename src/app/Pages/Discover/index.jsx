import { imgURL } from "../../statics";
import { CardsContainer, MovieCard, MovieCardSkeleton } from "../../components";
import { useContext, useEffect, useState } from "react";
import { axiosInstance } from "../../config/axios";
import { useQuery } from "@tanstack/react-query";
import { useDiscoverMovies } from "../../hooks";
import { GlobalContext } from "../../context";

const Discover = () => {
  const { data, isLoading } = useDiscoverMovies();

  const { scrolledToBottom } = useContext(GlobalContext);

  useEffect(() => {
    console.log(scrolledToBottom);
  }, []);

  return (
    <div className="page-container discover-container">
      {/* <h2>Discover</h2> */}

      {isLoading ? (
        "...loading"
      ) : (
        <CardsContainer gap="0em">
          {data
            ? data?.data?.results?.map((item, index) => (
                <MovieCard index={index} key={`${item}${index}`} data={item} />
              ))
            : null}
        </CardsContainer>
      )}
    </div>
  );
};

export default Discover;
