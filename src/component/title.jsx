import React from "react";

export default function Title({ text }) {
  return (
    <React.Fragment>
      <h1 className="text-2xl font-semibold mt-9 mb-5 capitalize">{text}</h1>
    </React.Fragment>
  );
}
