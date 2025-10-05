import Link from "next/link";
import Container from "../LayoutBlocks/Container";
import HeroBackgroundFrosting from "./HeroBackgroundFrosting";
import Image from "next/image";
import SideBlockAnimation from "./SideBlockAnimation";
const MainHero = () => {
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

        <div className="absolute top-0 right-0 lg:w-[700px] md:w-[500px] w-[400px] h-[600px] ">
          <SideBlockAnimation />
        </div>
      </Container>
    </div>
  );
};

export default MainHero;
