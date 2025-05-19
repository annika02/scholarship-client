import React from "react";
import bgImg from "../../assets/download (2).jpg";
import image1 from "../../assets/download (1).jpg";
import image2 from "../../assets/download.jpg";
const Banner = () => {
  return (
    <div className="bg-[#0b3824] relative overflow-hidden py-24">
      <div
        style={{
          backgroundImage: `url(${bgImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute opacity-5 inset-0  "
      ></div>
      <div className="relative pt-20">
        <div className="flex z-20 px-10 justify-between w-full">
          <img
            style={{ height: "auto", width: "23vw" }}
            className="z-20"
            src={image1}
            alt=""
          />
          <div className="flex  flex-col items-center">
            <p className="text-gray-300 z-20  text-center text-sm pb-6">
              ——— Empowering Ambitions, Enabling Success ———
            </p>
            <h2 className="text-white z-20 text-7xl text-center">
              Unlock Your Future with Scholarships
            </h2>
            <p className="text-gray-200 z-20 text-center leading-7 pt-8">
              Find, apply, and manage your scholarships effortlessly. Whether
              you're a first-time applicant or a continuing student, our
              platform guides you every step of the way toward achieving your
              academic dreams.
            </p>
          </div>
          <img
            style={{ height: "auto", width: "23vw" }}
            className="z-20 hidden lg:block"
            src={image2}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
