import {
  Download,
  DownloadIcon,
  Loader,
  Loader2,
  LoaderIcon,
} from "lucide-react";
import { medium } from "../../statics";

import "./Card.css";
import DownloadMediaButton from "../DownloadMediaButton";
import { useState } from "react";

const PosterCard = ({ data }) => {
  const [downloading, setDownloading] = useState(false);

  return (
    <div className="poster-card">
      <img src={`${medium}${data?.file_path}`} alt="" />
      <div className="download-icon">
        <DownloadMediaButton
          setDownloading={setDownloading}
          media={data?.file_path}
        >
          {downloading ? (
            <Loader2 className="loading-svg" size={15} />
          ) : (
            <DownloadIcon size={15} />
          )}
        </DownloadMediaButton>
      </div>
    </div>
  );
};

export default PosterCard;
