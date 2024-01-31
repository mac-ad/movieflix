import {
  Download,
  DownloadIcon,
  Loader,
  Loader2,
  LoaderIcon,
} from "lucide-react";
import { extralarge, medium, original } from "../../statics";

import DownloadMediaButton from "../DownloadMediaButton";
import { useState } from "react";

const BackdropCard = ({ data }) => {
  const [downloading, setDownloading] = useState(false);

  return (
    <div className="backdrop-card">
      <div className="image">
        <img src={`${extralarge}${data?.file_path}`} alt="" />
      </div>
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

export default BackdropCard;
