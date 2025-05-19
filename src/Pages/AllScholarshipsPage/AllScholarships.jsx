import React from "react";
import ScholarshipsCard from "../HomePage/ScholarshipCard";
import OtherPageBanner from "../../Hooks/OtherPageBanner";
import bgImage from "../../assets/download (2).jpg";
const AllScholarships = () => {
  return (
    <>
      <OtherPageBanner
        image={bgImage}
        heading={"Explore Scholarship Opportunities"}
      />
      <section className="py-20">
        <div className="flex gap-3 items-center justify-end max-w-screen-xl mx-auto mb-5">
          <input
            className="input input-bordered"
            type="text"
            placeholder="Search here"
            name="searchBox"
            id=""
          />
          <select
            defaultValue={"Search by category"}
            className="select select-bordered"
          >
            <option disabled value={"Search by category"}>
              Search By category
            </option>
            <option value={"scholarship"}>Scholarship Name</option>
            NameNameName <option value={"university"}>University Name</option>
            <option value={"degree"}>Degree Name</option>
          </select>
        </div>
        <div className="grid md:grid-cols-3 sm:grid-cols-2 max-w-screen-2xl mx-auto gap-7 px-10">
          <ScholarshipsCard />
          <ScholarshipsCard />
          <ScholarshipsCard />
          <ScholarshipsCard />
          <ScholarshipsCard />
          <ScholarshipsCard />
          <ScholarshipsCard />
        </div>
      </section>
    </>
  );
};

export default AllScholarships;
