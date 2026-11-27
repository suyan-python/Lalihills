import { motion } from "framer-motion";
import { ArrowUpRight, Coffee, Gift, Leaf, Sparkles } from "lucide-react";

import pro1 from "../../assets/products/pro1.jpg";
import pro2 from "../../assets/products/pro2.jpg";
import pro3 from "../../assets/products/pro3.jpg";

const collections = [
  {
    id: "beans",
    number: "01",
    eyebrow: "FROM THE HIGHLANDS",
    title: "Coffee Beans",
    description:
      "Bold origins, careful roasting, and a little magic in every bean.",
    action: "Explore Coffee",
    href: "/shop/coffee",
    image: pro1,
    icon: Coffee,
    theme: {
      background: "#30243A",
      accent: "#D8C2E8",
      glow: "rgba(185,154,216,0.25)",
      text: "#F8F4FB",
      muted: "#C6B7D0",
    },
  },
  {
    id: "leaves",
    number: "02",
    eyebrow: "GROWN WITH CARE",
    title: "Tea Leaves",
    description:
      "A taste of the hills, shaped by nature and made for your own ritual.",
    action: "Explore Tea",
    href: "/shop/tea",
    image: pro2,
    icon: Leaf,
    theme: {
      background: "#293A34",
      accent: "#C6D9C5",
      glow: "rgba(169,199,165,0.22)",
      text: "#F4F5EE",
      muted: "#B9C9B7",
    },
  },
  {
    id: "gifts",
    number: "03",
    eyebrow: "MADE TO BE SHARED",
    title: "Gifts from Laali",
    description:
      "Thoughtful little packages, memorable flavours, and something special for someone special.",
    action: "Discover Gifts",
    href: "/shop/gifts",
    image: pro3,
    icon: Gift,
    theme: {
      background: "#713746",
      accent: "#F4C9D5",
      glow: "rgba(242,175,194,0.24)",
      text: "#FFF5F6",
      muted: "#E7C4CC",
    },
  },
];

function CollectionCard({ item, index, wide = false }) {
  const Icon = item.icon;
  const theme = item.theme;

  return (
    <motion.a
      href={item.href}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.7,
        delay: index * 0.12,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{ y: -7 }}
      className={`group relative isolate flex min-h-[480px] overflow-hidden rounded-[2rem] border border-white/10 ${
        wide ? "flex-col lg:min-h-[350px] lg:flex-row" : "flex-col"
      }`}
      style={{ backgroundColor: theme.background }}
    >
      {/* Ambient background */}
      <div
        className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full blur-[90px] transition-transform duration-700 group-hover:scale-125"
        style={{ backgroundColor: theme.glow }}
      />

      <div
        className="pointer-events-none absolute -bottom-32 -left-20 h-72 w-72 rounded-full blur-[100px]"
        style={{ backgroundColor: theme.glow }}
      />

      {/* Decorative number */}
      <span
        className="pointer-events-none absolute -right-3 top-0 select-none font-heading text-[180px] font-bold leading-none opacity-[0.045] lg:text-[220px]"
        style={{ color: theme.text }}
      >
        {item.number}
      </span>

      {/* Text content */}
      <div
        className={`relative z-10 flex flex-col ${
          wide
            ? "order-2 justify-center p-7 sm:p-10 lg:order-1 lg:w-[48%] lg:p-12"
            : "p-7 sm:p-9"
        }`}
      >
        <div className="mb-7 flex items-center justify-between">
          <span
            className="text-[9px] font-bold uppercase tracking-[0.25em]"
            style={{ color: theme.accent }}
          >
            {item.eyebrow}
          </span>

          <div
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15"
            style={{ color: theme.accent }}
          >
            <Icon size={17} strokeWidth={1.5} />
          </div>
        </div>

        <div className="mt-auto">
          <h3
            className="max-w-sm font-heading text-3xl font-bold leading-tight tracking-tight sm:text-4xl"
            style={{ color: theme.text }}
          >
            {item.title}
          </h3>

          <p
            className="mt-4 max-w-sm text-sm leading-7"
            style={{ color: theme.muted }}
          >
            {item.description}
          </p>

          <div
            className="mt-8 inline-flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.18em]"
            style={{ color: theme.accent }}
          >
            <span>{item.action}</span>

            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-current transition-all duration-300 group-hover:rotate-45 group-hover:bg-white group-hover:text-[#30243A]">
              <ArrowUpRight size={15} />
            </span>
          </div>
        </div>
      </div>

      {/* Product image */}
      <div
        className={`relative flex min-h-[240px] flex-1 items-center justify-center ${
          wide ? "order-1 lg:order-2 lg:min-h-full" : "mt-4"
        }`}
      >
        {/* Orbit ring */}
        <div
          className="absolute aspect-square w-[75%] rounded-full border border-dashed opacity-25 transition-transform duration-700 group-hover:scale-105"
          style={{ borderColor: theme.accent }}
        />

        <div
          className="absolute aspect-square w-[58%] rounded-full blur-2xl"
          style={{ backgroundColor: theme.glow }}
        />

        <motion.div
          className="relative z-10 flex h-full w-full items-center justify-center"
          animate={{ y: [0, -8, 0], rotate: [0, 1, 0] }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <img
            src={item.image}
            alt={item.title}
            className={`relative z-10 max-h-[280px] w-[75%] object-contain drop-shadow-[0_25px_30px_rgba(0,0,0,0.25)] transition-transform duration-700 group-hover:scale-110 ${
              wide ? "lg:max-h-[300px]" : ""
            }`}
          />
        </motion.div>

        <Sparkles
          className="absolute right-[15%] top-[20%] opacity-60"
          size={19}
          style={{ color: theme.accent }}
        />

        <Sparkles
          className="absolute bottom-[18%] left-[15%] opacity-40"
          size={13}
          style={{ color: theme.accent }}
        />
      </div>

      {/* Inner border */}
      <div className="pointer-events-none absolute inset-3 rounded-[1.5rem] border border-white/[0.07]" />
    </motion.a>
  );
}

export default function LaaliCollectionsShowcase() {
  return (
    <section className="relative overflow-hidden bg-[#ECE6F4] px-5 py-20 text-[#40344D] transition-colors duration-500 dark:bg-[#1D1625] sm:px-8 sm:py-28 lg:px-14">
      {/* Background decoration */}
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#B99AD8]/10 blur-[100px]" />
      <div className="pointer-events-none absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-[#987BB2]/10 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-12 flex flex-col justify-between gap-6 sm:mb-16 lg:flex-row lg:items-end"
        >
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#795A9C] dark:text-[#B99AD8]">
                Beans, Leaves and a little something to give. Take your time.{" "}
              </span>
            </div>

            <h2 className="max-w-2xl header text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              What the hills{" "}
              <span className="text-[#795A9C] dark:text-[#B99AD8]">
                gave us
              </span>
              .
            </h2>
          </div>
        </motion.div>

        {/* Collection layout */}
        <div className="grid gap-5 lg:grid-cols-2">
          <CollectionCard item={collections[0]} index={0} />
          <CollectionCard item={collections[1]} index={1} />

          <div className="lg:col-span-2">
            <CollectionCard item={collections[2]} index={2} wide />
          </div>
        </div>

        {/* Brand signature */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mt-16 flex flex-col items-center gap-3 text-center"
        >
          <Sparkles size={17} className="text-[#987BB2] dark:text-[#B99AD8]" />

          <p className="font-heading text-sm font-semibold tracking-wide text-[#766A80] dark:text-[#B9A9C7]">
            When the hills are happy, they are Laali.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
