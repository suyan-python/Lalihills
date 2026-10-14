import React from "react";
import ExploreHero from "./ExploreHero";
import ExploreLand from "./ExploreLand";
import ExploreOrigins from "./ExploreOrigin";
import ExploreCoffeePlant from "./ExploreCoffeePlant";
import ExploreArticles from "./ExploreArticles";
import ExploreMagazine from "./ExploreMagazine";

import "./explore.css";
import ExploreSocials from "./ExploreSocials";

const Explore = () => {
  return (
    <div className="relative z-20">
      <ExploreHero />
      <ExploreSocials />
      {/* <ExploreLand /> */}
      <ExploreCoffeePlant />
      <ExploreOrigins />
      <ExploreArticles />
      <ExploreMagazine />
    </div>
  );
};

export default Explore;
