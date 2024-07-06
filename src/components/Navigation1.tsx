import { FunctionComponent } from "react";

export type Navigation1Type = {
  className?: string;
};

const Navigation1: FunctionComponent<Navigation1Type> = ({
  className = "",
}) => {
  return (
    <header
      className={`self-stretch bg-gray-1000 overflow-hidden flex flex-row items-start justify-center py-8 px-5 box-border gap-[4px] top-[0] z-[99] sticky max-w-full text-left text-mid text-white font-inter ${className}`}
    >
      <div className="w-[404.5px] flex flex-col items-start justify-start pt-[7px] pb-0 pr-5 pl-0 box-border max-w-full text-7xl-2">
        <a className="[text-decoration:none] relative font-semibold text-[inherit] inline-block min-w-[83px] whitespace-nowrap">
          Drivee
        </a>
      </div>
      <div className="flex flex-col items-start justify-start pt-[11px] px-0 pb-0">
        <a className="[text-decoration:none] relative capitalize font-medium text-[inherit] inline-block min-w-[64px]">
          hosting
        </a>
      </div>
      <div className="flex flex-col items-start justify-start pt-[11px] pb-0 pr-[27px] pl-0">
        <img
          className="w-6 h-6 relative overflow-hidden shrink-0"
          loading="lazy"
          alt=""
          src="/chevrondown1.svg"
        />
      </div>
      <div className="flex flex-col items-start justify-start pt-[11px] px-0 pb-0">
        <div className="flex flex-row items-start justify-start gap-[31.5px] mq1125:hidden">
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
      <div className="w-[206.5px] flex flex-col items-start justify-start pt-[11px] px-0 pb-0 box-border">
        <img
          className="w-6 h-6 relative overflow-hidden shrink-0"
          alt=""
          src="/chevrondown1.svg"
        />
      </div>
      <div className="h-[9px] w-[220px] hidden" />
      <div className="w-[111.5px] flex flex-col items-start justify-start py-0 pr-[17px] pl-0 box-border">
        <button className="cursor-pointer py-2.5 pr-[15px] pl-4 bg-[transparent] self-stretch rounded flex flex-row items-start justify-start z-[1] border-[1px] border-solid border-white hover:bg-gainsboro-800 hover:box-border hover:border-[1px] hover:border-solid hover:border-gainsboro-100">
          <a className="[text-decoration:none] relative text-lg-9 capitalize font-inter text-white text-left inline-block min-w-[61px] whitespace-nowrap">
            sign in
          </a>
        </button>
      </div>
      <button className="cursor-pointer [border:none] py-[11.5px] px-4 bg-white rounded flex flex-row items-start justify-start whitespace-nowrap z-[1] hover:bg-gainsboro-100">
        <a className="[text-decoration:none] relative text-lg-9 capitalize font-semibold font-inter text-gray-1200 text-left inline-block min-w-[71px] whitespace-nowrap">
          sign up
        </a>
      </button>
    </header>
  );
};

export default Navigation1;
