import { Link, useParams } from "react-router-dom";
import { useGetTvDetail } from "../../hooks/useGetTvDetail";
import Loading from "../../components/Loading";
import { original } from "../../statics";
import { Tag } from "../../components";
import { getRating } from "../../utils/helpers";
import { Icon } from "@iconify/react/dist/iconify.js";
import SeasonCard from "../../components/SeasonCard/SeasonCard";

const TvDetailPage = () => {
  const { tvId } = useParams();

  const [tvDetail, loading] = useGetTvDetail({ tvId });

  if (loading) return <Loading />;

  console.log("tvdetai = ", tvDetail);

  return (
    <div className="h-[90vh] pb-4 md:h-[auto] relative h-full border">
      <img
        src={`${original}${tvDetail?.backdrop_path}`}
        className="h-full w-full object-cover absolute z-[-1]"
        alt=""
      />
      <div className="absolute top-0 left-0 h-full w-full bg-[var(--gray-2-transparent)]  bg-gradient-to-b from-transparent to-[var(--gray-2)] "></div>
      <div className=" pt-[var(--nav-height)] flex flex-col wrapper relative  z-[100] h-full">
        <h1 className="text-5xl font-bold mt-6">{tvDetail?.name}</h1>
        <div className="flex items-center gap-3 mb-6">
          <div className="flex items-center">
            <h2 className="">{getRating(tvDetail?.vote_average)}</h2>
            <div className="secondary mt-[10px]">
              <h3>/10</h3>
            </div>
          </div>
          <span>{tvDetail?.number_of_seasons} Seasons</span>
        </div>

        <p className="description mb-6 max-w-[60ch]">{tvDetail?.overview}</p>
        <div className="flex items-center gap-2 ">
          {tvDetail?.genres?.map((item) => (
            <Link
              key={item.id}
              to={`/genre/${item?.id}-${item?.name}/tv`}
              className="w-fit"
            >
              <Tag name={item.name} />
            </Link>
          ))}
        </div>

        <div className="mt-10 md:mt-auto flex flex-col gap-3 border">
          <h2 className="font-bold">Seasons</h2>
          <div className="">
            <div className="grid grid-cols-1 md:flex flex-wrap  md:flex-nowrap md:overflow-x-scroll gap-2 md:gap-4">
              {tvDetail?.seasons?.map((season) => (
                <div className="md:shrink-0 w-full md:max-w-[400px] aspect-[16/9]">
                  <SeasonCard data={season} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TvDetailPage;
