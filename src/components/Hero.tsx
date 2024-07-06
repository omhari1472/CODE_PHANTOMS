import { FunctionComponent } from "react";

export type HeroType = {
  className?: string;
};

const Hero: FunctionComponent<HeroType> = ({ className = "" }) => {
  return (
    <div
      className={`w-[1320px] flex flex-row items-end justify-start py-0 pr-0 pl-5 box-border gap-[26.8px] max-w-full text-left text-45xl text-white font-inter mq1350:flex-wrap mq1350:justify-center ${className}`}
    >
      <div className="w-[796px] flex flex-col items-start justify-end pt-0 px-0 pb-[7.7px] box-border min-w-[796px] max-w-full shrink-0 mq1125:min-w-full mq1350:flex-1">
        <div className="self-stretch flex flex-col items-start justify-start gap-[48px] shrink-0 max-w-full z-[2] mq450:gap-[24px]">
          <div className="self-stretch flex flex-col items-start justify-start gap-[24px] max-w-full">
            <h1 className="m-0 self-stretch relative text-inherit capitalize font-semibold font-inherit mq450:text-19xl mq800:text-32xl">
              unlock endless driving with drivee
            </h1>
            <div className="w-[562px] relative text-xl leading-[160%] text-silver inline-block max-w-full box-border pr-5 mq450:text-base mq450:leading-[26px]">
              To contribute to positive change and achieve our sustainability
              goals with many extraordinary
            </div>
          </div>
          <div className="w-[327px] flex flex-row items-start justify-start py-0 pr-5 pl-0 box-border gap-[20px] max-w-full text-xl">
            <button className="cursor-pointer py-[13px] px-[29px] bg-white rounded flex flex-row items-center justify-center whitespace-nowrap border-[1px] border-solid border-white hover:bg-gainsboro-100 hover:box-border hover:border-[1px] hover:border-solid hover:border-gainsboro-100">
              <div className="relative text-xl capitalize font-semibold font-inter text-gray-1300 text-left inline-block min-w-[84px]">
                rent Car
              </div>
            </button>
            <div className="flex-1 rounded flex flex-row items-center justify-center py-[13px] px-[25px] whitespace-nowrap border-[1px] border-solid border-white">
              <div className="relative capitalize font-medium inline-block min-w-[90px]">
                rent bike
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        className="w-[692.7px] relative max-h-full shrink-0 max-w-full mq1350:flex-1"
        loading="lazy"
        alt=""
        src="/map-header-section.svg"
      />
    </div>
  );
};

export default Hero;
