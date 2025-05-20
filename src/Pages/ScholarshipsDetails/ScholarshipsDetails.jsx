import React, { useState } from "react";
import cardImage from "../../assets/New-Black-Yellow-and-White-Abstract-Photocentric-Modern-YouTube-Thumbnail-1.jpg";
import scholarshipsBanner from "../../assets/pricing-breadcrumb-1.jpg";
import { SlCalender } from "react-icons/sl";
import { MdOutlineAccessTime } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { TbCategory } from "react-icons/tb";
import { AiOutlineDollar } from "react-icons/ai";
import Description from "./Description";
import Review from "./Review";
import OtherPageBanner from "../../Hooks/OtherPageBanner";
import { useLoaderData } from "react-router-dom";
const ScholarshipsDetails = () => {
  const data = useLoaderData();
  console.log(data);
  const [toggle, setToggle] = useState(true);
  return (
    <section>
      <OtherPageBanner
        image={scholarshipsBanner}
        heading={"Your Scholarship at a Glance"}
      />
      <section className="bg-[#f2f8f1] py-20">
        <div className="flex bg-white flex-col md:flex-row gap-10 p-6 md:p-10 max-w-5xl mx-auto justify-center items-center border-2 shadow-xl rounded-lg">
          <div className="h-full">
            <img
              className=" w-[500px] object-contain rounded-lg"
              src={cardImage}
              alt="Scholarship Card"
            />
          </div>
          <div className="relative w-[50%]">
            <h2 className="font-bold text-3xl text-[#0c281b] mb-6">
              Affiliate Marketing
            </h2>
            <div className="space-y-2 pl-1">
              <p className="flex items-center gap-2">
                <SlCalender /> 24-02-2025
              </p>
              <p className="flex items-center gap-2">
                <TbCategory />
                Student
              </p>
              <p className="flex items-center gap-2">
                <IoLocationOutline /> Habiganj, Sylhet, Bangladesh
              </p>
              <p className="flex items-center gap-2">
                <MdOutlineAccessTime /> 24-02-2025
              </p>
              <p className="flex items-center gap-2">
                <AiOutlineDollar /> 100 + {"30"}{" "}
                <small className="-mt-2">{"*charge"}</small>
              </p>
            </div>
            <button className="btn mt-4 transition duration-300 hover:bg-[#7CFF77] hover:text-[#14452F] bg-[#185137] text-white ml-1">
              Apply Now
            </button>
          </div>
        </div>
        <div className="max-w-screen-lg mx-auto pt-10">
          <div>
            <div className="flex gap-3 p-2 border-2 border-black max-w-max rounded-full">
              <button
                onClick={() => setToggle(true)}
                className={`transition duration-300 px-3 py-2 rounded-full ${
                  toggle && "bg-[#185137] text-white"
                }`}
              >
                Description
              </button>
              <button
                onClick={() => setToggle(false)}
                className={`transition duration-300 px-3 py-2 rounded-full ${
                  toggle || "bg-[#185137] text-white"
                }`}
              >
                Reviews
              </button>
            </div>
          </div>
          {toggle ? <Description description={data.description} /> : <Review />}
        </div>
      </section>
    </section>
  );
};

export default ScholarshipsDetails;
