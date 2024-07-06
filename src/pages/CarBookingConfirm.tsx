import { FunctionComponent } from "react";
import Content from "../components/Content";
import CarSpecifications from "../components/CarSpecifications";
import Demo from "../components/Demo";

const CarBookingConfirm: FunctionComponent = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start pt-8 px-0 pb-0 box-border gap-[102px] leading-[normal] tracking-[normal] text-left text-5xl text-black font-inter mq750:gap-[51px] mq450:gap-[25px]">
      <header className="self-stretch flex flex-row items-start justify-center pt-0 px-5 pb-2 box-border max-w-full text-left text-7xl-2 text-gray-1200 font-inter">
        <div className="w-[1160px] flex flex-row items-center justify-between gap-[20px] max-w-full">
          <a className="[text-decoration:none] relative font-semibold text-[inherit] inline-block min-w-[83px] whitespace-nowrap">
            Drivee
          </a>
          <div className="w-[319px] flex flex-row items-center justify-start text-mid mq450:gap-[16px]">
            <div className="flex-1 flex flex-row items-center justify-start gap-[31.5px] mq450:gap-[16px]">
              <div className="flex flex-row items-center justify-center gap-[4px]">
                <div className="flex flex-row items-center justify-start">
                  <a className="[text-decoration:none] relative capitalize font-medium text-[inherit] inline-block min-w-[64px]">
                    hosting
                  </a>
                </div>
                <img
                  className="h-1.5 w-3 relative"
                  alt=""
                  src="/account-type-separator.svg"
                />
              </div>
              <a className="[text-decoration:none] flex-1 relative capitalize font-medium text-[inherit] inline-block min-w-[92px] whitespace-nowrap">
                Contact us
              </a>
              <div className="flex-1 flex flex-row items-center justify-center gap-[4px]">
                <div className="flex flex-row items-center justify-start">
                  <a className="[text-decoration:none] relative capitalize font-medium text-[inherit] inline-block min-w-[68px]">
                    account
                  </a>
                </div>
                <img
                  className="h-1.5 w-3 relative"
                  alt=""
                  src="/account-type-separator.svg"
                />
              </div>
            </div>
          </div>
          <img
            className="h-[34px] w-[34px] relative rounded-[50%] object-cover min-h-[34px]"
            loading="lazy"
            alt=""
            src="/ellipse-1@2x.png"
          />
        </div>
      </header>
      <Content />
      <div className="w-[853px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
        <div className="w-[571px] flex flex-col items-start justify-start gap-[16px] max-w-full">
          <div className="relative capitalize font-semibold mq450:text-lgi">
            BMW M2 2020
          </div>
          <div className="self-stretch h-[98px] relative text-lg leading-[160%] capitalize text-darkslategray-400 inline-block shrink-0">
            The BMW M2 is the high-performance version of the 2 Series 2-door
            coupé. The first generation of the M2 is the F87 coupé and is
            powered by turbocharged.
          </div>
        </div>
      </div>
      <CarSpecifications />
      <Demo />
    </div>
  );
};

export default CarBookingConfirm;
