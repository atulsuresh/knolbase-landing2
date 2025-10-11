import FlowLinesA from "@/components/FlowLinesA";
import Container from "@/components/LayoutBlocks/Container";
import Header from "@/components/LayoutBlocks/Header";
// import HeroBackgroundFrosting from "@/components/MainHeroSection/HeroBackgroundFrosting";
import MainHero from "@/components/MainHeroSection/MainHero";
import MainLayout from "@/components/MainLayout";
import Image from "next/image";
import { NextSeo } from "next-seo";
import { homePageSEO } from "@/lib/seo";
import Hero2Section from "@/components/LayoutBlocks/Hero2Section";
import gsap from "gsap";
import { GSDevTools } from "gsap/dist/GSDevTools";
import Footer from "@/components/LayoutBlocks/Footer";
import BigInfoWithImage from "@/components/BigInfoWithImage";

gsap.registerPlugin(GSDevTools);

const AIAgentAnimationSection = () => {
  const inputStuff = [
    "Video Tutorials",
    "Documentation",
    "Product Updates",
    "Onboarding Webinars",
  ];
  const outputStuff = [
    "AI Generated Guides",
    "Onboarding Portals",
    "AI Chatbots",
  ];

  const inputStuffPosition = [20, 10, 0, 20, 20];
  const outputStuffPosition = [20, 0, 20];
  return (
    <section id="aiagent" className="border-t border-gray-200">
      <Container>
        <div className="py-12 z-40">
          <div className="text-center w-full max-w-4xl mx-auto flex flex-col items-center">
            <h3 className="text-3xl font-bold mb-2">
              Made to learn from your product videos and documents
            </h3>
            <p className="text-gray-600 text-lg max-w-md">
              Upload all your product videos and tutorials and distribute it
              directly to the right user. Users get to see what matters for
              them.
            </p>
          </div>

          <div className="w-full grid grid-cols-12 relative max-w-4xl  md:h-[400px] h-[250px] mx-auto text-center mt-12">
            <div className="absolute top-0 left-0 w-full md:h-[400px] h-[350px] flex justify-center items-center z-0">
              <FlowLinesA className="w-full h-full" />
            </div>

            <div className="col-span-4 flex flex-col z-20 h-full md:text-base text-xs justify-between md:py-10 py-24">
              {inputStuff.map((item, index) => (
                <div
                  key={index}
                  className="w-full flex"
                  style={{ marginLeft: `${inputStuffPosition[index]}%` }}
                >
                  <div className=" font-semibold md:py-2 px-2 py-1 bg-fuchsia-50 text-fuchsia-900 border border-fuchsia-200 rounded-lg mt-2">
                    {item}
                  </div>
                </div>
              ))}
            </div>

            <div className="col-span-4 h-full flex justify-center items-center z-10 relative">
              <div className="z-10 shadow-[0_0_12px_rgba(138,56,245,0.34)] md:w-[180px] md:h-[180px] w-[100px] h-[100px] rounded-full bg-fuchsia-50 flex justify-center items-center flex-col ">
                <Image
                  src="/logoIconOnly.svg"
                  alt="Knolbase Logo"
                  width={200}
                  height={200}
                  className="md:w-14 md:h-14 w-10 h-10"
                />
                <p className="text-gray-700 md:text-base text-xs font-bold mt-2">
                  AI Agent
                </p>
              </div>

              <div
                style={{
                  background: "#39989A",
                  background:
                    "linear-gradient(90deg,rgba(57, 152, 154, 1) 11%, rgba(149, 121, 194, 1) 50%, rgba(240, 147, 147, 1) 100%)",
                }}
                className="absolute md:w-[180px] md:h-[180px] w-[120px] h-[120px] rounded-full blur-xl rotate-0 animate-spin opacity-60 duration-[40s]"
              ></div>
            </div>

            <div className="col-span-4 z-50 flex flex-col h-full  md:text-base text-xs justify-between md:py-10 py-24">
              {outputStuff.map((item, index) => (
                <div
                  key={index}
                  className="w-full flex justify-end"
                  style={{ paddingRight: `${outputStuffPosition[index]}%` }}
                >
                  <div className=" font-semibold md:px-6 md:py-2 px-2 py-1 bg-fuchsia-800 text-white border border-fuchsia-200 rounded-lg mt-2">
                    {item}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

const ScreenTypesSection = () => {
  const screenTypes = [
    {
      title: "Personalised User Portal All Users",
      description:
        "Give each user a portal tailored to their role, tasks, and workflows. ",
      image: "/images/person-screenshot-01-3x.png",
      // ctaLink: "/what-is/personalized-onboarding",
      // ctaText: "Learn how to personalize",
    },
    {
      title: "In App Widget",
      description:
        "Embed guided help directly inside your product for just‑in‑time answers. ",
      image: "/images/in-app-screenshot--01-3x.png",
      // ctaLink: "/for/onboarding-teams",
      // ctaText: "Learn how In App Widget works",
    },
  ];
  return (
    <section id="screen-types" className="border-t border-b border-gray-200 ">
      <Container>
        <div className="md:flex justify-between gap-8">
          {screenTypes.map((screenType, index) => (
            // <div
            //   key={index}
            //   className="flex-1 outline-1 outline-gray-200 flex flex-col"
            // >
            //   <div className="w-full add-border-page-full relative">
            //     <Image
            //       src={screenType.image}
            //       alt={screenType.title}
            //       width={1800}
            //       height={1800}
            //       className="w-full h-full object-cover border-gray-200 "
            //     />
            //   </div>

            //   <div className="py-5 px-4 border-b border-gray-200">
            //     <h3 className="text-xl font-semibold text-gray-700">
            //       {screenType.title}
            //     </h3>
            //   </div>
            //   <div className="py-5 px-4">
            //     <p className="text-gray-500">{screenType.description}</p>
            //   </div>
            // </div>
            <BigInfoWithImage
              key={index}
              index={index}
              image={screenType.image}
              title={screenType.title}
              description={screenType.description}
              ctaLink={screenType.ctaLink || false}
              ctaText={screenType.ctaText || false}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

const StepsSection = () => {
  const stepsArr = [
    {
      title: "Customers",
      description:
        "Add your customer into knolbase, add basic information like name, POC, logo etc.",
      image: "/images/customer-1.svg",
      className: "m-8",
    },
    {
      title: "Persona",
      description:
        "Add user persona or profile who will be using your software from the customer",
      image: "/images/persona-1.svg",
      className: "",
    },
    {
      title: "Guides",
      description:
        "Use Knolbase AI to generate guides to for the persona in minutes",
      image: "/images/generate-with-ai.png",
    },
    {
      title: "Users",
      description:
        "Upload the users via Spreadsheets, CSV or via API to knolbase",
      image: "/images/users-list.png",
    },
    {
      title: "Deploy",
      description:
        "Send personalised portal link to all your users via email or any communication mode",
      image: "/images/personalised-002.png",
    },
  ];
  return (
    <section id="stepsSection" className=" border-b border-gray-200">
      <Container>
        <div className="w-full md:grid grid-cols-10 gap-2 hidden">
          {stepsArr.map((step, index) => (
            <div
              key={index}
              className="col-span-2 flex flex-col items-center justify-center add-border-page-full pt-12"
            >
              <div className="text-sm text-gray-600 font-medium px-4 py-2 border border-gray-200 mb-6">
                Step {index + 1}
              </div>

              <div className="w-2 h-2 bg-gray-900 -mb-1 z-10"></div>
            </div>
          ))}
        </div>
      </Container>

      <Container>
        <div className="w-full grid grid-cols-10 md:gap-2">
          {stepsArr.map((step, index) => (
            <div
              key={index}
              className={`md:col-span-2 col-span-12 border-b md:border-b-0 flex flex-col bg-gray-50 md:border-l md:border-r border-gray-200 ${
                index === 0 ? "border-l-0" : ""
              } ${index === stepsArr.length - 1 ? "border-r-0" : ""}
              first:border-l-0
              last:border-r-0
              `}
            >
              <div className="pl-6 pr-4 pt-6 h-[180px]">
                <h4 className="text-xl font-semibold text-gray-700 mb-1">
                  {step.title}
                </h4>
                <p className="text-gray-500">{step.description}</p>
              </div>

              <div className="md:h-[150px] hidden md:flex md:items-center bg-fuchsia-100 overflow-hidden ">
                <Image
                  src={step.image}
                  alt={step.title}
                  width={200}
                  height={200}
                  className={`w-full object-cover  ${
                    step.className ? step.className : ""
                  }`}
                />
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

const FoundersNoteSection = () => {
  return (
    <div className="">
      <Container>
        <div
          style={{
            backgroundImage: `url('/images/athul-background.webp')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
          className="py-24 border-b border-gray-200 bg-gray-50 "
        >
          <div className="max-w-lg mx-auto py-12 text-base text-gray-500 bg-white px-12">
            <p>
              Making a product self serve is a dream for many product builders.
              <br></br> <br></br>
              But the sad reality is majority of the software sold to
              enterprises are complex, solving many problems at once and mostly
              build without a lot of user context.
              <br></br> <br></br>
              This created a crippling problem where software company spend a
              lot of time training users on how to get their jobs done.
              <br></br> <br></br>
              Whether they are new customers or existing ones, SaaS companies
              spend a lot of time on training users therefore spending more
              money on human capital.
              <br></br> <br></br>
              Knolbase&apos;s goal is to help software companies train users in
              the fastest way.
            </p>
            <div>
              <Image
                className="w-24 h-24 -ml-3 mt-2 mix-blend-darken"
                src="/images/athulsign.png"
                alt="Athul Sign"
                width={100}
                height={100}
              />
              <div>Athul Suresh</div>
              <div>Founder, Knolbase</div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default function Home() {
  return (
    <>
      <NextSeo {...homePageSEO} />
      <MainLayout title="Home">
        <Header />
        <MainHero />

        <AIAgentAnimationSection />

        <StepsSection />

        <div className="">
          <Container>
            <div className="py-12"></div>
          </Container>
        </div>

        <Hero2Section />

        <div className="">
          <Container>
            <div className="py-12"></div>
          </Container>
        </div>

        <ScreenTypesSection />

        <FoundersNoteSection />

        <div className="border-t border-gray-200">
          <Container>
            <div className="py-12"></div>
          </Container>
        </div>

        <Footer />
      </MainLayout>
    </>
  );
}
