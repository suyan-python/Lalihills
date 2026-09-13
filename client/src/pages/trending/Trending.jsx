import { useEffect } from "react";
import TrendingHero from "../../components/TrendingHero";
import FeatureStory from "../../components/FeatureStory";
import TrendingIndex from "../../components/TrendingIndex";
import InsideTheCup from "../../components/InsideTheCup";
import JournalCTA from "../../components/JournalCTA";
import { trendingMeta } from "../../data/trending";

const Trending = () => {
  useEffect(() => {
    document.title = trendingMeta.title;
    const description = document.querySelector('meta[name="description"]');
    if (description)
      description.setAttribute("content", trendingMeta.description);
  }, []);

  return (
    <main className="bg-ivory text-brown">
      <TrendingHero />
      <FeatureStory />
      <TrendingIndex />
      <InsideTheCup />
      <JournalCTA />
    </main>
  );
};

export default Trending;
