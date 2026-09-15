import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Button = ({
  children,
  to,
  href,
  onClick,
  type = "button",
  variant = "primary",
  size = "md",
  icon = true,
  iconDirection = "right",
  disabled = false,
  className = "",
  ariaLabel,
}) => {
  const variants = {
    primary: "bg-red text-lightCream hover:bg-deepRed",
    dark: "bg-ink text-lightCream hover:bg-hill",
    light: "bg-ivory text-hill hover:bg-lightWhite",
    outline:
      "border border-ink/20 bg-transparent text-ink hover:bg-ink hover:text-lightCream",
    green: "bg-hill text-lightCream hover:bg-ink",
    subtle: "bg-ink/5 text-ink hover:bg-ink/10",
  };

  const sizes = {
    sm: "h-10 px-5 text-[8px] gap-2",
    md: "h-12 px-6 text-[9px] gap-3 md:px-7 md:text-[10px]",
    lg: "h-14 px-7 text-[10px] gap-3 md:px-8 md:text-[11px]",
  };

  const content = (
    <>
      <span>{children}</span>

      {icon && (
        <ArrowRight
          className={`h-4 w-4 shrink-0 transition-transform duration-300 ${
            iconDirection === "left"
              ? "order-first group-hover:-translate-x-1"
              : "group-hover:translate-x-1"
          }`}
        />
      )}
    </>
  );

  const classes = `group inline-flex items-center justify-center rounded-full font-semibold uppercase tracking-[0.2em] transition-all duration-300 hover:shadow-lg active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50 ${variants[variant]} ${sizes[size]} ${className}`;

  if (to) {
    return (
      <Link
        to={to}
        className={classes}
        aria-label={ariaLabel}
        aria-disabled={disabled}
      >
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        aria-label={ariaLabel}
        aria-disabled={disabled}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
      aria-label={ariaLabel}
    >
      {content}
    </button>
  );
};

export default Button;
