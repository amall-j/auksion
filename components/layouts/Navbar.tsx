"use client";

import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { IoGlobeOutline } from "react-icons/io5";
import { IoIosStar } from "react-icons/io";
import { Gi3dHammer } from "react-icons/gi";
import { BsChevronLeft, BsChevronRight, BsStars } from "react-icons/bs";
import { FaFire } from "react-icons/fa";

// export default function Navbar() {

const stars = [{}, {}, {}, {}];
const filteredCategry = [
  { icon: <Gi3dHammer />, text: "This week", categoriy: "thisWeek" },
  { icon: <BsStars />, text: "For you", categoriy: "Art" },
  { icon: <FaFire />, text: "Trading", categoriy: "trading" },
  { icon: <IoIosStar />, text: "Art", categoriy: "art" },
  { icon: <IoIosStar />, text: "Interios", categoriy: "interios" },
  { icon: <IoIosStar />, text: "Jewellery", categoriy: "jewellery" },
  { icon: <IoIosStar />, text: "Watches", categoriy: "watches" },
  { icon: <IoIosStar />, text: "Fashion", categoriy: "fashion" },
  { icon: <IoIosStar />, text: "Coins & Stamps", categoriy: "coinsStamps" },
  { icon: <IoIosStar />, text: "Comics", categoriy: "comics" },
  { icon: <IoIosStar />, text: "Car & Bikes", categoriy: "carBikes" },
  { icon: <IoIosStar />, text: "Asian & Tribal", categoriy: "asianTribal" },
  { icon: <IoIosStar />, text: "Trading cards", categoriy: "tradingCards" },
  { icon: <IoIosStar />, text: "Toys & Models", categoriy: "toysModels" },
  { icon: <IoIosStar />, text: "Archaeology", categoriy: "archaeology" },
  { icon: <IoIosStar />, text: "Sports", categoriy: "sports" },
  {
    icon: <IoIosStar />,
    text: "Music,Movies & Cameras",
    categoriy: "musicMoviesCameras",
  },
  { icon: <IoIosStar />, text: "Books & History", categoriy: "booksHistory" },
];
// const [showNavbar, setShowNavbar] = useState(true);
// const [lastScrollY, setLastScrollY] = useState(0);
// const [navbarHidden, setNavbarHidden] = useState(false);
// useEffect(() => {
//   const handleScroll = () => {
//     const currentScrollY = window.scrollY;

//     // Scroll down: hide navbar
//     if (currentScrollY > lastScrollY && currentScrollY > 90) {
//       setShowNavbar(false);
//       setNavbarHidden(true);
//     }
//     // Scroll up: show navbar
//     else if (currentScrollY < lastScrollY) {
//       setShowNavbar(true);
//       setNavbarHidden(false);
//     }

//     setLastScrollY(currentScrollY);
//   };

//   window.addEventListener("scroll", handleScroll);
//   return () => window.removeEventListener("scroll", handleScroll);
// }, [lastScrollY]);

//   return (
//     <div className="w-full relative">
//       {/* 1 – Top Navbar */}
//       <div
//         className={`sticky top-2 left-0 w-full bg-white z-50 h-[60px] flex items-center transition-all duration-300 transform ${
//           showNavbar ? "translate-y-0" : "-translate-y-full"
//         }`}
//       >
// <div className="container px-10 mx-auto flex justify-between items-center">
//   <img src="./logo.svg" alt="" />
//   <h1 className="flex items-center justify-center text-sm font-medium">
//     Categrys
//     <span className="text-blue-500">
//       <MdOutlineKeyboardArrowDown />
//     </span>
//   </h1>
//   <div className="relative rounded-lg overflow-hidden bg-[#f0f1f5]">
//     <input
//       type="text"
//       placeholder="Search for brand, model, artist..."
//       className="w-[453px] h-[52px] border-none outline-none text-[16px] font-medium px-14"
//     />
//     <div className="absolute top-[22%] text-blue left-2">
//       <CiSearch size={30} />
//     </div>
//   </div>
//   <h1 className="hover:underline transition-all text-sm font-medium">
//     How it works?
//   </h1>
//   <h1 className="text-sm font-medium">Help</h1>
//   <div className="text-blue">
//     <MdOutlineFavoriteBorder size={27} />
//   </div>
//   <div className="text-blue flex items-center gap-1">
//     <IoGlobeOutline size={27} />
//     <p className="font-semibold text-[16px] text-black">EN</p>
//   </div>
//   <button className="w-[84px] h-[52px] bg-blue text-white text-sm font-medium">
//     Sign in
//   </button>
// </div>
//       </div>

//       {/* 2 – news text */}
//       <div
//         className={` bg-gray z-40 h-[35px] mt-6 flex items-center transition-all duration-300 transform `}
//       >
// <div className="w-full mx-auto flex justify-center items-center gap-3">
//   Excellent
//   <div className="flex items-center text-white gap-0.5">
//     {stars.map((it, i) => (
//       <div
//         key={i}
//         className="bg-green-500 w-4.5 h-4.5 flex items-center justify-center"
//       >
//         <IoIosStar size={12} />
//       </div>
//     ))}

//     <div
//       style={{
//         background:
//           "linear-gradient(to right, #22c55e 50%, #d1d5db 50%)",
//       }}
//       className="w-4.5 h-4.5 flex items-center justify-center"
//     >
//       <IoIosStar size={12} />
//     </div>
//   </div>
//   <p className="underline">121,555 reviews on</p>
//   <h1 className="text-sm font-medium flex items-center gap-1">
//     <span className="text-[#22c55e]">
//       <IoIosStar size={20} />
//     </span>
//     TrustPilot
//   </h1>
// </div>
//       </div>

//       {/* 3 – Sub filters */}
//       <div className="bg-red-500 border-b mt-8 z-[1000] h-[120vh]">
//         <div className="container mx-auto flex gap-4">
//           <div className={`grid grid-cols-${filteredCategry.length / 2}`}>
//             <div className="bg-red-500 h-4 w-full">ss</div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

export default function ScrollCards() {
  const controls = useAnimation();
  const [slider, setSlider] = useState(false);
  const [scrolled, setscrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 75) {
        setscrolled(true);
        controls.start({
          y: -60,
          opacity: 0,
          transition: { duration: 3 },
        });
      } else {
        setscrolled(false);

        controls.start({
          y: 0,
          opacity: 1,
          transition: { duration: 0.2 },
        });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls]);
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: false,
    drag: false,
  });

  return (
    <div className="relative">
      {/* 1-card */}
      <div
        className={`sticky top-2 transition-transform transition-all duration-200   w-full z-10 bg-white ${
          scrolled ? "-translate-y-15" : "translate-y-0"
        } `}
      >
        <div className="container px-10 mx-auto flex justify-between items-center">
          <img src="./logo.svg" alt="" />
          <h1 className="flex items-center justify-center text-sm font-medium">
            Categrys
            <span className="text-blue-500">
              <MdOutlineKeyboardArrowDown />
            </span>
          </h1>
          <div className="relative rounded-lg overflow-hidden bg-[#f0f1f5]">
            <input
              type="text"
              placeholder="Search for brand, model, artist..."
              className="w-[453px] h-[52px] border-none outline-none text-[16px] font-medium px-14"
            />
            <div className="absolute top-[22%] text-blue left-2">
              <CiSearch size={30} />
            </div>
          </div>
          <h1 className="hover:underline transition-all text-sm font-medium">
            How it works?
          </h1>
          <h1 className="text-sm font-medium">Help</h1>
          <div className="text-blue">
            <MdOutlineFavoriteBorder size={27} />
          </div>
          <div className="text-blue flex items-center gap-1">
            <IoGlobeOutline size={27} />
            <p className="font-semibold text-[16px] text-black">EN</p>
          </div>
          <button className="w-[84px] h-[52px] bg-blue text-white text-sm font-medium">
            Sign in
          </button>
        </div>
      </div>

      {/* 2-card */}
      <div className="my-4 py-2 bg-gray w-full">
        <div className="w-full mx-auto flex justify-center items-center gap-3">
          Excellent
          <div className="flex items-center text-white gap-0.5">
            {stars.map((it, i) => (
              <div
                key={i}
                className="bg-green-500 w-4.5 h-4.5 flex items-center justify-center"
              >
                <IoIosStar size={12} />
              </div>
            ))}

            <div
              style={{
                background:
                  "linear-gradient(to right, #22c55e 50%, #d1d5db 50%)",
              }}
              className="w-4.5 h-4.5 flex items-center justify-center"
            >
              <IoIosStar size={12} />
            </div>
          </div>
          <p className="underline">121,555 reviews on</p>
          <h1 className="text-sm font-medium flex items-center gap-1">
            <span className="text-[#22c55e]">
              <IoIosStar size={20} />
            </span>
            TrustPilot
          </h1>
        </div>
      </div>

      {/* Katta card */}
      <div className=" h-25 sticky top-0 mt-2 w-full">
        <div className="container mx-auto flex justify-end relative">
          <div ref={sliderRef} className="keen-slider  ">
            <div className="keen-slider__slide   h-20   text-xl gap-3 grid grid-cols-11">
              {filteredCategry.slice(0, 11).map((c, index) => (
                <div
                  className="group border-b-2 border-blue w-[85%]  flex items-center justify-center flex-col"
                  key={index}
                >
                  <div className="w-">{c.icon}</div>
                  <h1>{c.text}</h1>{" "}
                </div>
              ))}
            </div>
            <div className="keen-slider__slide  bg-green-500 h-15 grid grid-cols-8 gap-3 text-white text-xl">
              <div className="bg-blue">1</div>
              <div className="bg-blue">1</div>
              <div className="bg-blue">1</div>
              <div className="bg-blue">1</div>
              <div className="bg-blue">1</div>
              <div className="bg-blue">1</div>
              <div className="bg-blue">1</div>
              <div className="bg-blue">1</div>
            </div>
          </div>

          <button
            onClick={() => {
              instanceRef.current?.prev(), setSlider(false);
            }}
            className={`absolute left-0 top-1/2 -translate-y-1/2 h-full w-[2%] bg-gradient-to-r from-white  to-transparent duration-100 ${
              slider ? " opacity-100" : "opacity-0"
            }`}
          >
            <h1 className="text-blue ">
              <BsChevronLeft size={20} />
            </h1>
          </button>

          <button
            onClick={() => {
              instanceRef.current?.next(), setSlider(true);
            }}
            className={`absolute right-0 top-1/2 -translate-y-1/2 h-full w-[4%] bg-gradient-to-l from-white  to-transparent flex justify-center items-center transition-opacity duration-100 ${
              slider ? " opacity-0" : "opacity-100"
            }`}
          >
            <h1 className="text-blue ">
              <BsChevronRight size={20} />
            </h1>
          </button>
        </div>
      </div>
    </div>
  );
}
