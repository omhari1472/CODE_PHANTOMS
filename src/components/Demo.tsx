import { FunctionComponent } from "react";
import FrameComponent from "./FrameComponent";

export type DemoType = {
  className?: string;
};

const Demo: FunctionComponent<DemoType> = ({ className = "" }) => {
  return (
    <footer
      className={`self-stretch overflow-hidden flex flex-row items-end justify-start pt-[76px] px-[138px] pb-[46px] box-border gap-[72px] bg-[url('/public/demo@3x.png')] bg-cover bg-no-repeat bg-[top] max-w-full text-left text-xl text-white font-inter mq750:gap-[36px] mq750:pl-[34px] mq750:pr-[34px] mq750:box-border mq450:gap-[18px] mq450:pt-[49px] mq450:pb-[30px] mq450:box-border mq1225:flex-wrap mq1225:justify-center mq1225:pl-[69px] mq1225:pr-[69px] mq1225:box-border ${className}`}
    >
      <div className="w-[389px] flex flex-col items-start justify-start pt-0 pb-[50px] pr-[21px] pl-0 box-border min-h-[242px] max-w-full text-13xl">
        <div className="self-stretch flex flex-col items-start justify-start gap-[10.5px]">
          <h2 className="m-0 relative text-inherit font-semibold font-inherit inline-block min-w-[100px] mq750:text-7xl mq450:text-lgi">
            Drivee
          </h2>
          <div className="self-stretch flex flex-col items-start justify-start gap-[36.5px] text-lg-9 text-darkgray-200 mq450:gap-[18px]">
            <div className="self-stretch relative leading-[185.02%] capitalize">
              is just a drivee ride away.take control of you journey today
            </div>
            <div className="flex flex-row items-start justify-start gap-[25.8px]">
              <img
                className="h-[35.7px] w-[36.9px] relative overflow-hidden shrink-0 min-h-[36px]"
                loading="lazy"
                alt=""
                src="/frame-138.svg"
              />
              <img
                className="h-[35.7px] w-[36.9px] relative overflow-hidden shrink-0 min-h-[36px]"
                loading="lazy"
                alt=""
                src="/frame-139.svg"
              />
              <img
                className="h-[35.7px] w-[36.9px] relative overflow-hidden shrink-0 min-h-[36px]"
                loading="lazy"
                alt=""
                src="/frame-140.svg"
              />
              <img
                className="h-[35.7px] w-[36.9px] relative overflow-hidden shrink-0 min-h-[36px]"
                loading="lazy"
                alt=""
                src="/frame-141.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start justify-start gap-[16px]">
        <div className="relative leading-[185.02%] capitalize font-medium mq450:text-base mq450:leading-[30px]">
          About comapany
        </div>
        <div className="relative text-sm leading-[185.02%] capitalize text-lightgray-100">
          <ul className="m-0 font-inherit text-inherit pl-[19px]">
            <li className="mb-0">About us</li>
            <li className="mb-0">Careers</li>
            <li className="mb-0">help</li>
            <li className="mb-0">contact us</li>
            <li className="mb-0">fee policy</li>
            <li className="mb-0">privacy policy</li>
            <li>term and conditions</li>
          </ul>
        </div>
      </div>
      <div className="w-[306px] flex flex-row items-start justify-between gap-[20px]">
        <FrameComponent />
        <div className="flex flex-col items-start justify-start gap-[16px]">
          <div className="relative leading-[185.02%] capitalize font-medium mq450:text-base mq450:leading-[30px]">
            vehicle types
          </div>
          <div className="relative text-sm leading-[185.02%] capitalize text-lightgray-100">
            <ul className="m-0 font-inherit text-inherit pl-[19px]">
              <li className="mb-0">car</li>
              <li>bike</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Demo;
