import { FunctionComponent } from "react";

export type FrameComponent5Type = {
  className?: string;
};

const FrameComponent5: FunctionComponent<FrameComponent5Type> = ({
  className = "",
}) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-start max-w-full text-left text-31xl text-gray-800 font-inter ${className}`}
    >
      <div className="w-[1324px] flex flex-row items-center justify-start py-0 pr-5 pl-0 box-border gap-[42px] max-w-full mq800:gap-[21px] mq1125:flex-wrap">
        <img
          className="h-[473px] flex-1 relative max-w-full overflow-hidden object-cover min-w-[461px] mq800:min-w-full"
          loading="lazy"
          alt=""
          src="/bike-image@2x.png"
        />
        <div className="w-[552px] flex flex-col items-start justify-start py-5 px-0 box-border gap-[48px] min-w-[552px] max-w-full mq800:gap-[24px] mq800:min-w-full mq1125:flex-1">
          <div className="w-[571px] flex flex-col items-start justify-start gap-[26px] max-w-[104%] shrink-0">
            <div className="flex flex-col items-start justify-start gap-[5px]">
              <h1 className="m-0 relative text-inherit capitalize font-semibold font-inherit mq450:text-11xl mq800:text-21xl">
                Rent a bike
              </h1>
              <div className="w-[259px] flex flex-row items-end justify-start gap-[15px] text-3xs text-gray-100">
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
          </div>
          <button className="cursor-pointer [border:none] py-2.5 px-4 bg-black shadow-[0px_6px_20px_rgba(0,_0,_0,_0.15)] rounded flex flex-row items-center justify-center whitespace-nowrap hover:bg-darkslategray-800">
            <div className="relative text-2xs capitalize font-semibold font-inter text-white text-left inline-block min-w-[50px]">
              rent bike
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent5;
