import { original } from "../../statics";
import "./ImagesShowCase.css";

const ImagesShowCase = ({ images }) => {
  console.log(images);

  return (
    <>
      {images ? (
        <div className="images-showcase-container">
          {images.map((image) => (
            <img src={`${original}${image}`} alt="" />
          ))}
        </div>
      ) : null}
    </>
  );
};

export default ImagesShowCase;
