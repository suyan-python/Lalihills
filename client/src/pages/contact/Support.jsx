import { motion } from "framer-motion";
import {
  Headphones,
  MessageCircle,
  MapPin,
  Mail,
  ArrowUpRight,
} from "lucide-react";

const supportOptions = [
  {
    icon: MessageCircle,
    number: "01",
    title: "Chat with us",
    description: "Have a question? We're here to help whenever you need us.",
    label: "Available 24/7",
    action: "Chat on WhatsApp",
    href: "https://wa.me/9779800000000",
  },
  {
    icon: MapPin,
    number: "02",
    title: "Visit us",
    description:
      "Find Laali Hills at our physical stores and experience Nepal in person.",
    label: "Our locations",
    action: "View locations",
    href: "/locations",
  },
  {
    icon: Mail,
    number: "03",
    title: "Email us",
    description:
      "For detailed enquiries, partnerships or anything else, send us a message.",
    label: "Usually replies within 24 hours",
    action: "Send an email",
    href: "mailto:hello@laalihills.com",
  },
];

const Support = () => {
  return (
    <main className="min-h-screen bg-lightCream text-brown">
      <section className="relative flex min-h-[65vh] items-center justify-center overflow-hidden px-6 py-32">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D9828A]/10 blur-[120px]" />
        <div className="relative z-10 mx-auto max-w-3xl text-center">
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.8,
              y: 15,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mx-auto mb-7 flex h-14 w-14 items-center justify-center rounded-full border border-red/20 bg-red/5"
          >
            <Headphones size={20} strokeWidth={1} className="text-red" />
          </motion.div>

          {/* Small label */}

          <motion.p
            initial={{
              opacity: 0,
              y: 10,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 0.1,
            }}
            className="mb-5 text-[8px] font-semibold uppercase tracking-[0.4em] text-[#8C625C]"
          >
            Laali Hills Support
          </motion.p>

          {/* Main title */}

          <motion.h1
            initial={{
              opacity: 0,
              y: 25,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.9,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="header text-[clamp(4rem,10vw,8rem)] leading-[0.82] tracking-[-0.06em]"
          >
            Contact <span className=" italic text-red">Us.</span>
          </motion.h1>

          {/* Description */}

          <motion.p
            initial={{
              opacity: 0,
              y: 15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.3,
            }}
            className="mx-auto mt-8 max-w-lg text-base  md:text-xl leading-relaxed text-[#6D514C] sm:text-2xl"
          >
            Whether you're looking for your next cup, have a question about an
            order, or simply want to say hello — we're here.
          </motion.p>
        </div>

        {/* Bottom scroll indicator */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1,
            delay: 1,
          }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-[7px] uppercase tracking-[0.35em] text-[#8C625C]">
              Get in touch
            </span>

            <motion.span
              animate={{
                y: [0, 5, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="h-7 w-px bg-red/50"
            />
          </div>
        </motion.div>
      </section>

      <section className="border-t border-brown/10 bg-lightCream px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 border-y border-brown/10 md:grid-cols-3">
            {supportOptions.map((option, index) => {
              const Icon = option.icon;

              return (
                <motion.div
                  key={option.title}
                  initial={{
                    opacity: 0,
                    y: 30,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.25,
                  }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.12,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className={`
                                        group relative px-7 py-12 sm:px-10 lg:py-14
                                        ${
                                          index !== 2
                                            ? "border-b md:border-b-0 md:border-r border-brown/10"
                                            : ""
                                        }
                                    `}
                >
                  {/* Number */}

                  <span className="absolute right-7 top-7 font-title text-3xl leading-none text-brown/[0.06]">
                    {option.number}
                  </span>

                  {/* Icon */}

                  <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-full border border-red/20 bg-red/5 transition-all duration-500 group-hover:border-red/40 group-hover:bg-red/10">
                    <Icon size={19} strokeWidth={1} className="text-red" />
                  </div>

                  {/* Label */}

                  <p className="mb-3 text-[8px] font-semibold uppercase tracking-[0.3em] text-[#A16D66]">
                    {option.label}
                  </p>

                  {/* Title */}

                  <h2 className="header text-3xl tracking-[-0.03em] text-brown">
                    {option.title}
                  </h2>

                  {/* Description */}

                  <p className="mt-5 max-w-sm text-[11px] leading-6 text-[#725853] tracking-wider">
                    {option.description}
                  </p>

                  {/* CTA */}

                  <a
                    href={option.href}
                    target={
                      option.href.startsWith("https://") ? "_blank" : undefined
                    }
                    rel={
                      option.href.startsWith("https://")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="group/link mt-8 inline-flex items-center gap-3 border-b border-brown/20 pb-2 text-[8px] font-semibold uppercase tracking-[0.28em] text-brown transition-colors duration-300 hover:border-red hover:text-red"
                  >
                    {option.action}

                    <ArrowUpRight
                      size={13}
                      strokeWidth={1.5}
                      className="transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
                    />
                  </a>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
                SMALL BRAND STATEMENT
            ====================================================== */}

      <section className="relative overflow-hidden bg-brown px-6 py-24 text-center sm:py-32">
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden">
          <span className="whitespace-nowrap font-title text-[20vw] leading-none tracking-[-0.07em] text-lightCream/[0.025]">
            LAALI HILLS
          </span>
        </div>

        <div className="relative z-10 mx-auto max-w-2xl">
          <span className="text-[8px] uppercase tracking-[0.4em] text-[#D9828A]">
            From Nepal, with care
          </span>

          <p className="mt-7 font-title text-[clamp(2rem,4vw,3.5rem)] leading-[0.95] tracking-[-0.04em] text-lightCream">
            The hills are our beginning.
          </p>

          <p className="mx-auto mt-5 max-w-md font-subtitle text-lg italic leading-relaxed text-[#BFA29B]">
            And we're always happy to share a little more of them with you.
          </p>
        </div>
      </section>
    </main>
  );
};

export default Support;
