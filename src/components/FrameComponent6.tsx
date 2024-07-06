import { FunctionComponent } from "react";

export type FrameComponent6Type = {
  className?: string;
};

const FrameComponent6: FunctionComponent<FrameComponent6Type> = ({
  className = "",
}) => {
  return (
    <div
      className={`w-[1323px] flex flex-row items-start justify-start py-0 pr-0 pl-5 box-border gap-[23px] max-w-full text-left text-31xl text-gray-800 font-inter mq1125:flex-wrap ${className}`}
    >
      <div className="w-[571px] flex flex-col items-start justify-start pt-[81.5px] px-0 pb-0 box-border min-w-[571px] max-w-full mq450:pt-[53px] mq450:box-border mq800:min-w-full mq1125:flex-1">
        <div className="self-stretch flex flex-col items-start justify-start gap-[24.5px] shrink-0">
          <div className="w-[279px] flex flex-col items-start justify-start py-0 pr-5 pl-0 box-border gap-[5px]">
            <h1 className="m-0 relative text-inherit capitalize font-semibold font-inherit mq450:text-11xl mq800:text-21xl">
              Rent a car
            </h1>
            <div className="self-stretch flex flex-row items-end justify-start gap-[15px] text-3xs text-gray-100">
              <div className="rounded bg-whitesmoke-300 flex flex-row items-center justify-center py-2.5 px-[15px]">
                <div className="relative uppercase inline-block min-w-[40px]">
                  luxury
                </div>
              </div>
              <div className="flex-1 rounded bg-whitesmoke-300 flex flex-row items-center justify-center py-2.5 px-[15px]">
                <div className="relative uppercase inline-block min-w-[51px]">
                  comfort
                </div>
              </div>
              <div className="flex-1 rounded bg-whitesmoke-300 flex flex-row items-center justify-center py-2.5 px-[15px]">
                <div className="relative uppercase inline-block min-w-[48px]">
                  prestige
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch relative text-base leading-[200.02%] text-dimgray-400">
            Booking a self-driving car with us is simple and easy. You can
            browse our selection of vehicles online, choose the car that best
            fits your needs, and book it for the duration of your choice. Our
            user-friendly platform allows you to manage your bookings and view
            your trip history with ease.
          </div>
          <button className="cursor-pointer [border:none] py-2.5 px-4 bg-black shadow-[0px_6px_20px_rgba(0,_0,_0,_0.15)] rounded flex flex-row items-center justify-center whitespace-nowrap hover:bg-darkslategray-800">
            <div className="relative text-xs capitalize font-semibold font-inter text-white text-left inline-block min-w-[51px]">
              rent Car
            </div>
          </button>
        </div>
      </div>
      <img
        className="h-[473px] flex-1 relative max-w-full overflow-hidden object-cover min-w-[461px] shrink-0 mq800:min-w-full"
        loading="lazy"
        alt=""
        src="/car-rental-image@2x.png"
      />
    </div>
  );
};

export default FrameComponent6;
