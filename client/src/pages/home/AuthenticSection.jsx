import laliStampLogo from "../../assets/logo/round.svg";
import farm from "../../assets/hills/farm.jpg";

const AuthenticSection = () => {
  return (
    <section className="relative overflow-hidden bg-hill">
      <div className="relative min-h-[720px] w-full overflow-hidden">
        {/* VIDEO */}
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="/videos/know-origin.mp4" type="video/mp4" />
        </video>

        {/* OVERALL VIDEO TREATMENT */}
        <div className="absolute inset-0 bg-ink/15" />

        {/* DARK GRADIENT FROM LEFT */}
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/75 via-45% to-transparent" />

        {/* SUBTLE BOTTOM DARKENING */}
        <div className="absolute inset-0 bg-gradient-to-t from-ink/65 via-transparent to-transparent" />

        {/* CONTENT */}
        <div className="relative z-10 flex min-h-[720px] items-end px-7 py-12 sm:px-12 sm:py-16 lg:px-16 lg:py-20 xl:px-20">
          <div className="w-full max-w-2xl">
            {/* TOP LABEL */}
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-8 bg-lightCream/50" />

              <span className="text-[7px] uppercase tracking-[0.4em] text-lightCream/65 sm:text-[8px]">
                The origin behind every cup
              </span>
            </div>

            {/* HEADING */}
            <h2 className="subheader text-[clamp(3.5rem,7vw,7rem)] uppercase leading-[0.8] tracking-[-0.06em] text-lightCream">
              Know
              <br />
              Your
              <br />
              <span className="text-red">Origin.</span>
            </h2>

            {/* DESCRIPTION */}
            <p className="mt-8 max-w-lg text-[11px] leading-5 tracking-wide text-lightCream/65 sm:text-[12px] sm:leading-6">
              Every Laali Hills collection begins where the mountains meet the
              morning mist. We preserve the character of each origin, bringing
              its story from the hills to you.
            </p>

            {/* ORIGIN DETAILS */}
            <div className="mt-10 grid max-w-lg grid-cols-2 border-t border-lightCream/15">
              <div className="border-r border-lightCream/15 py-5 pr-6">
                <span className="block text-[7px] uppercase tracking-[0.3em] text-stone">
                  Origin
                </span>

                <span className="mt-2 block text-sm tracking-wide text-lightCream">
                  Nepal
                </span>
              </div>

              <div className="py-5 pl-6">
                <span className="block text-[7px] uppercase tracking-[0.3em] text-stone">
                  Landscape
                </span>

                <span className="mt-2 block text-sm tracking-wide text-lightCream">
                  Himalayan Hills
                </span>
              </div>
            </div>

            {/* BOTTOM PROMISE */}
            <div className="mt-10 flex items-end justify-between border-t border-lightCream/15 pt-5 sm:mt-12">
              <div>
                <span className="block text-[7px] uppercase tracking-[0.35em] text-stone">
                  Our promise
                </span>

                <span className="mt-2 block text-[9px] uppercase tracking-[0.2em] text-lightCream/70 sm:text-[10px]">
                  Origin matters.
                </span>
              </div>

              <div className="relative flex h-20 w-20 shrink-0 items-center justify-center rounded-full border border-lightCream/40 bg-hill/80 p-3 backdrop-blur-sm sm:h-24 sm:w-24">
                <div className="absolute inset-2 rounded-full border border-dashed border-lightCream/20" />

                <img
                  src={laliStampLogo}
                  alt="Laali Hills"
                  className="relative z-10 h-full w-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        {/* VIDEO FRAME */}
        <div className="pointer-events-none absolute inset-5 border border-lightCream/15 sm:inset-8 lg:inset-10" />

        {/* LOCATION LABEL */}
        <div className="absolute bottom-8 right-8 z-10 hidden text-right sm:block lg:bottom-12 lg:right-12">
          <span className="block text-[7px] uppercase tracking-[0.4em] text-lightCream/50">
            Grown above the ordinary
          </span>

          <span className="mt-2 block text-[9px] uppercase tracking-[0.2em] text-lightCream/80">
            Nepal · Himalayan Origin
          </span>
        </div>
      </div>
    </section>
  );
};

export default AuthenticSection;
