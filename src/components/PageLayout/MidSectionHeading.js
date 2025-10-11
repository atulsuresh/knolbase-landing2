import Container from "../LayoutBlocks/Container";

const MidSectionHeading = ({ title, subheading }) => {
  return (
    <Container>
      <div className="text-center py-24  relative z-50">
        <h2 className="text-4xl font-bold text-gray-900 mb-4 leading-12 max-w-3xl mx-auto">
          {title}
        </h2>
      </div>

      <div
        className="absolute top-0 left-0 w-full h-full z-10"
        style={{
          backgroundImage: `url('/images/noise.svg')`,
        }}
      />
    </Container>
  );
};

export default MidSectionHeading;
