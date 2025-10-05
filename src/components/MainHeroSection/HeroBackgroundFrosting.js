import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HeroBackgroundFrosting = () => {
  const frostingRef = useRef(null);

  useGSAP(
    () => {
      const frosting = frostingRef.current;

      if (frosting) {
        gsap.fromTo(
          frosting,
          { scaleX: 1 },
          {
            scaleX: 1.2,
            scrollTrigger: {
              trigger: frosting,
              start: "top top",
              end: "bottom top",
              scrub: 1,
              onUpdate: (self) => {
                // Optional: You can add additional logic here
              },
            },
          }
        );
      }
    },
    { scope: frostingRef }
  );

  return (
    <div
      ref={frostingRef}
      className="absolute top-0 right-0 w-full h-full bg-glass-frosting"
    ></div>
  );
};

export default HeroBackgroundFrosting;
