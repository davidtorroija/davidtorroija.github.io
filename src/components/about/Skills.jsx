import React from "react";

const skillsContent = [
  { skillClass: "p90", skillPercent: "90", skillName: "HTML" },
  { skillClass: "p92", skillPercent: "92", skillName: "JAVASCRIPT" },
  { skillClass: "p83", skillPercent: "83", skillName: "CSS" },
  { skillClass: "p83", skillPercent: "83", skillName: "VUE" },
  { skillClass: "p80", skillPercent: "80", skillName: "WEBPACK" },
  { skillClass: "p72", skillPercent: "72", skillName: "REACT" },
  { skillClass: "p42", skillPercent: "42", skillName: "ANGULAR" },
  { skillClass: "p75", skillPercent: "75", skillName: "NODEJS" },
  { skillClass: "p69", skillPercent: "69", skillName: "MONGODB" },
  { skillClass: "p60", skillPercent: "60", skillName: "EXPRESS" },
  { skillClass: "p42", skillPercent: "42", skillName: "NESTJS" },
  { skillClass: "p65", skillPercent: "65", skillName: "C#" },
  { skillClass: "p75", skillPercent: "75", skillName: "SQL" },
  { skillClass: "p66", skillPercent: "66", skillName: "PHP" },
];

const Skills = () => {
  return (
    <>
      {skillsContent.map((val, i) => (
        <div className="col-6 col-md-3 mb-3 mb-sm-5" key={i}>
          <div className={`c100 ${val.skillClass}`}>
            <span>{val.skillPercent}%</span>
            <div className="slice">
              <div className="bar"></div>
              <div className="fill"></div>
            </div>
          </div>
          <h6 className="text-uppercase open-sans-font text-center mt-2 mt-sm-4">
            {val.skillName}
          </h6>
        </div>
      ))}
    </>
  );
};

export default Skills;
