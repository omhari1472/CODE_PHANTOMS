import { FunctionComponent } from "react";
import FrameComponent1 from "../components/FrameComponent1";
import BikeListings from "../components/BikeListings";
import Demo1 from "../components/Demo1";

const Bike: FunctionComponent = () => {
  return (
    <div className="w-full relative bg-whitesmoke-500 overflow-hidden flex flex-col items-start justify-start pt-[39px] px-0 pb-0 box-border gap-[40.9px] leading-[normal] tracking-[normal] mq750:gap-[20px]">
      <main className="self-stretch flex flex-col items-end justify-start gap-[29px] max-w-full">
        <header className="self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-[26px] box-border max-w-full text-left text-mid text-gray-1200 font-inter">
          <div className="w-[1165.5px] flex flex-row items-start justify-start gap-[4px] max-w-full">
            <div className="flex-[0.9506] flex flex-col items-start justify-start py-0 pr-5 pl-0 box-border max-w-full text-7xl-2">
              <a className="[text-decoration:none] relative font-semibold text-[inherit] inline-block min-w-[83px] whitespace-nowrap">
                Drivee
              </a>
            </div>
            <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
              <a className="[text-decoration:none] relative capitalize font-medium text-[inherit] inline-block min-w-[64px]">
                hosting
              </a>
            </div>
            <div className="flex flex-col items-start justify-start pt-1 pb-0 pr-[27px] pl-0">
              <img
                className="w-6 h-6 relative overflow-hidden shrink-0"
                loading="lazy"
                alt=""
                src="/chevrondown.svg"
              />
            </div>
            <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
              <div className="flex flex-row items-start justify-start gap-[31.5px] lg:hidden">
                <div className="flex flex-col items-start justify-start pt-[1.5px] px-0 pb-0">
                  <a className="[text-decoration:none] relative capitalize font-medium text-[inherit] inline-block min-w-[92px] whitespace-nowrap">
                    Contact us
                  </a>
                </div>
                <a className="[text-decoration:none] relative capitalize font-medium text-[inherit] inline-block min-w-[68px]">
                  Account
                </a>
              </div>
            </div>
            <div className="flex-1 flex flex-col items-start justify-start pt-1 px-0 pb-0 box-border max-w-full">
              <img
                className="w-6 h-6 relative overflow-hidden shrink-0"
                loading="lazy"
                alt=""
                src="/chevrondown.svg"
              />
            </div>
            <div className="flex flex-col items-start justify-start pt-2 px-0 pb-0">
              <img
                className="w-[34px] h-[34px] relative rounded-[50%] object-cover"
                loading="lazy"
                alt=""
                src="/ellipse-11@2x.png"
              />
            </div>
          </div>
        </header>
        <section className="self-stretch flex flex-col items-start justify-start gap-[40px] max-w-full mq750:gap-[20px]">
          <FrameComponent1 />
          <BikeListings />
        </section>
      </main>
      <img
        className="w-[416px] h-[353px] absolute !m-[0] top-[124px] right-[-1px] object-contain z-[2]"
        loading="lazy"
        alt=""
        src="/rockersrafiki-1@2x.png"
      />
      <Demo1 />
    </div>
  );
};

export default Bike;
