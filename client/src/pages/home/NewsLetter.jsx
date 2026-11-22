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
  .slice(0, 3);

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
    <section className="relative overflow-hidden bg-purple px-5 py-20 text-ink sm:px-10 sm:py-28 lg:px-16">
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
        <div className="relative mx-auto max-w-4xl">
          {/* Characters */}
          <div className="relative z-10 flex items-end justify-center gap-2 sm:gap-12">
            {newsletterCharacters.map((character, index) => (
              <motion.div
                key={character.characterImage}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                }}
                className={`relative flex w-1/3 max-w-[150px] flex-col items-center ${
                  index === 1 ? "z-10 -translate-y-3" : "z-0"
                }`}
              >
                {/* Speech bubbles */}
                <div
                  className={`absolute bottom-full mb-3 w-max max-w-[155px] rounded-2xl border border-[#D7C8E4] bg-[#F8F4FB] px-3 py-2 text-center text-[9px] leading-relaxed text-[#604B76] shadow-sm sm:max-w-[190px] sm:px-4 sm:text-[10px] ${
                    index === 0
                      ? "-left-2"
                      : index === 1
                      ? "left-1/2 -translate-x-1/2"
                      : "-right-2"
                  }`}
                >
                  {speechLines[index]}
                  <span
                    className={`absolute -bottom-1.5 h-3 w-3 rotate-45 border-b border-r border-[#D7C8E4] bg-[#F8F4FB] ${
                      index === 0
                        ? "left-6"
                        : index === 1
                        ? "left-1/2 -translate-x-1/2"
                        : "right-6"
                    }`}
                  />
                </div>

                <motion.img
                  src={character.characterImage}
                  alt={character.shortName || character.name}
                  className="h-28 w-full object-contain drop-shadow-[0_8px_12px_rgba(64,52,77,0.12)] sm:h-40 lg:h-48"
                  animate={{ y: [0, -5, 0] }}
                  transition={{
                    duration: 3.5 + index * 0.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.3,
                  }}
                />

                <span className="mt-2 rounded-full border border-[#D7C8E4] bg-[#F8F4FB]/80 px-3 py-1 text-[9px] font-bold uppercase tracking-[0.12em] text-[#795A9C]">
                  {character.name}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Signup panel */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative z-20 mx-auto mt-2 max-w-2xl rounded-[2rem] border border-[#D7C8E4] bg-[#F8F4FB] px-5 py-8 text-center shadow-[0_20px_70px_rgba(64,52,77,0.10)] sm:px-12 sm:py-10"
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
        </div>
      </div>
    </section>
  );
}
