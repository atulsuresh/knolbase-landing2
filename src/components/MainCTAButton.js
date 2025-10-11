import Link from "next/link";

const MainCTAButton = ({ text = "Join Waitlist" }) => {
  return (
    <Link
      href="https://tally.so/r/3EdE7q"
      className="text-sm inline-block text-center font-semibold text-white bg-black px-6 py-4 rounded-full hover:bg-gray-900"
    >
      {text}
    </Link>
  );
};

export default MainCTAButton;
