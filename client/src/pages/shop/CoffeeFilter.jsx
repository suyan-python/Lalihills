import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import
{
    SlidersHorizontal,
    X,
    RotateCcw,
} from "lucide-react";


const processOptions = [
    {
        value: "anaerobic",
        label: "Anaerobic",
    },
    {
        value: "natural",
        label: "Natural",
    },
    {
        value: "dry-washed",
        label: "Dry Washed",
    },
    {
        value: "inoculated",
        label: "Inoculated",
    },
    {
        value: "washed",
        label: "Washed",
    },
];


const caffeineOptions = [
    {
        value: "decaf",
        label: "Decaf",
    },
    {
        value: "full",
        label: "Full",
    },
    {
        value: "partial",
        label: "Partial",
    },
];


const CoffeeFilters = ({
    filters,
    setFilters,
}) =>
{
    const [open, setOpen] = useState(false);


    const updateFilter = (key, value) =>
    {
        setFilters((prev) => ({
            ...prev,
            [key]: value,
        }));
    };


    const toggleProcess = (value) =>
    {
        setFilters((prev) =>
        {
            const exists = prev.process.includes(value);

            return {
                ...prev,
                process: exists
                    ? prev.process.filter((item) => item !== value)
                    : [...prev.process, value],
            };
        });
    };


    const resetFilters = () =>
    {
        setFilters({
            roastLevel: 5,
            caffeine: "all",
            profile: 1,
            process: [],
        });
    };


    return (
        <>
            {/* =================================================
                FILTER BUTTON
            ================================================= */}

            <button
                type="button"
                onClick={() => setOpen(true)}
                className="group flex items-center gap-3 border border-[#241817]/15 px-5 py-3 transition-all duration-300 hover:border-red hover:bg-[#241817] hover:text-[#F8EDE8] cursor-pointer"
            >

                <SlidersHorizontal
                    size={15}
                    strokeWidth={1.4}
                />

                <span className="text-[9px] font-medium uppercase tracking-[0.25em]">
                    Filter
                </span>

            </button>


            {/* =================================================
                OVERLAY
            ================================================= */}

            <AnimatePresence>

                {open && (
                    <>
                        {/* Background */}

                        <motion.div
                            initial={{
                                opacity: 0,
                            }}
                            animate={{
                                opacity: 1,
                            }}
                            exit={{
                                opacity: 0,
                            }}
                            onClick={() => setOpen(false)}
                            className="fixed inset-0 z-[200] bg-[#241817]/50 backdrop-blur-sm"
                        />


                        {/* =================================================
                            FILTER PANEL
                        ================================================= */}

                        <motion.aside
                            initial={{
                                x: "100%",
                            }}
                            animate={{
                                x: 0,
                            }}
                            exit={{
                                x: "100%",
                            }}
                            transition={{
                                duration: 0.5,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            className="fixed right-0 top-0 z-[210] flex h-screen w-full max-w-[520px] flex-col bg-[#F8EDE8]"
                        >

                            {/* Header */}

                            <div className="flex items-center justify-between border-b border-[#241817]/10 px-7 py-6 sm:px-10">

                                <div>

                                    <p className="text-[8px] uppercase tracking-[0.3em] text-[#8B625D]">
                                        Refine selection
                                    </p>

                                    <h2 className="mt-2 font-title text-3xl tracking-[-0.04em] text-[#241817]">
                                        Coffee Filters
                                    </h2>

                                </div>


                                <button
                                    onClick={() => setOpen(false)}
                                    className="flex h-10 w-10 items-center justify-center rounded-full border border-[#241817]/10 transition hover:bg-[#241817] hover:text-[#F8EDE8] cursor-pointer"
                                >

                                    <X
                                        size={17}
                                        strokeWidth={1.3}
                                    />

                                </button>

                            </div>


                            {/* Filter content */}

                            <div className="flex-1 overflow-y-auto px-7 py-10 sm:px-10">

                                {/* =================================================
                                    ROAST LEVEL
                                ================================================= */}

                                <div>

                                    <div className="flex items-center justify-between">

                                        <div>

                                            <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#8B625D]">
                                                Roast Level
                                            </p>

                                            <p className="mt-2 font-subtitle text-lg italic text-[#241817]">
                                                Darker to Light
                                            </p>

                                        </div>

                                    </div>


                                    <div className="mt-8">

                                        <input
                                            type="range"
                                            min="1"
                                            max="5"
                                            step="1"
                                            value={filters.roastLevel}
                                            onChange={(e) =>
                                                updateFilter(
                                                    "roastLevel",
                                                    Number(e.target.value)
                                                )
                                            }
                                            className="w-full accent-red"
                                        />


                                        <div className="mt-4 flex justify-between text-[8px] uppercase tracking-[0.2em] text-[#9A7B75]">

                                            <span>
                                                Dark
                                            </span>

                                            <span>
                                                Medium
                                            </span>

                                            <span>
                                                Light
                                            </span>

                                        </div>

                                    </div>

                                </div>


                                {/* =================================================
                                    CAFFEINE
                                ================================================= */}

                                <div className="mt-12 border-t border-[#241817]/10 pt-10">

                                    <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#8B625D]">
                                        Caffeine
                                    </p>


                                    <div className="mt-6 grid grid-cols-3 gap-2">

                                        {caffeineOptions.map((option) =>
                                        {
                                            const active =
                                                filters.caffeine === option.value;

                                            return (
                                                <button
                                                    key={option.value}
                                                    type="button"
                                                    onClick={() =>
                                                        updateFilter(
                                                            "caffeine",
                                                            active
                                                                ? "all"
                                                                : option.value
                                                        )
                                                    }
                                                    className={`
                                                        border px-3 py-4 text-[9px] uppercase tracking-[0.15em]
                                                        transition-all duration-300
                                                        ${active
                                                            ? "border-red bg-red text-[#F8EDE8]"
                                                            : "border-[#241817]/10 text-[#66504B] hover:border-red"
                                                        }
                                                    `}
                                                >
                                                    {option.label}
                                                </button>
                                            );
                                        })}

                                    </div>

                                </div>


                                {/* =================================================
                                    PROFILE
                                ================================================= */}

                                <div className="mt-12 border-t border-[#241817]/10 pt-10">

                                    <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#8B625D]">
                                        Profile
                                    </p>

                                    <p className="mt-2 font-subtitle text-lg italic text-[#241817]">
                                        Traditional to Modern
                                    </p>


                                    <div className="mt-8">

                                        <input
                                            type="range"
                                            min="1"
                                            max="5"
                                            step="1"
                                            value={filters.profile}
                                            onChange={(e) =>
                                                updateFilter(
                                                    "profile",
                                                    Number(e.target.value)
                                                )
                                            }
                                            className="w-full accent-red"
                                        />


                                        <div className="mt-4 flex justify-between text-[8px] uppercase tracking-[0.2em] text-[#9A7B75]">

                                            <span>
                                                Traditional
                                            </span>

                                            <span>
                                                Modern
                                            </span>

                                        </div>

                                    </div>

                                </div>


                                {/* =================================================
                                    PROCESS
                                ================================================= */}

                                <div className="mt-12 border-t border-[#241817]/10 pt-10">

                                    <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#8B625D]">
                                        Process
                                    </p>


                                    <div className="mt-6 flex flex-wrap gap-2">

                                        {processOptions.map((option) =>
                                        {
                                            const active =
                                                filters.process.includes(
                                                    option.value
                                                );

                                            return (
                                                <button
                                                    key={option.value}
                                                    type="button"
                                                    onClick={() =>
                                                        toggleProcess(
                                                            option.value
                                                        )
                                                    }
                                                    className={`
                                                        border px-4 py-3 text-[8px] uppercase tracking-[0.15em]
                                                        transition-all duration-300
                                                        ${active
                                                            ? "border-red bg-red text-[#F8EDE8]"
                                                            : "border-[#241817]/10 text-[#66504B] hover:border-red"
                                                        }
                                                    `}
                                                >
                                                    {option.label}
                                                </button>
                                            );
                                        })}

                                    </div>

                                </div>

                            </div>


                            {/* =================================================
                                FOOTER
                            ================================================= */}

                            <div className="border-t border-[#241817]/10 bg-[#F3E5DF] px-7 py-5 sm:px-10">

                                <div className="flex items-center gap-3">

                                    <button
                                        type="button"
                                        onClick={resetFilters}
                                        className="flex items-center gap-2 px-4 py-4 text-[8px] uppercase tracking-[0.2em] text-[#8B625D]"
                                    >

                                        <RotateCcw
                                            size={12}
                                            strokeWidth={1.3}
                                        />

                                        Reset

                                    </button>


                                    <button
                                        type="button"
                                        onClick={() => setOpen(false)}
                                        className="flex-1 bg-[#241817] px-5 py-4 text-[9px] uppercase tracking-[0.25em] text-[#F8EDE8] transition hover:bg-red"
                                    >
                                        Apply Filters
                                    </button>

                                </div>

                            </div>

                        </motion.aside>
                    </>
                )}

            </AnimatePresence>
        </>
    );
};


export default CoffeeFilters;