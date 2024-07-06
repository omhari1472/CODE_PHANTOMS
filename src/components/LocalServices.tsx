import { FunctionComponent } from "react";
import LocationButtons from "./LocationButtons";

export type LocalServicesType = {
  className?: string;
};

const LocalServices: FunctionComponent<LocalServicesType> = ({
  className = "",
}) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start pt-0 px-[38px] pb-[140.2px] box-border max-w-full text-center text-29xl text-gray-800 font-inter mq800:pb-[91px] mq800:box-border ${className}`}
    >
      <div className="flex-1 flex flex-col items-start justify-start gap-[65px] max-w-full mq450:gap-[16px] mq800:gap-[32px]">
        <div className="self-stretch flex flex-row items-start justify-center py-0 pr-[21px] pl-5">
          <h1 className="m-0 relative text-inherit capitalize font-bold font-inherit z-[1] mq450:text-10xl mq800:text-19xl">
            local service we provide
          </h1>
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-end justify-center gap-[49.6px] max-w-full text-left text-4xl-2 mq800:gap-[25px]">
          <div className="flex-1 flex flex-row items-start justify-center gap-[55.5px] min-w-[820px] max-w-full mq800:gap-[28px] mq1125:flex-wrap mq1125:min-w-full">
            <div className="flex flex-col items-start justify-start pt-[88px] px-0 pb-0">
              <img
                className="w-[52.5px] h-[52.5px] relative overflow-hidden shrink-0 z-[1]"
                loading="lazy"
                alt=""
                src="/chevronleft.svg"
              />
            </div>
            <div className="flex-1 flex flex-row items-start justify-between min-w-[749px] max-w-full gap-[20px] z-[1] mq1125:flex-wrap mq1125:min-w-full">
              <LocationButtons
                locationIcons="/ellipse-9@2x.png"
                gazipur="gazipur"
              />
              <div className="h-[228.8px] flex flex-col items-start justify-start gap-[24.2px]">
                <div className="w-[176.6px] h-[176.6px] relative rounded-[50%] shrink-0 flex items-center justify-center">
                  <img
                    className="w-full h-full shrink-0 object-contain absolute left-[0px] top-[55px] [transform:scale(1.76)]"
                    loading="lazy"
                    alt=""
                    src="/ellipse-6@2x.png"
                  />
                </div>
                <div className="relative capitalize font-medium shrink-0 mq450:text-lgi">
                  mohammud pur
                </div>
              </div>
              <LocationButtons
                locationIcons="/ellipse-8@2x.png"
                gazipur="gulshan"
              />
              <LocationButtons
                locationIcons="/ellipse-7@2x.png"
                gazipur="dhanmondi"
              />
              <LocationButtons
                locationIcons="/ellipse-7-1@2x.png"
                gazipur="mohakali"
              />
            </div>
          </div>
          <div className="h-[140.5px] flex flex-col items-start justify-start">
            <img
              className="w-[52.5px] h-[52.5px] relative overflow-hidden shrink-0 z-[1]"
              loading="lazy"
              alt=""
              src="/chevronright.svg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocalServices;
