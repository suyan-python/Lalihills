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

const Landing = () => {
  return (
    <div>
      {/* <Hero /> */}
      <LaliComingSoon />

      <FeaturedProduct />

      <ContextSection />

      <AuthenticSection />

      <Collab />

      {/* <SummerOfferings /> */}

      <ShopBanner />

      <FeatureStandard />

      <CertificationSection />
    </div>
  );
};

export default Landing;
