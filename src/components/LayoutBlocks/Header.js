import Container from "./Container";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useRef, useEffect } from "react";

const navItems = [
  // {
  //   label: "Product for Onboarding",
  //   href: "/",
  // },
  // {
  //   label: "Onboarding Solutions",
  //   href: "/",
  // },
  // {
  //   label: "About",
  //   href: "/",
  // },
  // {
  //   label: "Pricing",
  //   href: "/",
  // },
  {
    label: "Login",
    login: true,
    href: "https://app.knolbase.com",
  },
];
const Header = () => {
  return (
    <section className="w-full fixed top-0 z-100 bg-white/50 backdrop-blur-sm border-b border-gray-200 header">
      <Container paddedSides>
        <div className="py-6 flex items-center justify-between">
          <div className="text-2xl font-bold">
            <Image
              src="/knolbase-logo.svg"
              alt="Logo"
              width={100}
              height={100}
              className="w-[130px] h-10"
            />
          </div>
          <div>
            <ul className=" items-center gap-10 hidden md:flex">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    className="font-medium text-base text-gray-500 hover:text-gray-700"
                    href={item.href}
                    rel={item.login ? "nofollow" : ""}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li className=" header-join-waitlist">
                <Link
                  className="text-sm font-semibold text-white bg-black px-6 py-4 rounded-full hover:bg-gray-900"
                  href="/"
                >
                  Join Waitlist
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Header;
