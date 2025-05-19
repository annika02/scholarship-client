import { Link } from "react-router-dom"; // Added missing import
import ScholarshipCard from "./ScholarshipCard"; // Fixed import name (assuming single export)

const TopScholarships = () => {
  return (
    <section className="py-20 bg-[#f2f8f1]">
      <div className="grid md:grid-cols-3 sm:grid-cols-2 max-w-screen-2xl mx-auto gap-7 px-4 sm:px-10">
        {/* Render 6 scholarship cards */}
        {[...Array(6)].map((_, index) => (
          <ScholarshipCard key={index} />
        ))}
      </div>

      <div className="flex justify-center mt-11">
        <Link to="/all-scholarships">
          <button className="btn bg-[#185137] text-white hover:bg-[#238358] transition-colors duration-300">
            View All Scholarships
          </button>
        </Link>
      </div>
    </section>
  );
};

export default TopScholarships;
