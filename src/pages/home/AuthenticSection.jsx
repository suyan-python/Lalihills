import laliStampLogo from "../../assets/logo/round.svg";
import farm from "../../assets/hills/farm.jpg"

const AuthenticSection = () =>
{
    return (
        <section className="relative overflow-hidden py-14 sm:py-16 lg:py-20 ">
            <div className="mx-auto grid max-w-[1600px] grid-cols-1 lg:grid-cols-[0.85fr_1.15fr]">
                {/* ================= LEFT ================= */}
                <div className="relative flex min-h-[600px] flex-col justify-between bg-hill px-7 py-12 sm:px-12 sm:py-16 lg:min-h-[720px] lg:px-16 lg:py-20 xl:px-20">
                    {/* Main content */}
                    <div className="relative z-10">
                        <h2 className="subheader text-[clamp(3.2rem,6vw,5.8rem)] leading-[0.84] tracking-[-0.055em] uppercase text-[#F1EADB]">
                            Know
                            <br />
                            Your
                            <span className="text-[#A62A34]">Origin.</span>
                        </h2>

                        <p className="mt-8 max-w-md text-[12px] leading-6 text-[#F1EADB]/65 sm:text-[13px] sm:leading-7">
                            Every Laali Hills collection begins where the mountains meet the morning mist. We
                            preserve the character of each origin, bringing its story from the hills to you.
                        </p>

                        {/* Origin details */}
                        <div className="mt-10 grid max-w-lg grid-cols-2 border-t border-[#F1EADB]/15">
                            <div className="border-r border-[#F1EADB]/15 py-5 pr-5">
                                <span className="block text-[7px] uppercase tracking-[0.3em] text-[#A99B82]">
                                    Origin
                                </span>
                                <span className="mt-2 block text-sm tracking-wide text-[#F1EADB]">Nepal</span>
                            </div>

                            <div className="py-5 pl-5">
                                <span className="block text-[7px] uppercase tracking-[0.3em] text-[#A99B82]">
                                    Altitude
                                </span>
                                <span className="mt-2 block text-sm tracking-wide text-[#F1EADB]">
                                    Himalayan Hills
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Bottom statement */}
                    <div className="
    relative
    mt-12
    flex
    w-full
    items-end
    justify-between
    border-t
    border-[#F1EADB]/15
    pt-16
">

                        <div>
                            <span className="
            block
            text-[7px]
            uppercase
            tracking-[0.35em]
            text-[#A99B82]
        ">
                                Our promise
                            </span>

                            <span className="
            mt-2
            block
            text-[10px]
            uppercase
            tracking-[0.18em]
            text-[#F1EADB]/70
        ">
                                Origin matters.
                            </span>
                        </div>


                        <div className="
        relative
        -mb-10
        flex
        h-24
        w-24
        shrink-0
        items-center
        justify-center
        rounded-full
        border
        border-[#F1EADB]/50
        bg-[#2C3A2E]
        p-3
    ">
                            <div className="
            absolute
            inset-2
            rounded-full
            border
            border-dashed
            border-[#F1EADB]/20 "
                            />

                            <img
                                src={laliStampLogo}
                                alt="Laali Hills"
                                className="
                            relative
                            z-10
                            h-full
                            w-full
                            object-contain 
                            "
                            />
                        </div>

                    </div>

                    {/* Decorative red glow */}
                    <div className="pointer-events-none absolute -bottom-32 -left-32 h-72 w-72 rounded-full bg-hill/20 blur-[100px]" />
                </div>

                {/* ================= RIGHT ================= */}
                <div className="relative min-h-[500px] overflow-hidden bg-[#6A4A2C] lg:min-h-[720px]">
                    <img
                        src={farm}
                        alt="Nepalese hills"
                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1800ms] hover:scale-[1.035]"
                    />

                    {/* Image treatment */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-[#211C16]/65 via-[#211C16]/10 to-[#8F3038]/10" />

                    {/* Image border */}
                    <div className="absolute inset-5 border border-[#F1EADB]/20 sm:inset-8 lg:inset-10" />

                    {/* Image label */}
                    <div className="absolute bottom-8 left-8 right-8 flex items-end justify-between sm:bottom-12 sm:left-12 sm:right-12">
                        <div>
                            <span className="block text-[7px] uppercase tracking-[0.4em] text-[#F1EADB]/60">
                                Grown above the ordinary
                            </span>
                            <span className="mt-2 block text-[11px] uppercase tracking-[0.2em] text-[#F1EADB]">
                                Nepal · Himalayan Origin
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AuthenticSection;