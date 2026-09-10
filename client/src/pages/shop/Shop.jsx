import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

import beans from "../../assets/shop/beans.webp";
import leaves from "../../assets/shop/leaves.webp";
import gift from "../../assets/shop/gift.jpg";
import ShopStatement from "./ShopStatement";

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
    <main className="relative min-h-screen overflow-hidden bg-lightWhite">
      <div className="pointer-events-none absolute right-[-4vw] top-[5vh] select-none">
        <motion.p
          initial={{
            opacity: 0,
            x: 100,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 1.5,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
                        header
                        whitespace-nowrap
                        text-[25vw]
                        font-black
                        leading-none
                        tracking-[-0.09em]
                        text-[#241817]/[0.025]
                    "
        >
          Laali Hills
        </motion.p>
      </div>

      <section className="relative px-7  pt-36 sm:px-12 sm:pt-44 lg:px-20 lg:pt-36 xl:px-28">
        <div className="mx-auto max-w-[1500px]">
          {/* Main heading */}

          <div className=" grid lg:grid-cols-12 lg:gap-10 ">
            <div className="lg:col-span-8">
              <motion.h1
                initial={{
                  opacity: 0,
                  y: 60,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 1.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="
                                    header
                                    max-w-5xl
                                    text-[clamp(2.5rem,9vw,3.5rem)]
                                    font-medium
                                    leading-[0.78]
                                    tracking-[-0.075em]
                                    text-[#241817]
                                "
              >
                Our <span className=" italic text-red">Selects</span>
              </motion.h1>
            </div>

            <motion.div
              initial={{
                opacity: 0,
                y: 30,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.9,
                delay: 0.25,
              }}
              className="
                                mt-10
                                max-w-sm
                                lg:col-span-4
                                lg:mt-auto
                                lg:pb-2
                            "
            >
              <p
                className="
                                font-subtitle
                                md:text-base
                                text-xs
                                italic
                                leading-relaxed
                                text-[#795D57]
                            "
              >
                Coffee, tea and thoughtful gifts — each carrying something of
                where it came from.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="relative  mt-5">
        <div className=" w-full">
          <div
            className="
                        grid
                        grid-cols-2
                        md:grid-cols-3
                      
                    "
          >
            <CollectionSecondary collection={collections[0]} index={0} />
            <CollectionSecondary collection={collections[1]} index={1} />

            <CollectionSecondary collection={collections[2]} index={2} />
          </div>
        </div>
      </section>

      {/* =====================================================
                CLOSING STATEMENT
            ===================================================== */}
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
      className="h-full"
    >
      <Link to={collection.path} className="group block h-full overflow-hidden">
        <div className="grid h-full aspect-[3/5] grid-rows-[3fr_1fr] overflow-hidden bg-lightCream">
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
            <span className="absolute left-5 top-5 z-10 text-[8px] font-medium uppercase tracking-[0.35em] text-lightCream/75">
              {collection.number}
            </span>

            {/* SUBTLE OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-t from-ink/25 via-transparent to-transparent" />
          </div>

          {/* CONTENT */}
          <div
            className="flex min-h-0 items-center justify-center px-5 text-center sm:px-6"
            style={{ backgroundColor: collection.accent }}
          >
            <div className="w-full">
              {/* SUBTITLE */}
              <span className="block text-[7px] font-medium uppercase tracking-[0.3em] text-lightCream/65 sm:text-[8px]">
                {collection.subtitle}
              </span>

              {/* TITLE */}
              <h2 className="subheader mt-2 text-[clamp(2rem,3.2vw,3.2rem)] leading-[0.82] tracking-[-0.06em] text-lightCream">
                {collection.name}
              </h2>

              {/* CTA */}
              <div className="mt-4 flex items-center justify-center gap-3 text-lightCream transition-all duration-500 group-hover:gap-4">
                <span className="text-[8px] font-medium uppercase tracking-[0.3em]">
                  Explore
                </span>

                <span className="flex h-7 w-7 items-center justify-center rounded-full border border-lightCream/30 transition-all duration-500 group-hover:bg-lightCream group-hover:text-ink">
                  <ArrowUpRight size={13} strokeWidth={1.2} />
                </span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default Shop;
