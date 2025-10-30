import './App.css';  // Assuming Tailwind is imported here
import 'lenis/dist/lenis.css';
import { useEffect, useRef } from 'react';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

function App() {

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

    return () => {
      lenis.destroy();
    };
  }, []); 

  const scrollToTop = () => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, {
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),  
        lerp: 0.1,  
      });
    }
  };

  return (
    <>
      <main className="min-h-screen text-black bg-linear-to-br from-gray-50 to-gray-300 flex items-center justify-center text-center p-8">
        <div>
          <h1 className="font-bold text-6xl mb-4 bg-linear-to-br from-blue-400 to-purple-600 text-transparent bg-clip-text">Front End Developer Portfolio</h1>
          <p className="text-xl bg-linear-to-br from-blue-400 to-purple-600 text-transparent bg-clip-text">Scroll down to see what I've been up to</p>
        </div>
      </main>

      <section className="h-screen bg-gray-100 flex items-center justify-center p-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-gray-800">Section 1: Introduction</h2>
          <p className="text-lg leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p className="text-lg leading-relaxed mt-4">
            This is filler content to give you plenty of vertical space. Keep scrolling—Lenis should make it feel effortless!
          </p>
        </div>
      </section>

      <section className="h-screen bg-white flex items-center justify-center p-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-gray-800">Section 2: Features</h2>
          <ul className="text-left max-w-2xl mx-auto text-lg space-y-4">
            <li className="flex items-center">
              • <span className="ml-2">Ultra-smooth animations with customizable easing</span>
            </li>
            <li className="flex items-center">
              • <span className="ml-2">Touch and wheel support out of the box</span>
            </li>
            <li className="flex items-center">
              • <span className="ml-2">Lightweight—no heavy dependencies</span>
            </li>
            <li className="flex items-center">
              • <span className="ml-2">Perfect for React, Vue, or vanilla JS</span>
            </li>
          </ul>
          <p className="text-lg mt-6 italic">
            More lorem ipsum: Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
          </p>
        </div>
      </section>

      <section className="h-screen bg-gray-200 flex items-center justify-center p-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-gray-800">Section 3: Why Lenis?</h2>
          <p className="text-lg leading-relaxed">
            In a world of janky scroll behaviors, Lenis stands out by hijacking native scroll events and transforming them into silky-smooth motion. It's battle-tested in production sites and easy to drop into your project.
          </p>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-2">Pros</h3>
              <ul className="text-left space-y-1">
                <li>• High performance</li>
                <li>• Infinite scrolling support</li>
                <li>• Syncs with CSS scroll-snap</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-2">Cons</h3>
              <ul className="text-left space-y-1">
                <li>• Requires JS for full effect</li>
                <li>• Minor setup for frameworks</li>
              </ul>
            </div>
          </div>
          <p className="text-lg mt-4">
            Final filler: At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum.
          </p>
        </div>
      </section>

      <section className="h-screen bg-blue-50 flex items-center justify-center p-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-gray-800">Footer Section</h2>
          <p className="text-xl">
            You've reached the end! Smooth scrolling magic courtesy of Lenis. Tweak the options in the useEffect to experiment.
          </p>
          <button onClick={scrollToTop} className="mt-6 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
            Back to Top (Scroll Up!)
          </button>
        </div>
      </section>
    </>
  );
}

export default App;