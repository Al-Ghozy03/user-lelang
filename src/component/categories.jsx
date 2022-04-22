import React from "react";
import { useNavigate } from "react-router-dom";

export default function Categories({ img, text }) {
  let navigate = useNavigate();
  return (
    <React.Fragment>
      <button
        onClick={() =>
          navigate({ pathname: "/category", search: `?category=${text}` })
        }
        className="flex items-center justify-between py-2 px-8 rounded-md border-2"
        style={{ width: "12rem" }}
      >
        <img src={img} alt="gaming" className="h-10" />
        <p className="text-lg capitalize ml-3 font-medium">{text}</p>
      </button>
    </React.Fragment>
  );
}
