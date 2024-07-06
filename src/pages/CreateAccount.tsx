import { FunctionComponent } from "react";
import MainLayout from "../components/MainLayout";

const CreateAccount: FunctionComponent = () => {
  return (
    <div className="w-full relative overflow-hidden flex flex-row items-start justify-start leading-[normal] tracking-[normal] text-center text-[42px] text-white font-inter lg:flex-wrap">
      <div className="flex-1 flex flex-row items-start justify-center pt-[381px] px-5 pb-[382.3px] box-border relative min-w-[491px] max-w-full lg:flex-1 mq750:pt-[161px] mq750:pb-[161px] mq750:box-border mq750:min-w-full mq1050:pt-[248px] mq1050:pb-[248px] mq1050:box-border">
        <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px]">
          <img
            className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src="/rectangle-731@2x.png"
          />
          <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] opacity-[0.8] mix-blend-hard-light z-[1]" />
        </div>
        <div className="w-[559.5px] flex flex-col items-center justify-start gap-[37.8px] max-w-full z-[2] mq750:gap-[19px]">
          <div className="self-stretch flex flex-col items-center justify-start pt-0 px-0 pb-0 box-border max-w-full">
            <div className="self-stretch h-[103.9px] relative leading-[150.52%] inline-block shrink-0 mq750:text-[34px] mq750:leading-[51px] mq450:text-[25px] mq450:leading-[38px]">
              <p className="m-0 font-extrabold">Welcome to Drivee®</p>
              <p className="m-0 text-[25.2px] font-medium">
                {" "}
                the best global carsharing marketplace
              </p>
            </div>
            <div className="w-[424.1px] h-[52.5px] relative text-[14.8px] font-roboto flex items-center justify-center shrink-0 max-w-full">
              Have a car? Earn money as a Host. Rent your dream car as a Guest.
            </div>
          </div>
          <button className="cursor-pointer [border:none] py-[16.8px] px-7 bg-white shadow-[11.5px_13.6px_31.49px_rgba(235,_25,_51,_0.1)] rounded-4xs-4 flex flex-row items-start justify-start">
            <div className="flex flex-row items-center justify-start gap-[10.5px]">
              <b className="relative text-2xl capitalize font-inter text-gray-1300 text-left mq450:text-mid">
                Play Video Intro
              </b>
              <img
                className="h-[18.9px] w-[14.7px] relative"
                alt=""
                src="/video-icon.svg"
              />
            </div>
          </button>
        </div>
      </div>
      <MainLayout />
    </div>
  );
};

export default CreateAccount;
