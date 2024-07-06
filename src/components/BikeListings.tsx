import { FunctionComponent } from "react";
import Bike1 from "./Bike1";

export type BikeListingsType = {
  className?: string;
};

const BikeListings: FunctionComponent<BikeListingsType> = ({
  className = "",
}) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-left text-base text-black font-inter ${className}`}
    >
      <div className="w-[1160px] flex flex-col items-start justify-start gap-[16px] max-w-full">
        <div className="self-stretch flex flex-row flex-wrap items-start justify-start relative">
          <div className="w-[275px] rounded-xl bg-white box-border flex flex-col items-center justify-start py-[22px] px-[13px] gap-[16px] border-[1px] border-solid border-lightgray-200 mq450:pt-5 mq450:pb-5 mq450:box-border">
            <img
              className="w-[225.5px] h-[137.1px] relative object-contain"
              loading="lazy"
              alt=""
              src="/rectangle-826@2x.png"
            />
            <div className="self-stretch flex flex-col items-start justify-start gap-[20px]">
              <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[7.3px] gap-[10px]">
                <h2 className="m-0 relative text-inherit capitalize font-semibold font-inherit inline-block min-w-[33px]">
                  CBR
                </h2>
                <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[0.1px] gap-[5px] text-3xs text-dimgray-100">
                  <div className="self-stretch flex flex-row items-start justify-between gap-[20px]">
                    <div className="flex flex-col items-start justify-start gap-[8.8px]">
                      <div className="relative capitalize inline-block min-w-[36px]">
                        seats:2
                      </div>
                      <div className="relative capitalize inline-block min-w-[50px]">
                        fuel:petrol
                      </div>
                    </div>
                    <div className="flex flex-col items-end justify-start gap-[8.8px]">
                      <div className="relative capitalize inline-block min-w-[82px]">
                        horsepower: 500
                      </div>
                      <div className="relative capitalize inline-block min-w-[60px]">
                        engine:3000
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-between gap-[20px]">
                    <div className="flex flex-col items-start justify-start gap-[8.8px]">
                      <div className="relative capitalize inline-block min-w-[78px]">
                        Front Brake:Disc
                      </div>
                      <div className="relative capitalize inline-block min-w-[87px]">
                        Gear Box:6-Speed
                      </div>
                    </div>
                    <div className="flex flex-col items-end justify-start gap-[8.8px]">
                      <div className="relative capitalize inline-block min-w-[75px]">
                        Stroke:58.7 mm
                      </div>
                      <div className="relative capitalize inline-block min-w-[115px]">
                        Overall Mileage:40 kmpl
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row flex-wrap items-end justify-between gap-[20px] text-xs text-gray-500">
                <div className="flex flex-col items-center justify-start gap-[5.3px]">
                  <div className="relative capitalize inline-block min-w-[57px]">
                    per hours
                  </div>
                  <b className="relative text-lg capitalize inline-block text-black min-w-[36px] whitespace-nowrap">
                    $56
                  </b>
                </div>
                <button className="cursor-pointer [border:none] pt-[8.8px] px-3.5 pb-[8.9px] bg-black shadow-[0px_5.3px_17.68px_rgba(0,_0,_0,_0.15)] rounded-[3.54px] flex flex-row items-center justify-center whitespace-nowrap hover:bg-darkslategray-800">
                  <div className="relative text-3xs-7 capitalize font-semibold font-inter text-white text-left inline-block min-w-[45px]">
                    rent bike
                  </div>
                </button>
              </div>
            </div>
          </div>
          <Bike1 cBR="honda 140" />
          <Bike1
            cBR="KPR 150"
            propPadding="22px 13px"
            propMarginLeft="-113.2px"
          />
          <Bike1
            cBR="kawasaki 360"
            propPadding="22px 13px"
            propMarginLeft="-113.2px"
          />
          <img
            className="h-[calc(100%_-_226.4px)] w-[253px] absolute !m-[0] top-[17px] bottom-[209.4px] left-[calc(50%_-_271px)] max-h-full object-contain z-[1]"
            loading="lazy"
            alt=""
            src="/rectangle-827@2x.png"
          />
          <img
            className="h-[calc(100%_-_231.4px)] w-[245px] absolute !m-[0] top-[17px] bottom-[214.4px] left-[calc(50%_+_21px)] max-h-full object-contain z-[1]"
            loading="lazy"
            alt=""
            src="/rectangle-826-1@2x.png"
          />
          <img
            className="h-[calc(100%_-_226.4px)] w-[237px] absolute !m-[0] top-[17px] bottom-[209.4px] left-[calc(50%_+_324px)] max-h-full object-contain z-[1]"
            loading="lazy"
            alt=""
            src="/rectangle-826-2@2x.png"
          />
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-start justify-start relative">
          <Bike1
            cBR="Gixser"
            propPadding="22px 13px 23px"
            propMarginLeft="unset"
          />
          <Bike1
            cBR="MT15"
            propPadding="22px 13px 23px"
            propMarginLeft="-122.7px"
          />
          <Bike1
            cBR="CVR"
            propPadding="22px 13px 23px"
            propMarginLeft="-122.7px"
          />
          <Bike1
            cBR="R1 5"
            propPadding="22px 13px 23px"
            propMarginLeft="-122.7px"
          />
          <img
            className="h-[calc(100%_-_233.3px)] w-[225.5px] absolute !m-[0] top-[23.6px] bottom-[209.7px] left-[calc(50%_-_550px)] max-h-full object-contain z-[1]"
            loading="lazy"
            alt=""
            src="/rectangle-826-3@2x.png"
          />
          <img
            className="h-[calc(100%_-_233.3px)] w-[calc(100%_-_934.5px)] absolute !m-[0] top-[12.6px] right-[614.5px] bottom-[220.7px] left-[320px] max-w-full overflow-hidden max-h-full object-contain z-[1]"
            loading="lazy"
            alt=""
            src="/rectangle-826-4@2x.png"
          />
          <img
            className="h-[calc(100%_-_236.4px)] w-[239px] absolute !m-[0] top-[15.6px] bottom-[220.8px] left-[calc(50%_+_323px)] max-h-full object-cover z-[1]"
            loading="lazy"
            alt=""
            src="/rectangle-826-5@2x.png"
          />
          <img
            className="h-[calc(100%_-_241.4px)] w-[225px] absolute !m-[0] top-[20.6px] bottom-[220.8px] left-[calc(50%_+_36px)] max-h-full object-cover z-[1]"
            loading="lazy"
            alt=""
            src="/rectangle-826-6@2x.png"
          />
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-start justify-start relative">
          <Bike1
            cBR="kawasaki !40"
            propPadding="22px 13px"
            propMarginLeft="unset"
          />
          <Bike1 cBR="MT15" propPadding="22px 13px" propMarginLeft="-125.4px" />
          <Bike1
            cBR="Filder 350"
            propPadding="22px 13px"
            propMarginLeft="-125.4px"
          />
          <Bike1
            cBR="Scookiti"
            propPadding="22px 13px"
            propMarginLeft="-125.4px"
          />
          <img
            className="h-[calc(100%_-_223.4px)] w-[242px] absolute !m-[0] top-[24.3px] bottom-[199.1px] left-[calc(50%_-_564px)] max-h-full object-cover z-[1]"
            loading="lazy"
            alt=""
            src="/rectangle-826-7@2x.png"
          />
          <img
            className="h-[calc(100%_-_245.4px)] w-[206px] absolute !m-[0] top-[23.3px] bottom-[222.1px] left-[calc(50%_+_330px)] max-h-full object-cover z-[1]"
            loading="lazy"
            alt=""
            src="/rectangle-827-1@2x.png"
          />
          <img
            className="h-[calc(100%_-_220.3px)] w-[247px] absolute !m-[0] top-[9.3px] bottom-[211px] left-[calc(50%_+_24px)] max-h-full object-contain z-[1]"
            loading="lazy"
            alt=""
            src="/rectangle-826-8@2x.png"
          />
          <img
            className="h-[calc(100%_-_235.4px)] w-[239px] absolute !m-[0] top-[18.3px] bottom-[217.1px] left-[calc(50%_-_267px)] max-h-full object-cover z-[1]"
            loading="lazy"
            alt=""
            src="/rectangle-826-9@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

export default BikeListings;
