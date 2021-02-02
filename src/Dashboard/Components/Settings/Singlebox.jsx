import React from "react";

const Singlebox = ({ title, description, icon }) => {
  return (
    <div className="single_settingbox">
      <span className="setting_icon">{icon}</span>
      <article className="content">
        <h3>{title}</h3>
        <p>{description}</p>
      </article>
    </div>
  );
};

export default Singlebox;
