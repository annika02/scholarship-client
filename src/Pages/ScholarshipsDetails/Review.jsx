import React from "react";
import { FaRegCalendarAlt } from "react-icons/fa";
import ReactStars from "react-rating-stars-component";

const Review = () => {
  // Sample reviews data
  const reviews = [
    {
      id: 1,
      name: "Ariful Islam",
      avatar:
        "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
      date: "25-12-2025",
      rating: 4.5,
      comment:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum maxime, nulla nihil voluptas obcaecati ratione doloremque unde. Sunt modi quia unde. Animi a minima nostrum ut quos iusto quidem laborum?",
    },
    {
      id: 2,
      name: "Sarah Johnson",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      date: "15-11-2025",
      rating: 5,
      comment:
        "Excellent scholarship program! The application process was smooth and the support team was very helpful throughout the entire process.",
    },
    {
      id: 3,
      name: "Michael Chen",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      date: "02-01-2026",
      rating: 4,
      comment:
        "Great opportunity for students. The only suggestion would be to extend the application deadline by a couple more weeks.",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-4 md:p-6">
      {/* Review Form */}
      <div className="bg-white rounded-xl shadow-md p-6 mb-8">
        <h2 className="text-2xl font-bold text-[#14452F] border-b-2 border-[#7CFF77] pb-2 mb-6 max-w-max">
          Add Your Review
        </h2>

        <div className="space-y-5">
          <div className="flex flex-col md:flex-row gap-5 items-start md:items-center">
            <input
              placeholder="Your Name"
              className="input input-bordered w-full md:w-auto flex-grow"
              type="text"
            />
            <ReactStars
              count={5}
              size={28}
              isHalf={true}
              activeColor="#ffd700"
              className="md:ml-4"
            />
          </div>

          <textarea
            placeholder="Share your experience..."
            className="textarea textarea-bordered w-full h-32 p-3"
          />

          <button className="btn bg-[#14452F] hover:bg-[#0c281b] text-white px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105">
            Submit Review
          </button>
        </div>
      </div>

      {/* Reviews List */}
      <div className="space-y-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          {reviews.length} Reviews
        </h3>

        {reviews.map((review) => (
          <div
            key={review.id}
            className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 hover:shadow-md transition-shadow"
          >
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center space-x-4">
                <img
                  className="w-12 h-12 rounded-full object-cover"
                  src={review.avatar}
                  alt={review.name}
                />
                <div>
                  <h4 className="font-medium text-gray-900">{review.name}</h4>
                  <p className="flex items-center text-sm text-gray-500">
                    <FaRegCalendarAlt className="mr-1" />
                    {review.date}
                  </p>
                </div>
              </div>

              <ReactStars
                count={5}
                size={20}
                isHalf={true}
                value={review.rating}
                edit={false}
                activeColor="#ffd700"
              />
            </div>

            <p className="text-gray-700 leading-relaxed">{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Review;
