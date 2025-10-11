import Container from "./Container";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className=" bg-black">
      <div className="border-b border-gray-700">
        <Container sideBorder={false} sideDarkBoard={true} paddedSides={true}>
          <div className="grid grid-cols-12">
            <div className="w-full py-12 md:col-span-4 col-span-12">
              <div className="flex items-center justify-center md:justify-start">
                <Image
                  src="/logoIconOnly.svg"
                  alt="Knolbase"
                  width={40}
                  height={40}
                />
                <span className="text-gray-100 text-xl font-bold ml-2">
                  Knolbase
                </span>
              </div>

              <div className="text-white md:text-3xl text-2xl font-medium mt-4 leading-relaxed text-center md:text-left">
                What’s stopping you from creating success for all your users?
              </div>
            </div>

            <div className="col-span-8 flex md:justify-end justify-center items-center pb-12 md:pb-0">
              <a
                href="https://tally.so/r/3EdE7q"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white font-semibold bg-gray-900 px-6 py-4 rounded-full hover:bg-gray-800 border border-gray-700"
              >
                Join Waitlist
              </a>
            </div>
          </div>
        </Container>
      </div>

      {/* Footer */}
      <Container sideBorder={false} sideDarkBoard={true} paddedSides={true}>
        <div className="flex justify-between w-full py-12">
          <div className="flex-1 flex items-center justify-center">
            <span className="text-xs text-gray-400 w-full">
              © 2025{" "}
              <a
                href="https://madebyenigma.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline hover:text-gray-700"
              >
                Made by Enigma
              </a>
              , Bangalore. All Rights Reserved
            </span>
          </div>

          <div className="max-w-lg mx-auto flex items-center justify-center mt-3">
            <a
              href="https://www.linkedin.com/company/knolbase"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/linkedin-com.svg"
                alt="Knolbase"
                className="w-4 h-4 opacity-60 hover:opacity-100 grayscale-100 hover:grayscale-50 duration-100"
              />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
