import { useState, useEffect, useRef } from "react";
import SearchBox from "./SearchBox";
import "./Search.css";
import { axiosInstance } from "../../config/axios";
import {
  searchMovieUrl,
  searchPeopleUrl,
  searchTvUrl,
} from "../../utils/queryUrls";
import { CardsContainer, MovieCard, PeopleCard } from "../../components";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { medium, original, small } from "../../statics";

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [searchFor, setSearchFor] = useState("MOVIE");
  const [results, setResults] = useState([]);

  const keywordRef = useRef(null);
  const searchForRef = useRef(null);

  const query = searchParams.get("query");

  const fetchMovies = async (q) => {
    const res = await axiosInstance({
      method: "get",
      url: `${searchMovieUrl}`,
      params: {
        query: q,
      },
    });
    console.log("result = ", res);
    setResults(res.data.results);
  };

  const fetchTvs = async (q) => {
    const res = await axiosInstance({
      method: "get",
      url: `${searchTvUrl}`,
      params: {
        query: q,
      },
    });
    console.log("result = ", res);
    setResults(res.data.results);
  };

  const fetchPeople = async (q) => {
    const res = await axiosInstance({
      method: "get",
      url: `${searchPeopleUrl}`,
      params: {
        query: q,
      },
    });
    console.log("result = ", res);
    setResults(res.data.results);
  };

  const initiateSearch = (query) => {
    console.log("inbisitaing search", query);
    switch (searchFor) {
      case "MOVIE":
        console.log("fetching movies");
        fetchMovies(query);
        break;

      case "TV":
        console.log("fetching tv");
        fetchTvs(query);
        break;

      case "PEOPLE":
        console.log("fetching peple");
        fetchPeople(query);
        break;
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setSearchParams({ keyword: keywordRef.current.value });
    initiateSearch(keywordRef.current.value);
  };

  return (
    <div className="page-container search-container">
      <div className="search-form-container">
        <form action="" onSubmit={submitHandler}>
          <select
            ref={searchForRef}
            name="search_for"
            defaultValue="search_for"
            onChange={(e) => {
              console.log("changed to", e.target.value);
              setSearchFor(e.target.value);
            }}
          >
            <option value="search_for">Search For</option>
            <option value="MOVIE">Movies</option>
            <option value="TV">TV</option>
            <option value="PEOPLE">People</option>
          </select>
          <input
            name="keyword"
            type="text"
            ref={keywordRef}
            placeholder="Search for a movie or tv..."
          />
          <button>search</button>
        </form>
      </div>
      <div className="search-result-container">
        <CardsContainer gap="0em">
          {searchFor == "MOVIE" && (
            <>
              {results?.map((result) =>
                result.poster_path ? (
                  <MovieCard
                    quality={medium}
                    data={result}
                    borderRadius="5px"
                  />
                ) : null
              )}
            </>
          )}

          {searchFor == "TV" && (
            <>
              {results?.map((result) =>
                result.poster_path ? (
                  <MovieCard data={result} borderRadius="5px" />
                ) : null
              )}
            </>
          )}

          {searchFor == "PEOPLE" && (
            <>
              {results?.map((result) =>
                result.profile_path ? (
                  <PeopleCard
                    data={result}
                    quality={medium}
                    independent={true}
                  />
                ) : null
              )}
            </>
          )}
        </CardsContainer>
      </div>
    </div>
  );
};

export default Search;

// const results = [
//   {
//     adult: false,
//     backdrop_path: "/l0qVZIpXtIo7km9u5Yqh0nKPOr5.jpg",
//     id: 1668,
//     name: "Friends",
//     original_language: "en",
//     original_name: "Friends",
//     overview:
//       "Six young people from New York City, on their own and struggling to survive in the real world, find the companionship, comfort and support they get from each other to be the perfect antidote to the pressures of life.",
//     poster_path: "/f496cm9enuEsZkSPzCwnTESEK5s.jpg",
//     media_type: "tv",
//     genre_ids: [35],
//     popularity: 475.6,
//     first_air_date: "1994-09-22",
//     vote_average: 8.446,
//     vote_count: 7221,
//     origin_country: ["US"],
//   },
//   {
//     adult: false,
//     backdrop_path: "/jT7GMt5DH4A3Bbq55mwgEjq6n8o.jpg",
//     id: 108248,
//     title: "Friends",
//     original_language: "ta",
//     original_title: "Friends",
//     overview:
//       "A man values his best friend more than anything else in the world. One day he confesses a dark secret from their childhood to his wife, which is overheard by another. Once the secret gets out, the friendship is destroyed.",
//     poster_path: "/s7YLtazr7adX2YVqhHYSOeZt0qb.jpg",
//     media_type: "movie",
//     genre_ids: [10751, 18, 35],
//     popularity: 7.723,
//     release_date: "2001-01-14",
//     video: false,
//     vote_average: 6.94,
//     vote_count: 25,
//   },
//   {
//     adult: false,
//     backdrop_path: "/8kYHyiA4aMq7ow5wFoXeh1xg8Gj.jpg",
//     id: 4156,
//     title: "Friends",
//     original_language: "en",
//     original_title: "Friends",
//     overview:
//       "French teens Paul and Michelle run away from home to a remote beach and have a baby.",
//     poster_path: "/oaNJNddADomFR97gr3SsY6xVUuU.jpg",
//     media_type: "movie",
//     genre_ids: [18, 10749],
//     popularity: 6.017,
//     release_date: "1971-03-24",
//     video: false,
//     vote_average: 6.1,
//     vote_count: 18,
//   },
//   {
//     adult: false,
//     backdrop_path: null,
//     id: 20813,
//     name: "Friends",
//     original_language: "en",
//     original_name: "Friends",
//     overview:
//       "Friends is a short-lived kids-oriented drama that aired in the spring of 1979. The series, which was produced by Aaron Spelling and aired on ABC, starred Charlie Aiken, Jill Whelan, and Jarrod Johnson as three Southern Californian 11-year-olds. Karen Morrow also appeared. Only five one-hour episodes were produced before the series was cancelled.",
//     poster_path: "/ogRWiG361aZsRe0M35iou9E7nq6.jpg",
//     media_type: "tv",
//     genre_ids: [],
//     popularity: 4.92,
//     first_air_date: "1979-03-25",
//     vote_average: 5.0,
//     vote_count: 1,
//     origin_country: ["US"],
//   },
//   {
//     adult: false,
//     backdrop_path: null,
//     id: 196924,
//     title: "Friends",
//     original_language: "en",
//     original_title: "Friends",
//     overview:
//       "The beginning of the end of the apartheid era in South Africa is seen through the perspectives of three female friends: Sophie, who is of English descent; Aninka, who is an Afrikaner; and Thoko, who is black.",
//     poster_path: "/dZB6ny9nGD56crinf4hfeVFTZ2E.jpg",
//     media_type: "movie",
//     genre_ids: [18],
//     popularity: 1.39,
//     release_date: "1993-05-26",
//     video: false,
//     vote_average: 5.667,
//     vote_count: 6,
//   },
//   {
//     adult: false,
//     backdrop_path: "/oJxLvh3ku9Ad8Axpm73DL45o1hw.jpg",
//     id: 33765,
//     name: "My Little Pony: Friendship Is Magic",
//     original_language: "en",
//     original_name: "My Little Pony: Friendship Is Magic",
//     overview:
//       '"Get your muzzle out of those books and make some friends!" That\'s what Princess Celestia tells Twilight Sparkle. She may be the smartest unicorn in Equestria, but Twilight Sparkle gets an "incomplete" in friendship. There\'s more to life than learning magic, after all -- so she goes to Ponyville on a mission to make friends. There she meets five special ponies who take her on exciting adventures and teach her the most powerful magic of all ... the magic of friendship!',
//     poster_path: "/fwW7WgJIjhBsnzk87Gyh6g9187m.jpg",
//     media_type: "tv",
//     genre_ids: [16, 35, 10765, 10762],
//     popularity: 154.391,
//     first_air_date: "2010-10-10",
//     vote_average: 8.111,
//     vote_count: 561,
//     origin_country: ["CA", "US"],
//   },
//   {
//     adult: false,
//     id: 1701530,
//     name: "Friends",
//     original_name: "Friends",
//     media_type: "person",
//     popularity: 0.6,
//     gender: 0,
//     known_for_department: "Acting",
//     profile_path: null,
//     known_for: [
//       {
//         adult: false,
//         backdrop_path: "/7MG8skHzoMJzKR9tHaOO5ufUkR9.jpg",
//         id: 12642,
//         name: "Melodifestivalen",
//         original_language: "sv",
//         original_name: "Melodifestivalen",
//         overview:
//           "The annual music competition organised by Swedish public broadcasters Sveriges Television and Sveriges Radio to determine the country's representative for the Eurovision Song Contest.",
//         poster_path: "/pIVmxtQ4eKLf75Ku5kltDAw8hx8.jpg",
//         media_type: "tv",
//         genre_ids: [10764, 10751],
//         popularity: 30.527,
//         first_air_date: "1959-02-26",
//         vote_average: 4.4,
//         vote_count: 5,
//         origin_country: ["SE"],
//       },
//     ],
//   },
//   {
//     adult: false,
//     backdrop_path: "/uuzf1bXd3DEBaLgA0XKPMeuGECI.jpg",
//     id: 644376,
//     title: "Friends",
//     original_language: "en",
//     original_title: "Friends",
//     overview:
//       "The “small” one is, well, small, and the “big” one is definitely very very big. They are friends.",
//     poster_path: "/hGKE5aaVo9qBJagEGUERcFAdFzo.jpg",
//     media_type: "movie",
//     genre_ids: [35, 12, 16],
//     popularity: 0.607,
//     release_date: "2019-10-31",
//     video: false,
//     vote_average: 0.0,
//     vote_count: 0,
//   },
//   {
//     adult: false,
//     backdrop_path: "/77r5EvZ78Z7CHOHqaaKG1SPqocf.jpg",
//     id: 290271,
//     title:
//       "One Piece \"3D2Y\": Overcome Ace's Death! Luffy's Vow to his Friends",
//     original_language: "ja",
//     original_title: "ONE PIECE “3D2Y” エースの死を越えて! ルフィ仲間との誓い",
//     overview:
//       "The special takes place during the two year before the Straw Hats reunite on Sabody.  Luffy is currently in Rusukaina training to get stronger to take on the New World. However the training  is interrupted when Hancock's sisters, Marigold and Sandersonia, are kidnapped by the Byrnndi World,  a pirate who was locked away on Level 6 of Impel Down but escaped during Luffy's invasion to save Ace,  in order to lure Hancock to him and use her as a hostage against the World Government due to her  Shichibukai status. Thus Luffy and Hancock head off to confront him and save Hancock's sisters.",
//     poster_path: "/caUI7YlhVXykFWQ7Ul7RQ2wQRpv.jpg",
//     media_type: "movie",
//     genre_ids: [16, 28, 12, 35, 14],
//     popularity: 42.175,
//     release_date: "2014-12-31",
//     video: false,
//     vote_average: 6.963,
//     vote_count: 151,
//   },
//   {
//     adult: false,
//     backdrop_path: null,
//     id: 229185,
//     title: "Friends",
//     original_language: "en",
//     original_title: "Friends",
//     overview:
//       "John is a legal assistant who is looking forward to marriage to his fiancee Sally, but his daydream is interrupted when a model plane crashes through his window. Following the plane is a family of six who invade his life and apartment.",
//     poster_path: "/p0WX0xBopmyjqbCfXVt2dsmLmRM.jpg",
//     media_type: "movie",
//     genre_ids: [18],
//     popularity: 1.808,
//     release_date: "1988-05-06",
//     video: false,
//     vote_average: 0.0,
//     vote_count: 0,
//   },
//   {
//     adult: false,
//     backdrop_path: null,
//     id: 552783,
//     title: "Friends",
//     original_language: "en",
//     original_title: "Friends",
//     overview:
//       "A short film about a roller-coaster ride of a friendship between two imaginative young girls.",
//     poster_path: "/2gxdI27gPPJdpt6qhoqCn8OFAta.jpg",
//     media_type: "movie",
//     genre_ids: [],
//     popularity: 0.6,
//     release_date: "1972-01-01",
//     video: false,
//     vote_average: 0.0,
//     vote_count: 0,
//   },
//   {
//     adult: false,
//     backdrop_path: "/rYPATzinzCoJPOrjSsJGrIssI8g.jpg",
//     id: 905020,
//     title: "Friends",
//     original_language: "en",
//     original_title: "Friends",
//     overview:
//       "Edgar is a lonely crow who just wants to make a friend. Unfortunately for his target, Elena, he goes about it in the worst way possible.",
//     poster_path: "/nmLoFSlTQnhbSzcsQ9JNCfElGxk.jpg",
//     media_type: "movie",
//     genre_ids: [16, 35, 27],
//     popularity: 1.113,
//     release_date: "2021-08-20",
//     video: false,
//     vote_average: 0.0,
//     vote_count: 0,
//   },
//   {
//     adult: false,
//     backdrop_path: "/ea2Bw6064VpAE7FsLFBlSIb6Qcr.jpg",
//     id: 4887,
//     name: "Barney & Friends",
//     original_language: "en",
//     original_name: "Barney & Friends",
//     overview:
//       "Barney & Friends is an American children's television series aimed at children from ages 2 to 5. The series, which first aired on April 6, 1992, features the title character Barney, a purple anthropomorphic Tyrannosaurus rex who conveys educational messages through songs and small dance routines with a friendly, optimistic attitude.",
//     poster_path: "/ijt54PA1pZ2ae68ODBk3vfWSK0e.jpg",
//     media_type: "tv",
//     genre_ids: [35, 10751, 10762],
//     popularity: 73.542,
//     first_air_date: "1992-04-06",
//     vote_average: 4.648,
//     vote_count: 64,
//     origin_country: ["US"],
//   },
//   {
//     adult: false,
//     backdrop_path: "/i7f90jzCPDBJHf5bFbU9Ot2zSz.jpg",
//     id: 193838,
//     title: "Friends",
//     original_language: "en",
//     original_title: "Friends",
//     overview: "The orphan Dora is courted by two different gold miners.",
//     poster_path: "/37P4dH2JCnbdObNBb79erJI8pzF.jpg",
//     media_type: "movie",
//     genre_ids: [37, 10749],
//     popularity: 1.553,
//     release_date: "1912-09-22",
//     video: false,
//     vote_average: 5.4,
//     vote_count: 7,
//   },
//   {
//     adult: false,
//     backdrop_path: null,
//     id: 1070057,
//     title: "Friends",
//     original_language: "fr",
//     original_title: "Friends",
//     overview: "Short movie written and directed by Sylvain Pelissier.",
//     poster_path: null,
//     media_type: "movie",
//     genre_ids: [27],
//     popularity: 0.6,
//     release_date: "2018-05-10",
//     video: false,
//     vote_average: 0.0,
//     vote_count: 0,
//   },
//   {
//     adult: false,
//     backdrop_path: null,
//     id: 932483,
//     title: "Friends",
//     original_language: "xx",
//     original_title: "Friends",
//     overview:
//       "Junko Wada's performance captures the spirit of birds in flight.",
//     poster_path: "/fucwqXxCADfAYST2xyG1FOaLOqh.jpg",
//     media_type: "movie",
//     genre_ids: [],
//     popularity: 0.6,
//     release_date: "2011-01-01",
//     video: false,
//     vote_average: 0.0,
//     vote_count: 0,
//   },
//   {
//     adult: false,
//     backdrop_path: null,
//     id: 926195,
//     title: "Friends",
//     original_language: "en",
//     original_title: "Friends",
//     overview: "An overview about the movie Friends",
//     poster_path: null,
//     media_type: "movie",
//     genre_ids: [35, 10749],
//     popularity: 0.84,
//     release_date: "",
//     video: false,
//     vote_average: 0.0,
//     vote_count: 0,
//   },
//   {
//     adult: false,
//     backdrop_path: null,
//     id: 804674,
//     title: "Friends",
//     original_language: "en",
//     original_title: "Friends",
//     overview:
//       "Scenes from New York in the 1960s. Four young people, friendship, jealousy, separation.",
//     poster_path: "/tM6EoJ5RJHVjld8s1G8IbvWcETu.jpg",
//     media_type: "movie",
//     genre_ids: [],
//     popularity: 1.094,
//     release_date: "1967-01-01",
//     video: false,
//     vote_average: 0.0,
//     vote_count: 0,
//   },
//   {
//     adult: false,
//     backdrop_path: null,
//     id: 553665,
//     title: "Friends",
//     original_language: "en",
//     original_title: "Friends",
//     overview:
//       "A counselor and a student both unhappy with their current lives discuss their future plans",
//     poster_path: "/gpDoRPACEH2rlbFu494xTYedC2x.jpg",
//     media_type: "movie",
//     genre_ids: [18],
//     popularity: 0.84,
//     release_date: "",
//     video: false,
//     vote_average: 0.0,
//     vote_count: 0,
//   },
//   {
//     adult: false,
//     backdrop_path: null,
//     id: 516437,
//     title: "Friends",
//     original_language: "en",
//     original_title: "Friends",
//     overview: "Educational filmstrip about friendship",
//     poster_path: null,
//     media_type: "movie",
//     genre_ids: [],
//     popularity: 1.094,
//     release_date: "1972-01-05",
//     video: false,
//     vote_average: 0.0,
//     vote_count: 0,
//   },
// ];
