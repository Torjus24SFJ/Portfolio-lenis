import { forwardRef, useRef, useEffect } from "react";
import { gsap } from "gsap";

const InfiniteText = forwardRef(
  ({ text = "", speed = 20, className = "" }, ref) => {
    const localRef = useRef(null);
    const container = ref || localRef;
    const animRef = useRef(null);

    useEffect(() => {
      const el = container.current;
      const txt = el?.firstChild;
      if (!el || !txt) return;

      if (animRef.current) animRef.current.kill();

      txt.style.display = "block";
      const height = txt.offsetHeight;

      gsap.set(txt, { y: height });

      animRef.current = gsap.to(txt, {
        y: -height,
        duration: speed,
        ease: "none",
        repeat: -1,
        modifiers: {
          y: gsap.utils.unitize((y) => parseFloat(y) % height),
        },
      });

      return () => animRef.current?.kill();
    }, [text, speed, container]);

    return (
      <div
        ref={container}
        className={`overflow-hidden ${className}`}
        style={{ display: "block" }}
      >
        <div className="block">
          {text}
          <br />
        </div>
      </div>
    );
  }
);

InfiniteText.displayName = "InfiniteText";
export default InfiniteText;