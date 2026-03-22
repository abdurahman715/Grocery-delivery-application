import React from "react";
import MainBanner from "../components/MainBanner";
import Catogories from "../components/Catogories";
import BestSeller from "../components/BestSeller";
import BottomBanner from "../components/BottomBanner";

const Home = () => {
  return (
    <div className="mt-10">
      <MainBanner />
      <Catogories />
      <BestSeller />
      <BottomBanner />
    </div>
  );
};

export default Home;
