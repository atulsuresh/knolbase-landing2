import { Geist, Geist_Mono, Instrument_Sans } from "next/font/google";
import PropTypes from "prop-types";
const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
  subsets: ["latin"],
});

const MainLayout = ({ children, title }) => {
  return (
    <div className={` ${instrumentSans.className}`}>
      <main className="relative">{children}</main>
    </div>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
};

export default MainLayout;
