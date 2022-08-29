import React from "react";

const SocialShare = [
  // {
  //   iconName: "fa fa-facebook",
  //   link: "https://www.facebook.com/davidtorroija",
  // },
  { iconName: "fa fa-linkedin", link: "https://linkedin.com/in/davidtorroija" },

  { iconName: "fa fa-stack-overflow", link: "https://stackoverflow.com/users/1549677/david-torroija" },
  {
    iconName: "fa fa-youtube",
    link: "https://www.youtube.com/watch?v=CStgTHbtKx8",
  },
  { iconName: "fa fa-github", link: "https://github.com/davidtorroija" },
];

const Social = () => {
  return (
    <ul className="social list-unstyled pt-1 mb-5">
      {SocialShare.map((val, i) => (
        <li key={i}>
          <a href={val.link} target="_blank" rel="noreferrer">
            <i className={val.iconName}></i>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Social;
