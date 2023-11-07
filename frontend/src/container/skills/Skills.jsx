import "./Skills.scss";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
// import { Tooltip } from "react-tooltip";
import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";

const Skills = () => {
  // const [experience, setExperience] = useState([]);
  const [skills, setSkills] = useState([]);

  const fetchData = async () => {
    // const query = '*[_type == "experiences"]';
    const skillsQuery = '*[_type == "skills"]';

    try {
      // const ExperienceData = await client.fetch(query);
      const SkillsData = await client.fetch(skillsQuery);

      // setExperience(ExperienceData);
      setSkills(SkillsData);
    } catch (error) {
      console.error("An error occurred while fetching data:", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <h2 className='head-text'>Skills & Tools</h2>

      <div className='app__skills-container'>
        <motion.div className='app__skills-list'>
          {skills.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className='app__skills-item app__flex'
              key={skill.name}
            >
              <div
                className='app__flex'
                style={{ backgroundColor: skill.bgColor }}
              >
                <img src={urlFor(skill.icon)} alt={skill.name} />
              </div>
              <p className='p-text'>{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
};
export default AppWrap(
  MotionWrap(Skills, "app__skills"),
  "skills",
  "app__whitebg"
);
