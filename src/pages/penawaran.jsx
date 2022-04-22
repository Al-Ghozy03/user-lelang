import React from "react";
import Padding from "../component/padding";
import Header from "./header";
import top from "../images/top-rated.png";
import { baseUrl, detailSchedule, penawaranList, token } from "../api";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { convert } from "rupiah-format";
import Swal from "sweetalert2";

export default function Penawaran() {
  let navigate = useNavigate();
  let { id } = useParams();
  const { register, handleSubmit } = useForm();
  async function penawaran(data) {
    try {
      let url = `${baseUrl}/lelang/penawaran/${id}`;
      await axios.post(url, data, {
        headers: { authorization: `Bearer ${token}` },
      });
    } catch (er) {
      Swal.fire({
        title: "Gagal",
        text: er.response.data.message,
        icon: "error",
      });
    }
  }
  const { data } = useQuery("list", () => penawaranList(id), {
    refetchInterval: 3000,
  });
  const detail = useQuery("detail", () => detailSchedule(id), {
    refetchInterval: 3000,
  });

  return (
    <React.Fragment>
      <Header />
      <Padding>
        {detail?.data?.map((i, key) => (
          <div key={key}>
            <div className="mt-20 flex space-x-14">
              <div
                style={{ backgroundImage: `url(${i.fotoBarang})` }}
                className="w-2/3 rounded-md h-96 bg-gray-300 bg-cover"
              ></div>
              <div className="w-2/4">
                <h3 className="text-3xl font-semibold mb-5">
                  Penawaran tertinggi
                </h3>
                {data?.map((j, price) =>
                  price === 0 ? (
                    <div
                      key={price}
                      className="h-20 w-2/3 mb-4 bg-gradient-to-r from-[#FFA722] to-[#FFD200] rounded-lg flex items-center px-6"
                    >
                      {i.status === "closed" ? navigate(`/detail/${id}`) : ""}
                      <div
                        style={{ backgroundImage: `url(${j.photoProfile})` }}
                        className="h-12 bg-cover w-12 rounded-full bg-gray-300"
                      ></div>
                      <img src={top} alt={top} className="h-14" />
                      <h2 className="text-2xl ml-3 text-white font-semibold">
                        {convert(j.penawaranHarga).substring(
                          0,
                          convert(j.penawaranHarga).length - 3
                        )}
                      </h2>
                    </div>
                  ) : (
                    <List
                      img={j.photoProfile}
                      key={price}
                      id={j.id}
                      count={price + 1}
                      price={convert(j.penawaranHarga)}
                    />
                  )
                )}
                <form
                  action=""
                  onSubmit={handleSubmit(penawaran)}
                  className="px-5 mt-5"
                >
                  <input
                    type="text"
                    {...register("hargaAkhir")}
                    className="bg-gray-200 h-10 w-2/3 rounded-md pl-3 outline-none"
                    placeholder="Ketik penawaran mu"
                  />
                </form>
              </div>
            </div>
            <h1 className="text-2xl font-semibold mt-5">{i.namaBarang}</h1>
          </div>
        ))}
      </Padding>
    </React.Fragment>
  );
}

function List({ count, price, img, id }) {
  return (
    <React.Fragment>
      <div className="flex items-center px-6 mb-5">
        <div
          style={{ backgroundImage: `url(${img})` }}
          className="h-10 w-10 rounded-full bg-red-500 bg-cover"
        ></div>
        <p className="text-lg font-medium ml-4 mr-5">{count}</p>
        <h3 className="text-xl font-medium">
          {price.substring(0, price.length - 3)}
        </h3>
      </div>
    </React.Fragment>
  );
}
