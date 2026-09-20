import { useEffect } from "react";

// Renders the dot + ring; positioning is done by setting CSS custom
// properties on <body> rather than React state, so this never triggers
// a re-render on mousemove. Mount once near your app root (e.g. App.jsx).
export default function Cursor() {
  useEffect(() => {
    const handleMove = (event) => {
      document.body.style.setProperty("--cursor-x", `${event.clientX}px`);
      document.body.style.setProperty("--cursor-y", `${event.clientY}px`);
    };

    // Event delegation (not per-element listeners) so this still works
    // for links/buttons React renders in after mount.
    const handleOver = (event) => {
      if (event.target.closest("a, button, [role='button']")) {
        document.body.setAttribute("data-cursor", "hover");
      }
    };

    const handleOut = (event) => {
      if (event.target.closest("a, button, [role='button']")) {
        document.body.removeAttribute("data-cursor");
      }
    };

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseover", handleOver);
    window.addEventListener("mouseout", handleOut);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseover", handleOver);
      window.removeEventListener("mouseout", handleOut);
    };
  }, []);

  return (
    <>
      <div className="cursor-dot" />
      <div className="cursor-ring" />
    </>
  );
}
