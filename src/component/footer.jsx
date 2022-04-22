import React from "react";
import Medsos from "./medsos";
import logo from "../images/law.png";
import fb from "../images/facebook.png";
import ig from "../images/instagram.png";
import linked from "../images/linkedin.png";
import twitter from "../images/twitter.png";
import Padding from "./padding";

export default function Footer() {
  return (
    <React.Fragment>
      <footer className="border-t-2">
        <Padding>
          <div className="flex justify-between">
            <div className="">
              <div className="flex items-center mb-12 space-x-6">
                <img src={logo} alt="logo" className="h-40" />
                <h1 className="text-5xl font-semibold">Company</h1>
              </div>
              <p className="text-lg font-semibold mb-2">SMK MADINATUL QURAN</p>
              <div className="flex space-x-3 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <p>muhammadfaizalghozi1@gmail.com</p>
              </div>
              <div className="flex space-x-3 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <p>+62 8781 8197 732</p>
              </div>
              <p className="text-lg font-semibold my-4">Follow me</p>
              <div className="flex space-x-4">
                <Medsos
                  icon={fb}
                  link="https://www.facebook.com/muhammadfaiz.al.79069/"
                />
                <Medsos
                  icon={ig}
                  link="https://www.instagram.com/faizghozy23/"
                />
                <Medsos
                  icon={linked}
                  link="https://www.linkedin.com/in/muhammad-faiz-al-ghozi-2596bb206/"
                />
                <Medsos icon={twitter} link="https://twitter.com/faizghozy23" />
              </div>
            </div>
            <div className="">
              <h2 className="text-xl font-semibold mt-14">Complaint Service</h2>
              <form action="">
                <div className="flex space-x-4 mt-5">
                  <input
                    type="text"
                    className="bg-gray-100 pl-3 text-sm w-64 h-8 rounded-md outline-none"
                    placeholder="Type here..."
                  />
                  <button className="bg-[#FEB21D] text-white px-4 rounded-md py-1">
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </Padding>
      </footer>
    </React.Fragment>
  );
}
