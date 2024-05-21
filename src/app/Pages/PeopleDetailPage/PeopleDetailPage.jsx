import MovieCard from "../../components/Cards/MovieCard";
import TvCard from "../../components/Cards/TvCard";
import PosterGrid from "../../components/Grid/PosterGrid";
import { useGetPeopleDetail } from "../../hooks/useGetPeopleDetail";
import { medium } from "../../statics";

const PeopleDetailPage = () => {
  const [peopleDetail, loading] = useGetPeopleDetail();

  console.log("people detal", peopleDetail);

  if (loading) return "...loading";

  return (
    <div className=" pt-[100px] wrapper">
      <div className="flex flex-col md:flex-row gap-10 mb-[25px]">
        <div className="w-[90%] max-w-[260px] rounded-md overflow-hidden mx-auto md:mx-0 mb-4">
          <img src={`${medium}${peopleDetail?.profile_path}`} alt="" />
        </div>
        <div className="flex flex-col items-start gap-4">
          <h1 className="text-3xl text-center font-semibold">
            {peopleDetail?.name}
          </h1>
          <p className="max-w-[80ch] mx-auto md:mx-0 line-clamp-6 secondary">
            {peopleDetail?.biography}
          </p>
        </div>
      </div>
      <div>
        <h2 className="text-center text-4xl font-medium mt-10 mb-4">Media</h2>
        <PosterGrid items={peopleDetail?.images?.profiles} />
      </div>

      <div>
        <h2 className="text-center text-4xl font-medium mt-10 mb-4">
          Filmography
        </h2>
        <div className="grid grid-cols-[repeat(auto-fill,minmax(180px,1fr))] gap-2">
          {peopleDetail?.combined_credits?.cast?.flat()?.map((item) => {
            if (!item?.adult) {
              if (item?.media_type === "movie")
                return <MovieCard data={item} />;
              if (item?.media_type === "tv") return <TvCard data={item} />;
            } else {
              return null;
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default PeopleDetailPage;
