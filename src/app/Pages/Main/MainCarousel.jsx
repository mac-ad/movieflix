import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { EffectCards, Pagination } from "swiper/modules";

import { large, original } from "../../statics";
import { useEffect, useRef } from "react";

const movies = [
  {
    adult: false,
    backdrop_path: "/criPrxkTggCra1jch49jsiSeXo1.jpg",
    genre_ids: [878, 12, 28],
    id: 609681,
    original_language: "en",
    original_title: "The Marvels",
    overview:
      "Carol Danvers, aka Captain Marvel, has reclaimed her identity from the tyrannical Kree and taken revenge on the Supreme Intelligence. But unintended consequences see Carol shouldering the burden of a destabilized universe. When her duties send her to an anomalous wormhole linked to a Kree revolutionary, her powers become entangled with that of Jersey City super-fan Kamala Khan, aka Ms. Marvel, and Carol’s estranged niece, now S.A.B.E.R. astronaut Captain Monica Rambeau. Together, this unlikely trio must team up and learn to work in concert to save the universe.",
    popularity: 2724.536,
    poster_path: "/9GBhzXMFjgcZ3FdR9w3bUMMTps5.jpg",
    release_date: "2023-11-08",
    title: "The Marvels",
    video: false,
    vote_average: 6.4,
    vote_count: 1165,
  },
  {
    adult: false,
    backdrop_path: "/bmlkLCjrIWnnZzdAQ4uNPG9JFdj.jpg",
    genre_ids: [35, 10751, 14],
    id: 787699,
    original_language: "en",
    original_title: "Wonka",
    overview:
      "Willy Wonka – chock-full of ideas and determined to change the world one delectable bite at a time – is proof that the best things in life begin with a dream, and if you’re lucky enough to meet Willy Wonka, anything is possible.",
    popularity: 2301.226,
    poster_path: "/qhb1qOilapbapxWQn9jtRCMwXJF.jpg",
    release_date: "2023-12-06",
    title: "Wonka",
    video: false,
    vote_average: 7.2,
    vote_count: 1291,
  },
  {
    adult: false,
    backdrop_path: "/jXJxMcVoEuXzym3vFnjqDW4ifo6.jpg",
    genre_ids: [28, 12, 14],
    id: 572802,
    original_language: "en",
    original_title: "Aquaman and the Lost Kingdom",
    overview:
      "Black Manta, still driven by the need to avenge his father's death and wielding the power of the mythic Black Trident, will stop at nothing to take Aquaman down once and for all. To defeat him, Aquaman must turn to his imprisoned brother Orm, the former King of Atlantis, to forge an unlikely alliance in order to save the world from irreversible destruction.",
    popularity: 1529.779,
    poster_path: "/7lTnXOy0iNtBAdRP3TZvaKJ77F6.jpg",
    release_date: "2023-12-20",
    title: "Aquaman and the Lost Kingdom",
    video: false,
    vote_average: 6.6,
    vote_count: 600,
  },
  {
    adult: false,
    backdrop_path: "/rz8GGX5Id2hCW1KzAIY4xwbQw1w.jpg",
    genre_ids: [35, 80],
    id: 955916,
    original_language: "en",
    original_title: "Lift",
    overview:
      "An international heist crew, led by Cyrus Whitaker, race to lift $500 million in gold from a passenger plane at 40,000 feet.",
    popularity: 1351.393,
    poster_path: "/gma8o1jWa6m0K1iJ9TzHIiFyTtI.jpg",
    release_date: "2024-01-10",
    title: "Lift",
    video: false,
    vote_average: 6.4,
    vote_count: 464,
  },
  {
    adult: false,
    backdrop_path: "/f1AQhx6ZfGhPZFTVKgxG91PhEYc.jpg",
    genre_ids: [36, 10752, 18],
    id: 753342,
    original_language: "en",
    original_title: "Napoleon",
    overview:
      "An epic that details the checkered rise and fall of French Emperor Napoleon Bonaparte and his relentless journey to power through the prism of his addictive, volatile relationship with his wife, Josephine.",
    popularity: 1232.329,
    poster_path: "/jE5o7y9K6pZtWNNMEw3IdpHuncR.jpg",
    release_date: "2023-11-22",
    title: "Napoleon",
    video: false,
    vote_average: 6.5,
    vote_count: 1372,
  },
];

const MainCarousel = ({ items }) => {
  const swiperElRef = useRef(null);

  useEffect(() => {
    // listen for Swiper events using addEventListener
    swiperElRef.current.addEventListener("swiperprogress", (e) => {
      const [swiper, progress] = e.detail;
      console.log(progress);
    });

    swiperElRef.current.addEventListener("swiperslidechange", (e) => {
      console.log("slide changed");
    });
  }, []);

  return (
    <div className="main-carousel">
      <swiper-container
        ref={swiperElRef}
        slides-per-view="1"
        space-between={50}
        navigation="false"
        pagination="false"
        centered-slides={true}
        loop="true"
      >
        {movies.map((movie) => (
          <swiper-slide className="carousel-item">
            <div className="carousel-content">
              <div className="info">
                <h2>{movie.original_title}</h2>
                <p className="description secondary">{movie?.overview}</p>
                <button>See Details</button>
              </div>
              <div className="image">
                <img src={`${original}${movie.backdrop_path}`} alt="" />
              </div>
            </div>
          </swiper-slide>
        ))}
      </swiper-container>
    </div>
  );
};

export default MainCarousel;
