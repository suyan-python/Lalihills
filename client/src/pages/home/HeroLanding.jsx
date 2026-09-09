import React from "react";
import Hero from "./Hero";
import LaliComingSoon from "../../components/LaliCommingSoon";
import FeaturedProduct from "./FeaturedProduct";
import SummerOfferings from "./SummerOfferings";
import AuthenticSection from "./AuthenticSection";
import ContextSection from "./ContextSection";
import Collab from "./Collab";
import CertificationSection from "./Certification";
import FeatureStandard from "./FeatureStandard";
import ShopBanner from "../shop/ShopBanner";
import Halfhalf from "./Halfhalf";
import Halfhalf2 from "./Halfhalf2";
import End from "./End";

const Landing = () => {
  return (
    <div>
      {/* <Hero /> */}
      <LaliComingSoon />

      <FeaturedProduct />

      <Halfhalf />

      <ContextSection />

      <Halfhalf2 />

      <AuthenticSection />

      <Collab />

      {/* <SummerOfferings /> */}

      <ShopBanner />

      {/* <FeatureStandard /> */}

      <CertificationSection />

      <End />
    </div>
  );
};

export default Landing;
