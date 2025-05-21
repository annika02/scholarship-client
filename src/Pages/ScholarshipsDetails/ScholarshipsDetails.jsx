import React, { useState } from "react";
import scholarshipsBanner from "../../assets/download (2).jpg";
import { SlCalender } from "react-icons/sl";
import { MdAttachMoney, MdOutlineAccessTime } from "react-icons/md";
import { IoLocationOutline, IoSchoolOutline } from "react-icons/io5";
import { AiOutlineDollar } from "react-icons/ai";
import Description from "./Description";
import Review from "./Review";
import OtherPageBanner from "../../Hooks/OtherPageBanner";
import { useLoaderData } from "react-router-dom";
import { GiNotebook } from "react-icons/gi";
import { PiCertificate, PiRanking } from "react-icons/pi";
import { BsCashCoin } from "react-icons/bs";
const ScholarshipsDetails = () => {
  const data = useLoaderData()[0];
  // const [data, setData] = useState(loaderData)
  console.log(data);
  const {
    _id,
    scholarshipName,
    applicationFees,
    degree,
    scholarshipPostDate,
    universityImage,
    serviceCharge,
    universityName,
    universityCity,
    universityCountry,
    scholarshipCategory,
    subjectCategory,
    applicationDeadline,
    universityWorldRank,
    tuitionFees,
    postedUserEmail,
  } = data;
  const [toggle, setToggle] = useState(true);
  return (
    <section>
      <OtherPageBanner
        image={scholarshipsBanner}
        heading={"Your Scholarship at a Glance"}
      />
      <section className="bg-[#f2f8f1] py-20">
        <div className="bg-white max-w-max mx-auto border-2 shadow-xl rounded-lg overflow-hidden  p-10 px-16 gap-10 flex">
          <div className=" text-center flex flex-col max-w-36  items-center">
            <img
              className=" w-32  h-32 rounded-xl object-cover"
              src={universityImage}
              alt="Scholarship Card"
            />{" "}
            <h2 className="font-bold text-xl text-[#0c281b] mb-6">
              {universityName}
            </h2>
          </div>

          {/* main content part */}
          <div className="">
            <div className="space-y-2">
              <h2 className="font-bold text-3xl text-[#0c281b]">
                {scholarshipName}
              </h2>
              <p className="flex text-sm items-center gap-2">
                <SlCalender />
                {scholarshipPostDate}
              </p>

              <div className="flex justify-between">
                <div className="space-y-1">
                  <h2 className="text-xl pb-2 pt-3 font-bold">
                    About the University
                  </h2>
                  <p className="flex items-center gap-2">
                    <PiRanking />
                    {universityWorldRank}
                  </p>
                  <p className="flex items-center gap-2">
                    <IoLocationOutline />{" "}
                    {universityCity + ", " + universityCountry}
                  </p>
                  <p className="flex items-center gap-2">
                    <MdOutlineAccessTime /> {applicationDeadline}
                  </p>
                  <p className="flex items-center gap-2">
                    <BsCashCoin />
                    {tuitionFees}
                    <small className="-mt-2 -ml-1">{"*Yearly"}</small>
                  </p>
                </div>
                <div className="space-y-1">
                  <h2 className="text-xl pb-2 pt-3 font-bold">
                    About the Scholarship
                  </h2>
                  <p className="flex items-center gap-2">
                    <GiNotebook />
                    {subjectCategory}
                  </p>
                  <p className="flex items-center gap-2">
                    <PiCertificate />
                    {degree}
                  </p>
                  <p className="flex items-center gap-2">
                    <IoSchoolOutline />
                    {scholarshipCategory}
                  </p>
                  <p className="flex items-center gap-2">
                    <AiOutlineDollar />
                    {applicationFees + " + " + serviceCharge}
                    <small className="-mt-2 -ml-1">*service charge</small>
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-end">
              <button className="btn mt-4  transition duration-300 hover:bg-[#7CFF77] hover:text-[#14452F] bg-[#185137] text-white ml-1">
                Apply Now
              </button>
            </div>
          </div>
        </div>

        {/* description and reviews */}
        <div className="max-w-screen-lg mx-auto pt-16">
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
          {toggle ? (
            <Description description={data.description} />
          ) : (
            <Review scholarshipData={data} />
          )}
        </div>
      </section>
    </section>
  );
};

export default ScholarshipsDetails;
