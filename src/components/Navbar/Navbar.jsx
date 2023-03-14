import { useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { motion } from "framer-motion";
import "./Navbar.scss";
import { images } from "../../constants";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  const handleClick = (item) => {
    setToggle(!toggle);
    setActiveLink(item);
  };
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.logo} alt="" />
        <span className="divider" />
        <span className="web-name">Lethargic Solutions</span>
      </div>
      <ul className="app__navbar-links">
        {["home", "about", "work", "skills", "contact"].map((item) => (
          <li className={`app__flex p-text`} key={`link-${item}`}>
            <div />
            <a
              onClick={() => handleClick(item)}
              style={
                activeLink === item
                  ? { color: "#313BAC", fontWeight: "700" }
                  : {}
              }
              href={`#${item}`}
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
      <div className="app__navbar-menu">
        <HiMenuAlt3 onClick={() => setToggle(true)} />
        {toggle && (
          <motion.div
            whileInView={{
              x: [200, 0],
            }}
            transition={{ duration: 0.5, ease: "easeIn" }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {["home", "about", "work", "skills", "contact"].map((item) => (
                <li key={item}>
                  <a onClick={() => setToggle(false)} href={`#${item}`}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
