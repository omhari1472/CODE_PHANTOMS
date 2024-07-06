import { FunctionComponent } from "react";

export type FrameComponent4Type = {
  className?: string;
};

const FrameComponent4: FunctionComponent<FrameComponent4Type> = ({
  className = "",
}) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center pt-0 px-5 pb-20 box-border max-w-full text-left text-31xl text-gray-800 font-inter ${className}`}
    >
      <div className="w-[1155.7px] flex flex-row items-start justify-between max-w-full gap-[20px] mq1125:flex-wrap mq1125:justify-center">
        <div className="w-[570px] flex flex-col items-start justify-start gap-[25px] min-w-[570px] max-w-full mq800:min-w-full mq1125:flex-1">
          <h1 className="m-0 h-9 relative text-inherit capitalize font-semibold font-inherit inline-block max-w-full mq450:text-11xl mq800:text-21xl">
            why choose us
          </h1>
          <div className="self-stretch relative text-base leading-[200.02%] text-dimgray-300">{`Booking a self-driving car with us is simple and easy. You can browse our selection of vehicles online, choose the car that best fits your needs, and book it for the duration of your choice. `}</div>
        </div>
        <div className="w-[487.7px] flex flex-col items-start justify-start pt-4 px-0 pb-0 box-border min-w-[487.7px] max-w-full text-center text-16xl text-black mq800:min-w-full mq1125:flex-1">
          <div className="self-stretch shadow-[0px_4px_14px_rgba(0,_0,_0,_0.1)] rounded-2xl bg-white flex flex-row items-start justify-start p-[30px] gap-[20px] mq450:flex-wrap">
            <div className="flex flex-col items-start justify-start pt-[7px] px-0 pb-0">
              <div className="relative">
                <p className="m-0 leading-[107.5%] capitalize font-semibold">
                  45k+
                </p>
                <p className="m-0 text-base leading-[129%] text-gray-400">
                  SuccessTour
                </p>
              </div>
            </div>
            <div className="flex-1 flex flex-col items-start justify-start pt-[7px] px-0 pb-0 box-border min-w-[106px]">
              <div className="self-stretch relative">
                <p className="m-0 leading-[107.5%] capitalize font-semibold">
                  1M+
                </p>
                <p className="m-0 text-base leading-[129%] text-gray-400">
                  Happy Customer
                </p>
              </div>
            </div>
            <div className="w-32 relative inline-block text-24xl">
              <p className="m-0 leading-[107.5%] capitalize font-semibold">
                3+
              </p>
              <p className="m-0 text-base text-gray-400">
                <span className="leading-[129%]">
                  <span className="uppercase"> y</span>ear Experience
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent4;
