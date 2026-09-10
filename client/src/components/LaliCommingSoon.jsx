import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import bestBrew from "../assets/logo/bestbrew.png";
import whenTheHillsAreLaali from "../assets/logo/whenthehillare.png";
import logo from "/logo.png";

const videos = [
  "/videos/plantation.mp4",
  "/videos/cherry.mp4",
  "/videos/harvesting2.mp4",
  "/videos/harvesting3.mp4",
  "/videos/farm.mp4",
  "/videos/coffee.mp4",
];

const LaliComingSoon = () => {
  const [currentVideo, setCurrentVideo] = useState(0);
  const [visible, setVisible] = useState(true);
  const [activeSlide, setActiveSlide] = useState(0);

  const handleVideoEnded = () => {
    setVisible(false);

    setTimeout(() => {
      setCurrentVideo((prev) => (prev + 1) % videos.length);

      setVisible(true);
    });
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setActiveSlide((prev) => (prev === 0 ? 1 : 0));
    }, 8000);

    return () => clearTimeout(timer);
  }, [activeSlide]);

  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-lightCream">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#241817]/65 via-[#241817]/35 to-transparent">
        {/* Video */}
        <motion.video
          key={videos[currentVideo]}
          initial={{
            opacity: 0,
            scale: 1.02,
          }}
          animate={{
            opacity: visible ? 0.2 : 0,
            scale: 1,
          }}
          transition={{
            duration: 0.1,
            ease: "easeInOut",
          }}
          autoPlay
          muted
          playsInline
          preload="metadata"
          onEnded={handleVideoEnded}
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src={videos[currentVideo]} type="video/mp4" />
        </motion.video>

        {/* Dark brown cinematic overlay */}
        <div className="absolute inset-0 bg-black/15" />

        {/* Bottom fade */}
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black via-transparent to-transparent" />
      </div>

      <section className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl flex-col justify-center items-center overflow-hidden px-6 pb-28 pt-8 sm:px-10 lg:px-14">
        <div className="relative z-10 mx-auto flex min-h-[calc(100vh-5rem)] w-full max-w-[1400px] items-center justify-center px-6 py-24 text-center sm:px-10 lg:px-16">
          <AnimatePresence mode="wait">
            {activeSlide === 0 && (
              <motion.div
                key="hero"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{
                  opacity: 0,
                  x: -80,
                }}
                transition={{
                  duration: 1.2,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="
                    absolute
                    inset-0
                    flex
                    items-center
                    justify-center
                "
              >
                <div className="flex w-full max-w-5xl flex-col items-center">
                  <motion.div
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
                      delay: 0.2,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="flex items-center justify-center gap-4"
                  >
                    <span className="text-[8px] font-medium uppercase tracking-[0.4em] text-lightCream sm:text-[9px]">
                      From the hills of Nepal
                    </span>
                  </motion.div>

                  <motion.div
                    initial={{
                      opacity: 0,
                      y: 35,
                      scale: 0.97,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      scale: 1,
                    }}
                    transition={{
                      duration: 1.3,
                      delay: 0.35,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="relative mt-3 flex w-full flex-col items-center"
                  >
                    <motion.div
                      className="relative z-10 flex justify-center"
                      initial={{
                        opacity: 0,
                        scale: 0.92,
                      }}
                      animate={{
                        opacity: 1,
                        scale: 1,
                      }}
                      transition={{
                        duration: 1.2,
                        delay: 0.45,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    >
                      <motion.img
                        src={logo}
                        alt="Laali Hills — Nepali specialty coffee and tea"
                        className="block w-[240px] object-contain sm:w-[330px] md:w-[400px] lg:w-[480px] xl:w-[540px]"
                        initial={{
                          clipPath: "inset(0 100% 0 0)",
                        }}
                        animate={{
                          clipPath: "inset(0 0% 0 0)",
                        }}
                        transition={{
                          duration: 1.5,
                          delay: 0.6,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                      />
                    </motion.div>
                    {/* <motion.img
                                                src={slogan}
                                                alt=""
                                                aria-hidden="true"
                                                className="pointer-events-none w-[120px] object-contain sm:w-[155px] md:w-[185px] lg:w-[215px]"
                                            /> */}

                    <motion.div
                      initial={{ opacity: 0, y: 18 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 1,
                        delay: 1.05,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="relative z-0 mt-6 flex items-center justify-center gap-3"
                    >
                      <motion.img
                        src={bestBrew}
                        alt="Best brews from the higher belt"
                        className="block w-[180px] object-contain sm:w-[240px] md:w-[300px]"
                      />
                    </motion.div>
                  </motion.div>

                  <motion.div
                    initial={{
                      opacity: 0,
                      y: 20,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      duration: 1,
                      delay: 1.25,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="mt-8 flex items-center gap-4"
                  >
                    {/* <p className="subheader text-[9px] uppercase tracking-[0.22em] text-[#F5E8E3] sm:text-[10px] md:text-[11px]">
                      From the hills.
                      <span className="mx-2 text-[#D9828A]">·</span>
                      From the soil.
                      <span className="mx-2 text-[#D9828A]">·</span>
                      From the people.
                      <span className="mx-2 text-[#D9828A]">·</span>
                      <span className="italic text-[#D9828A]">To you.</span>
                    </p> */}
                  </motion.div>
                </div>
              </motion.div>
            )}

            {activeSlide === 1 && (
              <motion.div
                key="laali-essence"
                initial={{
                  opacity: 0,
                  x: 80,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                exit={{
                  opacity: 0,
                  x: -80,
                }}
                transition={{
                  duration: 1.2,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="
        absolute inset-0 flex items-center justify-center px-6 sm:px-10
    "
              >
                <div
                  className="
        grid w-full max-w-6xl grid-cols-1 gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-20
    "
                >
                  <div>
                    <motion.div
                      initial={{
                        opacity: 0,
                        y: 20,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      transition={{
                        delay: 0.25,
                        duration: 0.8,
                      }}
                      className="
                    flex
                    items-center
                    gap-3
                "
                    ></motion.div>

                    <motion.img
                      src={whenTheHillsAreLaali}
                      alt="When the hills are Laali"
                      initial={{
                        opacity: 0,
                        y: 30,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      transition={{
                        delay: 0.4,
                        duration: 1,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="
                    mt-7
                    block
                    w-full
                    max-w-2xl
                    object-contain
                    object-left
                "
                    />
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
                      delay: 0.6,
                      duration: 1,
                    }}
                    className="max-w-md flex flex-col items-start justify-start "
                  >
                    <p
                      className="
                font-title
                text-[10px]
                md:text-[14px]
                uppercase
                leading-6
                tracking-[0.15em]
                text-cream text-left
            "
                    >
                      The feeling of hills
                      <br />
                      when they are flourishing.
                    </p>

                    <Link
                      to="/aboutLaaliHills"
                      className="
                    mt-8 group inline-flex items-center gap-4 bg-hill px-5 py-3 text-[8px] font-medium uppercase tracking-[0.3em] text-[#F8EDE8] transition-all duration-500 hover:border-[#D9828A]/60 hover:bg-hill
                "
                    >
                      <span>Know Laali</span>

                      <ArrowRight
                        className="
                        h-3.5
                        w-3.5
                        transition-transform
                        duration-500
                        group-hover:translate-x-1.5
                    "
                      />
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 1,
            delay: 1.7,
          }}
          className="absolute bottom-4 left-1/2 z-20 -translate-x-1/2"
        >
          <motion.div
            animate={{
              y: [0, 7, 0],
              opacity: [0.55, 1, 0.55],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="flex flex-col items-center"
          >
            <span className="mb-3 text-[7px] font-medium uppercase tracking-[0.45em] text-lightCream/70">
              Scroll
            </span>

            <ChevronDown
              size={20}
              strokeWidth={0.9}
              className="text-lightCream"
            />
          </motion.div>
        </motion.div>

        <Link
          to="/shop"
          className="group absolute bottom-44 left-1/2 z-40 inline-flex -translate-x-1/2 items-start gap-4 bg-ivory px-6 py-3 text-[8px] md:text-[10px] font-bold uppercase tracking-[0.3em] text-hill shadow-xl transition-all duration-500 hover:bg-hill/80 hover:text-lightWhite"
          aria-label="Explore offerings"
        >
          <span>Explore offerings</span>
          <ArrowRight className="h-3.5 w-3.5 transition-transform duration-500 group-hover:translate-x-1.5" />
        </Link>
      </section>

      <div
        className="pointer-events-none absolute inset-0 z-30 opacity-[0.035]"
        style={{
          backgroundImage: `
            url("data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='7'/%3E%3C/svg%3E")
          `,
        }}
      />
      <div
        className="
    absolute
    bottom-8
    left-1/2
    z-30
    flex
    -translate-x-1/2
    items-center
    gap-3
"
      >
        {[0, 1].map((index) => (
          <button
            key={index}
            onClick={() => setActiveSlide(index)}
            className="
                relative
                h-px
                w-12
                overflow-hidden
                bg-lightCream/25
            "
            aria-label={`Go to slide ${index + 1}`}
          >
            {activeSlide === index && (
              <motion.span
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{
                  duration: 5,
                  ease: "linear",
                }}
                className="
                        absolute
                        inset-y-0
                        left-0
                        bg-lightCream
                    "
              />
            )}
          </button>
        ))}
      </div>
    </main>
  );
};

export default LaliComingSoon;
