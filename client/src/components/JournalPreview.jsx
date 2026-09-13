import { AnimatePresence, motion } from "framer-motion";
import TopPreview from "../pages/trending/TopPreview";
import NewestPreview from "../pages/trending/NewestPreview";
import HotPreview from "../pages/trending/HotPreview";

const JournalPreview = ({ type, onClose }) => {
  return (
    <AnimatePresence mode="wait">
      {type === "top" && <TopPreview key="top" onClose={onClose} />}
      {type === "newest" && <NewestPreview key="newest" onClose={onClose} />}
      {type === "hot" && <HotPreview key="hot" onClose={onClose} />}
    </AnimatePresence>
  );
};

export default JournalPreview;
