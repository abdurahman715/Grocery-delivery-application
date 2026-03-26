import React from "react";
import MainBanner from "../components/MainBanner.jsx";
import Catogories from "../components/Catogories.jsx";
import BestSeller from "../components/BestSeller.jsx";
import BottomBanner from "../components/BottomBanner.jsx";
import NewsLetter from "../components/NewsLetter.jsx";

const Home = () => {
  return (
    <div className="mt-10">
      <MainBanner />
      <Catogories />
      <BestSeller />
      <BottomBanner />
      <NewsLetter />
    </div>
  );
};

export default Home;
