import React from "react";
import { Link } from "react-router-dom";

export default function SliderHome({ img, title, day, time, price, id }) {
  const hari = ["minggu", "senin", "selasa", "rabu", "kamis", "jumat", "sabtu"];
  let date = new Date(day);
  return (
    <React.Fragment>
      <Link to={`/detail/${id}`}>
        <div
          style={{
            backgroundImage: `url(${img})`,
          }}
          className="bg-gray-300 bg-cover h-96 rounded-lg w-full"
        >
          <div className="bg-gradient-to-t pt-64 from-black pl-9 h-full w-full rounded-lg">
            <h2 className="text-2xl text-white font-semibold">{title}</h2>
            <p className="text-white capitalize">
              {date.getDate()} {hari[date.getDay()]}, {time.substring(0, 5)} WIB
            </p>
            <p className="text-white">From {price}</p>
          </div>
        </div>
      </Link>
    </React.Fragment>
  );
}
