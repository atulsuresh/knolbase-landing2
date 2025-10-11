import Container from "../LayoutBlocks/Container";
import MainCTAButton from "../MainCTAButton";

const PageHeaderA = ({ title, subheading }) => {
  return (
    <Container>
      <div className="max-w-4xl mx-auto relative text-center pt-32 z-50 pb-32 mt-20">
        <div className="z-50">
          <h1 className="text-4xl md:text-6xl font-medium text-gray-900 mb-6 leading-18 tracking-tight">
            {title}
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto leading-8 tracking-tight">
            {subheading}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <MainCTAButton />
          </div>
        </div>
      </div>

      <div
        className="absolute top-0 left-0 w-full h-full z-1"
        style={{
          backgroundImage: `url('/images/noise.svg')`,
        }}
      ></div>

      <div
        style={{
          backgroundImage: `url('/images/im-stripe-2.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className="absolute top-0 left-0 w-full h-full bg-white z-0"
      ></div>
    </Container>
  );
};

export default PageHeaderA;
