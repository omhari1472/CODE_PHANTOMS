import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type Bike1Type = {
  className?: string;
  cBR?: string;

  /** Style props */
  propPadding?: CSSProperties["padding"];
  propMarginLeft?: CSSProperties["marginLeft"];
};

const Bike1: FunctionComponent<Bike1Type> = ({
  className = "",
  cBR,
  propPadding,
  propMarginLeft,
}) => {
  const bikeStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
      marginLeft: propMarginLeft,
    };
  }, [propPadding, propMarginLeft]);

  return (
    <div
      className={`w-[275px] rounded-xl bg-white box-border flex flex-col items-center justify-start py-[22px] px-[13px] gap-[16px] ml-[-113.2px] text-left text-base text-black font-inter border-[1px] border-solid border-lightgray-200 mq450:pt-[22px] mq450:pb-5 mq450:box-border ${className}`}
      style={bikeStyle}
    >
      <div className="self-stretch h-[137.1px] relative" />
      <div className="self-stretch flex flex-col items-start justify-start gap-[20px]">
        <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[7.3px] gap-[10px]">
          <div className="relative capitalize font-semibold inline-block min-w-[84px]">
            {cBR}
          </div>
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
  );
};

export default Bike1;
