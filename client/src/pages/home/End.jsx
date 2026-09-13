import { motion } from "framer-motion";

import coffee from "../../assets/footer/coffee.webp";
import tea from "../../assets/footer/tea.jpeg";
import gift from "../../assets/footer/gift.webp";
import bulk from "../../assets/footer/bulk.jpg";
import { ArrowUpRight } from "lucide-react";

const End = () => {
  const footerCollections = [
    {
      title: "Coffee",
      subtitle: "From the hills of Nepal",
      image: coffee,
      link: "/shop/coffee",
    },
    {
      title: "Tea",
      subtitle: "Leaves shaped by the hills",
      image: tea,
      link: "/shop/tea",
    },
    {
      title: "Gift Packaging",
      subtitle: "Give a taste of Nepal",
      image: gift,
      link: "/shop/gifts",
    },
    {
      title: "Bulk Order",
      subtitle: "For businesses & gatherings",
      image: bulk,
      link: "/bulk-order",
    },
  ];
  return (
    <div>
      <section>
        <div className="mx-auto w-full">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {footerCollections.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: -42 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group relative aspect-[3/5] overflow-hidden rounded-b-full "
              >
                {/* Background image */}

                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
                />

                {/* Dark overlay */}

                <div className="absolute inset-0 bg-gradient-to-t from-brown/85 via-brown/20 to-transparent" />

                {/* Subtle brown tint */}

                <div className="absolute inset-0 bg-[#3B211E]/10 transition-opacity duration-500 group-hover:opacity-0" />

                {/* Content */}

                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7 text-center">
                  <h3 className="text-[clamp(1.2rem,3vw,2rem)] leading-none tracking-[-0.03em] text-white">
                    {item.title}
                  </h3>

                  {/* CTA */}
                  <a
                    href={item.link}
                    className="group/cta mt-6 inline-flex items-center gap-3 border-b border-white/40 pb-2 text-[8px] font-semibold uppercase tracking-[0.3em] text-white transition-colors duration-300 hover:border-[#D9828A]"
                  >
                    Shop
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/10 transition-colors duration-300 group-hover/cta:bg-red">
                      <ArrowUpRight
                        size={12}
                        strokeWidth={1.5}
                        className="transition-transform duration-300 group-hover/cta:-translate-y-0.5 group-hover/cta:translate-x-0.5"
                      />
                    </span>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default End;
