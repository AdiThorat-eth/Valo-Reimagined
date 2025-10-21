import { useState, useRef, useEffect } from "react";
import { TiLocationArrow } from "react-icons/ti";

const BentoTilt = ({ children, className = "" }) => {
  const [transformStyle, setTransformStyle] = useState("");
  const itemRef = useRef();

  const handleMouseMove = (e) => {
    if (!itemRef.current) return;
    const { left, top, width, height } =
      itemRef.current.getBoundingClientRect();

    const relativeX = (e.clientX - left) / width;
    const relativeY = (e.clientY - top) / height;

    const tiltX = (relativeY - 0.5) * 10;
    const tiltY = (relativeX - 0.5) * -10;

    const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(0.95, 0.95, 0.95)`;

    setTransformStyle(newTransform);
  };

  const handleMouseLeave = () => {
    setTransformStyle("");
  };

  return (
    <div
      className={className}
      ref={itemRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform: transformStyle }}
    >
      {children}
    </div>
  );
};

const BentoCard = ({ src, title, description }) => {
  const videoRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  return (
    <div className="relative size-full">
      <video
        ref={videoRef}
        src={isInView ? src : ""}
        loop
        muted
        autoPlay
        playsInline
        preload="metadata"
        className="absolute left-0 top-0 size-full object-cover object-center"
      />
      <div className="relative z-10 flex size-full flex-col justify-between p-5 text-sky-50">
        <div>
          <h1 className="special-font bento-title">{title}</h1>
          <p className="mt-3 max-w-80 text-xs md:text-base">{description}</p>
        </div>
      </div>
    </div>
  );
};

export const Features = () => {
  const videoRef5 = useRef(null);
  const [isVideo5InView, setIsVideo5InView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVideo5InView(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (videoRef5.current) {
      observer.observe(videoRef5.current);
    }

    return () => {
      if (videoRef5.current) {
        observer.unobserve(videoRef5.current);
      }
    };
  }, []);

  return (
    <section className="bg-black-900 pb-52">
      <div className="container mx-auto px-3 md:px-10">
        <div className="px-5 py-32">
          <p className="font-circular text-lg text-sky-50 uppercase">
            The game begins
          </p>
          <p className="max-w-md font-circular text-lg text-sky-50 opacity-50">
            Valorant is a free-to-play 5v5 tactical shooter from Riot Games that
            combines precise gunplay with unique agent abilities. Each agent
            brings different skills to support strategic team play, while gun
            mechanics remain the core focus. With well-designed maps,
            competitive and unranked modes, and a strong emphasis on teamwork
            and communication, Valorant offers a fast-paced, skill-based
            experience where every decision counts.
          </p>
        </div>

        <BentoTilt className="border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]">
          <BentoCard
            src="videos/feature-1.mp4"
            title={
              <>
                <b>Compete Like a Champion</b>
              </>
            }
            description="Ranking up in Valorant takes more than sharp aim – it's about smart plays, quick decisions, and staying cool under pressure. Whether you're grinding solo or with a team, every match is a step toward proving your skill. Stay focused, play with purpose, and get competitive."
          />
        </BentoTilt>

        <div className="grid h-[135vh] grid-cols-2 grid-rows-4 gap-7">
          <BentoTilt className="bento-tilt_1 row-span-2 md:col-span-1">
            <BentoCard
              src="videos/feature-2.mp4"
              title={
                <>
                  <b>YOUR AGENTS</b>
                </>
              }
              description="Creativity is your most powerful tool—each Agent has unique, adaptable abilities that open up strategic opportunities and enhance your gunplay. No two Agents or playstyles are the same, making every game and highlight reel unique."
            />
          </BentoTilt>

          <BentoTilt className="bento-tilt_1 row-span-1 md:col-span-1">
            <BentoCard
              src="videos/feature-3.mp4"
              title={
                <>
                  <b>YOUR MAPS</b>
                </>
              }
              description="Each map is designed for strategic teamwork and standout plays, giving you a global stage to showcase your creativity and make unforgettable, iconic moves."
            />
          </BentoTilt>

          <BentoTilt className="bento-tilt_1 md:col-span-1">
            <BentoCard
              src="videos/feature-4.mp4"
              title={
                <>
                  <b>YOUR Weapons</b>
                </>
              }
              description="Your weapons are extensions of your skill and style. Master your arsenal, customize your loadout, and make every shot count."
            />
          </BentoTilt>

          <BentoTilt className="bento-tilt_2 col-span-1">
            <div className="flex size-full flex-col justify-between bg-red-500 p-5">
              <h1 className="bento-title max-w-64">
                Fight like a champion be radiant!
              </h1>
            </div>
          </BentoTilt>

          <BentoTilt className="bento-tilt_2 col-span-1">
            <video
              ref={videoRef5}
              src={isVideo5InView ? "videos/feature-5.mp4" : ""}
              loop
              muted
              autoPlay
              playsInline
              preload="metadata"
              className="size-full object-cover object-center"
            />
          </BentoTilt>
        </div>
      </div>
      <div className="font-zentry text-white text-5xl font-thin text-center hover:text-red-500 m-2 h-14">
        <a
          href="https://riotgames.sng.link/Dnyzj/csgh"
          className="flex items-center justify-center"
        >
          Download Riot mobile companion app
        </a>
      </div>
    </section>
  );
};

export default Features;
