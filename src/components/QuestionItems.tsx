import { FunctionComponent } from "react";

export type QuestionItemsType = {
  className?: string;
  howDoExtandMyTrip?: string;
  amIResponsibleForFuel?: string;
  chevronDown?: string;
};

const QuestionItems: FunctionComponent<QuestionItemsType> = ({
  className = "",
  howDoExtandMyTrip,
  amIResponsibleForFuel,
  chevronDown,
}) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-center gap-[20px] max-w-full text-left text-lg text-gray-600 font-inter mq1125:flex-wrap ${className}`}
    >
      <div className="flex-[0.9792] rounded-6xs-3 box-border flex flex-row items-center justify-start py-4 pr-[26px] pl-[25px] relative gap-[58.8px] min-w-[371px] max-w-full border-[1px] border-solid border-gray-200 mq450:gap-[29px] mq450:min-w-full mq1125:flex-1">
        <div className="relative leading-[145.52%] capitalize font-medium">
          {howDoExtandMyTrip}
        </div>
        <img
          className="h-[5.3px] w-[10.6px] absolute !m-[0] top-[29px] left-[533px]"
          alt=""
          src="/vector-21.svg"
        />
      </div>
      <div className="flex-1 rounded-6xs-3 box-border flex flex-row items-center justify-start py-4 pr-[15px] pl-[25px] gap-[9px] min-w-[371px] max-w-full border-[1px] border-solid border-gray-200 mq450:min-w-full mq1125:flex-1">
        <div className="flex-1 relative capitalize font-medium inline-block max-w-[calc(100%_-_34px)]">
          {amIResponsibleForFuel}
        </div>
        <img
          className="h-[25.2px] w-[25.2px] relative overflow-hidden shrink-0"
          alt=""
          src={chevronDown}
        />
      </div>
    </div>
  );
};

export default QuestionItems;
