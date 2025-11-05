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
  const lenisRef = useRef(null);

  useEffect(() => {
    if (headerRef.current) {
      gsap.to(headerRef.current, {
        scale: 0.5,
        ease: "none",
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top top",
          end: "top -100%",
          scrub: true,
          pin: true,
          onLeave: () => {
            headerRef.current.style.position = "static";
          },
          onEnterBack: () => {
            headerRef.current.style.position = "fixed";
          },
          onUpdate: (self) => {
            const overlay = document.getElementById("header-dark-overlay");

            if (overlay) {
              overlay.style.opacity = self.progress * 0.8;
            }
          },
        },
      });
    }
    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  // useEffect(() => {
  //   const canvas = document.getElementById("bg-canvas");
  //   const ctx = canvas.getContext("2d");
  //   function resizeCanvas() {
  //     canvas.width = window.innerWidth;
  //     canvas.height = window.innerHeight;
  //   }
  //   resizeCanvas();
  //   window.addEventListener("resize", resizeCanvas);

  //   let particles = Array.from({ length: 40 }, () => ({
  //     x: Math.random() * canvas.width,
  //     y: Math.random() * canvas.height,
  //     r: 8 + Math.random() * 16,
  //     dx: -0.5 + Math.random(),
  //     dy: -0.5 + Math.random(),
  //   }));

  //   function animate() {
  //     ctx.clearRect(0, 0, canvas.width, canvas.height);
  //     particles.forEach((p) => {
  //       ctx.beginPath();
  //       ctx.arc(p.x, p.y, p.r, 0, 2 * Math.PI);
  //       ctx.fillStyle = "rgba(68, 165, 247, 0.3)";
  //       ctx.fill();
  //       p.x += p.dx;
  //       p.y += p.dy;
  //       if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
  //       if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
  //     });
  //     requestAnimationFrame(animate);
  //   }
  //   animate();

  //   return () => {
  //     window.removeEventListener("resize", resizeCanvas);
  //   };
  // }, []);

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

    return () => {
      lenis.destroy();
    };
  }, []);

  // const scrollToTop = () => {
  //   if (lenisRef.current) {
  //     lenisRef.current.scrollTo(0, {
  //       duration: 1.2,
  //       easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  //       lerp: 0.1,
  //     });
    // }
  // };

  return (
    <div className="bg-[#282c20] text-[#3669a8]">
      <InfiniteText
      text="I am a man of my words, but i don't speak them I am a man of my words, but i don't speak them"
      className="absolute top-1/2 w-full text-center font-bold uppercase text-[#a4c609] z-0"
    />
      {/* <InfiniteText
      text="I am a man of my words, but i don't speak them I am a man of my words, but i don't speak them"
      className="absolute top-1/2 w-full text-center font-bold uppercase text-[#fcfcfc] z-0"
    /> */}
      <header
        ref={headerRef}
        className="fixed top-0 left-0 w-full h-screen overflow-hidden z-10"
      >
        <div className="w-full h-full flex items-center justify-center bg-[#fcfcfc]">
          <div className="text-center p-8 flex justify-center items-center">
            <img
              src="/images/test-image.png"
              className="object-cover max-w-[85%] max-h-[75%]"
            />
          </div>
        </div>
        <div
          id="header-dark-overlay"
          style={{
            position: "absolute",
            inset: 0,
            background: "rgb(40,44,32)",
            pointerEvents: "none",
            zIndex: 2,
            opacity: 0,
            transition: "opacity 0.2s linear",
          }}
        ></div>
      </header>
      {/* <canvas id="bg-canvas"></canvas> */}

      <section className="h-screen bg-[#282c20] flex items-center justify-center p-8 relative">
        <div className="max-w-4xl mx-auto text-center text-white text-6xl font-bold mb-6 uppercase">
          <TextReveal
            text={["Redefining", "limits"]}
            fonts={["font-cinzel", "font-sans"]}
          />
          <TextReveal
            text={["Fighting for", "wins"]}
            fonts={["font-sans", "font-cinzel"]}
          />
          <TextReveal text="Bringing it all in" />
          <TextReveal text="All ways. Defining a" />
          <TextReveal
            text={["Legacy", "in formula 1"]}
            fonts={["font-cinzel", "font-sans"]}
          />
          <TextReveal text="On and off the" />
          <TextReveal text="Track" />
        </div>
      </section>
          {/* <button
            onClick={scrollToTop}
            className="mt-6 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center"
          >
            Back to Top (Scroll Up!)
          </button> */}
        </div>
  )
};

export default App;
