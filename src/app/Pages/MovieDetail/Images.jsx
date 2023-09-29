import { useEffect, useState } from "react";
import { ImagesShowCase } from "../../components";
import "./Images.css";

const Images = ({ images }) => {
  const [imgs, setImgs] = useState([]);

  useEffect(() => {}, []);

  return (
    <div className="images-container">
      <ImagesShowCase images={imgs} />
    </div>
  );
};

export default Images;
