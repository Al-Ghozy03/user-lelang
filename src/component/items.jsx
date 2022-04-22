import React from "react";
import { Link } from "react-router-dom";

export default function Items({ img, title, price, id }) {
  return (
    <React.Fragment>
      <Link to={`/detail/${id}`}>
        <div className="bg-white shadow-2xl h-80 basis-1/6 rounded-lg">
          <div
            className="h-3/5 w-full bg-red-200 rounded-t-lg bg-cover"
            style={{ backgroundImage: `url(${img})` }}
          ></div>
          <div className="px-4 pt-3">
            <h2 className="text-md mb-1">{title}</h2>
            <p className="font-semibold">From {price}</p>
            <div className="h-1 rounded-md mt-2 w-full bg-gray-300"></div>
          </div>
        </div>
      </Link>
    </React.Fragment>
  );
}
