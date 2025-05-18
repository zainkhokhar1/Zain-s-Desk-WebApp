import React, { useContext, useState } from "react";
import { IoAddOutline, IoSearchOutline } from "react-icons/io5";
import LinkCard from "./LinkCard"; 
import ScrollContainer from "react-indiana-drag-scroll";
import linkContext from "../../context/CreateContext";
import Popup from "../quick-links/Popup";

const QuickLinks = () => {
  const [options, setOptions] = useState(1);
  const {createLink,setCreateLink} = useContext(linkContext);

  const data = {
    social: [
      {
        name: "Youtube",
        image:
          "https://www.pcworld.com/wp-content/uploads/2023/10/youtube-disappearing.jpg?quality=50&strip=all",
        createdAt: "20 june 2025",
        url: "https://www.youtube.com/",
      },
      {
        name: "Instagram",
        image:
          "https://images.unsplash.com/photo-1611262588024-d12430b98920?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aW5zdGFncmFtfGVufDB8fDB8fHww",
        createdAt: "20 june 2025",
        url: "https://www.instagram.com/",
      },
      {
        name: "Google",
        image:
          "https://play-lh.googleusercontent.com/1-hPxafOxdYpYZEOKzNIkSP43HXCNftVJVttoo4ucl7rsMASXW3Xr6GlXURCubE1tA=w3840-h2160-rw",
        createdAt: "20 feb 2020",
        url: "https://www.google.com/",
      },
      {
        name: "Facebook",
        createdAt: "20 feb 2020",
        url: "https://www.facebook.com/",
      },
    ],
    coding: [
      {
        name: "Whatsapp",
        image:
          "https://www.huaweicentral.com/wp-content/uploads/2021/09/whatsapp-1.jpg",
        createdAt: "20 agust 2023",
        url: "https://web.whatsapp.com/",
      },
      {
        name: "Twitter",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/X_logo.jpg/1200px-X_logo.jpg",
        createdAt: "20 June 2022",
        url: "https://x.com/",
      },
    ],
  };

  return (
    <div className="bg-[#1C1C1C] border max-xl:order-1 flex flex-col border-white/5 max-lg:col-span-6 lg:col-span-4 rounded-xl min-h-71 p-3 max-lg:order-1 lg:order-1">
      {/* header section */}
      <section className="flex items-center justify-between">
        <h1 className="text-xl font-semibold relative -top-2">
          Quick Link Access
        </h1>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1 p-[5px] bg-[#2D2D2D] rounded-full">
            <span
              onClick={() => setOptions(1)}
              className={`font-medium ${
                options == 1
                  ? "bg-white text-black/80"
                  : "bg-transparent hover:bg-white/5"
              } rounded-full cursor-pointer duration-200 border border-[#2C2C2C]/20 px-3 text-sm py-[3px]`}
            >
              Social
            </span>
            <span
              onClick={() => setOptions(2)}
              className={`font-medium ${
                options == 2
                  ? "bg-white text-black/80"
                  : "bg-transparent hover:bg-white/5 hover:text-[#FEFEFE]"
              } cursor-pointer duration-200 border border-[#2C2C2C]/20 px-3 text-sm py-[3px] rounded-full `}
            >
              Coding
            </span>
          </div>

          {/* search button */}
          <span className="p-1 rounded-full bg-white/5 hover:bg-white/10 cursor-pointer border border-white/10 duration-200">
            <IoSearchOutline className="text-xl text-white/70 group-hover:text-white duration-100" />
          </span>

          {/* add button */}
          <span className="p-1 rounded-full bg-white/5 hover:bg-white/10 cursor-pointer border border-white/10 duration-200" onClick={() => setCreateLink(!createLink)}>
            <IoAddOutline className="text-xl text-white/70 group-hover:text-white duration-100" />
          </span>
        </div>
      </section>

      {/* after the header section */}
      <ScrollContainer className="mt-2 overflow-x-auto scrollbar-hide">
        <div className="flex items-center gap-1 pb-0">
          {options === 1
            ? data.social?.map((singleData, index) => {
                return (
                  <div key={index} className="flex-none">
                    <LinkCard
                      img={singleData.image}
                      name={singleData.name}
                      createdAt={singleData.createdAt}
                      link={singleData.url}
                    />
                  </div>
                );
              })
            : data.coding?.map((singleData, index) => {
                return (
                  <div key={index} className="flex-none">
                    <LinkCard
                      img={singleData.image}
                      name={singleData.name}
                      createdAt={singleData.createdAt}
                      link={singleData.url}
                    />
                  </div>
                );
              })}
        </div>
      </ScrollContainer>
      <Popup />
    </div>
  );
};

export default QuickLinks;
