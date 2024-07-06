import { FunctionComponent } from "react";

export type CarSpecificationsType = {
  className?: string;
};

const CarSpecifications: FunctionComponent<CarSpecificationsType> = ({
  className = "",
}) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center pt-0 pb-[42px] pr-5 pl-[21px] box-border max-w-full text-left text-5xl text-black font-inter mq750:pb-[27px] mq750:box-border ${className}`}
    >
      <div className="w-[1149px] flex flex-row items-start justify-start relative max-w-full">
        <div className="w-[331px] !m-[0] absolute top-[-53px] left-[-5px] flex flex-col items-start justify-start gap-[24px]">
          <div className="relative capitalize font-semibold mq450:text-lgi">
            Specifications
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[24px] text-lg text-dimgray-100">
            <div className="self-stretch flex flex-col items-start justify-start gap-[24px]">
              <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-1 gap-[24px]">
                <div className="self-stretch flex flex-row items-start justify-between gap-[20px]">
                  <div className="relative capitalize font-medium inline-block min-w-[45px]">
                    Body
                  </div>
                  <div className="relative capitalize font-medium inline-block min-w-[55px]">
                    Sedan
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-between gap-[20px]">
                  <div className="relative capitalize font-medium inline-block min-w-[40px]">
                    Seat
                  </div>
                  <div className="relative capitalize font-medium inline-block min-w-[65px]">
                    2 seats
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[24px]">
                <div className="self-stretch flex flex-row items-start justify-between gap-[20px]">
                  <div className="relative capitalize font-medium inline-block min-w-[42px]">
                    Door
                  </div>
                  <div className="relative capitalize font-medium inline-block min-w-[68px]">
                    2 doors
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-between gap-[20px]">
                  <div className="relative capitalize font-medium inline-block min-w-[76px]">
                    Luggage
                  </div>
                  <div className="relative capitalize font-medium inline-block min-w-[32px]">
                    150
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[24px]">
                <div className="self-stretch flex flex-row items-start justify-between gap-[20px]">
                  <div className="relative capitalize font-medium inline-block min-w-[114px]">
                    Transmission
                  </div>
                  <div className="relative capitalize font-medium inline-block min-w-[89px]">
                    Automatic
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-between gap-[20px]">
                  <div className="relative capitalize font-medium inline-block min-w-[45px]">
                    Drive
                  </div>
                  <div className="relative capitalize font-medium inline-block min-w-[43px]">
                    4WD
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[24px]">
                <div className="self-stretch flex flex-row items-start justify-between gap-[20px]">
                  <div className="relative capitalize font-medium inline-block min-w-[39px]">
                    Year
                  </div>
                  <div className="relative capitalize font-medium inline-block min-w-[46px]">
                    2020
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-between gap-[20px]">
                  <div className="relative capitalize font-medium inline-block min-w-[68px]">
                    Mileage
                  </div>
                  <div className="relative capitalize font-medium inline-block min-w-[35px]">
                    200
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start">
              <div className="self-stretch flex flex-col items-start justify-start gap-[24px]">
                <div className="self-stretch flex flex-row items-start justify-between gap-[20px]">
                  <div className="relative capitalize font-medium inline-block min-w-[83px]">
                    Fuel Type
                  </div>
                  <div className="relative capitalize font-medium inline-block min-w-[58px]">
                    Hybird
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-between gap-[20px]">
                  <div className="relative capitalize font-medium inline-block min-w-[59px]">
                    Engine
                  </div>
                  <div className="relative capitalize font-medium inline-block min-w-[47px]">
                    3000
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          className="h-[482px] flex-1 relative max-w-full overflow-hidden object-cover z-[1]"
          loading="lazy"
          alt=""
          src="/image-56@2x.png"
        />
      </div>
    </section>
  );
};

export default CarSpecifications;
