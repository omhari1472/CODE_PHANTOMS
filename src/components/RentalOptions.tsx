import { FunctionComponent } from "react";
import CarCard from "./CarCard";
import FrameComponent3 from "./FrameComponent3";
import FrameComponent2 from "./FrameComponent2";

export type RentalOptionsType = {
  className?: string;
};

const RentalOptions: FunctionComponent<RentalOptionsType> = ({
  className = "",
}) => {
  return (
    <div
      className={`w-[1160px] flex flex-col items-end justify-start gap-[50px] max-w-full text-left text-base text-black font-inter mq750:gap-[25px] ${className}`}
    >
      <div className="self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-[21px] box-border max-w-full">
        <div className="w-[836.5px] flex flex-row items-start justify-start relative max-w-full">
          <img
            className="h-[271px] w-[493px] absolute !m-[0] top-[-215px] right-[-290.5px] object-contain z-[2]"
            alt=""
            src="/car-rentalpana-1@2x.png"
          />
          <div className="flex-1 shadow-[0px_20px_45px_rgba(179,_179,_179,_0.15)] rounded-3xs bg-white box-border flex flex-row items-end justify-center py-[38px] px-5 shrink-0 max-w-full z-[3] border-[1.2px] border-solid border-lightgray-300">
            <form className="m-0 w-[636.5px] flex flex-row flex-wrap items-end justify-start gap-[31.5px] max-w-full mq750:gap-[16px]">
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
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[16px] shrink-0">
        <div className="self-stretch flex flex-row flex-wrap items-start justify-center py-0 pr-1.5 pl-0 gap-[20px_19.1px]">
          <CarCard
            carImage="/rectangle-8261@2x.png"
            jeepRenegade="jeep renegade"
          />
          <CarCard
            carImage="/rectangle-826-11@2x.png"
            jeepRenegade="car"
            propBorder="1px solid #d2d2d2"
          />
          <CarCard
            carImage="/rectangle-826-21@2x.png"
            jeepRenegade="corola"
            propBorder="1px solid #d2d2d2"
          />
          <CarCard
            carImage="/rectangle-826-31@2x.png"
            jeepRenegade="jeep dianamic"
            propBorder="1px solid #d2d2d2"
          />
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-start justify-start py-0 pr-px pl-0 relative">
          <FrameComponent3
            rectangle826="/rectangle-826-41@2x.png"
            jeepRenegade="cvr"
          />
          <FrameComponent3
            rectangle826="/rectangle-826-51@2x.png"
            jeepRenegade="pvr 150"
            propMarginLeft="-42.1px"
          />
          <FrameComponent3
            rectangle826="/rectangle-826-61@2x.png"
            jeepRenegade="filder"
            propMarginLeft="-42.1px"
          />
          <FrameComponent2 jeepRenegade="audi" />
          <img
            className="h-[calc(100%_-_232.8px)] w-[225.5px] absolute !m-[0] top-[31.1px] bottom-[201.7px] left-[calc(50%_+_328.5px)] max-h-full object-cover z-[1]"
            loading="lazy"
            alt=""
            src="/rectangle-826-71@2x.png"
          />
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-start justify-start py-0 pr-px pl-0 relative">
          <FrameComponent3
            rectangle826="/rectangle-826-81@2x.png"
            jeepRenegade="filder 224"
            propMarginLeft="unset"
          />
          <FrameComponent3
            rectangle826="/rectangle-826-91@2x.png"
            jeepRenegade="cobra"
            propMarginLeft="-82.7px"
          />
          <FrameComponent2 jeepRenegade="audi A5" propMarginLeft="-82.7px" />
          <FrameComponent2 jeepRenegade="renger" propMarginLeft="-82.7px" />
          <img
            className="h-[calc(100%_-_232.8px)] w-[225.5px] absolute !m-[0] top-[24.2px] bottom-[208.6px] left-[calc(50%_+_34px)] max-h-full object-contain z-[1]"
            loading="lazy"
            alt=""
            src="/rectangle-826-10@2x.png"
          />
          <img
            className="h-[calc(100%_-_220.9px)] w-[245px] absolute !m-[0] top-[18.2px] bottom-[202.7px] left-[calc(50%_+_319px)] max-h-full object-cover z-[1]"
            loading="lazy"
            alt=""
            src="/rectangle-8271@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

export default RentalOptions;
