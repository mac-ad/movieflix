import { useState, useEffect } from "react";
import SearchBox from "./SearchBox";
import "./Search.css";
import { axiosInstance } from "../../config/axios";
import { searchMovieUrl } from "../../utils/queryUrls";
import { CardsContainer, MovieCard } from "../../components";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(
    searchParams.get("page") ? searchParams.get("page") : ""
  );

  const [results, setResults] = useState([]);

  const query = searchParams.get("query");

  const fetchMovies = async (q, p) => {
    const res = await axiosInstance({
      method: "get",
      url: `${searchMovieUrl}`,
      params: {
        query: q,
        page: p,
      },
    });
    console.log("result = ", res);
    setResults((prev) => res.data.results);
  };

  const prevPageHandler = () => {
    setSearchParams({ page: page });
  };
  const nextPageHandler = () => {};

  useEffect(() => {
    if (query) fetchMovies(query, page);
  }, [query, page]);

  return (
    <div className="page-container search-container">
      <SearchBox setResults={setResults} />
      <div className="search-result-container">
        <CardsContainer gap="1em">
          {results?.map((result) =>
            result.backdrop_path ? <MovieCard data={result} /> : null
          )}
        </CardsContainer>

        <div className="pagination-container">
          <button className="prev" onClick={prevPageHandler}>
            Prev
          </button>
          <button className="next" onClick={nextPageHandler}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Search;
