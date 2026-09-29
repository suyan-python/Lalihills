import { motion } from "framer-motion";

import coffee from "../../assets/footer/coffee.webp";
import tea from "../../assets/footer/tea.jpeg";
import gift from "../../assets/footer/gift.webp";
import bulk from "../../assets/footer/bulk.jpg";
import { ArrowUpRight } from "lucide-react";
import Button from "../../components/Button";

const End = () => {
  const footerCollections = [
    {
      title: "Get Your Beans",
      subtitle: "From the hills of Nepal",
      image: coffee,
      link: "/shop/coffee",
    },
    {
      title: "Get Your Leaves",
      subtitle: "Leaves shaped by the hills",
      image: tea,
      link: "/shop/tea",
    },
    {
      title: "Gift Someone You Love",
      subtitle: "Give a taste of Nepal",
      image: gift,
      link: "/shop/gifts",
    },
  ];
  return (
    <div>
      <section>
        <div className="mx-auto w-full">
          <div className="grid grid-cols-1 md:grid-cols-3">
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
                className="group relative aspect-[2/2] overflow-hidden  "
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
                  <h3 className="header text-[clamp(1.2rem,3vw,2rem)] uppercase leading-none tracking-[0.03em] text-white ">
                    {item.title}
                  </h3>

                  <Button
                    className="mt-3"
                    variant="light"
                    size="sm"
                    to={item.link}
                  >
                    Shop
                  </Button>
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
