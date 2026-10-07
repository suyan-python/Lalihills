import { motion } from "framer-motion";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="sticky bottom-0 z-0 overflow-hidden bg-ink text-lightCream">
      <section className="relative overflow-hidden border-t border-white/[0.08] ">
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden select-none "></div>

        <div className="relative z-10 mx-auto max-w-[1500px] px-6 pb-7 pt-16 sm:px-10 sm:pt-20 lg:px-14 lg:pt-24">
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-x-10 lg:gap-y-16">
            {/* BRAND */}
            <div className="space-y-5 lg:col-span-4">
              <div className="flex items-center">
                <img
                  src="/gold.svg"
                  alt="Laali Hills"
                  className="w-[180px] object-contain sm:w-[220px] lg:w-[260px]"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              <p className="max-w-sm font-subtitle text-xl italic leading-relaxed text-[#BFA29B]">
                From the hills of Nepal, into your everyday ritual.
              </p>

              <div className="flex items-center gap-3">
                <span className="text-[12px] uppercase tracking-[0.3em] text-[#80635E]">
                  Nepal • Origin • Craft
                </span>
              </div>
            </div>

            {/* NAVIGATION */}
            <div className="grid grid-cols-2 gap-x-8 gap-y-12 sm:grid-cols-3 lg:col-span-8 lg:grid-cols-3 lg:gap-10">
              {/* SHOP */}
              <div>
                <FooterHeading>Shop</FooterHeading>

                <FooterLink href="/shop/coffee">Coffee</FooterLink>
                <FooterLink href="/shop/tea">Tea</FooterLink>
                <FooterLink href="/shop/gifts">Gifts</FooterLink>
                <FooterLink href="/shop/accessories">Accessories</FooterLink>
                <FooterLink href="/bulk-order">Bulk Order</FooterLink>
              </div>

              {/* EXPLORE */}
              <div>
                <FooterHeading>Explore</FooterHeading>

                <FooterLink href="/about">About Us</FooterLink>
                <FooterLink href="/explore/process">Our Process</FooterLink>
                <FooterLink href="/explore/origins">Origins</FooterLink>
                <FooterLink href="/explore/farmers">Farmers</FooterLink>
                <FooterLink href="/explore/nepal-coffee">
                  Nepal Coffee
                </FooterLink>
                <FooterLink href="/stories">Stories</FooterLink>
              </div>

              {/* SUPPORT */}
              <div>
                <FooterHeading>Support</FooterHeading>

                <FooterLink href="/contact">Contact</FooterLink>
                <FooterLink href="/shipping">Shipping</FooterLink>
                <FooterLink href="/faq">FAQ</FooterLink>
                <FooterLink href="/returns">Returns</FooterLink>
                <FooterLink href="/privacy">Privacy</FooterLink>
              </div>
            </div>

            {/* NEWSLETTER */}
            <div className="  lg:col-span-12  text-center flex items-center justify-center">
              <div className="max-w-2xl">
                {/* HEADING */}
                <h3 className="header mt-3 text-3xl leading-[0.9] tracking-[-0.035em] text-[#D9828A] sm:text-4xl">
                  Subscribe to Newsletters.
                </h3>

                {/* FORM */}
                <form
                  onSubmit={(e) => e.preventDefault()}
                  className="mt-7 max-w-xl"
                >
                  <div className="flex items-center rounded-full border border-lightCream/15 bg-lightCream/[0.04] p-1 transition-colors duration-300 focus-within:border-lightCream/30">
                    <input
                      type="email"
                      placeholder="Your email address"
                      aria-label="Email address"
                      required
                      className="min-w-0 flex-1 bg-transparent px-4 py-3 text-[10px] font-light text-lightCream outline-none placeholder:text-lightCream/30 sm:px-5 sm:text-[11px]"
                    />

                    <button
                      type="submit"
                      aria-label="Subscribe to newsletter"
                      className="group flex h-9 shrink-0 items-center gap-2 rounded-full bg-cream px-4 text-[7px] font-semibold uppercase tracking-[0.16em] text-ink transition-all duration-300  active:scale-[0.97] sm:h-10 sm:px-5 sm:text-[8px] cursor-pointer"
                    >
                      <span>Join</span>

                      <ArrowUpRight
                        size={12}
                        strokeWidth={1.5}
                        className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div className="mt-16 grid gap-5 border-y border-[#E9C9C1]/10 py-6 sm:grid-cols-3 lg:mt-20">
            <div className="flex items-center gap-3">
              <MapPin size={15} strokeWidth={1} className="text-[#D9828A]" />

              <div>
                <p className="text-[10px] uppercase tracking-[0.25em] text-[#72534E]">
                  Based in
                </p>

                <p className="mt-1 text-[14px] text-[#BFA29B]">
                  Kathmandu, Nepal
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Mail size={15} strokeWidth={1} className="text-[#D9828A]" />

              <div>
                <p className="text-[10px] uppercase tracking-[0.25em] text-[#72534E]">
                  Email
                </p>

                <a
                  href="mailto:hello@laalihills.com"
                  className="mt-1 block text-[14px] text-[#BFA29B] transition-colors hover:text-white"
                >
                  hello@laalihills.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Phone size={15} strokeWidth={1} className="text-[#D9828A]" />

              <div>
                <p className="text-[10px] uppercase tracking-[0.25em] text-[#72534E]">
                  Talk to us
                </p>

                <a
                  href="tel:+9770000000000"
                  className="mt-1 block text-[14px] text-[#BFA29B] transition-colors hover:text-white"
                >
                  +977 00 000 0000
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-7 pt-7 sm:flex-row sm:items-center sm:justify-between">
            {/* Copyright */}

            <p className="text-[8px] uppercase tracking-[0.2em] text-[#674A45]">
              © {new Date().getFullYear()} Laali Hills. All rights reserved.
            </p>

            {/* LEGAL */}

            <div className="flex flex-wrap gap-x-5 gap-y-2">
              <a
                href="/terms"
                className="text-[8px] uppercase tracking-[0.18em] text-[#80635E] transition-colors hover:text-[#D9828A]"
              >
                Terms & Conditions
              </a>

              <a
                href="/privacy"
                className="text-[8px] uppercase tracking-[0.18em] text-[#80635E] transition-colors hover:text-[#D9828A]"
              >
                Privacy Policy
              </a>

              <a
                href="/returns"
                className="text-[8px] uppercase tracking-[0.18em] text-[#80635E] transition-colors hover:text-[#D9828A]"
              >
                Return Policy
              </a>
            </div>

            {/* SOCIAL */}

            <div className="flex items-center gap-2">
              <SocialIcon href="#" label="Facebook">
                <FaFacebookF size={14} strokeWidth={1.5} />
              </SocialIcon>

              <SocialIcon href="#" label="Instagram">
                <FaInstagram size={14} strokeWidth={1.5} />
              </SocialIcon>

              <SocialIcon href="#" label="TikTok">
                <FaTiktok size={14} strokeWidth={1.5} />
              </SocialIcon>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};

const FooterHeading = ({ children }) => {
  return (
    <h3 className="mb-5 text-[10px] font-semibold uppercase tracking-[0.3em] text-[#D9828A]">
      {children}
    </h3>
  );
};

const FooterLink = ({ href, children }) => {
  return (
    <a
      href={href}
      className="group mb-3 flex w-fit items-center gap-2 text-[18px] text-[#A98A83] transition-colors duration-300 hover:text-lightCream"
    >
      <span className="h-px w-0 bg-[#D9828A] transition-all duration-300 group-hover:w-3" />

      {children}
    </a>
  );
};

const SocialIcon = ({ href, label, children }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="
                flex h-8 w-8
                items-center justify-center
                rounded-full
                border border-[#E9C9C1]/10
                text-[#A98A83]
                transition-all duration-300
                hover:border-[#D9828A]/50
                hover:bg-[#D9828A]/10
                hover:text-[#D9828A]
            "
    >
      <span className="text-[13px]">{children}</span>
    </a>
  );
};

export default Footer;
