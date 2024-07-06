import { FunctionComponent } from "react";
import NameInput from "./NameInput";

export type MainLayoutType = {
  className?: string;
};

const MainLayout: FunctionComponent<MainLayoutType> = ({ className = "" }) => {
  return (
    <form
      className={`m-0 flex-[0.5977] bg-white flex flex-col items-start justify-start pt-[74px] px-[164px] pb-[73.8px] box-border gap-[31.3px] min-w-[491px] max-w-full lg:flex-1 mq750:gap-[16px] mq750:py-[31px] mq750:px-[82px] mq750:box-border mq750:min-w-full mq450:pl-5 mq450:pr-5 mq450:box-border mq1050:pt-12 mq1050:pb-12 mq1050:box-border ${className}`}
    >
      <div className="w-[755.8px] h-[1016.1px] relative bg-white hidden max-w-full" />
      <a className="[text-decoration:none] relative text-31xl-4 font-bold font-inter text-gray-800 text-left z-[1] mq750:text-21xl mq450:text-11xl">
        Drivee
      </a>
      <div className="flex flex-col items-start justify-start gap-[6.3px]">
        <div className="relative text-10xl-4 leading-[150%] capitalize font-semibold font-inter text-gray-800 text-left z-[1] mq450:text-5xl mq450:leading-[35px]">
          Create an account.
        </div>
        <div className="relative text-base-8 leading-[150%] font-inter text-lightslategray-100 text-left z-[1]">
          <p className="m-0">{`We’de love to have you on board. Join over 500+ `}</p>
          <p className="m-0">
            customers around the globe and enhace productivity.
          </p>
        </div>
      </div>
      <div className="w-[395.7px] flex flex-col items-start justify-start gap-[15.7px] max-w-full">
        <button className="cursor-pointer [border:none] pt-[11.5px] px-6 pb-[11.6px] bg-whitesmoke-100 self-stretch rounded-[30.44px] flex flex-row items-start justify-start gap-[48.3px] shrink-0 z-[1] mq450:flex-wrap mq450:gap-[24px]">
          <img
            className="h-[31.5px] w-[31.5px] relative object-contain"
            alt=""
            src="/facebook@2x.png"
          />
          <div className="w-[186px] flex flex-col items-start justify-start pt-[6.3px] px-0 pb-0 box-border">
            <div className="self-stretch relative text-base-7 font-semibold font-inter text-darkslategray-500 text-center">
              Continue with Facebook
            </div>
          </div>
        </button>
        <button className="cursor-pointer [border:none] pt-[11.6px] px-6 pb-[11.5px] bg-whitesmoke-100 self-stretch rounded-[30.44px] flex flex-row items-start justify-start gap-[48.4px] shrink-0 z-[1] mq450:flex-wrap mq450:gap-[24px] mq450:justify-center">
          <img
            className="h-[30.4px] w-[30.4px] relative object-contain"
            alt=""
            src="/google@2x.png"
          />
          <div className="flex flex-col items-start justify-start pt-[5.7px] px-0 pb-0">
            <div className="relative text-base-7 font-semibold font-inter text-darkslategray-500 text-center">
              Continue with Google
            </div>
          </div>
        </button>
      </div>
      <img
        className="self-stretch relative max-w-full overflow-hidden max-h-full z-[1]"
        loading="lazy"
        alt=""
        src="/vector-1.svg"
      />
      <div className="self-stretch flex flex-col items-start justify-start gap-[25.2px] z-[1]">
        <NameInput name1="Name*" nameInputPlaceholdPlaceho="Enter your name" />
        <NameInput
          name1="Email*"
          nameInputPlaceholdPlaceho="Enter your email"
        />
        <NameInput
          name1="Password*"
          nameInputPlaceholdPlaceho="Create a password"
        />
      </div>
      <div className="flex flex-row items-start justify-start gap-[8.6px]">
        <input
          className="m-0 h-[23.1px] w-[22px] relative rounded-[3.15px] box-border z-[1] border-[1px] border-solid border-gainsboro-500"
          type="checkbox"
        />
        <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
          <div className="relative text-smi-6 tracking-[0.03em] font-inter text-left z-[1]">
            <span className="text-darkslategray-700">{`I agree to the `}</span>
            <span className="text-darkslategray-600">Terms and Privacy</span>
            <span className="text-darkslategray-700"> Policy</span>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-center justify-start gap-[25.2px] z-[1]">
        <div className="self-stretch flex flex-col items-center justify-center">
          <div className="self-stretch shadow-[0px_3.1px_6.3px_rgba(18,_18,_18,_0.03)] rounded-6xs-3 bg-gray-800 flex flex-row items-center justify-center py-3.5 px-5 border-[1px] border-solid border-lightslategray-200">
            <div className="flex flex-row items-center justify-start">
              <div className="relative text-base leading-[150%] font-semibold font-inter text-white text-left inline-block min-w-[59px] whitespace-nowrap">
                Sign up
              </div>
            </div>
          </div>
        </div>
        <div className="relative text-mini-7 leading-[150%] font-inter text-gray-700 text-left">
          {`Already have an acocunt? `}
          <span className="[text-decoration:underline]">Login here</span>.
        </div>
      </div>
    </form>
  );
};

export default MainLayout;
