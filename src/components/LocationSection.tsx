import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type LocationSectionType = {
  className?: string;
  location1?: string;

  /** Style props */
  propGap?: CSSProperties["gap"];
};

const LocationSection: FunctionComponent<LocationSectionType> = ({
  className = "",
  location1,
  propGap,
}) => {
  const locationSectionStyle: CSSProperties = useMemo(() => {
    return {
      gap: propGap,
    };
  }, [propGap]);

  return (
    <div
      className={`flex-1 flex flex-col items-start justify-start gap-[16px] min-w-[206px] text-left text-base text-gray-600 font-inter mq1125:flex-1 ${className}`}
      style={locationSectionStyle}
    >
      <div className="relative capitalize font-semibold inline-block min-w-[67px]">
        {location1}
      </div>
      <div className="self-stretch rounded-8xs-2 bg-white flex flex-row items-center justify-between py-4 px-3.5 gap-[20px] text-sm text-slategray border-[0.5px] border-solid border-gainsboro-700">
        <div className="flex flex-row items-center justify-start">
          <div className="relative capitalize inline-block min-w-[103px]">
            select location
          </div>
        </div>
        <div className="flex flex-col items-start justify-start gap-[6px]">
          <img
            className="w-2 h-1 relative"
            alt=""
            src="/location-drop-down-icon.svg"
          />
          <img
            className="w-2 h-1 relative object-contain"
            alt=""
            src="/location-drop-down-icon-1.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default LocationSection;
