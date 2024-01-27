export const access_token = process.env.REACT_APP_TMDB_API_KEY;

const baseUrlV3 = "https://api.themoviedb.org/3";
const baseUrlV4 = "https://api.themoviedb.org/4";

export const apiEndPoints = {
  // auth : {
  //     requestToken : `${baseUrlV4}/auth/`
  // }

  movie: {
    popularMovies: `${baseUrlV3}/movie/popular?language=en-US&page=1`,

    trendingMovies: `${baseUrlV3}/trending/movie/day?language=en-US&page=1`,

    movieDetails: (id) =>
      `${baseUrlV3}/movie/${id}?language=en-US&append_to_response=images,videos,credits,reviews,recommendations,external_ids&include_image_language=en,null`,

    movieGenre: ({ genreId, pageQuery = 1 }) =>
      `${baseUrlV3}/discover/movie?language=en-US&include_adult=false&page=${pageQuery}&with_genres=${genreId}`,

    getMovieCredits: ({ id }) =>
      `${baseUrlV3}/movie/${id}?language=en-US&append_to_response=credits`,

    movieGenreList: `${baseUrlV3}/genre/movie/list?language=en-US`,

    nowPlaying: ({ region }) =>
      `${baseUrlV3}/movie/now_playing?page=1&region=${region}`,
  },
  tv: {
    popularTV: `${baseUrlV3}/tv/popular?language=en-US&page=1`,

    trendingTV: `${baseUrlV3}/trending/tv/day?language=en-US&page=1`,

    tvDetails: (id) =>
      `${baseUrlV3}/tv/${id}?language=en-US&append_to_response=images,videos,aggregate_credits,reviews,recommendations,external_ids&include_image_language=en,null`,

    tvDetailsNoAppend: (id) => `${baseUrlV3}/tv/${id}?language=en-US`,

    tvSeasonDetails: ({ id, seasonNumber }) =>
      `${baseUrlV3}/tv/${id}/season/${seasonNumber}?language=en-US&append_to_response=aggregate_credits,images&include_image_language=en,null`,

    episodeDetails: ({ id, seasonNumber, episodeNumber }) =>
      `${baseUrlV3}/tv/${id}/season/${seasonNumber}/episode/${episodeNumber}?language=en-US&append_to_response=images,credits&include_image_language=en,null`,

    tvGenre: ({ genreId, pageQuery }) =>
      `${baseUrlV3}/discover/tv?language=en-US&include_adult=false&page=${pageQuery}&with_genres=${genreId}`,

    getTvCredits: ({ id }) =>
      `${baseUrlV3}/tv/${id}?language=en-US&append_to_response=aggregate_credits`,

    tvGenreList: `${baseUrlV3}/genre/tv/list?language=en-US`,
  },
  language: `${baseUrlV3}/configuration/languages`,
};

export const blurPlaceholder =
  "data:image/webp;base64,UklGRgwCAABXRUJQVlA4WAoAAAAgAAAAAQAAAgAASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDggHgAAAJABAJ0BKgIAAwAHQJYlpAAC51m2AAD+5R4qGAAAAA==";

export const navItems = [
  {
    name: "browse",
    route: "/browse",
  },
  {
    name: "movies",
    route: "/movies",
  },
  {
    name: "tv-shows",
    route: "/browse",
  },
  {
    name: "explore",
    route: "/explore",
  },
];
