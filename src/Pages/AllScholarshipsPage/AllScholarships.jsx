import React, { useState } from "react";
import ScholarshipsCard from "../HomePage/ScholarshipCard";
import OtherPageBanner from "../../Hooks/OtherPageBanner";
import bgImage from "../../assets/download (2).jpg";
import { useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";
const AllScholarships = () => {
  const loaderData = useLoaderData();
  const [data, setData] = useState(loaderData);
  const [searchCategory, setSearchKey] = useState("");

  const [isAvailable, setIsAvailable] = useState(true);
  const handleSearch = (e) => {
    const searchQuery = e.target.value.toLowerCase(); //
    if (!searchQuery) {
      setData(loaderData);
      return;
    }
    if (!searchCategory) {
      toast.error("Select a search category before typing!");
      return;
    }
    const newData = loaderData.filter((d) =>
      d[searchCategory]?.toLowerCase().includes(searchQuery)
    );
    setIsAvailable(newData.length > 0);
    setData(newData);
  };

  console.log(data);
  return (
    <>
      <OtherPageBanner
        image={bgImage}
        heading={"Explore Scholarship Opportunities"}
      />
      <section className="py-20">
        <div className="flex gap-3 items-center justify-end max-w-screen-xl mx-auto mb-5">
          <input
            onChange={handleSearch}
            className="input input-bordered"
            type="text"
            placeholder="Search here"
            name="searchBox"
            id=""
          />
          <select
            onChange={(e) => setSearchKey(e.target.value)}
            defaultValue={"Search by category"}
            className="select select-bordered"
          >
            <option disabled value={"Search by category"}>
              Search By category
            </option>
            <option value={"scholarshipName"}>Scholarship Name</option>
            <option value={"universityName"}>University Name</option>
            <option value={"degree"}>Degree Name</option>
          </select>
        </div>
        <div className="grid md:grid-cols-3 sm:grid-cols-2 max-w-screen-2xl mx-auto gap-7 px-10">
          {data.map((d) => (
            <ScholarshipsCard scholarship={d} key={d._id} />
          ))}
        </div>

        {isAvailable || (
          <div className="text-3xl py-10 font-bold text-center">
            No Scholarships Available
          </div>
        )}
      </section>
    </>
  );
};

export default AllScholarships;
