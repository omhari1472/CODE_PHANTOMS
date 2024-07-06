import { FunctionComponent } from "react";

export type FrameComponent1Type = {
  className?: string;
};

const FrameComponent1: FunctionComponent<FrameComponent1Type> = ({
  className = "",
}) => {
  return (
    <div
      className={`self-stretch h-[418px] relative max-w-full text-left text-21xl text-white font-inter mq750:h-auto mq750:min-h-[418] ${className}`}
    >
      <div className="absolute top-[0px] left-[0px] bg-gray-900 w-[1440px] h-[360px] overflow-hidden">
        <img
          className="absolute top-[9px] left-[-148px] w-[692.7px] h-[398.7px]"
          alt=""
          src="/map.svg"
        />
        <h1 className="m-0 absolute top-[120px] left-[calc(50%_-_300px)] text-inherit capitalize font-semibold font-inherit z-[1] mq1050:text-13xl mq450:text-5xl">
          Rent a bike Rent Your Freedom
        </h1>
      </div>
      <div className="absolute top-[303px] left-[302px] shadow-[0px_20px_45px_rgba(179,_179,_179,_0.15)] rounded-3xs bg-white box-border w-[836.5px] flex flex-row items-end justify-center py-[38px] px-5 max-w-full z-[3] border-[1.2px] border-solid border-lightgray-300">
        <form className="m-0 w-[636.5px] flex flex-row flex-wrap items-end justify-start gap-[31.5px] max-w-full">
          <div className="flex-1 shadow-[0px_0px_0px_rgba(0,_0,_0,_0.3)] rounded-lg bg-white box-border overflow-hidden flex flex-row items-center justify-between py-2 px-3.5 min-w-[53px] gap-[20px] border-[1px] border-solid border-gainsboro-600">
            <div className="relative text-xs font-medium font-inter text-dimgray-500 text-left inline-block min-w-[41px]">
              Search
            </div>
            <img
              className="h-3 w-3 relative"
              alt=""
              src="/group-1000004123.svg"
            />
          </div>
          <div className="w-[76.8px] shadow-[0px_0px_0px_rgba(0,_0,_0,_0.3)] rounded-4xs-4 bg-white box-border flex flex-row items-center justify-start py-2 pr-[13px] pl-3.5 gap-[10.5px] border-[1px] border-solid border-gainsboro-600">
            <div className="relative text-xs font-medium font-inter text-dimgray-500 text-left inline-block min-w-[30px]">
              Price
            </div>
            <img
              className="h-[3.5px] w-[7px] relative"
              alt=""
              src="/vector.svg"
            />
          </div>
          <div className="shadow-[0px_0px_0px_rgba(0,_0,_0,_0.3)] rounded-4xs-4 bg-white overflow-hidden flex flex-row items-center justify-start py-2 pr-[13px] pl-3.5 gap-[10.5px] whitespace-nowrap border-[1px] border-solid border-gainsboro-600">
            <div className="relative text-xs font-medium font-inter text-dimgray-500 text-left inline-block min-w-[81px]">
              Time Duration
            </div>
            <img
              className="h-[3.5px] w-[7px] relative"
              alt=""
              src="/vector.svg"
            />
          </div>
          <div className="w-[80.8px] shadow-[0px_0px_0px_rgba(0,_0,_0,_0.3)] rounded-4xs-4 bg-white box-border overflow-hidden shrink-0 flex flex-row items-center justify-start py-2 pr-[13px] pl-3.5 gap-[10.5px] border-[1px] border-solid border-gainsboro-600">
            <div className="relative text-xs capitalize font-medium font-inter text-dimgray-500 text-left inline-block min-w-[34px]">
              brand
            </div>
            <img
              className="h-[3.5px] w-[7px] relative"
              alt=""
              src="/vector.svg"
            />
          </div>
          <div className="w-[78px] shadow-[0px_0px_0px_rgba(0,_0,_0,_0.3)] rounded-lg bg-white box-border overflow-hidden shrink-0 flex flex-row items-center justify-start py-2 px-[13px] gap-[5px] border-[1px] border-solid border-gainsboro-600">
            <div className="relative text-xs font-medium font-inter text-dimgray-500 text-left inline-block min-w-[30px]">
              Filter
            </div>
            <img
              className="h-[15px] w-[15px] relative overflow-hidden shrink-0 min-h-[15px]"
              alt=""
              src="/mifilter.svg"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default FrameComponent1;
