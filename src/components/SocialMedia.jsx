import { BsTwitter, BsInstagram, BsGithub } from "react-icons/bs";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <a
          href="https://twitter.com/aries_the_ankit"
          target="_blank"
          rel="noreffer"
        >
        <BsTwitter />

        </a>
      </div>
      <div>
        <a href="https://www.instagram.com/_._ankitkr_._/" target="_blank" rel='noreffer'>
        <BsInstagram />
        </a>
      </div>
      <div>
        <a
          href="https://www.facebook.com/the.aries.ankit"
          target="_blank"
          rel="noreffer"
        >
          <FaFacebookF />
        </a>
      </div>
      <div>
        <a
          href="https://github.com/alpha-alexxx/"
          target="_blank"
          rel="noreffer"
        >
          <BsGithub />
        </a>
      </div>
      <div>
        <a href="#" target="_blank" rel="noreffer">
          <FaLinkedinIn />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
