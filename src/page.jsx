import React from "react";
import { BsStar } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { useState, useEffect } from "react";

const ProductPage = () => {
  const productImages = [
    "/images/img (2).jpg",
    "/images/img (3).jpg",
    "/images/img (4).jpg",
    "/images/img (5).jpg",
    "/images/img (6).jpg",
    "/images/img (2).jpg",
    "/images/img (3).jpg",
  ];

  const brandLogos = [
    "/images/img (2).jpg",
    "/images/img (3).jpg",
    "/images/img (4).jpg",
    "/images/img (5).jpg",
    "/images/img (6).jpg",
  ];
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 800);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div
      className="bg-black text-white min-h-screen font-sans min-w-screen container overflow-hidden"
      style={{ minWidth: isMobile ? "200vw" : "100vw" }}
    >
      <div className="bg-black text-black min-h-screen font-sans mt-5">
        <div className="relative mx-auto mt-10 pt-16 bg-lime-300 w-[90%] h-[40%] rounded-[40px] overflow-hidden neon-container">
          <div className="absolute top-0 right-0 h-[70px] w-56 bg-black rounded-bl-[40px] z-10"></div>
          <button className="absolute top-1 left-4 p-15 py-3 border border-white text-white bg-black rounded-2xl hover:bg-white hover:text-black transition z-30">
            Logo
          </button>
          <button className="absolute top-1 right-3 px-5 py-3 border border-white text-white bg-black rounded-2xl hover:bg-white hover:text-black transition z-30">
            <span className="mr-1">➤</span> Let’s Connect
          </button>

          {/* NAVBAR */}
          <div className="bg-lime-300 border border-black rounded-3xl px-4 sm:px-6 md:px-8 py-4 flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 font-semibold max-w-[90%] sm:max-w-[50%] mx-auto -mt-14">
            <a href="#" className="text-sm sm:text-base">
              About us
            </a>
            <a href="#" className="text-sm sm:text-base">
              Services
            </a>
            <a href="#" className="text-sm sm:text-base">
              Pricing
            </a>
            <a href="#" className="text-sm sm:text-base">
              Contact us
            </a>
          </div>

          {/* PRODUCT IMAGES */}
          <div className="relative h-[320px] mt-12 flex justify-center">
            <img
              src="/images/img2.jpg"
              alt="Product 1"
              className="absolute w-[260px] rounded-xl shadow-xl rotate-[20deg] right-[28%] top-0"
            />
            <img
              src="/images/img1.jpg"
              alt="Product 2"
              className="absolute w-[260px] rounded-xl shadow-xl rotate-[10deg] right-[16%] top-[80px]"
            />
          </div>

          {/* CONTACT SECTION */}
          <div className="max-w-xl mt-36 px-10 text-sm leading-relaxed">
            <h3 className="flex items-center gap-2 text-lg font-semibold mb-4">
              <span className="mr-1">➤</span> Contact us
            </h3>
            {/* Horizontal Line */}
            <hr className="border-t-2 border-black mb-2 w-full" />
            <p className="mb-10">
              Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque
              faucibus ex sapien vitae pellentesque sem placerat. In id cursus
              mi pretium tellus duis convallis. Pulvinar vivamus fringilla lacus
              nec metus bibendum egestas.
            </p>
          </div>

          <div className="absolute bottom-1 right-3 bg-black border-2 border-white rounded-2xl flex gap-2 p-2 shadow-lg z-50">
            {["I", "X", "F", "W"].map((icon, i) => (
              <button
                key={i}
                className="w-8 h-8 bg-white text-black border border-black rounded-full hover:bg-black hover:text-lime-300 transition flex items-center justify-center font-bold text-sm"
                title={icon}
              >
                {icon}
              </button>
            ))}
          </div>
        </div>

        {/* SOCIAL ICONS */}
        {/* SOCIAL ICONS (Fixed Bottom Right Corner) */}
      </div>
      <div className=" ml-0 font-sans bg-black text-white min-h-screen">
        <div className="max-w-6xl mx-auto px-6 py-12 md:px-16 md:py-16">
          {/* Top Text Section */}
          <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-10">
            <h2 className="text-[38px] md:text-[44px] leading-tight font-bold">
              Something has <br /> you covered{" "}
              <span className="inline-block">🍳</span>
            </h2>
            <p className="text-gray-300 text-[16px] leading-6 max-w-md">
              Hungry? Too tired to cook? Have friends over, or <br />
              do you simply need to chop life? Download our <br />
              app, and let's deliver happiness to your <br />
              doorstep in minutes.
            </p>
          </div>

          {/* Explore Categories Section */}
          <div className="bg-[#b4fd0a] text-black p-8 rounded-xl max-w-5xl mx-auto w-full">
            <h3 className="text-9xl md:text-7xl font-bold mb-10">
              Explore categories
            </h3>

            <div className="flex flex-col md:flex-row items-start gap-10">
              {/* Left: Image & Paragraph */}
              <div className="flex-1">
                {/* Overlapping Images */}
                <div className="relative h-[220px] w-full flex justify-center ml-72">
                  <img
                    src="/images/img (3).jpg"
                    alt="Product 1"
                    className="absolute w-[180px] transform rotate-[-25deg] top-0 left-[10%] shadow-xl rounded-xl"
                  />
                  <img
                    src="/images/img (2).jpg"
                    alt="Product 2"
                    className="absolute w-[200px] transform rotate-[-5deg] top-20 left-[25%] shadow-xl rounded-xl"
                  />
                </div>

                {/* Paragraph under image */}
                <p className="mt-[220px] text-[15px] leading-6 max-w-sm">
                  We invest in building long-term, <br />
                  sustainable relationships and support <br />
                  our projects in their growth journey with <br />
                  our services, industry expertise and <br />
                  network.
                </p>
              </div>

              {/* Right Side Text */}
              <div className="flex-1 flex items-start">
                <div className="ml-44">
                  <h4 className="text-[20px] font-bold mb-3">
                    Our world-class market making
                  </h4>
                  <p className="text-[15px] leading-6">
                    services are proven to help local and <br />
                    emerging exchanges win traders and <br />
                    gain market-leading positions of up to <br />
                    90% market dominance.
                  </p>
                </div>
              </div>
            </div>

            {/* Footer Dots */}
            <div className="flex justify-between items-center mt-10">
              {/* Dots */}
              <div className="flex gap-2">
                <div className="w-6 h-6 bg-white rounded-full text-black text-xs flex items-center justify-center">
                  <CiLocationOn />
                </div>

                <div className="w-6 h-6 bg-black rounded-full text-[#b4fd0a] text-xs flex items-center justify-center">
                  01
                </div>
                <div className="w-6 h-6 bg-black rounded-full text-[#b4fd0a] text-xs flex items-center justify-center">
                  02
                </div>
                <div className="w-6 h-6 bg-black rounded-full text-[#b4fd0a] text-xs flex items-center justify-center">
                  03
                </div>
                <div className="w-6 h-6 bg-white rounded-full text-black text-xs flex items-center justify-center">
                  <BsStar />
                </div>
              </div>

              {/* Arrows */}
              <div className="flex gap-3">
                <button className="w-6 h-6 bg-black text-[#b4fd0a] text-xs rounded-full flex items-center justify-center">
                  ←
                </button>
                <button className="w-6 h-6 bg-black text-[#b4fd0a] text-xs rounded-full flex items-center justify-center">
                  →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-black text-lime-300 font-sans min-h-screen">
        {/* OUR PRODUCT */}
        <div className="bg-black text-white px-6 py-16 overflow-x-hidden">
          {/* Heading Section */}
          <div className="relative mb-12 flex justify-center">
            <div>
              <h1 className="text-[#b4fd0a] text-[90px] md:text-[120px] leading-[100px] text-left">
                OUR <br /> PRODUCT
              </h1>
            </div>

            {/* Positioned Text on Right */}
            <p className="absolute top-2 right-4 text-[16px] uppercase text-green-200 leading-4 text-left mt-22 mr-28  ">
              Along the way <br />
              Amazing product we <br />
              have delivered since 2020
            </p>
          </div>

          {/* Image Cards in a horizontal row */}
          <div className="flex justify-center gap-8 overflow-x-auto px-4 pb-4 no-scrollbar items-stretch bg-black">
            {/* Image 1 - Taller, aligned top */}
            <img
              src="/images/img (5).jpg"
              alt="Product 1"
              className="w-[180px] h-[260px] object-cover rounded-xl shadow-lg transition-transform duration-300 hover:scale-105 self-start"
            />

            {/* Image 2 - Shorter, aligned bottom */}
            <img
              src="/images/img (4).jpg"
              alt="Product 2"
              className="w-[180px] h-[220px] mt-auto object-cover rounded-xl shadow-lg transition-transform duration-300 hover:scale-105 self-end"
            />

            {/* Image 3 - Taller, aligned top */}
            <img
              src="/images/img (3).jpg"
              alt="Product 3"
              className="w-[180px] h-[260px] object-cover rounded-xl shadow-lg transition-transform duration-300 hover:scale-105 self-start"
            />

            {/* Image 4 - Shorter, aligned bottom */}
            <img
              src="/images/img (2).jpg"
              alt="Product 4"
              className="w-[180px] h-[220px] mt-auto object-cover rounded-xl shadow-lg transition-transform duration-300 hover:scale-105 self-end"
            />

            {/* Image 5 - Taller, aligned top */}
            <img
              src="/images/img (6).jpg"
              alt="Product 5"
              className="w-[180px] h-[260px] object-cover rounded-xl shadow-lg transition-transform duration-300 hover:scale-105 self-start"
            />
          </div>
        </div>

        {/* TRUSTED BY */}
        <div className="bg-white text-center py-8">
          <p className="text-black text-base mb-5">Trusted by 45M+ users</p>
          <div className="flex justify-center flex-wrap gap-16">
            {brandLogos.map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`Brand ${index + 1}`}
                className="h-[90px] w-[80px] grayscale"
              />
            ))}
          </div>
        </div>

        {/* OUR SERVICES */}
        <div className="px-5 py-10">
          {/* <div className="bg-black px-4 py-10 flex justify-center">
            <div className="relative "> */}
          {/* Heading */}
          {/* <h1 className="text-[#b4fd0a] text-[60px] md:text-[90px] lg:text-[110px] leading-[1.1] font-semibold">
                OUR <br /> SERVICES
              </h1> */}

          {/* Subtext aligned bottom right of the heading */}
          {/* </div>
            <div className="  absolute left-[800px] text-lime-300 !text-[30px] mt-6 sm:text-base font-medium text-left">
              Work together, <br /> wherever you work
            </div>
          </div> */}

          <div className="relative mb-12 flex justify-center">
            <div>
              <h1 className="text-[#b4fd0a] text-[90px] md:text-[120px] leading-[100px] text-left">
                OUR <br /> SERVICES
              </h1>
            </div>

            {/* Positioned Text on Right */}
            <p className="absolute top-2 right-4 text-[16px] uppercase text-green-200 leading-4 text-left mt-40 mr-28 font-bold  ">
              Work together, <br /> wherever you work
            </p>
          </div>

          <div className="flex justify-center flex-wrap gap-8 pt-8">
            <div className="relative w-[250px] h-[450px] rounded-[20px] bg-lime-300 overflow-hidden custom-clip-box">
              {/* Top-right small black box */}
              <div className="absolute top-2 right-2 w-[40px] h-[25px] border border-white rounded-md bg-black z-10"></div>
            </div>{" "}
            <div className="relative w-[250px] h-[450px] rounded-[20px] bg-lime-300 overflow-hidden custom-clip-box">
              {/* Top-right small black box */}
              <div className="absolute top-2 right-2 w-[40px] h-[25px] border border-white rounded-md bg-black z-10"></div>
            </div>{" "}
            <div className="relative w-[250px] h-[450px] rounded-[20px] bg-lime-300 overflow-hidden custom-clip-box">
              {/* Top-right small black box */}
              <div className="absolute top-2 right-2 w-[40px] h-[25px] border border-white rounded-md bg-black z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
