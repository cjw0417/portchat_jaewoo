import { useEffect, useState } from "react";
import "./ScrollProgress.scss";

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
      const scrollable = scrollHeight - clientHeight;
      setProgress(scrollable > 0 ? (scrollTop / scrollable) * 100 : 0);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="scroll-progress" aria-hidden="true">
      <span
        className="scroll-progress__bar"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
