import React from "react";
import Banner from "./Banner";
import TopScholarships from "./TopScholarships";
import { useLoaderData } from "react-router-dom";
const Home = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <section>
      <Banner />
      <TopScholarships data={data} />
    </section>
  );
};

export default Home;
