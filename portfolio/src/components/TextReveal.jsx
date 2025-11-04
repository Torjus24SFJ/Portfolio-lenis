import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function TextReveal({ text, split = "word", className = ""}) {
  const textRef = useRef(null);

  useEffect(() => {
    if (!textRef.current) return;

    const element = textRef.current;

    const words = split === "word" ? text.split(" ") : [text];
    element.innerHTML = words
      .map((word, i) => {
        const space = i < words.length - 1 ? " " : "";
        return `<span class="mask-inner">${word}<span class="mask"></span></span>${space}`;
      })
      .join("");

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
  }, [text, split]);

    return (
    <p ref={textRef} className={`reveal-text ${className}`}>
      {text}
    </p>
  );
}
