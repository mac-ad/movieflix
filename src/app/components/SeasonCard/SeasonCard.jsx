import { medium } from "../../statics";

const SeasonCard = ({ data }) => {
  return (
    <div className="rounded-sm h-full w-full relative border">
      <div className="">
        <img
          src={`${medium}${data?.poster_path}`}
          className="z-[-1] h-full w-full object-cover object-top top-0 left-0"
          alt=""
        />
        <div className="absolute top-0 left-0 h-full w-full bg-[var(--gray-2-transparent)] opacity-90 z-[-1]"></div>
      </div>
      <div className="flex flex-col gap-3">
        <h2 className="font-bold">{data?.name}</h2>
      </div>
      <p className=" text-md overflow-y-scroll  h-full line-clamp-5 leading-snug">
        {!!data?.overview
          ? data?.overview
          : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores voluptatum amet dignissimos sunt quasi assumenda, ipsa esse aspernatur ipsam magnam perferendis delectus. Possimus ipsum exercitationem architecto incidunt cumque deleniti laudantium, labore ea illo earum quis quod recusandae natus aliquid error dolorem nihil inventore quibusdam. Placeat obcaecati accusantium ab nesciunt cupiditate!"}
      </p>
    </div>
  );
};

export default SeasonCard;
