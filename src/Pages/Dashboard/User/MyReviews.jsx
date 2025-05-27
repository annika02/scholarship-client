import React, { useState } from "react";
import { FaPen, FaTrash, FaStar } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";

const MyReviews = () => {
  const [ratings, setRating] = useState(0);
  const loaderData = useLoaderData();
  const [data, setData] = useState(loaderData);

  const handleDelete = (id) => {
    fetch(`https://scholarship-server-beta.vercel.app/delete-review/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.deletedCount > 0) {
          const newData = data.filter((d) => d._id !== id);
          setData(newData);
          toast.success("Review deleted successfully");
        }
      })
      .catch((err) =>
        toast.error("Something went wrong while deleting. Please try again!")
      );
  };

  const handleUpdate = (e, id, idx) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    fetch(`https://scholarship-server-beta.vercel.app/update-review/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ ...data, ratings }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.modifiedCount > 0) {
          // Update the local state to reflect the new rating and review
          const updatedData = [...data]; // Use the current data state
          updatedData[idx] = { ...updatedData[idx], ...data, ratings };
          setData(updatedData);
          toast.success("Update successfully");
        }
      })
      .catch((err) => toast.error("Oops! Something went wrong"));
    document.getElementById(`my_modal_${idx}`).checked = false;
  };

  return (
    <section className="bg-[#f1f2f8] h-full py-14">
      <div className="overflow-x-auto mx-auto max-w-screen-lg">
        {data.length > 0 ? (
          <table className="table text-center">
            <thead>
              <tr>
                <th className="border-2 border-gray-300">Ratings</th>
                <th className="border-2 border-gray-300">Scholarship title</th>
                <th className="border-2 border-gray-300">University name</th>
                <th className="border-2 border-gray-300">Review comments</th>
                <th className="border-2 border-gray-300">Review date</th>
                <th className="border-2 border-gray-300">Actions</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, idx) => (
                <React.Fragment key={item._id}>
                  <tr>
                    <th className="border">
                      <div className="flex justify-center">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <FaStar
                            key={star}
                            size={16}
                            color={star <= item.ratings ? "#ffd700" : "#e4e5e9"}
                            style={{ marginRight: "5px" }}
                          />
                        ))}
                      </div>
                    </th>
                    <td className="border">{item?.scholarshipName}</td>
                    <td className="border">{item?.universityName}</td>
                    <td className="max-w-72 border">{item?.review}</td>
                    <td className="border">{item?.date}</td>
                    <td className="border">
                      <label
                        onClick={() => setRating(item.ratings)}
                        htmlFor={`my_modal_${idx}`}
                        className="btn btn-ghost btn-xs"
                      >
                        <FaPen />
                      </label>
                      <button
                        onClick={() => handleDelete(item._id)}
                        className="btn btn-ghost text-red-600 btn-xs"
                      >
                        <FaTrash />
                      </button>
                    </td>
                  </tr>
                  <input
                    type="checkbox"
                    id={`my_modal_${idx}`}
                    className="modal-toggle"
                  />
                  <div className="modal" role="dialog">
                    <form
                      onSubmit={(e) => handleUpdate(e, item._id, idx)}
                      className="modal-box"
                    >
                      <div className="grid grid-cols-2 gap-5">
                        <div className="col-span-1 flex flex-col gap-5">
                          <label className="form-control text-start w-full max-w-xl">
                            <span className="label-text">Your name</span>
                            <input
                              name="name"
                              defaultValue={item.name}
                              type="text"
                              placeholder="Type here"
                              className="input input-bordered w-full max-w-xl"
                            />
                          </label>
                          <label
                            data-tip="You can't edit this information"
                            className="form-control text-start tooltip tooltip-error w-full max-w-xs"
                          >
                            <span className="label-text">
                              Scholarship title
                            </span>
                            <input
                              name="scholarshipName"
                              value={item.scholarshipName}
                              type="text"
                              placeholder="Type here"
                              readOnly
                              className="input input-bordered w-full max-w-xs"
                            />
                          </label>
                        </div>
                        <div className="col-span-1 flex flex-col gap-5">
                          <label
                            data-tip="You can't edit this information"
                            className="form-control text-start tooltip tooltip-error w-full tooltip-bottom max-w-xs"
                          >
                            <span className="label-text">University name</span>
                            <input
                              name="universityName"
                              value={item.universityName}
                              type="text"
                              placeholder="Type here"
                              readOnly
                              className="input input-bordered w-full max-w-xs"
                            />
                          </label>
                          <label className="form-control text-start w-full max-w-xs">
                            <span className="label-text">Ratings</span>
                            <div className="input flex items-center input-bordered">
                              <div className="flex">
                                {[1, 2, 3, 4, 5].map((star) => (
                                  <FaStar
                                    key={star}
                                    size={22}
                                    color={
                                      star <= ratings ? "#ffd700" : "#e4e5e9"
                                    }
                                    onClick={() => setRating(star)}
                                    style={{
                                      cursor: "pointer",
                                      marginRight: "5px",
                                    }}
                                  />
                                ))}
                              </div>
                            </div>
                          </label>
                        </div>
                        <div className="col-span-2">
                          <label className="form-control text-start w-full max-w-xl">
                            <span className="label-text">Review comments</span>
                            <textarea
                              defaultValue={item.review}
                              placeholder="Enter your review"
                              className="input w-full max-w-xl p-2 input-bordered h-28"
                              name="review"
                              id=""
                            ></textarea>
                          </label>
                        </div>
                      </div>
                      <div className="flex gap-4 mt-7 justify-center items-center">
                        <button className="btn transition duration-300 hover:bg-[#96d7ff] hover:text-[#143145] bg-[#1a4c58] text-white px-7">
                          Update
                        </button>
                        <label
                          htmlFor={`my_modal_${idx}`}
                          className="btn transition duration-300 hover:bg-[#ff3535] hover:text-[#ffffff] bg-[#d12525] text-white px-7"
                        >
                          Cancel
                        </label>
                      </div>
                    </form>
                  </div>
                </React.Fragment>
              ))}
            </tbody>
          </table>
        ) : (
          <div>
            <h2 className="text-4xl font-bold text-center">
              No data available
            </h2>
          </div>
        )}
      </div>
    </section>
  );
};

export default MyReviews;
