import React from "react";
import { useQuery } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import Header from "./header";
import Padding from "../component/padding";
import { detail } from "../api";
const convertRupiah = require("rupiah-format")

export default function Detail() {
  let navigate = useNavigate();
  let { id } = useParams();
  const { data } = useQuery("detail", () => detail(id), {
    refetchInterval: 3000,
  });
  const month = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Augustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];
  return (
    <React.Fragment>
      <Header />
      <Padding>
        {data?.map((i, detail) =>
          i.lelang?.map((j) => (
            <div className="mt-20 flex space-x-20" key={detail}>
              <div
                className="w-2/3 rounded-md h-96 bg-gray-300 bg-cover"
                style={{ backgroundImage: `url(${i.fotoBarang})` }}
              ></div>
              <div className="w-2/3">
                <h2 className="text-2xl mb-6 font-semibold">{i.namaBarang}</h2>
                <p className="text-sm">{i.deskripsi}</p>
                <h2 className="text-2xl mb-6 font-semibold mt-6">Informasi</h2>
                <p>
                  Dimulai pada{" "}
                  <span className="font-semibold">
                    {i.jam.substring(0, 5)} WIB, {new Date(i.tanggal).getDate()}{" "}
                    {month[new Date(i.tanggal).getMonth()]}{" "}
                    {new Date(i.tanggal).getFullYear()}
                  </span>
                </p>
                <p>
                  Status{" "}
                  <span className="font-semibold capitalize">{j.status}</span>
                </p>
                <p>
                  Harga awal{" "}
                  <span className="font-semibold">{convertRupiah.convert(i.hargaAwal)}</span>
                  <div className="mt-5">
                    <button
                      disabled={j.status === "closed" ? true : false}
                      onClick={() => navigate(`/penawaran/${id}`)}
                      className={`py-3 text-white font-semibold rounded-md px-6 ${j.status === "closed"?"bg-gray-300":"bg-[#FEB21D]"}`}
                    >
                      {j.status === "closed"?"Closed":"Go to Auction"}
                    </button>
                  </div>
                </p>
              </div>
            </div>
          ))
        )}
      </Padding>
    </React.Fragment>
  );
}
