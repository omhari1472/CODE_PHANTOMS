import { FunctionComponent } from "react";

export type NameInputType = {
  className?: string;
  name1?: string;
  nameInputPlaceholdPlaceho?: string;
};

const NameInput: FunctionComponent<NameInputType> = ({
  className = "",
  name1,
  nameInputPlaceholdPlaceho,
}) => {
  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start gap-[6.3px] text-left text-mini-7 text-gray-800 font-inter ${className}`}
    >
      <div className="relative leading-[150%] font-semibold inline-block min-w-[50px]">
        {name1}
      </div>
      <div className="self-stretch shadow-[0px_3.1px_6.3px_rgba(18,_18,_18,_0.03)] rounded-6xs-3 bg-white flex flex-row items-center justify-start py-[11px] px-4 border-[1px] border-solid border-lightslategray-200">
        <input
          className="w-[98px] [border:none] [outline:none] bg-[transparent] h-[19px] flex flex-row items-center justify-start font-inter text-smi-6 text-lightslategray-100"
          placeholder={nameInputPlaceholdPlaceho}
          type="text"
        />
      </div>
    </div>
  );
};

export default NameInput;
