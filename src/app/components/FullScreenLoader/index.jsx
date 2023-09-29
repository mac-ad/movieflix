import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./FullScreenLoader.css";
import { faEnvelopeOpen } from "@fortawesome/free-regular-svg-icons";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

const FullScreenLoader = ({ transparent }) => {
  return (
    <div className={`${transparent ? "transparent" : ""} fullscreenloader`}>
      <FontAwesomeIcon icon={faSpinner} spinPulse />
    </div>
  );
};

export default FullScreenLoader;
