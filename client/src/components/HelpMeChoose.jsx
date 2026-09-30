import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, RotateCcw } from "lucide-react";
import { Link } from "react-router-dom";
import { coffeeProducts } from "../data/products";

const questions = [
  {
    id: "flavor",
    number: "01",
    label: "What kind of coffee sounds good?",
    description: "Think about the flavours you naturally enjoy.",
    options: [
      { value: "chocolatey", label: "Smooth, chocolatey & comforting" },
      { value: "fruity", label: "Bright, fruity & lively" },
      { value: "balanced", label: "Balanced, mellow & easy" },
      { value: "bold", label: "Bold, deep & intense" },
    ],
  },

  {
    id: "brew",
    number: "02",
    label: "How do you usually make your coffee?",
    description: "Pick the brewing method you reach for most.",
    options: [
      { value: "drip", label: "Drip machine" },
      { value: "pour-over", label: "Pour-over / Filter" },
      { value: "espresso", label: "Espresso" },
      { value: "french-press", label: "French press" },
      { value: "cold-brew", label: "Cold brew" },
      { value: "mix", label: "I like to mix it up" },
    ],
  },

  {
    id: "caffeine",
    number: "03",
    label: "How do you like your caffeine?",
    description: "Tell us how caffeine fits into your coffee routine.",
    options: [
      { value: "natural", label: "I like my regular caffeine" },
      { value: "partial", label: "A little less caffeine" },
      { value: "decaf", label: "No caffeine, please" },
      { value: "depends", label: "It depends on the time of day" },
    ],
  },

  {
    id: "consistency",
    number: "04",
    label: "What are you looking for?",
    description:
      "Some people have their go-to. Others like discovering something new.",
    options: [
      { value: "consistent", label: "Something I can count on" },
      { value: "surprise", label: "Surprise me with something new" },
    ],
  },

  {
    id: "cups",
    number: "05",
    label: "How much coffee do you usually drink?",
    description: "A rough idea is all we need.",
    options: [
      { value: "one", label: "Just one cup a day" },
      { value: "two", label: "Around two cups a day" },
      { value: "three-four", label: "Three to four cups a day" },
      { value: "five", label: "Five or more cups a day" },
    ],
  },

  {
    id: "drinkers",
    number: "06",
    label: "Who are you brewing for?",
    description:
      "We'll use this to get a better sense of how much coffee you need.",
    options: [
      { value: "one", label: "Just me" },
      { value: "two", label: "Me and someone else" },
      { value: "three", label: "Three or more of us" },
    ],
  },

  {
    id: "frequency",
    number: "07",
    label: "How often would you like your coffee?",
    description: "Choose a rhythm that fits your routine.",
    options: [
      { value: "weekly", label: "Every week" },
      { value: "two-weeks", label: "Every two weeks" },
      { value: "four-weeks", label: "Every four weeks" },
      { value: "when-needed", label: "I'll order when I need it" },
    ],
  },
];

const QUIZ_DURATION = 30;

const getProductProfile = (product) => {
  const text = `${product.name} ${product.shortDescription || ""} ${(
    product.flavors || []
  ).join(" ")} ${(product.aroma || []).join(" ")}`.toLowerCase();

  return {
    product,
    flavor:
      text.includes("chocolate") || text.includes("cocoa")
        ? "chocolatey"
        : text.includes("fruit") ||
          text.includes("berry") ||
          text.includes("citrus")
        ? "fruity"
        : text.includes("dark") ||
          text.includes("bold") ||
          text.includes("roast")
        ? "bold"
        : "balanced",
    brew: text.includes("cold brew")
      ? ["cold-brew"]
      : text.includes("espresso")
      ? ["espresso"]
      : ["drip", "pour-over", "french-press", "mix"],
  };
};

const getRecommendation = (answers) => {
  if (!coffeeProducts?.length) return null;

  const profiles = coffeeProducts.map(getProductProfile);

  const ranked = profiles
    .map((profile) => {
      let score = 0;

      if (answers.flavor === profile.flavor) {
        score += 5;
      }

      if (profile.brew.includes(answers.brew)) {
        score += 3;
      }

      if (answers.consistency === "consistent") {
        score += 1;
      }

      if (answers.consistency === "surprise") {
        score += 1;
      }

      return {
        ...profile,
        score,
      };
    })
    .sort((a, b) => b.score - a.score);

  return ranked[0]?.product || coffeeProducts[0];
};

const getRecommendedSize = (answers) => {
  const cups = {
    one: 1,
    two: 2,
    "three-four": 3,
    five: 5,
  };

  const drinkers = {
    one: 1,
    two: 2,
    three: 3,
  };

  const dailyCups = cups[answers.cups] || 1;
  const people = drinkers[answers.drinkers] || 1;

  const weeklyCups = dailyCups * people * 7;

  if (weeklyCups >= 35) {
    return {
      size: "2 lbs",
      frequency: "weekly",
      recommendation: "You'll likely need around 1 × 2 lbs bag every week.",
    };
  }

  if (weeklyCups >= 21) {
    return {
      size: "1 kg",
      frequency: "weekly",
      recommendation: "You'll likely need around 1 × 1 kg bag every week.",
    };
  }

  if (weeklyCups >= 10) {
    return {
      size: "500 g",
      frequency: "every 2 weeks",
      recommendation: "You'll likely need around 1 × 500 g bag every 2 weeks.",
    };
  }

  return {
    size: "250 g",
    frequency: "every 2 weeks",
    recommendation: "You'll likely need around 1 × 250 g bag every 2 weeks.",
  };
};

const HelpMeChoose = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [direction, setDirection] = useState(1);
  const [secondsLeft, setSecondsLeft] = useState(QUIZ_DURATION);
  const [timerStartedAt, setTimerStartedAt] = useState(() => Date.now());

  const isResult = currentStep === questions.length;
  const questionsLeft = Math.max(questions.length - currentStep, 0);
  const progress = (currentStep / questions.length) * 100;
  const timerProgress = (secondsLeft / QUIZ_DURATION) * 100;

  const question = questions[currentStep];

  useEffect(() => {
    if (isResult) return undefined;

    const timer = window.setInterval(() => {
      const elapsedSeconds = Math.floor((Date.now() - timerStartedAt) / 1000);

      setSecondsLeft(Math.max(QUIZ_DURATION - elapsedSeconds, 0));
    }, 250);

    return () => window.clearInterval(timer);
  }, [isResult, timerStartedAt]);

  const recommendation = useMemo(() => {
    if (!isResult) return null;

    return getRecommendation(answers);
  }, [answers, isResult]);

  const sizeRecommendation = useMemo(() => {
    if (!isResult) return null;

    return getRecommendedSize(answers);
  }, [answers, isResult]);

  const selectAnswer = (value) => {
    const currentQuestion = questions[currentStep];

    setAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: value,
    }));

    setDirection(1);

    setTimeout(() => {
      setCurrentStep((prev) => prev + 1);
    }, 280);
  };

  const goBack = () => {
    if (currentStep === 0) return;

    setDirection(-1);
    setCurrentStep((prev) => prev - 1);
  };

  const restart = () => {
    setDirection(-1);
    setAnswers({});
    setCurrentStep(0);
    setSecondsLeft(QUIZ_DURATION);
    setTimerStartedAt(Date.now());
  };

  return (
    <main className="min-h-dvh bg-lightWhite text-ink">
      <div
        className="fixed inset-x-0 top-0 z-50 h-1 bg-ink/10"
        role="progressbar"
        aria-label={`${questionsLeft} questions left to answer`}
        aria-valuemin="0"
        aria-valuemax={questions.length}
        aria-valuenow={currentStep}
      >
        <motion.div
          className="h-full bg-deepRed"
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>

      <div className="mx-auto flex min-h-dvh max-w-300 flex-col px-6 py-8 sm:px-10 sm:py-10 lg:px-16">
        <header className="flex items-center justify-between">
          <Link
            to="/shop"
            className="header text-[8px] font-medium uppercase tracking-[0.3em] text-ink/45 transition-colors duration-500 hover:text-red"
          >
            Laali Hills
          </Link>

          {!isResult && (
            <div className="flex items-center gap-5">
              <div className="flex items-center gap-2.5">
                <motion.div
                  className="relative flex h-9 w-9 items-center justify-center rounded-full"
                  animate={{
                    background: `conic-gradient(var(--color-deepRed) ${timerProgress}%, color-mix(in srgb, var(--color-ink) 10%, transparent) 0)`,
                  }}
                  transition={{ duration: 0.25, ease: "linear" }}
                  aria-hidden="true"
                >
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-lightWhite text-[8px] font-medium tabular-nums text-ink">
                    {secondsLeft}
                  </span>
                </motion.div>

                <span className="hidden text-[7px] uppercase tracking-[0.25em] text-ink/35 sm:inline">
                  Seconds left
                </span>
              </div>

              <span className="text-[8px] uppercase tracking-[0.3em] text-ink/35">
                {String(currentStep + 1).padStart(2, "0")} / 07
              </span>
            </div>
          )}
        </header>

        <div className="flex flex-1 flex-col justify-center py-16 sm:py-20">
          <AnimatePresence mode="wait" custom={direction}>
            {!isResult ? (
              <motion.div
                key={question.id}
                custom={direction}
                initial={{ opacity: 0, x: direction * 35 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction * -35 }}
                transition={{
                  duration: 0.5,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="mx-auto w-full max-w-3xl"
              >
                {/* QUESTION */}
                <div className="mb-5 sm:mb-8">
                  <h1 className="header  mt-4  text-[clamp(2.5rem,6vw,3.5rem)]  leading-[0.88] tracking-[-0.01em] text-center">
                    {question.label}
                  </h1>

                  {question.description && (
                    <p className="mt-5 text-center text-[11px] leading-5 font-medium  text-stone sm:text-[14px] italic">
                      {question.description}
                    </p>
                  )}
                </div>

                {/* OPTIONS */}
                <div className="border-y border-ink/10">
                  {question.options.map((option, index) => {
                    const selected = answers[question.id] === option.value;

                    return (
                      <button
                        key={option.value}
                        type="button"
                        onClick={() => selectAnswer(option.value)}
                        className={`group flex w-full items-center justify-between border-b border-ink/10 py-5 text-left transition-all duration-300 last:border-b-0 sm:py-6 ${
                          selected
                            ? "text-red"
                            : "text-ink hover:px-2 hover:text-red hover:cursor-pointer"
                        }`}
                      >
                        <span className="flex min-w-0 items-center gap-5 sm:gap-6">
                          <span
                            className={`text-[7px] tracking-[0.2em] transition-colors ${
                              selected
                                ? "text-red/60"
                                : "text-ink/25 group-hover:text-red/50 "
                            }`}
                          >
                            {String(index + 1).padStart(2, "0")}
                          </span>

                          <span className="text-sm font-medium tracking-[-0.01em] sm:text-base">
                            {option.label}
                          </span>
                        </span>

                        <span
                          className={`ml-4 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                            selected
                              ? "border-red bg-red text-lightCream"
                              : "border-ink/15 text-ink/25 group-hover:border-red group-hover:text-red"
                          }`}
                        >
                          <ArrowRight
                            size={11}
                            strokeWidth={1.2}
                            className="transition-transform duration-300 group-hover:translate-x-0.5"
                          />
                        </span>
                      </button>
                    );
                  })}
                </div>
              </motion.div>
            ) : (
              /* RESULT */
              <motion.div
                key="result"
                initial={{ opacity: 0, y: 35 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="mx-auto w-full max-w-5xl"
              >
                {/* keep your existing result UI */}
              </motion.div>
            )}

            {/* PROGRESS */}
            <div className="my-8 md:my-16 flex items-center gap-4 ">
              <span className="shrink-0 text-[8px] font-medium tracking-[0.2em] text-ink/40">
                {String(currentStep + 1).padStart(2, "0")}
                <span className="mx-1.5">/</span>
                {String(questions.length).padStart(2, "0")}
              </span>

              <div className="h-px flex-1 overflow-hidden bg-ink/10">
                <motion.div
                  className="h-full bg-red"
                  animate={{
                    width: `${((currentStep + 1) / questions.length) * 100}%`,
                  }}
                  transition={{
                    duration: 0.6,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                />
              </div>
            </div>
          </AnimatePresence>
        </div>

        {!isResult && (
          <footer className="flex items-center justify-between border-t border-ink/10 pt-5">
            <button
              type="button"
              onClick={goBack}
              disabled={currentStep === 0}
              className="flex items-center gap-2 text-[7px] uppercase tracking-[0.3em] text-ink/40 transition-colors duration-500 hover:text-red disabled:pointer-events-none disabled:opacity-0"
            >
              <ArrowLeft size={11} strokeWidth={1} />
              Back
            </button>

            <span className="header text-[7px] uppercase tracking-[0.3em] text-ink">
              Find your match
            </span>
          </footer>
        )}
      </div>
    </main>
  );
};

export default HelpMeChoose;
