import { useState, useEffect } from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";
import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";
import { useMediaQuery } from "react-responsive";

import "./Work.scss";

const Work = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const [works, setWorks] = useState([]);
  const [filterWork, setFilterWork] = useState([]);

  const mediaQueries = {
    phone: "(max-width: 767px)",
    tablet: "(min-width: 500px) and (max-width: 1023px)",
    computer: "(min-width: 900px)",
  };
  const isPhone = useMediaQuery({ query: mediaQueries.phone });
  const isTablet = useMediaQuery({ query: mediaQueries.tablet });
  const isComputer = useMediaQuery({ query: mediaQueries.computer });

  useEffect(() => {
    const query = '*[_type == "works"]';
    client.fetch(query).then((data) => {
      setWorks(data);
      setFilterWork(data);
    });
  }, []);

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);
      if (item === "All") {
        setFilterWork(works);
      } else {
        setFilterWork(works.filter((work) => work.tags.includes(item)));
      }
    }, 500);
  };
  return (
    <>
      <h2 className="head-text">
        My Creative <span>Protfolio </span>
      </h2>
      <div className="app__work-filter">
        <div className="app__work-filter-slider">
          {[
            "UI/UX",
            "Material UI",
            "Tailwind",
            "BootStrap",
            "Vanilla",
            "Sass",
            "Web Apps",
            "Mobile Apps",
            "React Js",
            "All",
          ].map((item, index) => (
            <div
              className={`app__work-filter-item p-text ${
                activeFilter === item ? "item-active" : ""
              }`}
              key={index}
              onClick={() => handleWorkFilter(item)}
            >
              {item}
            </div>
          ))}
        </div>
      </div>

      <div className="app__work-portfolio">
        <motion.div
          animate={animateCard}
          transition={{ duration: 0.5, delayChildren: 0.5 }}
          className="app__work-portfolio-slider"
        >
          {filterWork.map((work, index) => (
            <div className="app__work-item app__flex" key={index}>
              <div className="app__work-img app__flex">
                <img src={urlFor(work.imgUrl)} alt={work.name} />
                {isComputer && (
                  <motion.div
                    whileHover={{ opacity: [0, 1] }}
                    transition={{
                      duration: 0.25,
                      ease: "easeInOut",
                      staggerChildren: 0.5,
                    }}
                    className="app__work-hover app__flex"
                  >
                    <a href={work.projectLink} target="_blank" rel="noreferrer">
                      <motion.div
                        whileInView={{ scale: [0, 1] }}
                        whileHover={{ scale: [0, 0.9] }}
                        transition={{
                          duration: 0.25,
                        }}
                        className="app__flex"
                      >
                        <AiFillEye />
                      </motion.div>
                    </a>
                    <a href={work.codeLink} target="_blank" rel="noreferrer">
                      <motion.div
                        whileInView={{ scale: [0, 1] }}
                        whileHover={{ scale: [0, 0.9] }}
                        transition={{
                          duration: 0.25,
                        }}
                        className="app__flex"
                      >
                        <AiFillGithub />
                      </motion.div>
                    </a>
                  </motion.div>
                )}
              </div>
              <div className="app__work-content app__flex">
                <h4 className="bold-text">{work.title}</h4>
                <p className="p-text" style={{ marginTop: 10 }}>
                  {work.description}
                </p>
                <div className="app__work-tag app__flex">
                  <p className="p-text">{work.tags[0]}</p>
                </div>
                <div className="app__flex phone-tab-icon">
                  {isPhone && (
                    <>
                      <div className="phone-tab-icon">
                        <a
                          href={work.projectLink}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <AiFillEye className="eye" />
                        </a>
                        <a
                          href={work.codeLink}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <AiFillGithub className="github" />
                        </a>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Work, "app__works"),
  "work",
  "app__primarybg"
);
