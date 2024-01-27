import {
  faFacebook,
  faInstagram,
  faTwitter,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./SocialMediaLinks.css";

const SocialMediaLinks = ({ links }) => {
  return (
    <div className="social-media-links-wrapper">
      {links?.facebook_id && (
        <a href={`https://facebook.com/${links?.facebook_id}`} target="_blank">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
      )}
      {links?.instagram_id && (
        <a
          href={`https://instagram.com/${links?.instagram_id}`}
          target="_blank"
        >
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      )}
      {links?.twitter_id && (
        <a href={`https://twitter.com/${links?.twitter_id}`} target="_blank">
          <FontAwesomeIcon icon={faXTwitter} />
        </a>
      )}
    </div>
  );
};

export default SocialMediaLinks;
