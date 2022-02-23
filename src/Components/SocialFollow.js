import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faFlickr,
} from "@fortawesome/free-brands-svg-icons";
import "../Components/SocialFollow.css";

function SocialFollow() {
  return (
    <div>
        <a href="https://www.flickr.com/people/189220981@N02/"
        className="instagram social p-2">
        <FontAwesomeIcon icon={faFlickr} size="2x" />
      </a>
      <a href="https://www.facebook.com/valters.polakovs"
        className="facebook social p-2">
        <FontAwesomeIcon icon={faFacebook} size="2x" />
      </a>
      <a href="https://www.instagram.com/valters.polakovs/"
        className="instagram social p-2">
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>
    </div>
  );
}

export default SocialFollow;