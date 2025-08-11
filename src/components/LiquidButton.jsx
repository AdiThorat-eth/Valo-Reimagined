import React from "react";

function LiquidButton({
  title,
  id,
  rightIcon,
  leftIcon,
  containerClass,
  onClick,
}) {
  return (
    <>
      <button
        id={id}
        className={`relative group z-10 w-fit cursor-pointer overflow-hidden rounded-xl px-7 py-3 text-white flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105 ${containerClass}`}
        onClick={onClick}
      >
        {/* Glass Effect Background */}
        <div
          className="absolute top-0 left-0 z-0 h-full w-full rounded-xl 
            shadow-[0_0_6px_rgba(0,0,0,0.03),0_2px_6px_rgba(0,0,0,0.08),inset_3px_3px_0.5px_-3px_rgba(0,0,0,0.9),inset_-3px_-3px_0.5px_-3px_rgba(0,0,0,0.85),inset_1px_1px_1px_-0.5px_rgba(0,0,0,0.6),inset_-1px_-1px_1px_-0.5px_rgba(0,0,0,0.6),inset_0_0_6px_6px_rgba(0,0,0,0.12),inset_0_0_2px_2px_rgba(0,0,0,0.06),0_0_12px_rgba(255,255,255,0.15)] 
        transition-all 
        dark:shadow-[0_0_8px_rgba(0,0,0,0.03),0_2px_6px_rgba(0,0,0,0.08),inset_3px_3px_0.5px_-3.5px_rgba(255,255,255,0.09),inset_-3px_-3px_0.5px_-3.5px_rgba(255,255,255,0.85),inset_1px_1px_1px_-0.5px_rgba(255,255,255,0.6),inset_-1px_-1px_1px_-0.5px_rgba(255,255,255,0.6),inset_0_0_6px_6px_rgba(255,255,255,0.12),inset_0_0_2px_2px_rgba(255,255,255,0.06),0_0_12px_rgba(0,0,0,0.15)]"
        />

        {/* Backdrop Filter Layer */}
        <div
          className="absolute top-0 left-0 isolate -z-10 h-full w-full overflow-hidden rounded-xl"
          style={{ backdropFilter: 'url("#liquid-glass-filter")' }}
        />

        {/* Text Background for Readability */}
        <div className="absolute inset-0 z-5 bg-black/20 rounded-xl backdrop-blur-[1px]"></div>

        {/* Content */}
        <div className="relative z-20 flex items-center gap-2">
          {leftIcon}
          <span className="relative flex overflow-hidden font-pregular text-sm uppercase text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] [text-shadow:_0_1px_2px_rgb(0_0_0_/_80%)]">
            <div>{title}</div>
          </span>
          {rightIcon}
        </div>
      </button>

      {/* SVG Filter Definition */}
      <svg className="hidden">
        <defs>
          <filter
            id="liquid-glass-filter"
            x="0%"
            y="0%"
            width="100%"
            height="100%"
            colorInterpolationFilters="sRGB"
          >
            {/* Generate turbulent noise for distortion */}
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.05 0.05"
              numOctaves="1"
              seed="1"
              result="turbulence"
            />

            {/* Blur the turbulence pattern slightly */}
            <feGaussianBlur
              in="turbulence"
              stdDeviation="2"
              result="blurredNoise"
            />

            {/* Displace the source graphic with the noise */}
            <feDisplacementMap
              in="SourceGraphic"
              in2="blurredNoise"
              scale="70"
              xChannelSelector="R"
              yChannelSelector="B"
              result="displaced"
            />

            {/* Apply overall blur on the final result */}
            <feGaussianBlur
              in="displaced"
              stdDeviation="4"
              result="finalBlur"
            />

            {/* Output the result */}
            <feComposite in="finalBlur" in2="finalBlur" operator="over" />
          </filter>
        </defs>
      </svg>
    </>
  );
}

export default LiquidButton;
