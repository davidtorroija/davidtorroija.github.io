import React from "react";

const personalInfoContent = [
  { meta: "first name", metaInfo: "David" },
  { meta: "last name", metaInfo: "Torroija" },
  // { meta: "Age", metaInfo: "37 Years" },
  { meta: "Nationality", metaInfo: "Argentina" },
  // { meta: "Freelance", metaInfo: "Available" },
  { meta: "Address", metaInfo: "Ecuador" },
  { meta: "phone", metaInfo: "+593-996958394" },
  { meta: "Email", metaInfo: "davidtorroija@gmail.com" },
  { meta: "linkedin", metaInfo: " david torroija" },
  { meta: "github", metaInfo: " davidtorroija" },
  { meta: "languages", metaInfo: "English, Spanish" },
];

const PersonalInfo = () => {
  return (
    <ul className="about-list list-unstyled open-sans-font">
      {personalInfoContent.map((val, i) => (
        <li key={i}>
          <span className="title">{val.meta}: </span>
          <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">
            {val.metaInfo}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default PersonalInfo;
