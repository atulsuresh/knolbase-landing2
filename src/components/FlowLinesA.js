import { useRef, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/dist/MotionPathPlugin";

// Register the plugin
gsap.registerPlugin(MotionPathPlugin);

const FlowLinesA = () => {
  const containerRef = useRef(null);
  const glow1Ref = useRef(null);
  const glow2Ref = useRef(null);
  const glow3Ref = useRef(null);
  const glow4Ref = useRef(null);
  const glow5Ref = useRef(null);

  const line1Ref = useRef(null);
  const line2Ref = useRef(null);
  const line3Ref = useRef(null);
  const line4Ref = useRef(null);
  const line5Ref = useRef(null);

  useGSAP(
    () => {
      const linesRefs = [line1Ref, line2Ref, line3Ref, line4Ref, line5Ref];
      const glowsRefs = [glow1Ref, glow2Ref, glow3Ref, glow4Ref, glow5Ref];

      glowsRefs.forEach((glowRef, index) => {
        gsap.set(glowRef.current, {
          motionPath: {
            path: linesRefs[index].current,
            autoRotate: false,
            alignOrigin: [0.5, 0.5],
          },
        });

        gsap.to(glowRef.current, {
          motionPath: {
            path: linesRefs[index].current,
            autoRotate: false,
            alignOrigin: [0.5, 0.5],
          },
          duration: 10,
          delay: index * 0.4,
          ease: "power4.inOut",
          repeat: -1,
          yoyo: false,
        });

        // Create timeline for opacity and rx/ry animation
        const tl = gsap.timeline({ repeat: -1, delay: index * 0.4 });

        tl.to(glowRef.current, {
          opacity: 0,
          attr: { rx: 0, ry: 0 },
          duration: 0.5,
        })
          .to(glowRef.current, {
            opacity: 0.5,
            attr: { rx: 3, ry: 3 },
            duration: 4,
            ease: "power2.in",
          })
          .to(glowRef.current, {
            attr: { rx: 3, ry: 1 },
            opacity: 1,
            duration: 1,
            ease: "power2.in",
          })
          .to(glowRef.current, {
            attr: { rx: 3, ry: 2 },
            duration: 3,
            opacity: 0,
          })
          .to(glowRef.current, {
            opacity: 0,
            attr: { rx: 0, ry: 0 },
            duration: 1.5,
            ease: "power2.in",
          });
      });
    },
    { scope: containerRef }
  );

  return (
    <svg
      ref={containerRef}
      id="flowlinesa-svg"
      width={731}
      height={352}
      viewBox="0 0 731 352"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        id="flowlinesa-bg"
        d="M1 1L280.977 93.1927C335.826 111.254 395.021 111.254 449.871 93.1927L729.848 1V350.661L456.141 253.022C397.473 232.094 333.374 232.094 274.707 253.022L1 350.661V1Z"
        fill="url(#flowlinesa-gradient)"
      />
      <path
        id="flowlinesa-bottom-outline"
        d="M729.848 350.661L456.141 253.022C397.473 232.094 333.374 232.094 274.707 253.022L1 350.661"
        stroke="url(#flowlinesa-stroke-gradient)"
        opacity={0.6}
      />
      <path
        id="flowlinesa-top-outline"
        d="M1 1L280.977 93.1927C335.826 111.254 395.021 111.254 449.871 93.1927L729.848 1"
        stroke="url(#flowlinesa-stroke-gradient)"
        opacity={0.6}
      />
      <path
        ref={line1Ref}
        id="flowlinesa-inner1"
        d="M1 40.5894L287.402 127.039C338.283 142.397 392.565 142.397 443.445 127.039L729.848 40.5894"
        stroke="url(#flowlinesa-stroke-gradient)"
        opacity={0.3}
      />
      <path
        ref={line2Ref}
        id="flowlinesa-inner2"
        d="M1 101.376L264.937 148.626C331.521 160.546 399.694 160.54 466.276 148.609L729.848 101.376"
        stroke="url(#flowlinesa-stroke-gradient)"
        opacity={0.3}
      />
      <path
        ref={line5Ref}
        id="flowlinesa-inner3"
        d="M1 311.071L287.402 224.622C338.283 209.264 392.565 209.264 443.445 224.622L729.848 311.071"
        stroke="url(#flowlinesa-stroke-gradient)"
        opacity={0.3}
      />
      <path
        ref={line4Ref}
        id="flowlinesa-inner4"
        d="M1 249.284L264.937 202.034C331.521 190.114 399.694 190.12 466.276 202.052L729.848 249.284"
        stroke="url(#flowlinesa-stroke-gradient)"
        opacity={0.3}
      />
      <path
        id="flowlinesa-midline"
        ref={line3Ref}
        d="M1 176.567L729.848 176.567"
        stroke="url(#flowlinesa-stroke-gradient)"
        opacity={0.3}
      />

      {/* Animated glow circles */}
      <ellipse
        ref={glow1Ref}
        rx="3"
        ry="3"
        fill="url(#glow-gradient)"
        filter="url(#glow-filter)"
        opacity="0"
      />
      <ellipse
        ref={glow2Ref}
        rx="3"
        ry="3"
        fill="url(#glow-gradient)"
        filter="url(#glow-filter)"
        opacity="0"
      />
      <ellipse
        ref={glow3Ref}
        rx="3"
        ry="3"
        fill="url(#glow-gradient)"
        filter="url(#glow-filter)"
        opacity="0"
      />
      <ellipse
        ref={glow4Ref}
        rx="3"
        ry="3"
        fill="url(#glow-gradient)"
        filter="url(#glow-filter)"
        opacity="0"
      />
      <ellipse
        ref={glow5Ref}
        rx="3"
        ry="3"
        fill="url(#glow-gradient)"
        filter="url(#glow-filter)"
        opacity="0"
      />
      <defs>
        <linearGradient
          id="flowlinesa-gradient"
          x1={1.00001}
          y1={169.376}
          x2={729.645}
          y2={154.602}
          gradientUnits="userSpaceOnUse"
        >
          <stop id="flowlinesa-stop1" stopColor="#FDF4FF" stopOpacity={0} />
          <stop
            id="flowlinesa-stop2"
            offset={0.3125}
            stopOpacity={0.6}
            stopColor="#FBE7FF"
          />
          <stop
            id="flowlinesa-stop3"
            offset={0.735577}
            stopOpacity={0.6}
            stopColor="#FBE7FF"
          />
          <stop
            id="flowlinesa-stop4"
            offset={1}
            stopColor="#FDF4FF"
            stopOpacity={0}
          />
        </linearGradient>

        <linearGradient
          id="flowlinesa-stroke-gradient"
          x1="1"
          y1="285.661"
          x2="729.848"
          y2="285.661"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.115385" stop-color="#F0ABFC" stop-opacity="0" />
          <stop offset="0.423077" stop-color="#F0ABFC" />
          <stop offset="0.629808" stop-color="#F0ABFC" />
          <stop offset="0.951923" stop-color="#F0ABFC" stop-opacity="0" />
        </linearGradient>

        {/* Glow gradient for animated circles */}
        <linearGradient
          id="glow-gradient"
          x1="0"
          y1="0"
          x2="1"
          y2="0"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#F0ABFC" />
          <stop offset="0" stop-color="#F0ABFC" opacity={0} />
          <stop offset="0.572115" stop-color="#DF28FF" />
          <stop offset="1" stop-color="#F0ABFC" opacity={0.1} />
        </linearGradient>

        {/* Glow filter */}
        <filter id="glow-filter" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
    </svg>
  );
};

export default FlowLinesA;
