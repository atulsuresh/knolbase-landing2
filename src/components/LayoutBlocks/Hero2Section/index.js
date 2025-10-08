import { useGSAP } from "@gsap/react";
import Container from "../Container";
import FigmaCursor from "@/components/Icons/FigmaCursor";
import { use, useRef, useState } from "react";
import gsap from "gsap";
import SplitText from "gsap/dist/SplitText";
const FigmaCursorColors = [
  "#7b61ff",
  "#ff8400",
  "#4C51E6",
  "#fe65ff",
  "#8c46ef",
];

const ColorSpread = () => {
  return (
    <span
      className={`hidden outline ${FigmaCursorColors.map(
        (color, index) => `outline-[${color}]`
      ).join(" ")}`}
    ></span>
  );
};
const ProfileFigmaCursorAnimation = ({
  profileType,
  query,
  color,
  index,
  delay,
  x,
  y,
  scrollTriggerArea,
  bottom,
  left,
  leftMobile,
}) => {
  const cursorRef = useRef(null);

  const profileBlockRef = useRef(null);
  const queryBlockRef = useRef(null);

  useGSAP(
    () => {
      //   const splitText = SplitText.create(queryBlockRef.current, "chars");
      const delay = 30 * (index + 1) + 40;

      const tl = gsap.timeline({
        //   delay: delay,
        repeat: -1,
        repeatDelay: 10,
        id: `hero2-cursor-${index}`,
        paused: true,
        scrollTrigger: {
          trigger: scrollTriggerArea.current,
          start: `+=${delay}`,
          end: "bottom bottom",
          // markers: true,
          // scrub: 1,
        },
      });

      tl.from(cursorRef.current, {
        left: "50%",
        bottom: -200,
        duration: 1,
        ease: "power3.out",
      });
      tl.to(queryBlockRef.current, {
        autoAlpha: 1,
        scale: 1,
        opacity: 1,
        x: 2,
      });

      //   .from(
      //     splitText.chars,
      //     {
      //       opacity: 0,
      //       duration: 0.1,
      //       autoAlpha: 0,
      //       stagger: 0.05,
      //       ease: "power3.out",
      //       display: "none",
      //     },
      //     "<"
      //   );
    },
    {
      ref: cursorRef,
    }
  );
  return (
    <div
      style={{
        bottom: bottom,
        left: left + "%",
      }}
      className="absolute bottom-0 left-0 w-[500px]"
      ref={cursorRef}
    >
      <FigmaCursor className={`w-8 h-8`} color={color} />
      <div className="flex flex-col">
        <span>
          <span
            ref={profileBlockRef}
            className={`ml-4 inline-block px-2 py-1 md:text-sm text-xs rounded-sm outline-2 outline-white/60 font-semibold text-white`}
            style={{
              backgroundColor: color,
            }}
          >
            <span>{profileType}</span>
          </span>
        </span>
        {/* <div className="mt-1">
          <div
            style={{
              backgroundColor: color,
            }}
            ref={queryBlockRef}
            className={`ml-4 inline-block px-2 opacity-0 scale-95 py-2 md:text-sm text-xs rounded-b-lg rounded-tr-lg text-white font-semibold outline-2 outline-white/60`}
          >
            {query}
          </div>
        </div> */}
      </div>
    </div>
  );
};

const Hero2Section = () => {
  const [cursorContent, setCursorContent] = useState([
    {
      profileType: "Compliance Officer",
      query: "How do I configure SOC 2 controls?",
      color: FigmaCursorColors[0],
      delay: 0,
      x: 5,
      y: -200,
      bottom: 150,
      left: 4,
      leftMobile: 2,
    },
    {
      profileType: "Legal Team",
      query: "Where are the GDPR data processing workflows?",
      color: FigmaCursorColors[1],
      delay: 1,
      x: 60,
      y: -20,
      bottom: 30,
      left: 30,
      leftMobile: 30,
    },
    {
      profileType: "Engineering Lead",
      query: "How do I set up audit logging?",
      color: FigmaCursorColors[2],
      delay: 2,
      x: 170,
      y: -70,
      bottom: 45,
      left: 65,
      leftMobile: 70,
    },
    {
      profileType: "Product Manager",
      query: "How do I configure user permissions?",
      color: FigmaCursorColors[3],
      delay: 3,
      x: 25,
      y: -120,
      bottom: 80,
      left: 15,
      leftMobile: 10,
    },
    {
      profileType: "Sales Director",
      query: "Where can I find customer analytics?",
      color: FigmaCursorColors[4],
      delay: 4,
      x: 140,
      y: -40,
      bottom: 60,
      left: 50,
      leftMobile: 45,
    },
    {
      profileType: "Operations Manager",
      query: "How do I set up automated workflows?",
      color: FigmaCursorColors[0],
      delay: 5,
      x: 80,
      y: -90,
      bottom: 100,
      left: 25,
      leftMobile: 20,
    },
    {
      profileType: "Finance Team",
      query: "Where are the billing integration settings?",
      color: FigmaCursorColors[1],
      delay: 6,
      x: 200,
      y: -30,
      bottom: 20,
      left: 75,
      leftMobile: 80,
    },
    {
      profileType: "Customer Success",
      query: "How do I track user adoption metrics?",
      color: FigmaCursorColors[2],
      delay: 7,
      x: 110,
      y: -150,
      bottom: 120,
      left: 60,
      leftMobile: 35,
    },
  ]);

  const [cursorAnimationTrigger, setCursorAnimationTrigger] = useState(false);

  const queryCursorRef = useRef([]);
  const hero2SectionRef = useRef(null);

  //   useGSAP(
  //     () => {
  //       queryCursorRef.current.forEach((cursor, index) => {
  //         console.log(cursor);
  //         gsap.from(cursor, {
  //           x: 200,
  //           ease: "power3.out",
  //         });
  //       });
  //     },
  //     {
  //       ref: hero2SectionRef,
  //     }
  //   );

  return (
    <section
      ref={hero2SectionRef}
      id="hero2"
      className="w-full border-t border-b border-gray-200 "
    >
      <ColorSpread />
      <Container>
        <div className="w-full max-w-2xl mx-auto text-center relative z-50">
          <div className=" flex flex-col items-center md:pt-24 pt-24 md:pb-42 pb-58 ">
            <h3 className="text-3xl font-bold mb-2">
              A way to transform your onboarding
            </h3>
            <p className="text-gray-600 text-lg max-w-md">
              Ship onboarding that adapts. AI tailors training to each persona,
              role, and workflow for faster value.
            </p>
          </div>
        </div>
        <span className="absolute top-0 left-0 z-50 w-full h-full overflow-hidden">
          {cursorContent.map((item, index) => (
            <ProfileFigmaCursorAnimation
              //   pointerRef={(e) => (queryCursorRef.current[index] = e)}
              scrollTriggerArea={hero2SectionRef}
              key={index}
              index={index}
              {...item}
            />
          ))}
        </span>
        {/* <ProfileFigmaCursorAnimation
            profileType="User"
            query="User"
            color={FigmaCursorColors[0]}
            delay={0}
          /> */}

        <div
          className="absolute top-0 left-0 w-full h-full z-10"
          style={{
            backgroundImage: `url('/images/noise.svg')`,
          }}
        ></div>

        <div
          style={{
            backgroundImage: `url('/images/im-stripe-2.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
          className="absolute top-0 left-0 w-full h-full bg-white"
        ></div>
      </Container>
    </section>
  );
};

export default Hero2Section;
