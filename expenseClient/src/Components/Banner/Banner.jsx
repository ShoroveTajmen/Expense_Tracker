import { Link } from "react-router-dom";
import { useEffect } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import AOS from "aos";
import "aos/dist/aos.css";

const Banner = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div>
      <div className="h-[850px] md:h-[850px] lg:h-[600px] w-full mt-[50px] bg-gradient-to-r from-[#FFE5E5] via-[#DFCCFB] to-[#BEADFA] ...">
        <div
          className="flex lg:flex-row flex-col justify-evenly items-center"
          data-aos="zoom-in"
        >
          <div className="ml-[10px] md:ml-[10px] lg:ml-[200px] mt-[100px] mb-[20px] md:mb-[20px] lg:mb-[0px]">
            <img
              className="w-[200px] h-[200px] "
              src="https://i.ibb.co/bWs4f0n/111.png"
              alt=""
            />
            <h1 className="uppercase font-bold text-[35px] ml-[40px]">
            SpendSmart
            </h1>
            <h1 className="font-bold text-[35px] decoration-double ml-[40px]">
            Your Ultimate Expense Tracker <br /> for Financial Wellness
            </h1>
            <Link to={"/login"}>
              {" "}
              <button className="btn bg-[#F11A7B] text-[20px] text-white font-bold border-none rounded-none ml-[40px] mt-[10px]">
                Let's Explore{" "}
                <FaArrowRightLong className="mt-[6px]"></FaArrowRightLong>
              </button>
            </Link>
          </div>
          <div>
            <img
              src="https://i.ibb.co/NTY588h/exxx.webp"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
