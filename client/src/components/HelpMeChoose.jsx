import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, RotateCcw } from "lucide-react";
import { Link } from "react-router-dom";
import { coffeeProducts } from "../data/products";

const questions = [
  {
    id: "flavor",
    number: "01",
    label: "What sounds best right now?",
    options: [
      { value: "chocolatey", label: "Chocolatey and smooth" },
      { value: "fruity", label: "Bright and fruity" },
      { value: "balanced", label: "Balanced and easy" },
      { value: "bold", label: "Bold and dark" },
    ],
  },
  {
    id: "brew",
    number: "02",
    label: "How do you usually make coffee?",
    options: [
      { value: "drip", label: "Drip machine" },
      { value: "pour-over", label: "Pour over" },
      { value: "espresso", label: "Espresso" },
      { value: "french-press", label: "French press" },
      { value: "cold-brew", label: "Cold brew" },
      { value: "mix", label: "I mix it up" },
    ],
  },
  {
    id: "caffeine",
    number: "03",
    label: "How do you feel about caffeine?",
    options: [
      { value: "natural", label: "Natural caffeine level" },
      { value: "partial", label: "Partially caffeinated" },
      { value: "decaf", label: "I don't want caffeine" },
      { value: "depends", label: "Depends on the time of day" },
    ],
  },
  {
    id: "consistency",
    number: "04",
    label: "Do you want consistency or surprise?",
    options: [
      { value: "consistent", label: "Keep it consistent" },
      { value: "surprise", label: "Surprise me" },
    ],
  },
  {
    id: "cups",
    number: "05",
    label: "How many coffees do you drink per day?",
    options: [
      { value: "one", label: "One cup a day" },
      { value: "two", label: "Two cups a day" },
      { value: "three-four", label: "Three–four cups a day" },
      { value: "five", label: "Five or more cups per day" },
    ],
  },
  {
    id: "drinkers",
    number: "06",
    label: "Are you the only one drinking it?",
    options: [
      { value: "one", label: "Just me" },
      { value: "two", label: "2 people" },
      { value: "three", label: "3 or more people" },
    ],
  },
  {
    id: "frequency",
    number: "07",
    label: "How often would you like your coffee?",
    options: [
      { value: "weekly", label: "Every week" },
      { value: "two-weeks", label: "Every 2 weeks" },
      { value: "four-weeks", label: "Every 4 weeks" },
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

        <div className="flex flex-1 flex-col justify-center py-16">
          <AnimatePresence mode="wait" custom={direction}>
            {!isResult ? (
              <motion.div
                key={question.id}
                custom={direction}
                initial={{ opacity: 0, x: direction * 45 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction * -45 }}
                transition={{
                  duration: 0.55,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="mx-auto w-full max-w-7xl bg-"
              >
                <div className="mb-2 flex items-center gap-4">
                  <div className="h-0.5 w-full overflow-hidden bg-ink/10 sm:w-40">
                    <motion.div
                      className="h-full bg-deepRed w-full"
                      animate={{
                        width: `${
                          ((currentStep + 1) / questions.length) * 100
                        }%`,
                      }}
                      transition={{
                        duration: 0.6,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    />
                  </div>
                </div>

                <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
                  <div>
                    <p className="text-[9px] font-medium uppercase tracking-[0.35em] text-red">
                      {question.number}
                    </p>

                    <h1 className="subheader mt-5 text-[clamp(3rem,6vw,6rem)] uppercase leading-[0.82] tracking-[-0.065em] font-bold">
                      {question.label}
                    </h1>
                  </div>

                  <div className="flex flex-col justify-center">
                    <div className="divide-y divide-ink/10 border-y border-ink/10">
                      {question.options.map((option, index) => {
                        const selected = answers[question.id] === option.value;

                        return (
                          <button
                            key={option.value}
                            type="button"
                            onClick={() => selectAnswer(option.value)}
                            className={`group flex w-full items-center justify-between border-b py-4 text-left transition-colors duration-150 sm:py-5 ${
                              selected
                                ? "border-red text-red"
                                : "border-ink/10 text-ink hover:border-ink/30 hover:text-red"
                            }`}
                          >
                            <span className="flex items-center gap-4">
                              <span
                                className={`text-[7px] tracking-[0.2em] transition-colors duration-150 ${
                                  selected ? "text-red/60" : "text-ink/25"
                                }`}
                              >
                                {String(index + 1).padStart(2, "0")}
                              </span>

                              <span className="text-xs font-medium tracking-[-0.01em] sm:text-sm lg:text-base">
                                {option.label}
                              </span>
                            </span>

                            <span
                              className={`flex h-6 w-6 items-center justify-center border transition-all duration-150 ${
                                selected
                                  ? "border-red bg-red text-lightCream"
                                  : "border-ink/15 text-ink/30 group-hover:border-red group-hover:text-red"
                              }`}
                            >
                              <ArrowRight size={11} strokeWidth={1.2} />
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </motion.div>
            ) : (
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
                <div className="mb-5 text-center">
                  <h1 className="header mt-7 text-[clamp(3.5rem,7vw,7rem)] uppercase leading-[0.8] tracking-[-0.065em]">
                    We found
                    <br />
                    <span className="italic text-red">your coffee.</span>
                  </h1>

                  <p className="mx-auto mt-7 max-w-md text-[10px] leading-6 text-ink/75 sm:text-xs italic">
                    Based on your answers, we think this one belongs in your
                    daily ritual.
                  </p>
                </div>

                {recommendation && (
                  <div className="grid overflow-hidden border border-ink/10 lg:grid-cols-2 rounded-4xl">
                    <div className="relative aspect-square overflow-hidden bg-cream lg:aspect-auto lg:min-h-125">
                      <motion.img
                        initial={{ scale: 1.06 }}
                        animate={{ scale: 1 }}
                        transition={{
                          duration: 1.2,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        src={recommendation.image}
                        alt={recommendation.name}
                        className="h-full w-full object-cover"
                      />
                    </div>

                    <div className="flex flex-col justify-between bg-lightCream p-8 sm:p-10 lg:p-14">
                      <div>
                        <span className="text-[7px] font-medium uppercase tracking-[0.3em] text-ink/50">
                          Laali Hills · Selected for you
                        </span>

                        <h2 className="header mt-5 text-[clamp(2.5rem,4vw,4.5rem)] uppercase leading-[0.85] tracking-[-0.055em]">
                          {recommendation.name}
                        </h2>
                        {recommendation.flavors?.length > 0 && (
                          <div className="mt-8">
                            <p className="text-[7px] uppercase tracking-[0.3em] text-ink/55">
                              Flavour profile
                            </p>

                            <p className="mt-2 text-xs leading-6 text-ink/75">
                              {recommendation.flavors.join(" · ")}
                            </p>
                          </div>
                        )}
                        <div className="mt-8 border-t border-ink/10 pt-6">
                          <p className="text-[7px] uppercase tracking-[0.3em] text-ink/55">
                            Your coffee rhythm
                          </p>

                          <p className="mt-2 text-xs leading-6 text-ink/75">
                            {sizeRecommendation?.recommendation}
                          </p>
                        </div>
                      </div>

                      <div className="mt-12">
                        <Link
                          to={`/shop/coffee/${recommendation.slug}`}
                          className="group flex h-13 w-full items-center justify-between bg-ink px-5 text-lightCream rounded-4xl transition-colors duration-500 hover:bg-red sm:px-6"
                        >
                          <span className="text-[8px] font-medium uppercase tracking-[0.3em]">
                            Get this coffee
                          </span>

                          <span className="flex h-7 w-7 items-center justify-center rounded-full border border-lightCream/25 transition-all duration-500 group-hover:translate-x-1 group-hover:border-lightCream/50">
                            <ArrowRight size={13} strokeWidth={1.1} />
                          </span>
                        </Link>

                        <button
                          type="button"
                          onClick={restart}
                          className="mx-auto mt-6 flex items-center gap-2 text-[7px] uppercase tracking-[0.3em] text-ink/40 transition-colors duration-500 hover:text-red cursor-pointer"
                        >
                          <RotateCcw size={11} strokeWidth={1} />
                          Start over
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            )}
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
