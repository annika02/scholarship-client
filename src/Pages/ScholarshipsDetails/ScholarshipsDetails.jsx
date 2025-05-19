import React, { useState } from "react";
import cardImage from "../../assets/Screenshot 2025-05-19 192758.png";
import scholarshipsBanner from "../../assets/download (1).jpg";
import { SlCalender } from "react-icons/sl";
import { MdOutlineAccessTime } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { TbCategory } from "react-icons/tb";
import { AiOutlineDollar } from "react-icons/ai";
import Description from "./Description";
import Review from "./Review";
import OtherPageBanner from "../../Hooks/OtherPageBanner";

const ScholarshipsDetails = () => {
  const [activeTab, setActiveTab] = useState("description");

  const scholarshipData = {
    title: "Affiliate Marketing",
    date: "24-02-2025",
    category: "Student",
    location: "Habiganj, Sylhet, Bangladesh",
    price: 100,
    fee: 30,
    deadline: "24-02-2025",
  };

  return (
    <div className="min-h-screen bg-[#f2f8f1]">
      {/* Hero Banner - You might want to choose between this or OtherPageBanner */}
      <div
        className="w-full bg-cover bg-center bg-no-repeat relative"
        style={{ backgroundImage: `url('${scholarshipsBanner}')` }}
      >
        <div className="bg-[#14452f] bg-opacity-90 py-24">
          <h1 className="text-4xl md:text-6xl font-bold text-white mx-auto text-center px-4 max-w-screen-sm">
            Explore Scholarship Opportunities
          </h1>
        </div>
      </div>

      {/* Scholarship Details Card */}
      <section className="py-12 md:py-20 px-4">
        <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="flex flex-col md:flex-row">
            {/* Image Section */}
            <div className="md:w-1/2 p-6">
              <img
                className="w-full h-auto object-cover rounded-lg"
                src={cardImage}
                alt={scholarshipData.title}
                loading="lazy"
              />
            </div>

            {/* Details Section */}
            <div className="md:w-1/2 p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-[#0c281b] mb-6">
                {scholarshipData.title}
              </h2>

              <div className="space-y-3 mb-6">
                <DetailItem icon={<SlCalender />} text={scholarshipData.date} />
                <DetailItem
                  icon={<TbCategory />}
                  text={scholarshipData.category}
                />
                <DetailItem
                  icon={<IoLocationOutline />}
                  text={scholarshipData.location}
                />
                <DetailItem
                  icon={<MdOutlineAccessTime />}
                  text={`Deadline: ${scholarshipData.deadline}`}
                />
                <DetailItem
                  icon={<AiOutlineDollar />}
                  text={
                    <>
                      {scholarshipData.price} + {scholarshipData.fee}
                      <span className="text-xs ml-1 text-gray-500">
                        *service charge
                      </span>
                    </>
                  }
                />
              </div>

              <button className="btn w-full md:w-auto px-8 py-3 bg-[#185137] hover:bg-[#7CFF77] text-white hover:text-[#14452F] transition-colors duration-300">
                Apply Now
              </button>
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="max-w-5xl mx-auto mt-12">
          <div className="flex border-b border-gray-200">
            <TabButton
              active={activeTab === "description"}
              onClick={() => setActiveTab("description")}
            >
              Description
            </TabButton>
            <TabButton
              active={activeTab === "reviews"}
              onClick={() => setActiveTab("reviews")}
            >
              Reviews
            </TabButton>
          </div>

          <div className="mt-6">
            {activeTab === "description" ? <Description /> : <Review />}
          </div>
        </div>
      </section>
    </div>
  );
};

// Reusable Detail Item Component
const DetailItem = ({ icon, text }) => (
  <p className="flex items-center gap-3 text-gray-700">
    <span className="text-[#185137]">{icon}</span>
    <span>{text}</span>
  </p>
);

// Reusable Tab Button Component
const TabButton = ({ active, onClick, children }) => (
  <button
    className={`px-6 py-3 font-medium ${
      active
        ? "text-[#185137] border-b-2 border-[#185137]"
        : "text-gray-500 hover:text-[#14452F]"
    }`}
    onClick={onClick}
  >
    {children}
  </button>
);

export default ScholarshipsDetails;
