import { FunctionComponent } from "react";

export type Demo1Type = {
  className?: string;
};

const Demo1: FunctionComponent<Demo1Type> = ({ className = "" }) => {
  return (
    <footer
      className={`self-stretch overflow-hidden flex flex-row items-end justify-start pt-[76px] px-[123px] pb-[46px] box-border gap-[72px] bg-[url('/public/demo@3x.png')] bg-cover bg-no-repeat bg-[top] max-w-full text-left text-xl text-white font-inter lg:flex-wrap lg:pl-[61px] lg:pr-[61px] lg:box-border mq450:gap-[18px] mq450:pt-[49px] mq450:pb-[30px] mq450:box-border mq750:gap-[36px] mq750:pl-[30px] mq750:pr-[30px] mq750:box-border ${className}`}
    >
      <div className="w-[389px] flex flex-col items-start justify-start pt-0 pb-[50px] pr-[21px] pl-0 box-border min-h-[242px] max-w-full text-13xl">
        <div className="self-stretch flex flex-col items-start justify-start gap-[10.5px]">
          <h1 className="m-0 relative text-inherit font-semibold font-inherit inline-block min-w-[100px] mq1050:text-7xl mq450:text-lgi">
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
                loading="lazy"
                alt=""
                src="/frame-141.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start justify-start gap-[16px]">
        <h1 className="m-0 relative text-inherit leading-[185.02%] capitalize font-medium font-inherit mq450:text-base mq450:leading-[30px]">
          About comapany
        </h1>
        <h3 className="m-0 relative text-sm leading-[185.02%] capitalize font-normal font-inherit text-lightgray-100">
          <ul className="m-0 font-inherit text-inherit pl-[19px]">
            <li className="mb-0">About us</li>
            <li className="mb-0">Careers</li>
            <li className="mb-0">help</li>
            <li className="mb-0">contact us</li>
            <li className="mb-0">fee policy</li>
            <li className="mb-0">privacy policy</li>
            <li>term and conditions</li>
          </ul>
        </h3>
      </div>
      <div className="w-[306px] flex flex-row items-start justify-between gap-[20px]">
        <div className="flex flex-col items-start justify-start gap-[16px]">
          <div className="flex flex-row items-start justify-start py-0 px-2.5">
            <h1 className="m-0 relative text-inherit leading-[185.02%] capitalize font-medium font-inherit inline-block min-w-[39px] mq450:text-base mq450:leading-[30px]">
              city
            </h1>
          </div>
          <h3 className="m-0 relative text-sm leading-[185.02%] capitalize font-normal font-inherit text-lightgray-100">
            <ul className="m-0 font-inherit text-inherit pl-[19px]">
              <li className="mb-0">dhaka</li>
              <li className="mb-0">chittagong</li>
              <li className="mb-0">sylhet</li>
              <li className="mb-0">kulna</li>
              <li className="mb-0">borishal</li>
              <li className="mb-0">rajshahi</li>
              <li>rongpur</li>
            </ul>
          </h3>
        </div>
        <div className="flex flex-col items-start justify-start gap-[16px]">
          <h1 className="m-0 relative text-inherit leading-[185.02%] capitalize font-medium font-inherit mq450:text-base mq450:leading-[30px]">
            vehicle types
          </h1>
          <h3 className="m-0 relative text-sm leading-[185.02%] capitalize font-normal font-inherit text-lightgray-100">
            <ul className="m-0 font-inherit text-inherit pl-[19px]">
              <li className="mb-0">car</li>
              <li>bike</li>
            </ul>
          </h3>
        </div>
      </div>
    </footer>
  );
};

export default Demo1;
