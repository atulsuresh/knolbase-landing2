import Image from "next/image";
import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import SplitText from "gsap/dist/SplitText";
import SearchIcon from "../Icons/SearchIcon";
import BigCursor from "../Icons/BigCursor";
import ClockIcon from "../Icons/ClockIcon";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import {
  ArrowTopRightOnSquareIcon,
  CheckCircleIcon,
  LinkIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/24/solid";
gsap.registerPlugin(SplitText, ScrollTrigger);

const BottomBarWrapper = ({ children }) => {
  return (
    <div className="w-full flex flex-col ">
      {children}
      {/* <div className="w-full text-center text-white/40 text-xs">
        Powered by Knolbase
      </div> */}
    </div>
  );
};

const PageAccordionButton = () => {
  return (
    <svg
      width="40"
      height="41"
      viewBox="0 0 40 41"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect y="0.5" width="40" height="40" rx="20" fill="#2563EB" />
      <path
        d="M13 23.5L20 16.5L27 23.5"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

// const SingleVideoPlaylistBlock = ({ title, description, time }) => {
//   return (
//     <div className="w-full grid grid-cols-12 bg-blue-800 rounded-lg">
//       <div className="col-span-5 px-3 py-3">
//         <div className="w-full h-[86px] rounded-xs bg-white"></div>
//       </div>
//       <div className="col-span-7 py-2 pl-1 pr-2 text-white">
//         <div className="font-medium text-base">{title}</div>
//         <div className="flex items-center mt-2">
//           <span>
//             <ClockIcon />
//           </span>
//           <span className="text-sm font-normal ml-2">{time}</span>
//         </div>
//       </div>
//     </div>
//   );
// };

const WidgetArea = () => {
  const SecondTitleRef = useRef(null);
  const [isVideoSelected, setIsVideoSelected] = useState(false);
  const videoTutorialRef = useRef(null);
  const widgetAreaRef = useRef(null);
  const cursorRef = useRef(null);
  const aiAskAreaRef = useRef(null);
  const firstVideoPlaylistArrayRef = useRef([]);
  const firstVideoAreaRef = useRef([]);
  const onboardingStuffRef = useRef(null);
  const pageAccordionButtonRef = useRef(null);
  const onboardingNextVideoRef = useRef(null);
  const chatLayoutSectionRef = useRef(null);
  const onboardingFullSectionRef = useRef(null);

  const aiAskEle = useRef({
    inputContainer: null,
    InputPlaceholder: null,
    sampleQuestion: null,
    sendButton: null,
  });

  // AI Ask
  const aiAskInputContainerRef = useRef(null);
  const aiAskInputPlaceholderRef = useRef(null);
  const aiAskSampleQuestionRef = useRef(null);
  const aiAskSendButtonRef = useRef(null);

  // Chat Layout
  const chatLayoutPrimaryMessageRef = useRef(null);
  const chatLayoutProcessingRef = useRef(null);
  const chatLayoutReplySection1Ref = useRef(null);
  const chatLayoutReplySection2Ref = useRef(null);
  const chatLayoutReplySection3Ref = useRef(null);
  const chatLayoutProcessingItem1Ref = useRef(null);
  const chatLayoutProcessingItem2Ref = useRef(null);
  const chatLayoutProcessingItem3Ref = useRef(null);
  const chatLayoutProcessingItem4Ref = useRef(null);

  const videoPlaylist = [
    {
      id: 1,
      title: "Add Employees to your Compliance Framework",
      description:
        "This video shows you how to add employees to your compliance framework.",
      time: "20 mins",
    },
    {
      id: 2,
      title: "Sending compliance assessment reminders",
      description:
        "This video shows you how to send compliance assessment reminders.",
      time: "10 mins",
      isSelected: isVideoSelected,
    },
    {
      id: 3,
      title: "Viewing compliance assessment results",
      description:
        "This video shows you how to view compliance assessment results.",
      time: "5 mins",
    },
  ];

  useGSAP(
    () => {
      function cursorClickAnimationToElemet(ele) {
        const tl = gsap.timeline();

        tl.to(cursorRef.current, {
          scale: 0.7,
          duration: 0.12,
          ease: "power1.in",
          delay: 0.5,
        }).to(cursorRef.current, {
          scale: 1,
          duration: 0.18,
          ease: "power1.out",
        });

        return tl;
      }

      function onboardingInitalAnimation() {
        const tl = gsap.timeline({
          // repeat: -1,
        });

        // tl.from(onboardingStuffRef.current, {
        //   y: 100,
        //   duration: 1,
        //   height: "auto",
        // });

        tl.fromTo(
          cursorRef.current,
          {
            opacity: 0,
            x: 300,
            y: 100,
          },
          {
            opacity: 1,
            delay: 1,
            duration: 0.3,
            scale: 1,
            ease: "power2.inOut",
          }
        );
        tl.to(cursorRef.current, {
          x: 200,
          y: 40,
        })

          .to(cursorRef.current, {
            scale: 0.6,
            duration: 0.12,
            ease: "power1.in",
            delay: 0.5,
          })
          .to(
            onboardingStuffRef.current,
            {
              backgroundColor: "var(--color-blue-800)",
              duration: 0.12,
              ease: "power1.in",
            },
            "<"
          )

          .to(cursorRef.current, {
            scale: 1,
            duration: 0.18,
            ease: "power1.out",
          })
          .to(cursorRef.current, {
            opacity: 0,
            duration: 0.1,
            ease: "power1.out",
          })
          .to(onboardingStuffRef.current, {
            backgroundColor: "transparent",
            duration: 0.18,
            ease: "power1.out",
          })
          .to(
            onboardingStuffRef.current,
            {
              height: "auto",
              duration: 1,
              ease: "power3.out",
            },
            "+=-0.3"
          )

          // .to(onboardingStuffRef.current, {
          //   height: 0,
          //   duration: 0.5,
          //   ease: "power3.out",
          // })

          .to(onboardingNextVideoRef.current, {
            scaleY: 1,
            height: "auto",
            duration: 0.5,
            ease: "power3.out",
          })
          .to(
            ".onb-heading",
            {
              fontSize: 20,
              duration: 0.5,
              ease: "power3.out",
            },
            "<"
          )

          .to(
            pageAccordionButtonRef.current,
            {
              rotate: 180,
              ease: "power3.out",
            },
            "<"
          )

          .to(
            aiAskAreaRef.current,
            {
              height: "auto",
              scaleY: 1,
              duration: 0.5,
              ease: "power3.out",
            },
            "<"
          )

          .to(cursorRef.current, {
            opacity: 1,
            duration: 0.1,
            ease: "power1.out",
            delay: 4,
          })

          .to(cursorRef.current, {
            x: 200,
            y: 320,
          });

        // .add(() => {
        //   cursorClickAnimationToElemet(aiAskInputContainerRef.current);
        // })

        // .add(() => aiAskAreaAnimationForQuestionOnboarding())
        // .to(cursorRef.current, {
        //   opacity: 0,
        // });

        return tl;
      }

      function videoTutorialAnimation() {
        const splitText = SplitText.create(SecondTitleRef.current, {
          type: "words, chars",
        });

        const tl = gsap.timeline();

        tl.to(videoTutorialRef.current, {
          scaleY: 1,
          duration: 1,
          height: "auto",
          ease: "power3.out",
        })
          .from(splitText.chars, {
            opacity: 0,
            y: 4,

            stagger: 0.05,
            duration: 0.4,
          })

          .from(
            firstVideoPlaylistArrayRef.current,
            {
              opacity: 0,
              y: 14,
              stagger: 0.05,
              ease: "power3.out",
              duration: 0.5,
            },
            0.7
          )

          .fromTo(
            cursorRef.current,
            {
              opacity: 0,
              x: 400,
              y: 600,
            },
            {
              opacity: 1,
              duration: 1.3,
              scale: 1.1,
              x: 250,
              y: 310,
              ease: "power2.inOut",
            }
          )
          // click effect: scale down quick, then back up
          // Both cursor and playlist element scale down/up at the same time using position parameter "<"
          .to(cursorRef.current, {
            scale: 0.7,
            duration: 0.12,
            ease: "power1.in",
            delay: 0.5,
          })
          .to(
            firstVideoPlaylistArrayRef.current[1],
            {
              scale: 0.7,
              duration: 0.12,
              ease: "power1.in",
            },
            "<"
          )
          .to(cursorRef.current, {
            scale: 1,
            duration: 0.18,
            ease: "power1.out",
          })
          .to(
            firstVideoPlaylistArrayRef.current[1],
            {
              scale: 1,
              duration: 0.18,
              ease: "power3.out",
            },
            "<"
          )
          .to(cursorRef.current, {
            scale: 1,
            opacity: 0,
            duration: 0.1,
            ease: "power1.out",
          })

          .to(
            [
              firstVideoPlaylistArrayRef.current[0],
              firstVideoPlaylistArrayRef.current[2],
            ],
            {
              height: 0,
              delay: 0.5,
              ease: "power3.out",
              duration: 0.8,
            }
          )

          .to(
            firstVideoAreaRef.current[1],
            {
              width: "100%",
              height: "220px",
              ease: "power4.out",
              duration: 0.8,
            },
            "<"
          );

        return tl;
      }

      function aiAskAreaAnimationForQuestionOnboarding() {
        const splitText = SplitText.create(aiAskSampleQuestionRef.current, {
          type: "chars",
        });

        const tl = gsap.timeline();

        // console.log(aiAskInputContainerRef.current);

        tl.set(aiAskInputContainerRef.current, {
          outlineWidth: 2,
          duration: 0.5,
          // scale: 2,
        })
          .set(aiAskInputPlaceholderRef.current, {
            display: "none",
          })
          .set(aiAskSampleQuestionRef.current, {
            display: "block",
          })
          .set(aiAskSendButtonRef.current, {
            className: "block",
          })
          .fromTo(
            splitText.chars,
            {
              opacity: 0,
            },
            {
              opacity: 1,
              duration: 0.1,
              delay: 1,
              ease: "power3.out",
              stagger: 0.05,
              // onComplete: () => {
              //   alert("complete");
              // },
            },
            ">"
          )
          .fromTo(
            aiAskSendButtonRef.current,
            {
              scale: 0.5,
            },
            {
              scale: 1,
              duration: 0.1,

              ease: "power3.out",
            },
            "=+1"
          )
          .set(aiAskInputPlaceholderRef.current, {
            display: "flex",
          })
          .set(aiAskSampleQuestionRef.current, {
            display: "none",
          })
          .set(aiAskSendButtonRef.current, {
            className: "none",
          })
          .set(aiAskInputContainerRef.current, {
            outlineWidth: 0,
            // scale: 2,
          })
          .to(onboardingStuffRef.current, {
            y: 10,
            opacity: 0,
            height: 0,
          });

        tl.to(chatLayoutSectionRef.current, {
          height: "auto",
          duration: 0.5,
          ease: "power3.out",
        })
          .from(chatLayoutPrimaryMessageRef.current, {
            opacity: 0,
            y: 100,
            x: -20,
            duration: 0.5,
            ease: "power3.out",
          })
          //animation for processing items
          .from(chatLayoutProcessingItem1Ref.current, {
            opacity: 0,
            y: 10,
            height: 0,
            duration: 0.5,
            ease: "power3.out",
          })
          .to(chatLayoutProcessingItem1Ref.current, {
            opacity: 0,
            y: -10,
            height: 0,
            duration: 0.5,
            ease: "power3.out",
            delay: 1,
          })
          .from(
            chatLayoutProcessingItem2Ref.current,
            {
              opacity: 0,
              y: 10,
              height: 0,
              duration: 0.5,
              ease: "power3.out",
            },
            "<"
          )
          .to(chatLayoutProcessingItem2Ref.current, {
            opacity: 0,
            y: -10,
            height: 0,
            duration: 0.5,
            ease: "power3.out",
            delay: 1,
          })
          .from(
            chatLayoutProcessingItem3Ref.current,
            {
              opacity: 0,
              y: 10,
              height: 0,
              duration: 0.5,
              ease: "power3.out",
            },
            "<"
          )
          .to(chatLayoutProcessingItem3Ref.current, {
            opacity: 0,
            y: -10,
            height: 0,
            duration: 0.5,
            ease: "power3.out",
            delay: 1,
          })
          .from(chatLayoutProcessingItem4Ref.current, {
            opacity: 0,
            y: 10,
            height: 0,
            duration: 0.5,
            ease: "power3.out",
          });

        const splitTextOne = SplitText.create(
          chatLayoutReplySection1Ref.current,
          {
            type: "words",
          }
        );

        const splitTextTwo = SplitText.create(
          chatLayoutReplySection3Ref.current,
          {
            type: "words",
          }
        );

        tl.from(splitTextOne.words, {
          opacity: 0,
          y: 2,
          duration: 0.01,
          stagger: 0.05,
          ease: "power3.out",
        })
          .from(chatLayoutReplySection2Ref.current, {
            opacity: 0,
            height: 0,
          })

          .from(splitTextTwo.words, {
            opacity: 0,
            y: 2,
            duration: 0.01,
            stagger: 0.05,
            ease: "power3.out",
          });

        // tl.to(
        //   chatLayoutSectionRef.current,
        //   {
        //     height: 0,
        //     x: 0,
        //     y: 0,
        //     duration: 0.5,
        //     ease: "power3.out",
        //     delay: 5,
        //   },
        //   "<"
        // );
        // .set(
        //   onboardingNextVideoRef.current,
        //   {
        //     height: 0,
        //     x: 0,
        //     y: 0,
        //   },
        //   "<"
        // )
        // .to(
        //   aiAskAreaRef.current,
        //   {
        //     height: 0,
        //     opacity: 0,
        //     duration: 0.5,
        //     ease: "power3.out",
        //   },
        //   "<"
        // )

        // .to(
        //   onboardingStuffRef.current,
        //   {
        //     height: "auto",
        //     opacity: 1,
        //     y: 0,
        //     duration: 0.5,
        //     ease: "power3.out",
        //   },
        //   "<"
        // )
        // .to(
        //   pageAccordionButtonRef.current,
        //   {
        //     rotate: 0,
        //   },
        //   "<"
        // )
        // .set(
        //   ".onb-heading",
        //   {
        //     fontSize: 18,
        //   },
        //   "<"
        // );

        return tl;
      }

      function backToOnboarding() {
        const tl = gsap.timeline();
        tl.set(
          onboardingNextVideoRef.current,
          {
            height: 0,
            x: 0,
            y: 0,
          },
          "<"
        )
          .to(
            aiAskAreaRef.current,
            {
              height: 0,
              opacity: 0,
              duration: 0.5,
              ease: "power3.out",
            },
            "<"
          )

          .to(
            onboardingStuffRef.current,
            {
              height: "auto",
              opacity: 1,
              y: 0,
              duration: 0.5,
              ease: "power3.out",
            },
            "<"
          )
          .to(
            pageAccordionButtonRef.current,
            {
              rotate: 0,
            },
            "<"
          )
          .set(
            ".onb-heading",
            {
              fontSize: 18,
            },
            "<"
          );

        return tl;
      }

      let masterTimeline = gsap.timeline({
        repeat: -1,
        repeatDelay: 5,
      });
      masterTimeline.add(onboardingInitalAnimation());
      masterTimeline
        .add(cursorClickAnimationToElemet(aiAskInputContainerRef.current))

        .add(aiAskAreaAnimationForQuestionOnboarding())
        .to(
          cursorRef.current,
          {
            opacity: 0,
          },
          "<"
        )
        .to(chatLayoutSectionRef.current, {
          height: 0,
          x: 0,
          y: 0,
          duration: 0.5,
          ease: "power3.out",
          delay: 5,
        })
        .add(videoTutorialAnimation())
        .to(videoTutorialRef.current, {
          opacity: 0,
          autoAlpha: 0,
          scaleY: 0,
          y: -20,
          height: 0,
          duration: 0.5,
          stagger: 0.05,
          ease: "power3.out",
          delay: 10,
        })
        .add(backToOnboarding(), "<");

      masterTimeline.timeScale(1);

      // .add(aiAskAreaAnimationForQuestionOnboarding, ">");
      // masterTimeline.add(videoTutorialAnimation());

      // onboardingInitalAnimation();
    },
    {
      ref: widgetAreaRef,
    }
  );

  return (
    <div
      ref={widgetAreaRef}
      className="bg-blue-700 relative w-sm min-h-[100px] flex flex-col justify-end rounded-lg  shadow-lg"
    >
      {/****
       *
       *  First Onboarding Message
       *
       *
       */}
      <div
        id="onboardingStuff"
        ref={onboardingStuffRef}
        className="overflow-hidden"
      >
        <div className="pl-4 pr-16 py-3 overflow-hidden">
          <div className="text-lg font-semibold text-white onb-heading">
            Complete your onboarding
          </div>
          <div className="text-base text-white/60 font-medium mt-1">
            You have 8 tasks to complete to make your experience even better
          </div>
        </div>

        <div className="h-0 overflow-hidden" ref={onboardingNextVideoRef}>
          <div className="px-2 pb-4">
            <div className="bg-blue-800 rounded-lg w-full">
              <div className="px-3 pt-2 flex">
                <span>
                  <CheckCircleIcon className="w-5 text-white" />
                </span>
                <span className="text-white/60 text-sm font-medium ml-1">
                  Your Next Task
                </span>
              </div>
              <div className="w-full  flex flex-wrap">
                <div
                  className="w-[140px] h-[105px] pl-3 pr-3 py-3"
                  // ref={(e) => (firstVideoAreaRef.current[index] = e)}
                >
                  <div className="w-full h-full rounded-xs bg-white"></div>
                </div>
                <div className="col-span-7 flex-1 min-w-[200px] pt-2 pb-3 pl-3 pr-2 text-white">
                  <div className="font-medium text-base">
                    Adding Employees to your Compliance Framework
                  </div>
                  <div className="flex items-center mt-2">
                    <span>
                      <ClockIcon />
                    </span>
                    <span className="text-sm font-normal ml-2">20 mins</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="flex items-center text-xs text-white/90 bg-blue-800/50 border border-blue-800 px-4 py-2 rounded-lg">
              <span>Go to your onboarding portal</span>
              <span>
                <ArrowTopRightOnSquareIcon className="w-3 ml-2" />
              </span>
            </div>
          </div>
        </div>
      </div>

      {/****
       *
       *
       * Onboarding Full Area
       *
       *
       */}

      <div
        id="onboardingFullSection"
        ref={onboardingFullSectionRef}
        className="overflow-hidden h-0"
      >
        <div className="">
          <div className="px-4 py-3">
            <div className="text-2xl font-semibold text-white pt-4 pb-6">
              Hi Micheal! I’m your ComplianceApp Tutor
            </div>
            {/* <div className="text-2xl font-semibold text-blue-500">
              You can always ask more questions using AI
            </div> */}
          </div>

          <div className="px-2 pb-8">
            <div className="bg-blue-800 rounded-lg w-full">
              <div className="px-3 pt-2 flex">
                <span>
                  <CheckCircleIcon className="w-5 text-white" />
                </span>
                <span className="text-white/60 text-sm font-medium ml-1">
                  Your Next Task
                </span>
              </div>
              <div className="w-full  flex flex-wrap">
                <div
                  className="w-[140px] h-[105px] pl-3 pr-3 py-3"
                  // ref={(e) => (firstVideoAreaRef.current[index] = e)}
                >
                  <div className="w-full h-full rounded-xs bg-white"></div>
                </div>
                <div className="col-span-7 flex-1 min-w-[200px] pt-2 pb-3 pl-3 pr-2 text-white">
                  <div className="font-medium text-base">
                    Adding Employees to your Compliance Framework
                  </div>
                  <div className="flex items-center mt-2">
                    <span>
                      <ClockIcon />
                    </span>
                    <span className="text-sm font-normal ml-2">20 mins</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*****
       *
       *
       * Chat Layout Section
       *
       */}

      <div
        id="chatLayoutSection"
        className="overflow-hidden h-0"
        ref={chatLayoutSectionRef}
      >
        <div className="min-h-[300px] pt-16">
          <div className="flex justify-end px-4 py-2">
            <span
              ref={chatLayoutPrimaryMessageRef}
              className="px-3 max-w-[300px] py-3 rounded-lg text-sm bg-blue-600 text-white"
            >
              The system is showing some error while I create a new SOC2
              framework.
            </span>
          </div>

          <div
            ref={chatLayoutProcessingRef}
            className="flex flex-col justify-start px-4 py-2"
          >
            <span
              ref={chatLayoutProcessingItem1Ref}
              className=" rounded-lg text-sm text-blue-400"
            >
              Looking for answers.
            </span>
            <span
              ref={chatLayoutProcessingItem2Ref}
              className=" rounded-lg text-sm text-blue-400"
            >
              Scanning the knowledge base.
            </span>
            <span
              ref={chatLayoutProcessingItem3Ref}
              className=" rounded-lg text-sm text-blue-400"
            >
              Finding the right lesson.
            </span>
            <span
              ref={chatLayoutProcessingItem4Ref}
              className=" rounded-lg text-sm text-blue-400"
            >
              Found the right answer in 4 seconds.
            </span>
          </div>

          <div className="w-full py-4 px-4">
            <div
              ref={chatLayoutReplySection1Ref}
              className="text-white text-sm mb-2"
            >
              Looks like you might have created a framework that already exist.
              Follow the following tutorial to see if this helps.
            </div>
            <div ref={chatLayoutReplySection2Ref} className="w-full mb-2">
              <div className="w-full h-[205px] rounded-sm bg-white"></div>
            </div>
            <div
              ref={chatLayoutReplySection3Ref}
              className="text-white text-sm"
            >
              This tutorial talks about how you can use existing SOC2 framework
              to start working.
            </div>
          </div>
        </div>
      </div>

      {/****
       *
       *
       * Video Playlist Section
       *
       *
       */}

      <div
        id="videoTutoralStuff"
        className="scale-y-0 h-0"
        ref={videoTutorialRef}
      >
        <div className="h-full">
          <div className="px-4 py-3">
            <div className="text-2xl font-semibold text-white">
              Learn how to use the app
            </div>
            <div
              ref={SecondTitleRef}
              className="text-2xl font-semibold text-blue-500"
            >
              You can always ask more questions using AI
            </div>
          </div>
          <div className="px-4 pt-4 flex flex-col gap-2">
            {videoPlaylist.map((video, index) => (
              <span
                key={video.id}
                className="overflow-hidden"
                ref={(e) => (firstVideoPlaylistArrayRef.current[index] = e)}
              >
                <div className="w-full bg-blue-800 rounded-lg flex flex-wrap">
                  <div
                    className="w-[140px] h-[105px] pl-3 pr-3 py-3"
                    ref={(e) => (firstVideoAreaRef.current[index] = e)}
                  >
                    <div className="w-full h-full rounded-xs bg-white"></div>
                  </div>
                  <div className="col-span-7 flex-1 min-w-[200px] pt-2 pb-3 pl-3 pr-2 text-white">
                    <div className="font-medium text-base">{video.title}</div>
                    <div className="flex items-center mt-2">
                      <span>
                        <ClockIcon />
                      </span>
                      <span className="text-sm font-normal ml-2">
                        {video.time}
                      </span>
                    </div>
                  </div>
                </div>
              </span>
            ))}
          </div>
        </div>
      </div>
      <BottomBarWrapper>
        <div
          ref={aiAskAreaRef}
          className="w-full h-0 overflow-hidden scale-y-0"
        >
          <div className="w-full px-4 py-4">
            <div
              ref={aiAskInputContainerRef}
              // type="text"
              className="bg-blue-600 shadow px-3 py-2 rounded text-blue-300 outline-blue-500 outline-solid outline-0 flex items-center"
            >
              <SearchIcon className="w-4" />
              <span
                ref={aiAskInputPlaceholderRef}
                className="ml-2 text-sm flex-1"
              >
                Ask a question
              </span>
              <span
                ref={aiAskSampleQuestionRef}
                className="ml-2 text-sm text-white flex-1 hidden"
              >
                The system is showing some error while I create a new SOC2
                framework.
              </span>

              <span
                ref={aiAskSendButtonRef}
                className="px-1 py-1 rounded-sm bg-blue-800 hidden"
              >
                <PaperAirplaneIcon className="w-4 text-white" />
              </span>
            </div>
          </div>
        </div>
      </BottomBarWrapper>

      <div ref={cursorRef} className="absolute top-0 left-0 opacity-0">
        <BigCursor className="size-10 text-white invert-0 transform" />
      </div>

      <div ref={pageAccordionButtonRef} className="absolute top-4 right-4">
        <PageAccordionButton />
      </div>
    </div>
  );
};

const SideBlockAnimation = () => {
  const WidgetAreaRef = useRef(null);

  useGSAP(() => {
    gsap.from(WidgetAreaRef.current, {
      x: -20,
      scale: 0.9,
      opacity: 0,
      duration: 1,
      transformOrigin: "left",
      ease: "power4.inOut",
      delay: 0.2,
    });
  });
  return (
    <div className="w-full h-full relative">
      <div ref={WidgetAreaRef} className="absolute bottom-8 left-20 shadow-2xl">
        <WidgetArea />
      </div>
    </div>
  );
};

export default SideBlockAnimation;
