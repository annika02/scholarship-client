import React from "react";
import Banner from "./Banner";
import TopScholarships from "./TopScholarships";
import { useLoaderData } from "react-router-dom";
import SuccessStories from "./SuccessStories";
import ScholarshipStats from "./ScholarshipStats";
const Home = () => {
  const data = useLoaderData();
  return (
    <section>
      <Banner />
      <ScholarshipStats></ScholarshipStats>
      <TopScholarships data={data} />
      <SuccessStories></SuccessStories>
    </section>
  );
};

export default Home;
