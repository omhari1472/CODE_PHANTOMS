import { FunctionComponent } from "react";

export type LocationButtonsType = {
  className?: string;
  locationIcons?: string;
  gazipur?: string;
};

const LocationButtons: FunctionComponent<LocationButtonsType> = ({
  className = "",
  locationIcons,
  gazipur,
}) => {
  return (
    <div
      className={`h-[228.8px] flex flex-col items-start justify-start gap-[24.2px] text-left text-4xl-2 text-gray-800 font-inter ${className}`}
    >
      <div className="w-[176.6px] h-[176.6px] relative rounded-[50%] shrink-0 flex items-center justify-center">
        <img
          className="w-full h-full shrink-0 object-contain absolute left-[0px] top-[24px] [transform:scale(1.372)]"
          loading="lazy"
          alt=""
          src={locationIcons}
        />
      </div>
      <div className="flex flex-row items-start justify-start py-0 pr-[45px] pl-11">
        <div className="relative capitalize font-medium inline-block min-w-[87px] shrink-0 mq450:text-lgi">
          {gazipur}
        </div>
      </div>
    </div>
  );
};

export default LocationButtons;
