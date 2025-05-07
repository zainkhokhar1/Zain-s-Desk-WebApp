import { TransformWrapper, TransformComponent, useControls } from "react-zoom-pan-pinch";
import { AiOutlineZoomIn, AiOutlineZoomOut } from "react-icons/ai";
import { TbZoomReset } from "react-icons/tb";

const Controls = () => {
  const { zoomIn, zoomOut, resetTransform } = useControls();

  return (
    <div className="absolute top-5 right-7 flex items-center gap-3 z-10">
      <button
        className="p-2 text-2xl bg-white/15 hover:bg-white/30 rounded-md"
        onClick={() => zoomIn()}
      >
        <AiOutlineZoomIn />
      </button>
      <button
        className="p-2 text-2xl bg-white/15 hover:bg-white/30 rounded-md"
        onClick={() => zoomOut()}
      >
        <AiOutlineZoomOut />
      </button>
      <button
        className="p-2 text-2xl bg-white/15 hover:bg-white/30 rounded-md"
        onClick={() => resetTransform()}
      >
        <TbZoomReset />
      </button>
    </div>
  );
};

const SingleImageContainer = ({ img, isFullScreen }) => {
  return isFullScreen ? (
    <div className="h-screen w-screen relative overflow-hidden">
      <TransformWrapper
        initialScale={1}
        minScale={1}
        maxScale={5}
        centerOnInit
        limitToBounds={true}
        limitToWrapper={true}
      >
        {({ zoomIn, zoomOut, resetTransform }) => (
          <>
            <Controls />
            <TransformComponent>
              <img
                src={img}
                alt="Gallery"
                className="object-contain h-screen w-screen"
              />
            </TransformComponent>
          </>
        )}
      </TransformWrapper>
    </div>
  ) : (
    <div className="h-[479px] w-full flex justify-center items-center bg-[#1f1f1f]/70 rounded-lg overflow-hidden">
      <img
        src={img}
        alt="Gallery"
        className="object-contain h-full w-full"
      />
    </div>
  );
};

export default SingleImageContainer;
