import "./App.css";
import "lenis/dist/lenis.css";
import { useEffect, useRef } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TextReveal from "./components/TextReveal";
import InfiniteText from "./components/InfiniteText";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const headerRef = useRef(null);
  const textRef = useRef(null);
  const containerRef = useRef(null);
  const lenisRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });
    lenisRef.current = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  useEffect(() => {
    const header = headerRef.current;
    const text = textRef.current;
    const container = containerRef.current;

    if (!header || !text || !container) return;

    gsap.to(header, {
      scale: 0.3,
      ease: "none",
      scrollTrigger: {
        trigger: header,
        start: "top top",
        end: "top -100%",
        scrub: true,
        pin: true,
        anticipatePin: 1,
        id: "header-scale",
        onLeave: () => (header.style.position = "static"),
        onEnterBack: () => (header.style.position = "fixed"),
        onUpdate: (self) => {
          const overlay = document.getElementById("header-dark-overlay");
          if (overlay) overlay.style.opacity = self.progress * 0.8;
        },
      },
    });

    const scaleTrigger = ScrollTrigger.getById("header-scale");
    const totalDistance = scaleTrigger?.end || 1000;

    ScrollTrigger.create({
      trigger: container,
      start: "top top",
      end: `+=${totalDistance * 0.5}`,
      pin: text,
      pinSpacing: false,
      anticipatePin: 1,
    });

    ScrollTrigger.create({
      trigger: text,
      start: "top 50%", 
      once: true,
      onEnter: () => {
        gsap.to(text, { opacity: 1, duration: 0 });
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div ref={containerRef}>
      <div className="bg-[#282c20] text-[#3669a8] relative">
        <InfiniteText
          ref={textRef}
          text="I am a man of my words, but i don't speak them I am a man of my words, but i don't speak them"
          speed={15}
          className="absolute top-1/2 left-0 w-full -translate-y-1/2 text-center font-bold uppercase text-[#a4c609] z-10 pointer-events-none text-6xl opacity-0"
        />

        <header
          ref={headerRef}
          className="fixed top-0 left-0 w-full h-screen overflow-hidden z-20"
        >
          <div className="w-full h-full flex items-center justify-center bg-[#fcfcfc]">
            <div className="text-center p-8 flex items-center justify-center">
              <img
                src="/images/test-image.png"
                alt="hero"
                className="object-contain max-w-[85%] max-h-[75%]"
              />
            </div>
          </div>

          <div
            id="header-dark-overlay"
            style={{
              position: "absolute",
              inset: 0,
              background: "rgb(40, 44, 32)",
              pointerEvents: "none",
              zIndex: 2,
              opacity: 0,
            }}
          />
        </header>
      </div>

      <section className="h-screen bg-[#282c20] flex items-center justify-center p-8">
        <div className="max-w-4xl mx-auto text-center text-white text-6xl font-bold mb-6 uppercase">
          <TextReveal text={["Redefining", "limits"]} fonts={["font-cinzel", "font-sans"]} />
          <TextReveal text={["Fighting for", "wins"]} fonts={["font-sans", "font-cinzel"]} />
          <TextReveal text="Bringing it all in" />
          <TextReveal text="All ways. Defining a" />
          <TextReveal text={["Legacy", "in formula 1"]} fonts={["font-cinzel", "font-sans"]} />
          <TextReveal text="On and off the" />
          <TextReveal text="Track" />
        </div>
      </section>
    </div>
  );
}

export default App;