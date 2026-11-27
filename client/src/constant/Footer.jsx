import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";
import logo from "../assets/logo/logo6.svg";
import logo2 from "../assets/logo/logo7.svg";
import logo3 from "../assets/logo/logo8.svg";

const Footer = () => {
  return (
    <footer className="z-0 overflow-hidden bg-[#1D1625] ">
      <section className="relative overflow-hidden border-t border-[#51415F]/50">
        {/* ATMOSPHERIC BACKGROUND */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -right-40 -top-48 h-[500px] w-[500px] rounded-full bg-[#795A9C]/10 blur-[130px]" />
          <div className="absolute -bottom-60 -left-40 h-[450px] w-[450px] rounded-full bg-[#8C6BAA]/10 blur-[120px]" />

          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(121,90,156,0.06),transparent_65%)]" />
        </div>

        <div className="relative z-10 mx-auto max-w-[1500px] px-6 pb-7 pt-16 sm:px-10 sm:pt-20 lg:px-14 lg:pt-24">
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-x-10 lg:gap-y-16">
            {/* BRAND */}
            <div className="space-y-6 lg:col-span-4">
              <div className="flex items-center">
                <img
                  src={logo}
                  alt="Laali Hills"
                  className="w-[180px] object-contain sm:w-[220px] lg:w-[250px]"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              <p className="max-w-sm font-subtitle text-xl italic leading-relaxed text-lightCream">
                From the hills of Nepal, into your everyday ritual.
              </p>

              <div className="flex items-center gap-3">
                <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-[#987BB2]">
                  Nepal · Origin · Craft
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
            <div className="flex items-center justify-center text-center lg:col-span-12">
              <div className="w-full max-w-2xl border-y border-[#51415F]/50 py-12 sm:py-16">
                <span className="mb-4 block text-[9px] font-semibold uppercase tracking-[0.35em] text-[#B99AD8]">
                  A little note from the hills
                </span>

                <h3 className="header text-3xl leading-tight tracking-[-0.04em] text-[#F2EAF8] sm:text-4xl lg:text-5xl">
                  Stay close to the hills.
                </h3>

                <p className="mx-auto mt-4 max-w-md text-[12px] leading-relaxed text-[#B9A9C7] sm:text-[13px]">
                  Stories, little discoveries, new arrivals and everything
                  happening at Laali Hills. Straight to your inbox.
                </p>

                {/* FORM */}
                <form
                  onSubmit={(e) => e.preventDefault()}
                  className="mx-auto mt-7 max-w-lg"
                >
                  <div className="flex items-center rounded-full border border-[#51415F] bg-[#241B2D] p-1.5 transition-all duration-300 focus-within:border-[#B99AD8] focus-within:shadow-[0_0_25px_rgba(185,154,216,0.08)]">
                    <input
                      type="email"
                      placeholder="Your email address"
                      aria-label="Email address"
                      required
                      className="min-w-0 flex-1 bg-transparent px-4 py-3 text-[11px] text-[#F2EAF8] outline-none placeholder:text-[#766A80] sm:px-5 sm:text-[12px]"
                    />

                    <button
                      type="submit"
                      aria-label="Subscribe to newsletter"
                      className="group flex h-10 shrink-0 cursor-pointer items-center gap-2 rounded-full bg-[#B99AD8] px-5 text-[8px] font-bold uppercase tracking-[0.16em] text-[#241B2D] transition-all duration-300 hover:bg-[#C9AFE2] active:scale-[0.97] sm:px-6 sm:text-[9px]"
                    >
                      <span>Join us</span>

                      <ArrowUpRight
                        size={13}
                        strokeWidth={1.8}
                        className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          {/* CONTACT INFORMATION */}
          <div className="grid gap-8 border-b border-[#51415F]/50 py-8 sm:grid-cols-3">
            {/* LOCATION */}
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#51415F] bg-[#30243A]">
                <MapPin
                  size={15}
                  strokeWidth={1.5}
                  className="text-[#B99AD8]"
                />
              </div>

              <div>
                <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[#766A80]">
                  Based in
                </p>

                <p className="mt-1 text-[13px] text-[#B9A9C7]">
                  Kathmandu, Nepal
                </p>
              </div>
            </div>

            {/* EMAIL */}
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#51415F] bg-[#30243A]">
                <Mail size={15} strokeWidth={1.5} className="text-[#B99AD8]" />
              </div>

              <div>
                <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[#766A80]">
                  Email
                </p>

                <a
                  href="mailto:hello@laalihills.com"
                  className="mt-1 block text-[13px] text-[#B9A9C7] transition-colors hover:text-[#F2EAF8]"
                >
                  hello@laalihills.com
                </a>
              </div>
            </div>

            {/* PHONE */}
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#51415F] bg-[#30243A]">
                <Phone size={15} strokeWidth={1.5} className="text-[#B99AD8]" />
              </div>

              <div>
                <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[#766A80]">
                  Talk to us
                </p>

                <a
                  href="tel:+9770000000000"
                  className="mt-1 block text-[13px] text-[#B9A9C7] transition-colors hover:text-[#F2EAF8]"
                >
                  +977 00 000 0000
                </a>
              </div>
            </div>
          </div>

          {/* BOTTOM FOOTER */}
          <div className="flex flex-col gap-7 pt-7 sm:flex-row sm:items-center sm:justify-between">
            {/* COPYRIGHT */}
            <p className="text-[8px] uppercase tracking-[0.18em] text-[#766A80]">
              © {new Date().getFullYear()} Laali Hills. All rights reserved.
            </p>

            {/* LEGAL */}
            <div className="flex flex-wrap gap-x-5 gap-y-3">
              <LegalLink href="/terms">Terms & Conditions</LegalLink>
              <LegalLink href="/privacy">Privacy Policy</LegalLink>
              <LegalLink href="/returns">Return Policy</LegalLink>
            </div>

            {/* SOCIAL */}
            <div className="flex items-center gap-2">
              <SocialIcon href="#" label="Facebook">
                <FaFacebookF />
              </SocialIcon>

              <SocialIcon href="#" label="Instagram">
                <FaInstagram />
              </SocialIcon>

              <SocialIcon href="#" label="TikTok">
                <FaTiktok />
              </SocialIcon>
            </div>
          </div>

          {/* BRAND SIGNATURE */}
          <div className="pointer-events-none select-none pt-12 sm:pt-16">
            <img src={logo3} alt="" srcset="" />
          </div>
        </div>
      </section>
    </footer>
  );
};

/* FOOTER HEADING */
const FooterHeading = ({ children }) => {
  return (
    <h3 className="mb-6 text-[10px] font-bold uppercase tracking-[0.28em] text-[#B99AD8]">
      {children}
    </h3>
  );
};

/* FOOTER LINKS */
const FooterLink = ({ href, children }) => {
  return (
    <a
      href={href}
      className="group mb-3 flex w-fit items-center gap-2 text-[15px] text-[#B9A9C7] transition-colors duration-300 hover:text-[#F2EAF8]"
    >
      <span className="h-px w-0 bg-[#B99AD8] transition-all duration-300 group-hover:w-3" />
      {children}
    </a>
  );
};

/* LEGAL LINKS */
const LegalLink = ({ href, children }) => {
  return (
    <a
      href={href}
      className="text-[8px] font-medium uppercase tracking-[0.16em] text-[#766A80] transition-colors duration-300 hover:text-[#B99AD8]"
    >
      {children}
    </a>
  );
};

/* SOCIAL ICONS */
const SocialIcon = ({ href, label, children }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex h-9 w-9 items-center justify-center rounded-full border border-[#51415F] bg-[#241B2D] text-[#B9A9C7] transition-all duration-300 hover:-translate-y-1 hover:border-[#B99AD8]/60 hover:bg-[#30243A] hover:text-[#C9AFE2]"
    >
      <span className="text-[13px]">{children}</span>
    </a>
  );
};

export default Footer;
