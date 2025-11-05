import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "../App.css";
export default function InfiniteText({
  text = " ",
  speed = 10,
  className = ""
}) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const animation = gsap.to(container, {
      xPercent: -50,
      repeat: -1,
      duration: speed,
      ease: "linear",
    });

    return () => animation.kill();
  }, [speed]);

  return (
    <div
      ref={containerRef}
      className={`absolute flex items-center justify-center whitespace-nowrap z-0 text-4xl ${className}`}
    >
      <span>{text}</span>
      <span>{text}</span>
    </div>
  );
}
