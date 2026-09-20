import { useEffect, useRef, useState } from "react";

// Minimal in-view flag for CSS-driven reveals (see .reveal-wipe in
// effects.css), independent of Framer Motion's whileInView — useful for
// the parts of the site that should reveal via a plain CSS transition
// rather than a JS-animated one. Reveals once, like the rest of the site.
export default function useInView(options = { threshold: 0.3 })
{
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() =>
    {
        const el = ref.current;
        if (!el) return;

        const observer = new IntersectionObserver(([entry]) =>
        {
            if (entry.isIntersecting)
            {
                setIsVisible(true);
                observer.disconnect();
            }
        }, options);

        observer.observe(el);
        return () => observer.disconnect();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return [ref, isVisible];
}