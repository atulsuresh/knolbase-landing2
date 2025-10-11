import Container from "@/components/LayoutBlocks/Container";
import Header from "@/components/LayoutBlocks/Header";
import MainLayout from "@/components/MainLayout";
import Image from "next/image";
import { NextSeo } from "next-seo";
import Footer from "@/components/LayoutBlocks/Footer";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { UserCircleIcon } from "@heroicons/react/24/solid";
import MainCTAButton from "@/components/MainCTAButton";
import BigInfoWithImage from "@/components/BigInfoWithImage";
import LayoutDivider from "@/components/LayoutBlocks/LayoutDivider";
import PageHeaderA from "@/components/PageLayout/PageHeaderA";
import MidSectionHeading from "@/components/PageLayout/MidSectionHeading";

gsap.registerPlugin(ScrollTrigger);

const ProblemSectionWorkItem = ({ image, title, className, ref }) => {
  return (
    <div
      ref={ref}
      className={`absolute md:w-[20%] w-[30%] scale-100 ${className}`}
    >
      <div className="w-full h-full bg-white flex flex-col border border-gray-200 rounded-lg shadow scale-75">
        <div className="h-full p-1">
          <Image
            src={image}
            alt="Webinar"
            width={180}
            height={200}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="px-2 py-2 text-xs md:text-base font-bold text-gray-700">
          <span>{title}</span>
        </div>
      </div>
    </div>
  );
};

const ProblemSection = () => {
  const sribbleRef = useRef(null);
  const sribbleSVGRef = useRef(null);
  const yourUsersRef = useRef(null);
  const onboardingTeamsRef = useRef(null);
  const workItemsRef = useRef([]);

  useGSAP(
    () => {
      if (sribbleRef.current) {
        // Get the total length of the path
        const pathLength = sribbleRef.current.getTotalLength();

        // Set initial state - path is invisible
        sribbleRef.current.style.strokeDasharray = pathLength;
        sribbleRef.current.style.strokeDashoffset = pathLength;

        // gsap.to(yourUsersRef.current, 0.1, {
        //   x: 3,
        //   y: 3,
        //   repeat: 8,
        //   delay: 2,
        //   ease: "power2.easeInOut",
        // });

        const shakerTime = gsap.timeline({
          repeatDelay: 3,
          repeat: -1,
          delay: 2,
        });
        shakerTime.to(yourUsersRef.current, 0.1, {
          x: 3,
          y: 3,
          repeat: 8,
          //   delay: 2,
          ease: "power2.easeInOut",
        });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sribbleSVGRef.current,
            start: "top 90%",

            toggleActions: "play none none reverse",
          },
        });

        tl.fromTo(
          yourUsersRef.current,
          {
            opacity: 0,
            scale: 0,
            rotateY: 40,
          },
          {
            opacity: 1,
            scale: 1,
            rotateY: 0,
            duration: 0.5,
            ease: "power4.inOut",
          }
        );
        // Animate the path drawing
        tl.to(sribbleRef.current, {
          strokeDashoffset: 0,
          duration: 2.5,
          ease: "power2.inOut",
        }).from(
          workItemsRef.current,
          {
            opacity: 0,
            scale: 0,
            duration: 1,
            stagger: 0.1,
            ease: "power4.inOut",
          },
          "=-2"
        );
      }
    },
    { scope: sribbleSVGRef }
  );

  return (
    <section className=" bg-white">
      <Container>
        <div className="text-center mb-2 py-28">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Your users are stuck at &quot;What&apos;s Next?&quot;
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Every onboarding team faces the same problems. Here&apos;s how
            Knolbase solves them.
          </p>
        </div>

        <div className="grid grid-cols-12 pb-24">
          <div className="col-span-2 h-full flex flex-col items-center justify-center">
            <div
              className="flex flex-col items-center justify-center"
              ref={onboardingTeamsRef}
            >
              <div className="md:text-7xl text-5xl ">
                {/* <UserCircleIcon className="w-16 h-16" /> */}
                😰
              </div>
              <span className="md:text-xl text-sm font-bold text-center w-full">
                Onboarding Teams
              </span>
            </div>
          </div>

          <div className="col-span-8 relative">
            <ProblemSectionWorkItem
              ref={(e) => (workItemsRef.current[0] = e)}
              image="/images/webinar-example.jpg"
              title="Webinars"
              className="md:left-30 md:top-[10%] left-8 top-0 rotate-8"
            />
            <ProblemSectionWorkItem
              ref={(e) => (workItemsRef.current[1] = e)}
              image="/images/tutorial-example.jpg"
              title="Tutorials"
              className="md:left-40 md:top-[60%] left-10 top-[60%] -rotate-8"
            />
            <ProblemSectionWorkItem
              ref={(e) => (workItemsRef.current[2] = e)}
              image="/images/spreadsheet-example.jpg"
              title="Spreadsheets"
              className="md:left-[60%] md:top-[10%] left-[50%] top-3 rotate-8"
            />

            <ProblemSectionWorkItem
              ref={(e) => (workItemsRef.current[3] = e)}
              image="/images/in-person-example.jpg"
              title="In Person Sessions"
              className="md:left-[60%] md:top-[60%] left-[50%] top-[60%] -rotate-8"
            />

            <svg
              width="1570"
              height="672"
              viewBox="0 0 1570 672"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full object-cover overflow-visible "
              ref={sribbleSVGRef}
            >
              <path
                ref={sribbleRef}
                d="M0.769531 337.815H246.147C335.328 337.815 350.66 324.452 415.858 260.444C546.708 131.983 942.549 448.882 706.123 558.902C469.698 668.922 412.87 630.128 497.788 436.007C582.706 241.887 754.111 59.1311 530.56 76.6875C307.009 94.2438 251.999 308.431 461.505 348.226C671.011 388.02 432.244 639.661 605.467 667.751C778.69 695.841 585.57 500.381 661.647 427.815C737.725 355.248 748.259 406.747 892.221 427.815C1036.18 448.882 1101.73 245.228 892.221 245.228C682.715 245.228 1001.07 354.078 810.291 363.441C619.512 372.805 530.56 210.116 706.123 176.173C881.687 142.231 923.822 289.705 1053.74 225.331C1183.66 160.958 1083 -66.1042 1011.6 21.6776C940.208 109.459 902.755 410.259 1128.65 348.226C1354.54 286.193 1311.23 629.127 1114.6 583.48C917.97 537.834 789.386 338.938 1011.6 260.444C1378.77 130.75 1152.59 337.815 1565.02 337.815"
                fill="none"
                stroke="#6C258D"
                strokeWidth="3"
                className="md:stroke-4 stroke-8"
              />
            </svg>
          </div>

          <div className="col-span-2 h-full flex flex-col items-center justify-center">
            <div
              className="flex flex-col items-center justify-center"
              ref={yourUsersRef}
            >
              <div className="md:text-7xl text-5xl ">
                {/* <UserCircleIcon className="w-16 h-16" /> */}
                😡
              </div>
              <span className="md:text-xl text-sm font-bold text-center w-full">
                Your Users
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

const SolutionSection = () => {
  const solutions = [
    {
      title: "Personalized User Portals",
      description:
        "Each user gets their own portal with relevant videos, tasks, and progress tracking",
      image: "/images/person-screenshot-01-3x.png",
      features: [
        "Custom learning paths",
        "Progress tracking",
        "Task management",
      ],
    },
    {
      title: "Generate Courses Faster using AI",
      description:
        "Automatically create role-specific training paths for each user persona",
      image: "/images/generate-with-ai.png",
      features: [
        "Account-specific content",
        "Role-based workflows",
        "Auto-generated guides",
      ],
    },
    {
      title: "Multiple ways to distrbute",
      description:
        "Embed contextual help directly in your product - users never leave your app",
      image: "/images/in-app-screenshot--01-3x.png",
      features: [
        "Contextual Q&A",
        "Step-by-step guidance",
        "Just-in-time help",
      ],
    },
  ];

  return (
    <section>
      <div className="border-t border-b border-gray-200">
        <MidSectionHeading
          title="Replace manual training calls and spreadsheets with AI that
              creates personalized learning paths for each user."
        />
      </div>

      <LayoutDivider />

      <div className=" border-b border-t border-gray-200 bg-white">
        <Container>
          <div className="md:flex justify-between gap-4">
            {solutions.map((solution, index) => (
              <BigInfoWithImage
                key={index}
                index={index}
                image={solution.image}
                title={solution.title}
                features={solution.features}
                description={solution.description}
              />
            ))}
          </div>
        </Container>
      </div>

      <LayoutDivider />
    </section>
  );
};

const BenefitsSection = () => {
  const benefits = [
    {
      metric: "60-70%",
      description: "Reduction in onboarding time",
      icon: "⚡",
    },
    {
      metric: "3x",
      description: "More customers per team member",
      icon: "📈",
    },
    {
      metric: "80%",
      description: "Fewer support tickets",
      icon: "🎯",
    },
    {
      metric: "90%",
      description: "User satisfaction improvement",
      icon: "😊",
    },
  ];

  return (
    <section className="py-20 bg-fuchsia-50">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Proven Results
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Teams using Knolbase see immediate improvements in efficiency and
            user satisfaction.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="text-center p-6 bg-white rounded-lg shadow-sm"
            >
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <div className="text-4xl font-bold text-fuchsia-600 mb-2">
                {benefit.metric}
              </div>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

const CTASection = () => {
  return (
    <section className="py-20 bg-gray-900 text-white">
      <Container>
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Transform Your Onboarding?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join forward-thinking teams who&apos;ve already made the switch to
            AI-powered onboarding.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://tally.so/r/3EdE7q"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-fuchsia-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-fuchsia-700 transition-colors"
            >
              Start Free Trial
            </a>
            <a
              href="mailto:hello@knolbase.com"
              className="border border-gray-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-800 transition-colors"
            >
              Talk to Sales
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
};

const seoConfig = {
  title: "Knolbase for Onboarding Teams | AI-Powered Customer Training",
  description:
    "Scale your customer onboarding without scaling your team. Knolbase uses AI to create personalized training experiences for every user persona.",
  canonical: "https://knolbase.com/for/onboarding-teams",
  openGraph: {
    title: "Knolbase for Onboarding Teams | AI-Powered Customer Training",
    description:
      "Scale your customer onboarding without scaling your team. Knolbase uses AI to create personalized training experiences for every user persona.",
    url: "https://knolbase.com/for/onboarding-teams",
    siteName: "Knolbase",
    images: [
      {
        url: "https://knolbase.com/images/onboarding-teams-og.jpg",
        width: 1200,
        height: 630,
        alt: "Knolbase for Onboarding Teams",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    handle: "@knolbase",
    site: "@knolbase",
    cardType: "summary_large_image",
  },
};

export default function OnboardingTeamsPage() {
  return (
    <>
      <NextSeo {...seoConfig} />
      <MainLayout title="For Onboarding Teams">
        <Header />
        <section className="border-b border-gray-200">
          <PageHeaderA
            title="Give users what they want, when they want it."
            subheading="Stop wasting time on manual onboarding. Let AI handle the heavy lifting while you focus on what matters most."
          />
        </section>

        <ProblemSection />

        <SolutionSection />

        <Footer />
      </MainLayout>
    </>
  );
}
