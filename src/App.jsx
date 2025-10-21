import React, { useState, lazy, Suspense } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

// Lazy load components
const Navbar = lazy(() => import("./components/Navbar"));
const Hero = lazy(() => import("./components/Hero"));
const About = lazy(() => import("./components/About"));
const Features = lazy(() => import("./components/Features"));
const Footer = lazy(() => import("./components/Footer"));

// Loading fallback component
const LoadingFallback = () => (
  <div className="flex items-center justify-center min-h-screen bg-blue-75">
    <div className="three-body">
      <div className="three-body__dot" />
      <div className="three-body__dot" />
      <div className="three-body__dot" />
    </div>
  </div>
);

function App() {
  const [showContent, setShowContent] = useState(false);

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.to(".mask-content", {
      rotate: 15,
      duration: 2,
      ease: "Power4.easeInOut",
      transformOrigin: "50% 50%",
    }).to(".mask-content", {
      scale: 20,
      duration: 2,
      delay: -1.8,
      ease: "Expo.easeInOut",
      transformOrigin: "50% 50%",
      opacity: 0,
      onUpdate: function () {
        if (this.progress() >= 0.9) {
          const svgElement = document.querySelector(".svg");
          if (svgElement) {
            svgElement.remove();
          }
          setShowContent(true);
          this.kill();
        }
      },
    });
  }, []);

  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <div className="svg flex items-center justify-center fixed top-0 left-0 z-[100] w-full h-screen overflow-hidden bg-[#000]">
        <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
          <defs>
            <mask id="valoMask">
              <rect width="100%" height="100%" fill="black" />
              <g
                className="mask-content"
                transform="translate(400, 300) scale(4) translate(-32, -32)"
              >
                <path
                  d="M5 9L5 31 23 54 41 54zM59 9L59 31 53 39 35 39z"
                  fill="white"
                />
              </g>
            </mask>
          </defs>
          <image
            href="/img/intro.jpg"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            mask="url(#valoMask)"
          />
        </svg>
      </div>

      {showContent && (
        <Suspense fallback={<LoadingFallback />}>
          <Navbar />
          <Hero />
          <About />
          <Features />
          <Footer />
        </Suspense>
      )}
    </main>
  );
}

export default App;
