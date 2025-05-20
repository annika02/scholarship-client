import { Link } from "react-router-dom"; // Added missing import
import ScholarshipCard from "./ScholarshipCard"; // Fixed import name (assuming single export)

const TopScholarships = ({ data }) => {
  return (
    <div className=" py-20 bg-[#f2f8f1]">
      <div className="grid md:grid-cols-3 sm:grid-cols-2 max-w-screen-2xl mx-auto gap-7 px-10">
        {data.map((d) => (
          <ScholarshipsCard key={d._id} scholarship={d} />
        ))}
      </div>
      <div className="grid justify-center">
        <Link to={"/all-scholarships"}>
          {" "}
          <button className="btn mt-11 bg-[#185137] text-white hover:bg-[#238358]">
            View All Scholarships
          </button>
        </Link>
      </div>
    </div>
  );
};

export default TopScholarships;
