const Container = ({
  children,
  sideBorder = true,
  paddedSides,
  sideDarkBoard,
}) => {
  return (
    <div className="w-full ">
      <div className="w-full max-w-7xl mx-auto px-4 ">
        <div
          className={`w-full relative  ${
            sideBorder ? "border-l border-r border-gray-200" : ""
          } ${paddedSides ? "px-6" : ""} ${
            sideDarkBoard ? "border-gray-700 border-l border-r" : ""
          }`}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default Container;
