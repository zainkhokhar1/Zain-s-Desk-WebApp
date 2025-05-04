

const ImageContainer = ({ img, isFullScreen }) => {

  return (
    <div
      className={`${
        isFullScreen ? "h-screen w-screen" : "h-[479px] w-full"
      } flex justify-center items-center bg-[#1f1f1f]/70 rounded-lg overflow-hidden`}
    >
      <img
        src={img}
        alt="Gallery"
        className="object-contain w-full h-full transition-all duration-300"
      />
    </div>
  );
};

export default ImageContainer;
