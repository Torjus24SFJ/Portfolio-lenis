import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function TextReveal({ text, split = "word", className = "", fonts = [] }) {
  const textRef = useRef(null);

  useEffect(() => {
    if (!textRef.current) return;
    const element = textRef.current;

    if (split === "word") {
      const words = Array.isArray(text) ? text : text.split(" ");
      element.innerHTML = words
        .map((word, i) => {
          const fontClass = fonts[i] || "";
          return `<span class="mask-inner ${fontClass}" style="position: relative;">${word}<span class="mask"></span></span>`;
        })
        .join(" ");
    } else {
      element.textContent = text;
    }

    const masks = element.querySelectorAll(".mask");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            gsap.to(masks, {
              scaleX: 0,
              transformOrigin: "left",
              duration: 0.8,
              ease: "power2.inOut",
              stagger: 0.15,
            });
            observer.disconnect();
          }
        });
      },
      { threshold: 0.8 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [text, split, fonts]);

  return <p ref={textRef} className={`reveal-text ${className}`}>{Array.isArray(text) ? text.join(" ") : text}</p>;
}
