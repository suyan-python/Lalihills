import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import drip from "../../assets/products/dripnew.jpeg";
import hills from "../../assets/hills/1.jpg";
import { Link } from "react-router-dom";

const FeaturedProduct = () => {
  return (
    <section className="relative overflow-hidden bg-lightWhite px-7 py-14 text-ink sm:px-12 sm:py-16 lg:px-20 lg:py-16 xl:px-28">
      {/* Ambient corner glow */}

      {/* <div className="pointer-events-none absolute -left-32 top-1/4 h-96 w-96 rounded-full bg-red/10 blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-[32rem] w-[32rem] rounded-full bg-soil/10 blur-[140px]" /> */}

      <div className="relative mx-auto grid max-w-[1500px] items-center gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-24">
        <motion.div
          initial={{ opacity: 0, x: -45 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          {/* Outer glow — corners */}

          <div className="pointer-events-none absolute -left-10 -top-10 h-44 w-44 rounded-full bg-red blur-[120px]" />
          {/* <div className="pointer-events-none absolute -bottom-12 -right-12 h-52 w-52 rounded-full bg-soil/5 blur-[90px]" />
          <div className="pointer-events-none absolute -right-8 top-1/2 h-36 w-36 rounded-full bg-hill/5 blur-[80px]" /> */}

          {/* Fine frame */}

          <div className="relative mx-auto max-w-[560px] p-[1px]">
            <div className="relative aspect-[4/5] overflow-hidden bg-soil">
              <motion.div
                className="absolute inset-0"
                whileHover={{ scale: 1.025 }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              >
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  className="h-full w-full object-cover"
                >
                  <source src="/videos/picked.mp4" type="video/mp4" />
                </video>
              </motion.div>

              {/* Your existing overlay */}
              <div className="absolute inset-0 bg-ink/10" />

              {/* Image treatment */}

              <div className="absolute inset-0 bg-ink/35" />
              <div className="absolute inset-0 bg-gradient-to-br from-ink/30 via-transparent to-red/20" />

              {/* Corner glow */}

              <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-red/20 blur-[100px]" />
              <div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-soil/25 blur-[110px]" />

              {/* Top metadata */}

              <div className="absolute left-6 right-6 top-6 flex items-center justify-between sm:left-8 sm:right-8 sm:top-8">
                <div className="flex items-center gap-3">
                  <span className="text-[8px] font-medium uppercase tracking-[0.3em] text-ivory/75">
                    Featured Origin
                  </span>
                </div>

                <span className="text-[8px] uppercase tracking-[0.25em] text-ivory/50">
                  01 / 01
                </span>
              </div>

              {/* Center statement */}

              <div className="absolute inset-0 flex items-center justify-center px-8">
                <motion.div
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.2 }}
                  className="max-w-sm text-center"
                >
                  <span className="text-[7px] font-medium uppercase tracking-[0.45em] text-ivory/60">
                    From the hills of Nepal
                  </span>

                  <h3 className="mt-5 subheader md:text-7xl leading-[0.86] tracking-[-0.05em] text-ivory text-3xl">
                    Grown
                    <br />
                    <span className="italic text-red">with purpose.</span>
                  </h3>

                  <div className="mx-auto mt-7 h-px w-10 bg-red" />

                  <p className="mx-auto mt-5 max-w-[240px] font-subtitle text-sm italic leading-relaxed text-ivory/65">
                    Coffee shaped by altitude, soil, people and time.
                  </p>
                </motion.div>
              </div>

              {/* Bottom metadata */}

              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between sm:bottom-8 sm:left-8 sm:right-8">
                <div>
                  <p className="text-[7px] uppercase tracking-[0.35em] text-ivory/45">
                    Laali Hills
                  </p>

                  <p className="mt-1 font-subtitle text-sm italic text-ivory/65">
                    Nepal · Origin · Craft
                  </p>
                </div>

                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-ivory/20">
                  <span className="font-title text-sm italic text-red">LH</span>
                </div>
              </div>

              {/* Grain */}

              <div
                className="pointer-events-none absolute inset-0 opacity-[0.035]"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='.7'/%3E%3C/svg%3E")`,
                }}
              />
            </div>
          </div>
        </motion.div>

        {/* CONTENT */}

        <motion.div
          initial={{ opacity: 0, x: 45 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1.1, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-xl lg:pl-4"
        >
          {/* Heading */}

          <h2 className="subheader text-[clamp(3.2rem,6vw,5.8rem)] leading-[0.84] tracking-[-0.055em] text-ink">
            Laali Hills
            <br />
            <span className="italic text-red">Arabica.</span>
          </h2>

          <div className="my-7 flex items-center gap-3">
            <span className="text-[12px] font-bold uppercase tracking-[0.35em] text-stone">
              Flavors | Flavors | Flavors | Flavors
            </span>
          </div>

          {/* Description */}

          <p className="mt-8 max-w-lg subheader text-lg leading-8 text-soil sm:text-xl">
            A coffee shaped by the hills of Nepal — grown with patience, crafted
            with care, and brought to your cup with its origin intact.
          </p>

          {/* Product information */}

          <div className="mt-10 grid max-w-lg grid-cols-3 border-y border-ink/10 py-5">
            <div>
              <p className="text-[7px] uppercase tracking-[0.25em] text-stone">
                Origin
              </p>

              <p className="mt-2 text-[10px] font-medium uppercase tracking-[0.08em] text-ink">
                Laali Hills
              </p>
            </div>

            <div className="border-l border-ink/10 pl-5">
              <p className="text-[7px] uppercase tracking-[0.25em] text-stone">
                Process
              </p>

              <p className="mt-2 text-[10px] font-medium uppercase tracking-[0.08em] text-ink">
                Washed
              </p>
            </div>

            <div className="border-l border-ink/10 pl-5">
              <p className="text-[7px] uppercase tracking-[0.25em] text-stone">
                Roast
              </p>

              <p className="mt-2 text-[10px] font-medium uppercase tracking-[0.08em] text-ink">
                Medium
              </p>
            </div>
          </div>

          {/* CTA */}

          <div className="mt-9 flex flex-wrap items-center gap-7">
            <Link
              to="/shop/coffee"
              className="group inline-flex items-center gap-4 bg-red px-7 py-4 text-[8px] font-semibold uppercase tracking-[0.3em] text-ivory transition-all duration-500 hover:bg-deepRed "
            >
              Buy Now
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-ivory/10">
                <ArrowUpRight
                  size={14}
                  strokeWidth={1.4}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </span>
            </Link>

            <Link
              to="/shop/coffee"
              className="group inline-flex items-center gap-3 text-[8px] font-semibold uppercase tracking-[0.3em] text-soil"
            >
              Explore Coffee
              <ArrowUpRight
                size={13}
                strokeWidth={1.3}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProduct;
