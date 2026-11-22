import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mail, Sparkles } from "lucide-react";
import { coffeeProducts, teaProducts } from "../../data/products";

const newsletterCharacters = [...coffeeProducts, ...teaProducts]
  .filter(
    (product, index, array) =>
      product.characterImage &&
      array.findIndex(
        (item) => item.characterImage === product.characterImage,
      ) === index,
  )
  .slice(2, 5);

export default function NewsLetter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle");

  // Connect your own backend API here in the future.
  const handleSubscribe = async (event) => {
    event.preventDefault();

    if (!email.trim()) return;

    setStatus("success");
    setEmail("");

    // Future API integration:
    // const response = await fetch("/api/newsletter/subscribe", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({ email }),
    // });
    // if (!response.ok) throw new Error("Subscription failed");
  };

  const speechLines = [
    "Psst... want to hear what's happening up here?",
    "We'll save you a little story from the hills.",
    "Don't worry, we won't fill your inbox!",
  ];

  return (
    <section className="relative overflow-hidden bg-purple px-5 py-10 text-ink sm:px-10 sm:py-14 lg:px-16">
      {/* Ambient background details */}
      <div className="pointer-events-none absolute -left-32 top-10 h-80 w-80 rounded-full bg-[#C8B2DF]/20 blur-[100px]" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-[#C8B2DF]/25 blur-[110px]" />

      <div className="relative mx-auto max-w-6xl">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-10 max-w-2xl text-center sm:mb-14"
        >
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#D7C8E4] bg-[#F8F4FB]/60 px-4 py-2 text-[9px] font-bold uppercase tracking-[0.2em] text-[#795A9C]">
            <Sparkles size={13} />A little note from us
          </span>

          <h2 className="header text-3xl font-semibold leading-tight text-[#40344D] sm:text-5xl lg:text-6xl">
            Let's keep
            <span className="block font-normal text-[#8C6BAA]">in touch.</span>
          </h2>
        </motion.div>

        {/* Character conversation */}
        <div className="relative mx-auto max-w-6xl">
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-[0.7fr_2fr_0.7fr] lg:gap-5">
            {/* Left character */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative order-2 flex flex-col items-center lg:order-1"
            >
              <div className="relative mb-3 max-w-[170px] rounded-2xl border border-[#D7C8E4] bg-[#F8F4FB] px-4 py-3 text-center text-[10px] leading-relaxed text-[#604B76] shadow-sm sm:text-xs">
                {speechLines[0]}
                <span className="absolute -bottom-1.5 left-1/2 h-3 w-3 -translate-x-1/2 rotate-45 border-b border-r border-[#D7C8E4] bg-[#F8F4FB]" />
              </div>

              <motion.img
                src={newsletterCharacters[0]?.characterImage}
                alt={newsletterCharacters[0]?.name || "Laali Hills character"}
                className="h-36 w-full max-w-[170px] object-contain drop-shadow-[0_8px_12px_rgba(64,52,77,0.12)] sm:h-48 lg:h-56"
                animate={{ y: [0, -7, 0], rotate: [0, 2, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              <span className="mt-2 rounded-full border border-[#D7C8E4] bg-[#F8F4FB]/80 px-3 py-1 text-[9px] font-bold uppercase tracking-[0.12em] text-[#795A9C]">
                {newsletterCharacters[0]?.name}
              </span>
            </motion.div>

            {/* Signup panel */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="relative z-10 order-1 mx-auto w-full max-w-2xl rounded-[2rem] border border-[#D7C8E4] bg-[#F8F4FB] px-5 py-8 text-center shadow-[0_20px_70px_rgba(64,52,77,0.10)] sm:px-10 sm:py-10 lg:order-2"
            >
              <h3 className="header mt-3 text-2xl font-semibold text-[#40344D] sm:text-3xl">
                We'll write when something is ready.
              </h3>

              <p className="mx-auto mt-3 max-w-md text-xs leading-6 text-[#766A80] sm:text-sm">
                A short note when a new lot comes down, and the story of whoever
                grew it. Nothing more, nothing less.
              </p>

              <form
                onSubmit={handleSubscribe}
                className="mx-auto mt-7 flex max-w-lg flex-col gap-3 sm:flex-row"
              >
                <div className="relative flex-1">
                  <Mail
                    size={17}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-[#987BB2]"
                  />

                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(event) => {
                      setEmail(event.target.value);
                      setStatus("idle");
                    }}
                    placeholder="Your email address"
                    className="w-full rounded-full border border-[#D7C8E4] bg-white px-11 py-4 text-sm text-[#40344D] outline-none transition placeholder:text-[#A99DB2] focus:border-[#8C6BAA] focus:ring-4 focus:ring-[#C8B2DF]/20"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "success"}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#49345E] px-7 py-4 text-xs font-bold uppercase tracking-[0.12em] text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-red hover:shadow-lg disabled:cursor-default disabled:opacity-70"
                >
                  {status === "success"
                    ? "You're on the list!"
                    : "Keep me posted"}
                  <ArrowRight size={15} />
                </button>
              </form>

              {status === "success" ? (
                <p className="mt-4 text-xs font-medium text-[#795A9C]">
                  Lovely! We'll save you a little story from the hills.
                </p>
              ) : (
                <p className="mt-4 text-[10px] text-[#9A8CA3]">
                  No spam. Just good things from the hills. Unsubscribe anytime.
                </p>
              )}
            </motion.div>

            {/* Right character */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative order-3 flex flex-col items-center"
            >
              <div className="relative mb-3 max-w-[170px] rounded-2xl border border-[#D7C8E4] bg-[#F8F4FB] px-4 py-3 text-center text-[10px] leading-relaxed text-[#604B76] shadow-sm sm:text-xs">
                {speechLines[1]}
                <span className="absolute -bottom-1.5 left-1/2 h-3 w-3 -translate-x-1/2 rotate-45 border-b border-r border-[#D7C8E4] bg-[#F8F4FB]" />
              </div>

              <motion.img
                src={newsletterCharacters[1]?.characterImage}
                alt={newsletterCharacters[1]?.name || "Laali Hills character"}
                className="h-36 w-full max-w-[170px] object-contain drop-shadow-[0_8px_12px_rgba(64,52,77,0.12)] sm:h-48 lg:h-56"
                animate={{ y: [0, -6, 0], rotate: [0, -2, 0] }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              <span className="mt-2 rounded-full border border-[#D7C8E4] bg-[#F8F4FB]/80 px-3 py-1 text-[9px] font-bold uppercase tracking-[0.12em] text-[#795A9C]">
                {newsletterCharacters[1]?.name}
              </span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
