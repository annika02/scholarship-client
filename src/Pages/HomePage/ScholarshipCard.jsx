import React from "react";
import cardImage from "../../assets/Screenshot 2025-05-19 192758.png";
import ReactStars from "react-rating-stars-component";
import { MdOutlineAccessTimeFilled } from "react-icons/md";
import { Link } from "react-router-dom";
const ScholarshipsCard = () => {
  const text =
    "Tempor aliquet eget sit amet tellus cras adipiscing enim. Feugiat in ante metus dictum at tempor commodo";
  const slicedText = text.length > 130 ? text.slice(0, 130) + "..." : text;
  const price = 30;
  const date = new Date().getFullYear();
  const id = 1234;
  return (
    <div className="card group max-w-[460px] card-compact bg-base-100 shadow-xl">
      <figure>
        <img src={cardImage} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="font-bold text-3xl text-[#0c281b]">
          Affiliate Marketing
        </h2>
        <p className="flex gap-2 items-center">
          <MdOutlineAccessTimeFilled />
          {date}
        </p>
        <p className="text-[#394630]">{slicedText}</p>
        <hr />
        <div className="card-actions relative justify-between">
          <p className="text-2xl font-bold text-[#14452F]">${price}</p>
          <div>
            <Link
              to={`/scholarship-details/${id}`}
              className="max-w-max max-h-max"
            >
              {" "}
              <button className="btn -translate-x-5 transition-all duration-300 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 hover:bg-[#7CFF77] hover:text-[#14452F] bg-[#185137] text-white">
                View Details
              </button>
            </Link>
            <div
              className="absolute bottom-4 right-4 flex space-x-1 group-hover:-z-10 group-hover:translate-x-5
                            group-hover:opacity-0
                            transition-all text-lg duration-300"
            >
              <ReactStars
                count={5}
                size={22}
                value={4.5}
                isHalf={true}
                activeColor="#ffd700"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScholarshipsCard;
