import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import ProductGrid from "./ProductGrid";
import { Link } from "react-router-dom";

const ShopCategory = ({
  displayName,
  displaySubtitle,

  description,

  seoTitle,
  seoDescription,

  collectionLabel,
  originLabel,

  products = [],

  filterComponent,
}) => {
  return (
    <main className="min-h-screen max-w-7xl mx-auto px-8 md:px-0">
      <Helmet>
        <title>{seoTitle}</title>

        <meta name="description" content={seoDescription} />

        <meta name="robots" content="index, follow" />
      </Helmet>

      <section className="relative overflow-hidden pb-10 pt-24 sm:pt-28 md:pb-14 lg:pt-32  ">
        <div className="mx-auto max-w-[1500px]">
          <div className="flex items-end justify-between gap-8">
            <div>
              {/* H1 */}

              <motion.h1
                initial={{
                  opacity: 0,
                  y: 45,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="
                                    header
                                    text-[clamp(1.5rem,8vw,2.5rem)]
                                    font-black
                                    leading-[0.8]
                                    tracking-[-0.065em]
                                    text-[#241817]
                                "
              >
                {displayName}
              </motion.h1>
            </div>

            {filterComponent && (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex shrink-0 items-center gap-3 sm:gap-5"
              >
                <Link
                  to="/shop/help-me-choose"
                  className="group flex shrink-0 items-center gap-2 text-[7px] font-bold uppercase tracking-[0.22em] text-ink transition-colors duration-500 hover:text-red sm:text-[8px]"
                >
                  <span>Help me choose</span>
                  <span className="h-px w-4 bg-ink/30 transition-all duration-500 group-hover:w-6 group-hover:bg-red" />
                </Link>

                {filterComponent}
              </motion.div>
            )}
          </div>

          {description && (
            <motion.p
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
                delay: 0.3,
              }}
              className="
                                mt-4
                                max-w-xl
                                text-[14px]
                                italic
                                leading-relaxed
                                text-[#8B625D]
                                sm:text-base
                                
                            "
            >
              {description}
            </motion.p>
          )}

          <div className="relative mt-5 h-px w-full bg-[#241817]/10">
            <motion.div
              initial={{
                width: 0,
              }}
              animate={{
                width: "18%",
              }}
              transition={{
                duration: 1.3,
                delay: 0.4,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="absolute left-0 top-0 h-px bg-red"
            />
          </div>
        </div>
      </section>

      {/* =================================================
                PRODUCTS
            ================================================= */}

      <section className="pb-32 sm:2 sm:pb-40 lg:pb-48 ">
        <div className="mx-auto max-w-[1500px]">
          <ProductGrid products={products} />
        </div>
      </section>
    </main>
  );
};

export default ShopCategory;
