const Reviews = ({ items }) => {
  return (
    <div className="flex flex-col gap-6  max-w-[70ch] mx-auto">
      {items?.length === 0 && <span className="text-center">No Reviews</span>}
      {items?.map((item, idx) => (
        <Review data={item} index={idx} />
      ))}
    </div>
  );
};

const Review = ({ data, index }) => {
  return (
    <div>
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <img
            src={`https://i.pravatar.cc/${80 + index}`}
            alt=""
            className="w-[25px] aspect-square rounded-full block"
          />
          <span className="opacity-60 text-sm"> {data?.author}</span>
        </div>
        <p className="text-sm opacity-60 ">{data?.content}</p>
      </div>
    </div>
  );
};

export default Reviews;
