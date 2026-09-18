import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import ProductGrid from "./ProductGrid";
import { Link } from "react-router-dom";
import SecureBanner from "./SecureBanner";

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
    <main className="min-h-screen  mx-auto px-8 md:px-0 bg-lightWhite">
      <Helmet>
        <title>{seoTitle}</title>

        <meta name="description" content={seoDescription} />

        <meta name="robots" content="index, follow" />
      </Helmet>

      <section className="relative overflow-hidden pb-2 pt-24 sm:pt-28 md:pb-5 lg:pt-32  ">
        <div className="mx-auto max-w-[1500px] ">
          <div className="flex items-end justify-between gap-4 sm:gap-8">
            <div className="min-w-0">
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
        truncate
        text-[clamp(1.5rem,8vw,2.5rem)]
        font-black
        leading-[0.8]
        tracking-[-0.065em]
        text-ink
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
                className="flex shrink-0 items-center gap-2 sm:gap-5"
              >
                <Link
                  to="/shop/help-me-choose"
                  className="group flex shrink-0 items-center gap-1.5 text-[6px] font-bold uppercase tracking-[0.18em] text-ink transition-colors duration-500 hover:text-red sm:gap-2 sm:text-[10px] sm:tracking-[0.22em]"
                >
                  <span>Help me choose</span>

                  <span className="h-px w-3 bg-ink/30 transition-all duration-500 group-hover:w-5 group-hover:bg-red sm:w-4 sm:group-hover:w-6" />
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
      mt-3
      max-w-[85%]
      text-[10px]
      italic
      leading-[1.6]
      text-soil/75
      sm:mt-4
      sm:max-w-xl
      sm:text-xs
      md:text-base
    "
            >
              {description}
            </motion.p>
          )}

          <div className="relative mt-2 h-px w-full bg-[#241817]/10">
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

      <section className="pb-14 lg:pb-48 mt-2 ">
        <div className="mx-auto max-w-[1500px]">
          <ProductGrid products={products} />
        </div>
      </section>
      <SecureBanner />
    </main>
  );
};

export default ShopCategory;
