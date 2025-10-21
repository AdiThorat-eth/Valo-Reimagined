import gsap from "gsap";
import React from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import AnimatedTitle from "./AnimatedTitle";

gsap.registerPlugin(ScrollTrigger);

function About() {
  useGSAP(() => {
    gsap.set(".about-mask-clip", {
      clipPath: "polygon(31% 14%, 88% 0%, 100% 100%, 17% 90%)",
    });

    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: "center center",
        end: "+=800 center",
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
      },
    });

    clipAnimation.to(".about-mask-clip", {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      width: "100vw",
      height: "100vh",
      borderRadius: 0,
    });
  });

  return (
    <div id="about" className="min-h-screen w-screen">
      <div className="relative mb-8 mt-20 sm:mt-28 md:mt-36 flex flex-col items-center justify-center gap-3 sm:gap-4 md:gap-5 px-4 sm:px-6 md:px-8">
        <h2 className="special-font text-center text-2xl sm:text-3xl md:text-[40px] font-thin uppercase">
          <b>We are</b>
          <v> valorant</v>
        </h2>

        <AnimatedTitle
          title="<pp>Much</pp> <pp>m</pp><o>o</o><pp>re</pp> <pp>than</pp> <pp>your</pp> <pp>normal</pp> <pp>game</pp>"
          containerClass="mt-3 sm:mt-4 md:mt-5 !text-black text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl uppercase"
        />

        <div className="about-subtext" id="textsub">
          <p className="mb-3 sm:mb-4">
            Valorant is Peoples favourite and leading FPP Game.
          </p>
          {/* <p className="mb-3 sm:mb-4">
            Blend your style and experience on a global, competitive stage.
          </p> */}
          <p>
            You have 13 rounds to attack and defend your side using sharp
            gunplay and tactical abilities. And, with one life per-round, you'll
            need to think faster than your opponent if you want to survive. Take
            on foes across Competitive and Unranked modes as well as Deathmatch
            and Spike Rush.
          </p>
        </div>
      </div>
      <div className="h-dvh w-screen sm:flex sm:justify-center" id="clip">
        <div className="about-mask-clip about-image border-2 border-black">
          <img
            src="img/bg.jpg"
            alt="Background"
            className="absolute left-0 top-0 size-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
