import React, { useRef, useState, useEffect } from "react";
import { TiLocationArrow } from "react-icons/ti";
import Button from "./Button";

const Navbar = () => {
  const navContainerRef = useRef(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if we've scrolled past the hero section (adjust threshold as needed)
      const heroHeight = window.innerHeight; // Assuming hero is full height
      const scrollY = window.scrollY;

      setIsScrolled(scrollY > heroHeight * 0.8); // Trigger at 80% of hero height
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleProductClick = () => {
    console.log("Product button clicked!");
  };

  return (
    <div
      ref={navContainerRef}
      className={`fixed inset-x-6 top-4 z-[110] h-16 border-none transition-all duration-700 ${
        isScrolled ? "backdrop-blur-md" : ""
      }`}
    >
      <header className="absolute top-1/2 w-full -translate-y-1/2">
        <nav
          className={`flex size-full items-center justify-between transition-all duration-500 px-4 py-2 ${
            isScrolled
              ? "bg-black/40 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/25 shadow-lg shadow-black/20"
              : "bg-transparent"
          }`}
        >
          <div className="flex items-center gap-7 w-full relative">
            {/* Logos - Fixed positioning */}
            <div className="flex-shrink-0 flex items-center gap-3">
              {/* Riot Games Logo */}
              <div className="w-10 h-10">
                <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 32 32" className="w-full h-full">
                  <circle cx="16" cy="16" r="16" fill="#f1f5f1"></circle>
                  <polygon points="16.42 8 6.75 12.47 9.16 21.64 11 21.41 10.49 15.65 11.1 15.38 12.13 21.27 15.27 20.89 14.71 14.53 15.3 14.27 16.45 20.75 19.62 20.36 19.01 13.38 19.61 13.12 20.86 20.2 24 19.82 24 9.89 16.42 8" fill="#050505"></polygon>
                  <polygon points="16.65 21.9 16.81 22.8 24 24 24 21 16.66 21.9 16.65 21.9" fill="#050505"></polygon>
                </svg>
              </div>
              {/* Valorant Logo */}
              <img className="h-10 bordr" src="/img/logo.png" alt="Valorant logo" />
            </div>

            {/* Left Navigation Buttons - Fixed positioning */}
            <div className="flex items-center gap-3 flex-shrink-0">
              <LiquidGlassButton
                id="esport-button"
                title="Esports"
                rightIcon={<TiLocationArrow />}
                isActive={isScrolled}
                onClick={() =>
                  window.open("https://valorantesports.com/", "_blank")
                }
              />
              <LiquidGlassButton
                id="merch-button"
                title="Merch"
                rightIcon={<TiLocationArrow />}
                isActive={isScrolled}
                onClick={() =>
                  window.open(
                    "https://merch.riotgames.com/en-gb/collection/valorant/",
                    "_blank"
                  )
                }
              />
              <LiquidGlassButton
                id="media-button"
                title="Media"
                rightIcon={<TiLocationArrow />}
                isActive={isScrolled}
                onClick={() =>
                  window.open("https://playvalorant.com/en-gb/media/", "_blank")
                }
              />
              <LiquidGlassButton
                id="news-button"
                title="News"
                rightIcon={<TiLocationArrow />}
                isActive={isScrolled}
                onClick={() =>
                  window.open("https://playvalorant.com/en-gb/news/", "_blank")
                }
              />
            </div>

            {/* Spacer to push Play button to the right */}
            <div className="flex-grow"></div>

            {/* Right Play Button - Fixed positioning */}
            <div className="flex-shrink-0 text-white">
              <LiquidGlassButton
                id="play-button"
                title="Play"
                isActive={isScrolled}
                variant="primary"
                onClick={() =>
                  window.open(
                    "https://playvalorant.com/en-us/platform-selection/",
                    "_blank"
                  )
                }
              />
            </div>
          </div>
        </nav>
      </header>

      {/* Glass Filter SVG */}
      <GlassFilter />
    </div>
  );
};

const LiquidGlassButton = ({
  id,
  title,
  rightIcon,
  onClick,
  isActive = false,
  variant = "default",
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const baseClasses =
    "relative inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium transition-all duration-300 cursor-pointer overflow-hidden rounded-full outline-none md:flex hidden";

  const glassClasses = isActive
    ? `${baseClasses} bg-white/30 backdrop-blur-lg border border-white/40 text-black shadow-lg hover:bg-white/40 hover:scale-105 hover:shadow-xl font-bold`
    : `${baseClasses} bg-red-500 text-black border-2 border-black-900 font-bold hover:bg-red-600`;

  const primaryClasses =
    variant === "primary" && isActive
      ? `${baseClasses} bg-gradient-to-r from-blue-500/40 to-purple-500/40 backdrop-blur-lg border border-blue-400/50 text-black shadow-lg hover:from-blue-500/50 hover:to-purple-500/50 hover:scale-105 hover:shadow-xl font-bold`
      : glassClasses;

  return (
    <button
      id={id}
      className={primaryClasses}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={isActive ? { backdropFilter: 'url("#container-glass")' } : {}}
    >
      {/* Glass effect overlay */}
      {isActive && (
        <div className="absolute inset-0 rounded-full shadow-[inset_0_1px_0_rgba(255,255,255,0.4),inset_0_-1px_0_rgba(0,0,0,0.2)] pointer-events-none" />
      )}

      {/* Content */}
      <span className="relative z-10 flex items-center gap-2">
        <span className="font-General text-xs uppercase tracking-wide font-bold text-shadow-sm">
          {title}
        </span>
        {rightIcon && <span className="ml-1">{rightIcon}</span>}
      </span>

      {/* Hover shimmer effect */}
      {isActive && isHovered && (
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 translate-x-full animate-shimmer pointer-events-none" />
      )}
    </button>
  );
};

const GlassFilter = () => {
  return (
    <svg className="hidden">
      <defs>
        <filter
          id="container-glass"
          x="0%"
          y="0%"
          width="100%"
          height="100%"
          colorInterpolationFilters="sRGB"
        >
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.02 0.02"
            numOctaves="2"
            seed="1"
            result="turbulence"
          />
          <feGaussianBlur
            in="turbulence"
            stdDeviation="1"
            result="blurredNoise"
          />
          <feDisplacementMap
            in="SourceGraphic"
            in2="blurredNoise"
            scale="20"
            xChannelSelector="R"
            yChannelSelector="B"
            result="displaced"
          />
          <feGaussianBlur in="displaced" stdDeviation="1" result="finalBlur" />
          <feComposite in="finalBlur" in2="finalBlur" operator="over" />
        </filter>
      </defs>
    </svg>
  );
};

export default Navbar;