import { FunctionComponent } from "react";
import QuestionItems from "./QuestionItems";

export type QuestionsType = {
  className?: string;
};

const Questions: FunctionComponent<QuestionsType> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-[21px] box-border max-w-full ${className}`}
    >
      <form className="m-0 w-[1161px] flex flex-col items-end justify-start gap-[38.7px] max-w-full mq800:gap-[19px]">
        <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
          <div className="w-[650.3px] flex flex-col items-start justify-start gap-[29.3px] max-w-full">
            <div className="self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-[23px]">
              <div className="relative text-31xl-4 capitalize font-semibold font-inter text-gray-800 text-left mq450:text-11xl mq800:text-21xl">
                have any Question
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-between gap-[20px] mq800:flex-wrap mq800:justify-center">
              <div className="flex flex-col items-start justify-start pt-[10.5px] px-0 pb-0">
                <div className="relative text-2xl capitalize font-inter text-gray-100 text-left inline-block min-w-[77px] mq450:text-mid">
                  General
                </div>
              </div>
              <div className="flex flex-col items-start justify-start pt-[10.5px] px-0 pb-0">
                <div className="relative text-2xl capitalize font-inter text-gray-100 text-left inline-block min-w-[82px] mq450:text-mid">
                  security
                </div>
              </div>
              <button className="cursor-pointer [border:none] py-[10.5px] px-[17px] bg-whitesmoke-600 flex flex-row items-start justify-start hover:bg-lightgray-300">
                <div className="relative text-2xl capitalize font-semibold font-inter text-gray-800 text-left inline-block min-w-[83px] mq450:text-mid">
                  booking
                </div>
              </button>
              <div className="flex flex-col items-start justify-start pt-[10.5px] px-0 pb-0">
                <div className="relative text-2xl capitalize font-inter text-gray-100 text-left inline-block min-w-[87px] mq450:text-mid">
                  payment
                </div>
              </div>
              <div className="flex flex-col items-start justify-start pt-[10.5px] px-0 pb-0">
                <div className="relative text-2xl capitalize font-inter text-gray-100 text-left inline-block min-w-[68px] mq450:text-mid">
                  others
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[40px] max-w-full mq800:gap-[20px]">
          <div className="self-stretch flex flex-row flex-wrap items-start justify-center gap-[20px] max-w-full">
            <div className="flex-1 rounded-6xs-3 box-border flex flex-row items-center justify-start py-[18px] pr-[26px] pl-[25px] relative gap-[58.8px] min-w-[371px] max-w-full border-[1px] border-solid border-darkgray-100 mq450:gap-[29px] mq450:min-w-full">
              <div className="relative text-lg capitalize font-medium font-inter text-gray-600 text-left">
                how do i find a car or bike for trip?
              </div>
              <img
                className="h-[5.3px] w-[10.6px] absolute !m-[0] top-[29px] left-[533px]"
                alt=""
                src="/vector-21.svg"
              />
            </div>
            <div className="flex-1 rounded-6xs-3 box-border overflow-hidden flex flex-row items-center justify-center py-4 px-[23px] gap-[11.8px] min-w-[371px] max-w-full border-[1px] border-solid border-darkgray-100 mq450:min-w-full">
              <div className="flex-1 relative text-lg leading-[145.52%] capitalize font-medium font-inter text-gray-600 text-left inline-block max-w-[calc(100%_-_37px)]">
                How can i extend my trip date after booking?
              </div>
              <img
                className="h-[25.2px] w-[25.2px] relative overflow-hidden shrink-0"
                alt=""
                src="/chevrondown-2.svg"
              />
            </div>
          </div>
          <QuestionItems
            howDoExtandMyTrip="how do extand my trip?"
            amIResponsibleForFuel="am i responsible for fuel?"
            chevronDown="/chevrondown-3.svg"
          />
          <QuestionItems
            howDoExtandMyTrip="can i book car or bike under 20 of age?"
            amIResponsibleForFuel="how can i apply for promo code?"
            chevronDown="/chevrondown-4.svg"
          />
        </div>
      </form>
    </section>
  );
};

export default Questions;
