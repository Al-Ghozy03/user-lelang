import React from "react";
import { useQuery } from "react-query";
import { Link, useLocation } from "react-router-dom";
import { getByCategory } from "../api";
import Padding from "../component/padding";
import Header from "./header";
const convertRupiah = require("rupiah-format")


export default function Category() {
  const { search } = useLocation();
  const query = new URLSearchParams(search);
  const { data } = useQuery(
    "search",
    () => getByCategory(query.get("category")),
    {
      refetchInterval: 3000,
    }
  );
  return (
    <React.Fragment>
      <Header />
      <Padding>
        <div className="mt-20">
          <h1 className="text-xl">
            Search for :
            <span className="font-semibold"> {query.get("category")}</span>
          </h1>
          <div className="grid grid-cols-6 gap-y-8 gap-x-5 mt-10">
            {data?.length === 0
              ? "kosong"
              : data?.map((i, category) => (
                  <Card
                    key={category}
                    img={i.fotoBarang}
                    price={i.hargaAwal}
                    title={i.namaBarang}
                    id={i.id}
                  />
                ))}
          </div>
        </div>
      </Padding>
    </React.Fragment>
  );
}

function Card({ img, title, price, id }) {
  return (
    <React.Fragment>
      <Link to={`/detail/${id}`}>
        <div className="bg-white shadow-2xl h-80 rounded-lg">
          <div
            className="h-3/5 w-full bg-red-200 rounded-t-lg bg-cover"
            style={{ backgroundImage: `url(${img})` }}
          ></div>
          <div className="px-4 pt-3">
            <h2 className="text-md mb-1">{title}</h2>
            <p className="font-semibold">From {convertRupiah.convert(price)}</p>
            <div className="h-1 rounded-md mt-2 w-full bg-gray-300"></div>
          </div>
        </div>
      </Link>
    </React.Fragment>
  );
}
