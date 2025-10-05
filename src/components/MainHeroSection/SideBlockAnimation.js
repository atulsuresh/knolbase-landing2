import Image from "next/image";
import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import SplitText from "gsap/dist/SplitText";
import SearchIcon from "../Icons/SearchIcon";
import BigCursor from "../Icons/BigCursor";
import ClockIcon from "../Icons/ClockIcon";
// import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(SplitText);

const BottomBarWrapper = ({ children }) => {
  return (
    <div className="w-full py-2 bg-blue-700 flex flex-col ">
      {children}
      <div className="w-full text-center text-white/40 text-xs">
        Powered by Knolbase
      </div>
    </div>
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
  const widgetAreaRef = useRef(null);
  const cursorRef = useRef(null);

  const firstVideoPlaylistArrayRef = useRef([]);
  const firstVideoAreaRef = useRef([]);

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
      const splitText = SplitText.create(SecondTitleRef.current, {
        type: "words, chars",
      });

      //   gsap.from(splitText.chars, {
      //     opacity: 0,
      //     y: 4,
      //     stagger: 0.05,
      //   });

      const tl = gsap.timeline();

      tl.from(splitText.chars, {
        opacity: 0,
        y: 4,
        stagger: 0.05,
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

      //   tl.timeScale(0.3);

      //   tl.seek(2);
    },
    {
      //   ref: [widgetAreaRef, cursorRef, SecondTitleRef],
    }
  );

  return (
    <div
      ref={widgetAreaRef}
      className="bg-blue-700 relative w-sm min-h-[400px] flex flex-col justify-end rounded-lg  shadow-lg"
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
              {/* <SingleVideoPlaylistBlock
                // key={video.title}
                title={video.title}
                description={video.description}
                time={video.time}
              /> */}
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
      <BottomBarWrapper>
        <div className="w-full px-4 py-2">
          <div
            type="text"
            className="bg-blue-600 shadow px-3 py-2 rounded text-blue-300 flex items-center"
          >
            <SearchIcon className="w-4" />
            <span className="ml-2 text-sm">Ask a question</span>
          </div>
        </div>
      </BottomBarWrapper>

      <div ref={cursorRef} className="absolute top-0 left-0">
        <BigCursor className="size-10 text-white invert-0 transform" />
      </div>
    </div>
  );
};

const SideBlockAnimation = () => {
  const WidgetAreaRef = useRef(null);

  useGSAP(() => {
    gsap.from(WidgetAreaRef.current, {
      y: 100,
      scale: 0.9,
      opacity: 0,
      duration: 1,
      transformOrigin: "right",
      ease: "power4.inOut",
    });
  });
  return (
    <div className="w-full h-full relative">
      <div
        ref={WidgetAreaRef}
        className="absolute bottom-3 left-[50%] translate-x-[-50%] shadow-2xl"
      >
        <WidgetArea />
      </div>
    </div>
  );
};

export default SideBlockAnimation;
