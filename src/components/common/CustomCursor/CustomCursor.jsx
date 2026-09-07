import { useEffect, useRef } from "react";
import gsap from "gsap";
import "./CustomCursor.scss";

const HOVER_TARGETS = "a, button, .projects__card, input, textarea, [data-cursor-hover]";

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    if (isTouch) return undefined;

    const dot = dotRef.current;
    const ring = ringRef.current;

    const dotX = gsap.quickTo(dot, "x", { duration: 0.12, ease: "power3.out" });
    const dotY = gsap.quickTo(dot, "y", { duration: 0.12, ease: "power3.out" });
    const ringX = gsap.quickTo(ring, "x", { duration: 0.45, ease: "power3.out" });
    const ringY = gsap.quickTo(ring, "y", { duration: 0.45, ease: "power3.out" });

    const handleMove = (e) => {
      dotX(e.clientX);
      dotY(e.clientY);
      ringX(e.clientX);
      ringY(e.clientY);
    };

    const handleEnter = () => document.body.classList.add("has-custom-cursor");
    const handleLeaveWindow = () => document.body.classList.remove("has-custom-cursor");

    // Delegated hover detection so dynamically rendered elements
    // (e.g. filtered project cards) are picked up without re-binding.
    const handleOver = (e) => {
      if (e.target.closest(HOVER_TARGETS)) ring.classList.add("is-hovering");
    };
    const handleOut = (e) => {
      if (e.target.closest(HOVER_TARGETS)) ring.classList.remove("is-hovering");
    };

    window.addEventListener("mousemove", handleMove);
    document.addEventListener("mouseenter", handleEnter);
    document.addEventListener("mouseleave", handleLeaveWindow);
    document.addEventListener("mouseover", handleOver);
    document.addEventListener("mouseout", handleOut);
    handleEnter();

    return () => {
      window.removeEventListener("mousemove", handleMove);
      document.removeEventListener("mouseenter", handleEnter);
      document.removeEventListener("mouseleave", handleLeaveWindow);
      document.removeEventListener("mouseover", handleOver);
      document.removeEventListener("mouseout", handleOut);
      document.body.classList.remove("has-custom-cursor");
    };
  }, []);

  return (
    <>
      <span className="custom-cursor__dot" ref={dotRef} aria-hidden="true" />
      <span className="custom-cursor__ring" ref={ringRef} aria-hidden="true" />
    </>
  );
}
