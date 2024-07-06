import { FunctionComponent } from "react";
import RentalOptions from "../components/RentalOptions";
import Demo1 from "../components/Demo1";

const Car: FunctionComponent = () => {
  return (
    <div className="w-full relative bg-whitesmoke-500 overflow-hidden flex flex-col items-start justify-start gap-[310px] leading-[normal] tracking-[normal] text-left text-21xl text-white font-inter mq450:gap-[77px] mq750:gap-[155px]">
      <div className="w-full h-[360px] absolute !m-[0] top-[108px] right-[0px] left-[0px] bg-gray-900 overflow-hidden shrink-0">
        <img
          className="absolute top-[9px] left-[-148px] w-[692.7px] h-[398.7px]"
          alt=""
          src="/map.svg"
        />
        <h1 className="m-0 absolute top-[120px] left-[calc(50%_-_300px)] text-inherit capitalize font-semibold font-inherit z-[1] mq1050:text-13xl mq450:text-5xl">
          Rent a car Rent Your Freedom
        </h1>
      </div>
      <header className="self-stretch bg-whitesmoke-500 overflow-hidden flex flex-row items-start justify-center pt-[39px] pb-[29px] pr-5 pl-[26px] box-border gap-[4px] top-[0] z-[99] sticky max-w-full text-left text-mid text-gray-1200 font-inter">
        <div className="w-[404.5px] flex flex-col items-start justify-start py-0 pr-5 pl-0 box-border max-w-full text-7xl-2">
          <a className="[text-decoration:none] relative font-semibold text-[inherit] inline-block min-w-[83px] whitespace-nowrap">
            Drivee
          </a>
        </div>
        <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
          <a className="[text-decoration:none] relative capitalize font-medium text-[inherit] inline-block min-w-[64px]">
            hosting
          </a>
        </div>
        <div className="flex flex-col items-start justify-start pt-1 pb-0 pr-[27px] pl-0">
          <img
            className="w-6 h-6 relative overflow-hidden shrink-0"
            loading="lazy"
            alt=""
            src="/chevrondown.svg"
          />
        </div>
        <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
          <div className="flex flex-row items-start justify-start gap-[31.5px] lg:hidden">
            <div className="flex flex-col items-start justify-start pt-[1.5px] px-0 pb-0">
              <a className="[text-decoration:none] relative capitalize font-medium text-[inherit] inline-block min-w-[92px] whitespace-nowrap">
                Contact us
              </a>
            </div>
            <a className="[text-decoration:none] relative capitalize font-medium text-[inherit] inline-block min-w-[68px]">
              Account
            </a>
          </div>
        </div>
        <div className="w-[400px] flex flex-col items-start justify-start pt-1 px-0 pb-0 box-border max-w-full">
          <img
            className="w-6 h-6 relative overflow-hidden shrink-0"
            loading="lazy"
            alt=""
            src="/chevrondown.svg"
          />
        </div>
        <div className="flex flex-col items-start justify-start pt-2 px-0 pb-0">
          <img
            className="w-[34px] h-[34px] relative rounded-[50%] object-cover"
            loading="lazy"
            alt=""
            src="/ellipse-11@2x.png"
          />
        </div>
      </header>
      <main className="self-stretch flex flex-col items-start justify-start gap-[40.3px] max-w-full mq750:gap-[20px]">
        <section className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
          <RentalOptions />
        </section>
        <Demo1 />
      </main>
    </div>
  );
};

export default Car;
