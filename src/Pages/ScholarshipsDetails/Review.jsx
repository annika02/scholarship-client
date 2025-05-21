import React, { useContext, useState } from "react";
import { FaRegCalendarAlt } from "react-icons/fa";
import ReactStars from "react-rating-stars-component";
import { toast } from "react-toastify";
import { AuthContext } from "../../Context/AuthProvider";
const Review = ({ review }) => {
  const { user } = useContext(AuthContext);
  const [ratings, setRatings] = useState(0);
  const handleRating = (newRating) => {
    setRatings(newRating);
  };
  const date = new Date();
  const handleReview = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    const newData = { ...data, ratings, image: user.photoURL, date };

    if (!ratings > 0) {
      toast.error("Please select a minimum rating");
      return;
    }
    fetch(`http://localhost:5000/add-review/${review?.postId}`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(newData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          toast.success("Review added successfully");
        }
      });
    // console.log(date);
    e.target.reset();
  };
  return (
    <div className="space-y-3 mt-5">
      <form onSubmit={handleReview} className="space-y-3 my-6">
        <h2 className="border-b-2 border-[black] max-w-max px-2">Add Review</h2>
        <div className="flex gap-5">
          <input
            required
            defaultValue={user.displayName}
            placeholder="Name"
            className="input input-bordered"
            type="text"
            name="name"
            id=""
          />
          <ReactStars
            count={5}
            size={28}
            onChange={handleRating}
            isHalf={true}
            activeColor="#ffd700"
          />
        </div>
        <textarea
          required
          placeholder="Give a review"
          className="w-full rounded-lg h-20 p-3"
          name="review"
          id=""
        ></textarea>
        <button className="btn transition duration-300 hover:bg-[#7CFF77] hover:text-[#14452F] bg-[#185137] text-white px-7">
          Submit
        </button>
      </form>
      <div className="border-2 p-5 bg-white rounded-xl space-y-3">
        <ReactStars
          count={5}
          size={28}
          isHalf={true}
          value={4.5}
          edit={false}
          activeColor="#ffd700"
        />
        <div className="flex items-center gap-3">
          <img
            className="w-10 rounded-full"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
            alt=""
          />
          <h2>Ariful Islam</h2>
          <p className="flex items-center gap-2 pl-3">
            {" "}
            <FaRegCalendarAlt />
            25-12-2025
          </p>
        </div>
        <div>
          <p className="">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum
            maxime, nulla nihil voluptas obcaecati ratione doloremque unde. Sunt
            modi quia unde. Animi a minima nostrum ut quos iusto quidem laborum?
          </p>
        </div>
      </div>
      <div className="border-2 p-5 bg-white rounded-xl space-y-3">
        <ReactStars
          count={5}
          size={28}
          isHalf={true}
          value={4.5}
          edit={false}
          activeColor="#ffd700"
        />
        <div className="flex items-center gap-3">
          <img
            className="w-10 rounded-full"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
            alt=""
          />
          <h2>Ariful Islam</h2>
          <p className="flex items-center gap-2 pl-3">
            {" "}
            <FaRegCalendarAlt />
            25-12-2025
          </p>
        </div>
        <div>
          <p className="">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum
            maxime, nulla nihil voluptas obcaecati ratione doloremque unde. Sunt
            modi quia unde. Animi a minima nostrum ut quos iusto quidem laborum?
          </p>
        </div>
      </div>
      <div className="border-2 p-5 bg-white rounded-xl space-y-3">
        <ReactStars
          count={5}
          size={28}
          isHalf={true}
          value={4.5}
          edit={false}
          activeColor="#ffd700"
        />
        <div className="flex items-center gap-3">
          <img
            className="w-10 rounded-full"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
            alt=""
          />
          <h2>Ariful Islam</h2>
          <p className="flex items-center gap-2 pl-3">
            {" "}
            <FaRegCalendarAlt />
            25-12-2025
          </p>
        </div>
        <div>
          <p className="">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum
            maxime, nulla nihil voluptas obcaecati ratione doloremque unde. Sunt
            modi quia unde. Animi a minima nostrum ut quos iusto quidem laborum?
          </p>
        </div>
      </div>
    </div>
  );
};
export default Review;
