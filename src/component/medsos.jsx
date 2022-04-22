import React from "react";

export default function Medsos({ icon, link }) {
  return (
    <React.Fragment>
      <a href={link} target="blank" className="">
        <img src={icon} alt={icon} className="h-9" />
      </a>
    </React.Fragment>
  );
}
