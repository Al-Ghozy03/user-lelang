import React from "react";
import Header from "./header";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Autoplay, Pagination } from "swiper";
import gaming from "../images/console.png";
import computer from "../images/computer.png";
import electronic from "../images/electronics.png";
import transport from "../images/car.png";
import art from "../images/mona-lisa.png";
import fashion from "../images/suit.png";
import jewellery from "../images/earrings.png";
import house from "../images/home.png";
import Categories from "../component/categories";
import Items from "../component/items";
import Title from "../component/title";
import SliderHome from "../component/sliderHome";
import Padding from "../component/padding";
import Footer from "../component/footer";
import { useQuery } from "react-query";
import { other, slider } from "../api";
const convertRupiah = require("rupiah-format")


export default function Dashboard() {
  const { data } = useQuery("slider", () => slider(), {
    refetchInterval: 3000,
  });

  const another = useQuery("another", () => other(), { refetchInterval: 2000 });
  return (
    <React.Fragment>
      <div>
        <Header />
        <Padding>
          <div className="mt-20">
            <Title text={"today"} />
          </div>
          <Swiper
            centeredSlides={true}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            navigation={true}
            modules={[Navigation, Autoplay, Pagination]}
            spaceBetween={50}
            slidesPerView={1.4}
            loop
          >
            {data?.map((i, slider) => (
              <SwiperSlide key={slider}>
                <SliderHome
                  id={i.id}
                  title={i.namaBarang}
                  day={i.tanggal}
                  time={i.jam}
                  img={i.fotoBarang}
                  price={convertRupiah.convert(i.hargaAwal)}
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <Title text={"categories"} />

          <div className="grid grid-cols-4 gap-y-8 px-8">
            <Categories img={gaming} text="Gaming" />
            <Categories img={computer} text="computer" />
            <Categories img={electronic} text="electronic" />
            <Categories img={transport} text="transport" />
            <Categories img={art} text="art" />
            <Categories img={fashion} text="fashion" />
            <Categories img={jewellery} text="jewellery" />
            <Categories img={house} text="house" />
          </div>
          <Title text={"other"} />

          <div className="grid grid-cols-6 gap-y-8 gap-x-5">
            {another?.data?.map((i, other) => (
              <Items
                key={other}
                img={i.fotoBarang}
                title={i.namaBarang}
                price={convertRupiah.convert(i.hargaAwal)}
                id={i.id}
              />
            ))}
          </div>
        </Padding>
        <Footer />
      </div>
    </React.Fragment>
  );
}
