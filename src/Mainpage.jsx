import React from "react";
import "./CornerBlocks.css"; // Import the CSS file for styles

const CornerBlocks = () => {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-start">
      <header className="max-w-[1200px] w-full flex justify-between items-center px-6 mt-8 mb-[-52px]">
        <button className="btn rounded-b-md border border-white ">logo</button>
        <button className="btn connect-btn border border-white">
          Let's Connect
        </button>
      </header>

      <div className="relative w-[1230px] h-[500px] bg-lime-400 rounded-[20px] ml-5">
        {/* Corner blocks */}
        <div className="block block-br"></div>
        <div className="block block-tl"></div>
        <div className="block block-tr"></div>

        {/* Navbar */}
        <nav className="bg-lime-400 border border-black rounded-full py-2 px-4 flex gap-2 justify-center mx-[214px] my-4">
          <a
            href="#"
            className="px-6 py-3 text-black no-underline rounded-full font-medium text-base hover:bg-black/10"
          >
            About us
          </a>
          <a
            href="#"
            className="px-6 py-3 text-black no-underline rounded-full font-medium text-base hover:bg-black/10"
          >
            Services
          </a>
          <a
            href="#"
            className="px-6 py-3 text-black no-underline rounded-full font-medium text-base hover:bg-black/10"
          >
            Pricing
          </a>
          <a
            href="#"
            className="px-6 py-3 text-black no-underline rounded-full font-medium text-base hover:bg-black/10"
          >
            Contact us
          </a>
        </nav>

        {/* Description */}
        <div className="max-w-xl mt-48 px-2 text-sm leading-relaxed">
          <h3 className=" items-center gap-2 text-lg font-semibold mb-10">
            <span className="mr-1">➤</span> Contact us
            <hr className="flex-grow ml-2 border-t border-black" />
          </h3>
          <p className="mb-10">
            Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque
            faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi
            pretium tellus duis convallis. Pulvinar vivamus fringilla lacus nec
            metus bibendum egestas.
          </p>
        </div>
      </div>

      {/* Social Icons */}
      <div className="flex justify-end w-full px-11 -mt-14 z-30">
        <div className="bg-white border border-sky-300 rounded-full px-6 py-4 flex items-center gap-5">
          <a href="#">@</a>
          <a href="#">𝕏</a>
          <a href="#">f</a>
          <a href="#">i</a>
        </div>
      </div>
    </div>
  );
};

export default CornerBlocks;
