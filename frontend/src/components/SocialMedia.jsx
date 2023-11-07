import { BsInstagram } from "react-icons/bs";
import { FaFacebookF, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const SocialMedia = () => (
  <div className='app__social'>
    <div>
      <Link to={"https://www.linkedin.com/in/rishi-kumar-3355131b4/"}>
        <FaLinkedin />
      </Link>
    </div>
    <div>
      <Link to={"https://www.facebook.com/profile.php?id=100021258036334"}>
        <FaFacebookF />
      </Link>
    </div>
    <div>
      <Link to={"https://www.instagram.com/rishishal/"}>
        <BsInstagram />
      </Link>
    </div>
  </div>
);

export default SocialMedia;
