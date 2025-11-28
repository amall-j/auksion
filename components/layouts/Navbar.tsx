import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { IoGlobeOutline } from "react-icons/io5";
import { IoIosStar } from "react-icons/io";
import { Gi3dHammer } from "react-icons/gi";
import { BsStars } from "react-icons/bs";
import { FaFire } from "react-icons/fa";
export default function Navbar() {
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

  console.log(filteredCategry.length / 3);

  return (
    <div className="w-full">
      {/* 1 – Top Navbar */}
      <div className="sticky top-2 left-0 w-full bg-white z-50  h-[60px] flex items-center">
        <div className="container px-10  mx-auto flex justify-between items-center ">
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
              className="w-[453px] h-[52px] border-none outline-none text-[16px] font-medium px-14  "
            />
            <div className="absolute top-[22%] text-blue left-2 ">
              <CiSearch size={30} />
            </div>
          </div>
          <h1 className="hover:underline transition-all text-sm font-medium">
            How it works?
          </h1>
          <h1 className=" text-sm font-medium">Help</h1>
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

      {/* 2 – Categories (sticky AFTER scroll) */}
      <div className="sticky top-[80px] z-40 bg-gray  h-[35px] flex items-center">
        <div className="w-full mx-auto flex justify-center items-center gap-3 ">
          Excellent{" "}
          <div className="flex items-center text-white gap-0.5 ">
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
              className=" w-4.5 h-4.5 flex items-center justify-center"
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

      {/* 3 – Sub filters (normal) */}
      <div className="bg-white border-b h-screen flex items-center">
        <div className="container mx-auto flex gap-4">
          <div className={`grid grid-cols-${filteredCategry.length / 2}`}>
            <div className="bg-red-500 h-4 w-full">ss</div>
          </div>
        </div>
      </div>
    </div>
  );
}
