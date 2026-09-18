import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

import beans from "../../assets/shop/beans.webp";
import leaves from "../../assets/shop/leaves.webp";
import gift from "../../assets/shop/gift.jpg";
import ShopStatement from "./ShopStatement";
import Button from "../../components/Button";

const collections = [
  {
    number: "01",
    name: "Beans",
    plainName: "Coffee",
    subtitle: "Nepali Specialty Coffee",
    description:
      "Whole bean & ground, roasted to preserve the character of Nepal's highlands.",
    path: "/shop/coffee",
    image: beans,
    accent: "#6A4A2C",
  },
  {
    number: "02",
    name: "Leaves",
    plainName: "Tea",
    subtitle: "Nepali Specialty Tea",
    description:
      "Whole-leaf teas shaped by altitude, climate and generations of tradition.",
    path: "/shop/tea",
    image: leaves,
    accent: "#2C3A2E",
  },
  {
    number: "03",
    name: "Gifts",
    plainName: "Gifting",
    subtitle: "Coffee & Tea Gift Sets",
    description:
      "Thoughtful collections made for sharing a little piece of the hills.",
    path: "/shop/gifts",
    image: gift,
    accent: "#8F3038",
  },
];

const Shop = () => {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-lightWhite">
      {/* BACKGROUND WORD */}
      <div className="pointer-events-none absolute right-[-6vw] top-[8vh] z-0 select-none">
        <motion.p
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 1.5,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="header whitespace-nowrap text-[24vw] font-black leading-none tracking-[-0.09em] text-ink/[0.025] sm:text-[22vw] md:text-[20vw]"
        >
          Laali Hills
        </motion.p>
      </div>

      <section className="relative z-10">
        <div className="w-full">
          <div className="grid grid-cols-2 md:grid-cols-3">
            <CollectionSecondary collection={collections[0]} index={0} />
            <CollectionSecondary collection={collections[1]} index={1} />
            <CollectionSecondary collection={collections[2]} index={2} />
          </div>
        </div>
      </section>

      <ShopStatement />
    </main>
  );
};

/* ================================================================
   SECONDARY COLLECTION
================================================================ */

const CollectionSecondary = ({ collection, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 1,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="w-full"
    >
      <Link to={collection.path} className="group block w-full overflow-hidden">
        <div className="grid aspect-[3/5] w-full grid-rows-[3fr_1fr] overflow-hidden bg-lightCream">
          {/* IMAGE */}
          <div className="relative min-h-0 overflow-hidden">
            <motion.img
              src={collection.image}
              alt={collection.description}
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover transition-transform duration-[1800ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.045]"
            />

            {/* NUMBER */}
            <span className="absolute left-4 top-4 z-10 text-[6px] font-medium uppercase tracking-[0.3em] text-lightCream/75 sm:left-5 sm:top-5 sm:text-[7px] md:text-[8px]">
              {collection.number}
            </span>

            <div className="absolute inset-0 bg-gradient-to-t from-ink/25 via-transparent to-transparent" />
          </div>

          {/* CONTENT */}
          <div
            className="flex  items-center justify-center px-3 py-3 text-center sm:px-5 sm:py-4 md:px-6"
            style={{ backgroundColor: collection.accent }}
          >
            <div className="w-full">
              {/* SUBTITLE */}
              <span className="block text-[7px] font-medium uppercase tracking-[0.16em] text-lightCream/70 md:text-[9px] md:tracking-[0.2em]">
                {collection.subtitle}
              </span>

              {/* TITLE */}
              <h2 className="subheader mt-1.5 text-[clamp(1.5rem,3vw,3rem)] leading-[0.82] tracking-[-0.055em] text-lightCream sm:mt-2">
                {collection.name}
              </h2>

              {/* CTA */}
              <div className="mt-3 sm:mt-4 md:mt-6">
                <Button
                  size="sm"
                  variant="light"
                  className="px-3 text-[6px] gap-1.5 h-9 sm:px-4 sm:text-[7px] md:h-10 md:px-5 md:text-[8px]"
                >
                  Explore
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default Shop;
