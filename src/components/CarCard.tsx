import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type CarCardType = {
  className?: string;
  carImage?: string;
  jeepRenegade?: string;

  /** Style props */
  propBorder?: CSSProperties["border"];
};

const CarCard: FunctionComponent<CarCardType> = ({
  className = "",
  carImage,
  jeepRenegade,
  propBorder,
}) => {
  const carCardStyle: CSSProperties = useMemo(() => {
    return {
      border: propBorder,
    };
  }, [propBorder]);

  return (
    <div
      className={`flex-1 rounded-xl bg-white box-border flex flex-col items-center justify-start py-[22px] pr-[11px] pl-3.5 gap-[16px] min-w-[110px] text-left text-base text-black font-inter border-[1px] border-solid border-gainsboro-300 mq450:pt-5 mq450:pb-5 mq450:box-border ${className}`}
      style={carCardStyle}
    >
      <img
        className="w-[225.5px] h-[137.1px] relative object-cover"
        loading="lazy"
        alt=""
        src={carImage}
      />
      <div className="self-stretch flex flex-col items-center justify-start gap-[20px]">
        <div className="self-stretch flex flex-col items-start justify-center py-0 px-[3px] gap-[10px]">
          <h2 className="m-0 relative text-inherit capitalize font-semibold font-inherit inline-block min-w-[120px]">
            {jeepRenegade}
          </h2>
          <div className="self-stretch flex flex-row items-start justify-between gap-[20px] text-3xs text-dimgray-100">
            <div className="flex flex-col items-start justify-start gap-[8.8px]">
              <div className="relative text-xs capitalize font-medium text-dimgray-600 inline-block min-w-[47px]">
                seats: 4
              </div>
              <div className="relative capitalize inline-block min-w-[54px]">
                Luggage: 4
              </div>
              <div className="relative capitalize inline-block min-w-[41px]">
                doors: 4
              </div>
              <div className="relative capitalize inline-block min-w-[53px]">
                fuel: petrol
              </div>
            </div>
            <div className="flex flex-col items-end justify-start gap-[8.8px]">
              <div className="relative text-xs capitalize font-medium text-dimgray-600 inline-block min-w-[100px]">
                horsepower: 500
              </div>
              <div className="relative capitalize inline-block min-w-[60px]">
                engine:3000
              </div>
              <div className="relative capitalize inline-block min-w-[34px]">
                drive:4
              </div>
              <div className="relative capitalize inline-block min-w-[80px]">
                type: hatchback
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
          <div className="shadow-[0px_5.3px_17.68px_rgba(0,_0,_0,_0.15)] rounded-[3.54px] bg-black flex flex-row items-center justify-center pt-[8.8px] px-3.5 pb-[8.9px] whitespace-nowrap text-3xs text-white">
            <div className="relative capitalize font-semibold inline-block min-w-[42px]">
              rent Car
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
