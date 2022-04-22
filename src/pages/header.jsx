import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import logo from "../images/law.png";
export default function Header() {
  let navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  function search(data) {
    navigate({ pathname: "/search", search: `?key=${data.search}` });
  }
  return (
    <React.Fragment>
      <div className="flex items-center shadow-sm justify-between fixed bg-white w-full px-10 py-4 z-40">
        <div className="flex items-center w-full">
          <Link to={"/dashboard"}>
            <img src={logo} className="h-11 mr-10" alt="logo" />
          </Link>
          <form className="w-full" onSubmit={handleSubmit(search)}>
            <input
              {...register("search")}
              type="text"
              className="outline-none rounded-md pl-3 text-sm py-1 border bg-gray-100"
              style={{ width: "80%" }}
              placeholder="Search....."
            />
          </form>
        </div>
        <div
          style={{
            backgroundImage: `url("https://cdn.pixabay.com/photo/2012/10/10/16/53/soldier-60707_960_720.jpg")`,
          }}
          className="h-10 w-10 bg-cover bg-gray-300 rounded-full"
        ></div>
        <button
          onClick={() => {
            localStorage.clear("token");
            navigate("/login", { replace: true });
          }}
        >
          logout
        </button>
      </div>
    </React.Fragment>
  );
}
