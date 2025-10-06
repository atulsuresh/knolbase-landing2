import Link from "next/link";
import Container from "../LayoutBlocks/Container";
import HeroBackgroundFrosting from "./HeroBackgroundFrosting";
import Image from "next/image";
import SideBlockAnimation from "./SideBlockAnimation";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

const MainHero = () => {
  const heroScreenRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      heroScreenRef.current,
      { scale: 0.9, opacity: 0.4 },
      { scale: 1, duration: 0.5, opacity: 1, ease: "power4.inOut" }
    );
  });

  return (
    <div className="w-full mt-12">
      <Container sideBorder={false} paddedSides={false}>
        <div className="w-full py-12">
          <div className="w-full relative bg-fuchsia-100 rounded-xl outline-8 outline-fuchsia-50 p-3 grid grid-cols-12 gap-2  h-[500px] max-h-screen">
            <div className="col-span-5 flex justify-end flex-col h-full pl-6 pb-6 z-50">
              <div>
                <h1 className="text-5xl font-bold mb-5">
                  AI onboarding for your product.
                </h1>
                <h2 className="text-lg font-normal text-gray-700">
                  Platform for modern product teams to deliver personalized,
                  AI-driven training so every user persona reaches value—fast.
                </h2>
              </div>

              <div className="mt-7">
                <Link
                  href="/"
                  className="text-sm inline-block text-center font-semibold text-white bg-black px-6 py-4 rounded-full hover:bg-gray-900"
                >
                  Get Started
                </Link>
              </div>
            </div>

            <div className="col-span-7 relative z-50"></div>

            {/* <div className="absolute top-0 right-0 w-full h-full bg-glass-frosting"></div> */}
            <Image
              src="/images/image2.jpg"
              width={100}
              height={100}
              className="object-cover absolute top-0 left-0 w-full h-full opacity-20 blur-sm"
            />
            <HeroBackgroundFrosting />
          </div>

          <div className="w-full grid grid-cols-12">
            <div className="col-span-7">
              <h5 className="text-2xl font-bold text-gray-400 px-6 py-10 leading-8">
                Create personalized onboarding experiences for your users with
                AI that adapts to every persona, role, and workflow.
              </h5>
            </div>
          </div>
        </div>
        {/* 
        <div className="z-50 absolute top-0 right-0 lg:w-[700px] md:w-[500px] w-[400px] h-[600px] ">
          <SideBlockAnimation />
        </div> */}

        <div
          ref={heroScreenRef}
          className="z-40 absolute -right-200 -top-40 w-[1280px] h-[800px] rounded-b-3xl shadow-2xl outline-8 outline-fuchsia-800/10"
          style={{
            backgroundImage: `url('/images/dummy-webpage.svg')`,
            backgroundPosition: "left bottom",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div className="z-50 absolute bottom-0 left-0 lg:w-[700px] md:w-[500px] w-[400px] h-[600px] ">
            <SideBlockAnimation />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default MainHero;
