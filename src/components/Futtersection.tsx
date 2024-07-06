import { FunctionComponent } from "react";
import FrameComponent from "./FrameComponent";

export type FuttersectionType = {
  className?: string;
};

const Futtersection: FunctionComponent<FuttersectionType> = ({
  className = "",
}) => {
  return (
    <footer
      className={`self-stretch overflow-hidden flex flex-row items-start justify-start pt-[76px] px-[123px] pb-[46px] box-border gap-[93.6px] bg-[url('/public/demo@3x.png')] bg-cover bg-no-repeat bg-[top] max-w-full text-left text-13xl text-white font-inter mq450:gap-[23px] mq450:pt-[49px] mq450:pb-[30px] mq450:box-border mq800:gap-[47px] mq800:pl-[30px] mq800:pr-[30px] mq800:box-border mq1350:flex-wrap mq1350:justify-center mq1350:pl-[61px] mq1350:pr-[61px] mq1350:box-border ${className}`}
    >
      <div className="w-[367.4px] flex flex-col items-start justify-start gap-[10.5px] min-w-[367.4px] max-w-full mq800:min-w-full mq1350:flex-1">
        <h1 className="m-0 relative text-inherit font-semibold font-inherit inline-block min-w-[100px] mq450:text-lgi mq800:text-7xl">
          Drivee
        </h1>
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
              alt=""
              src="/frame-141.svg"
            />
          </div>
        </div>
      </div>
      <div className="w-[544px] flex flex-col items-start justify-start pt-[7px] px-0 pb-0 box-border min-w-[544px] max-w-full text-xl mq1125:min-w-full mq1350:flex-1">
        <div className="self-stretch flex flex-row items-start justify-between gap-[20px] mq800:flex-wrap">
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
          <FrameComponent propPadding="0px 6px 0px 0px" />
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
      </div>
    </footer>
  );
};

export default Futtersection;
