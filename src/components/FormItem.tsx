import { FunctionComponent } from "react";
import LocationSection from "./LocationSection";

export type FormItemType = {
  className?: string;
};

const FormItem: FunctionComponent<FormItemType> = ({ className = "" }) => {
  return (
    <form
      className={`!m-[0] w-[1199px] absolute right-[120px] bottom-[-72px] rounded-lg bg-white box-border flex flex-row items-end justify-center py-[34px] px-8 gap-[18px] max-w-full z-[3] border-[2px] border-solid border-gainsboro-200 mq1125:flex-wrap ${className}`}
    >
      <LocationSection location1="location" />
      <LocationSection location1="pick-UP" propGap="12px" />
      <div className="w-[219px] flex flex-col items-start justify-start gap-[12px]">
        <div className="relative text-base capitalize font-semibold font-inter text-gray-600 text-left inline-block min-w-[37px]">
          date
        </div>
        <div className="self-stretch rounded-8xs-2 bg-white flex flex-row items-center justify-start py-4 pr-[13px] pl-3.5 gap-[12.6px] border-[0.5px] border-solid border-gainsboro-700">
          <img
            className="h-3.5 w-3.5 relative"
            alt=""
            src="/calender-icon.svg"
          />
          <input
            className="w-[calc(100%_-_41px)] [border:none] [outline:none] bg-[transparent] h-[17px] flex-1 flex flex-row items-center justify-start font-inter text-sm text-slategray min-w-[98px]"
            placeholder="10/9/2020   -  14/9/2023"
            type="text"
          />
        </div>
      </div>
      <button className="cursor-pointer [border:none] py-[17.5px] px-[71px] bg-gray-800 shadow-[0px_8px_24px_rgba(0,_0,_0,_0.15)] rounded flex flex-row items-center justify-center whitespace-nowrap hover:bg-darkslategray-100">
        <b className="relative text-sm capitalize inline-block font-inter text-white text-left min-w-[82px]">
          search now
        </b>
      </button>
    </form>
  );
};

export default FormItem;
