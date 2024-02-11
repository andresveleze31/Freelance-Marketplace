import React from "react";
import Hero from "../components/Hero";
import Slide from "../components/Slide";
import FeaturedServices from "../components/FeaturedServices";
import FeaturedExplore from "../components/FeaturedExplore";
import FeaturedSolutions from "../components/FeaturedSolutions";

function Home() {
  return (
    <div>
      <Hero />
      <Slide />
      <FeaturedServices />
      <FeaturedExplore />
      <FeaturedSolutions />
    </div>
  );
}

export default Home;
