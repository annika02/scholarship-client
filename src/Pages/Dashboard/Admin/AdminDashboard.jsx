import React from "react";
import Navbar from "../../../Components/Navbar";
import Footer from "../../../Components/Footer";
import { NavLink, Outlet } from "react-router-dom";
import { FaBook, FaList, FaUserCircle, FaUsers } from "react-icons/fa";
import useRole from "../../../Hooks/useRole";
import { FaPenToSquare } from "react-icons/fa6";
import { BiSolidCommentDetail } from "react-icons/bi";
import dashboardBg from "../../../assets/download (2).jpg";

const Admin = () => {
  const { role } = useRole();
  return (
    <>
      <Navbar />
      <section className="flex justify-center h-[80vh]">
        <aside className="w-[20%] pt-5h-[calc(100vh-70px)]   ">
          <h1
            style={{
              backgroundImage: `url('${dashboardBg}')`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
            className="text-4xl py-5 mb-5 font-bold text-center text-white max-h-max w-full"
          >
            {" "}
            Dashboard
          </h1>
          <ul className=" space-y-5 px-2  ">
            <li>
              <NavLink
                className="flex py-2 px-5 rounded-full items-center gap-2"
                to="profile"
              >
                <FaUserCircle />
                Profile
              </NavLink>
            </li>
            <li>
              <NavLink
                className="flex py-2 px-5 rounded-full items-center gap-2"
                to="add-scholarships"
              >
                <FaPenToSquare />
                Add Scholarships
              </NavLink>
            </li>
            <li>
              <NavLink
                className="flex py-2 px-5 rounded-full items-center gap-2"
                to="/dashboard/manage-scholarships"
              >
                <FaList></FaList>
                Manage Scholarships
              </NavLink>
            </li>
            <li>
              <NavLink
                className="flex py-2 px-5 rounded-full items-center gap-2"
                to="/dashboard/manage-applications"
              >
                <FaBook></FaBook>
                Manage Applications
              </NavLink>
            </li>
            <li>
              <NavLink
                className="flex py-2 px-5 rounded-full items-center gap-2"
                to="/dashboard/manage-users"
              >
                <FaUsers></FaUsers>
                All Users
              </NavLink>
            </li>
            <li>
              <NavLink
                className="flex py-2 px-5 rounded-full items-center gap-2"
                to="manage-reviews"
              >
                <BiSolidCommentDetail />
                Reviews
              </NavLink>
            </li>
          </ul>
        </aside>
        <div className="w-[80%]">
          <Outlet />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Admin;
