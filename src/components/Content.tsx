import { FunctionComponent } from "react";

export type ContentType = {
  className?: string;
};

const Content: FunctionComponent<ContentType> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center pt-0 pb-[19.8px] pr-5 pl-[21px] box-border max-w-full text-left text-35xl text-white font-inter ${className}`}
    >
      <div className="w-[1158.7px] flex flex-row items-start justify-center gap-[20px] max-w-full mq1050:flex-wrap">
        <div className="flex-1 flex flex-row items-start justify-start relative min-w-[434px] max-w-full mq750:min-w-full">
          <h1 className="!m-[0] absolute top-[91px] right-[-63px] text-inherit capitalize font-semibold font-inherit mq750:text-24xl mq450:text-13xl">
            Car Booking
          </h1>
          <div className="flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-[0.1px] box-border gap-[23.3px] shrink-0 max-w-full z-[1]">
            <div className="self-stretch h-[404px] relative">
              <img
                className="absolute top-[0px] left-[0px] rounded-mid w-full h-full object-contain"
                alt=""
                src="/image-57@2x.png"
              />
              <img
                className="absolute top-[217.6px] left-[599.1px] w-[45px] h-[45px] object-contain z-[1]"
                loading="lazy"
                alt=""
                src="/group-1000004070@2x.png"
              />
              <img
                className="absolute top-[217.6px] left-[21.4px] w-[45px] h-[45px] z-[1]"
                loading="lazy"
                alt=""
                src="/group-1000004071.svg"
              />
            </div>
            <div className="self-stretch flex flex-row items-start justify-start gap-[23.4px] mq750:flex-wrap">
              <img
                className="self-stretch flex-1 relative rounded-[6.15px] max-w-full overflow-hidden max-h-full object-cover min-w-[155px] min-h-[124px]"
                loading="lazy"
                alt=""
                src="/rectangle-828@2x.png"
              />
              <img
                className="self-stretch flex-1 relative rounded-[6.15px] max-w-full overflow-hidden max-h-full object-cover min-w-[155px] min-h-[124px]"
                loading="lazy"
                alt=""
                src="/rectangle-830@2x.png"
              />
              <img
                className="self-stretch flex-1 relative rounded-[6.15px] max-w-full overflow-hidden max-h-full object-cover min-w-[155px] min-h-[124px]"
                loading="lazy"
                alt=""
                src="/rectangle-829@2x.png"
              />
            </div>
          </div>
        </div>
        <div className="w-[472.7px] shadow-[0px_189.2px_52.61px_rgba(209,_209,_209,_0),_0px_121.4px_48.57px_rgba(209,_209,_209,_0.01),_0px_67.8px_40.47px_rgba(209,_209,_209,_0.05),_0px_30.4px_30.35px_rgba(209,_209,_209,_0.09),_0px_7.1px_16.19px_rgba(209,_209,_209,_0.1),_0px_0px_0px_rgba(209,_209,_209,_0.1)] rounded-[12.14px] bg-whitesmoke-400 box-border flex flex-col items-start justify-start pt-[31px] px-7 pb-8 relative gap-[28.9px] min-w-[472.71px] shrink-0 max-w-full z-[1] text-base text-black border-[1px] border-solid border-gainsboro-400 mq750:pt-5 mq750:pb-[21px] mq750:box-border mq750:min-w-full mq1050:flex-1">
          <div className="absolute !m-[0] top-[235.8px] left-[48.6px] text-smi-1 capitalize font-outfit text-gray-300 inline-block min-w-[79px]">
            DD/MM/yYYY
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[20.3px]">
            <div className="self-stretch flex flex-col items-start justify-start gap-[10.2px]">
              <div className="self-stretch flex flex-row items-start justify-start gap-[10.1px] mq450:flex-wrap">
                <div className="flex flex-col items-start justify-start pt-[48.5px] px-0 pb-0">
                  <img
                    className="w-[16.2px] h-[21.2px] relative"
                    alt=""
                    src="/vector-2.svg"
                  />
                </div>
                <div className="flex-1 flex flex-col items-start justify-start pt-[49.7px] pb-0 pr-5 pl-0 box-border min-w-[207px]">
                  <div className="relative capitalize font-medium inline-block min-w-[66px]">
                    Location
                  </div>
                </div>
                <img
                  className="h-[59.7px] w-[59.7px] relative"
                  loading="lazy"
                  alt=""
                  src="/group-1000004068.svg"
                />
              </div>
              <div className="self-stretch h-[50.6px] relative text-smi-1 text-gray-300 font-outfit">
                <img
                  className="absolute top-[0px] left-[0px] rounded-[4.05px] w-full h-full z-[1]"
                  loading="lazy"
                  alt=""
                  src="/rectangle-743.svg"
                />
                <div className="absolute top-[18.2px] left-[24.3px] flex flex-row items-start justify-start">
                  <div className="absolute !m-[0] top-[0px] right-[-151px] capitalize">
                    23/c AR Complex,Shahi Eidgah,sylhet
                  </div>
                  <div className="relative text-xs capitalize font-inter inline-block min-w-[49px] z-[2]">
                    location
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[10.1px]">
              <div className="flex flex-row items-start justify-start gap-[10.1px]">
                <img
                  className="h-[24.3px] w-[24.3px] relative overflow-hidden shrink-0 min-h-[24px]"
                  loading="lazy"
                  alt=""
                  src="/uilcalender.svg"
                />
                <div className="flex flex-col items-start justify-start pt-[2.7px] px-0 pb-0">
                  <div className="relative capitalize font-medium inline-block min-w-[61px]">
                    Pick-up
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start gap-[15.2px] text-xs-6 text-gray-300 mq450:flex-wrap">
                <div className="h-[50.6px] flex-1 relative min-w-[164px]">
                  <img
                    className="absolute top-[0px] left-[0px] rounded-[4.05px] w-full h-full z-[1]"
                    alt=""
                    src="/rectangle-744.svg"
                  />
                  <div className="absolute top-[18.3px] left-[20.8px] capitalize inline-block min-w-[76px] z-[2]">
                    DD/MM/yYYY
                  </div>
                </div>
                <div className="h-[50.6px] w-[146.9px] relative text-xs">
                  <img
                    className="absolute top-[0px] left-[0px] rounded-[4.05px] w-full h-full"
                    alt=""
                    src="/rectangle-745.svg"
                  />
                  <div className="absolute top-[18.3px] left-[18.9px] capitalize inline-block min-w-[53px] z-[1]">
                    12.30 pM
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[10.1px]">
              <div className="flex flex-row items-start justify-start gap-[10.1px]">
                <img
                  className="h-[24.3px] w-[24.3px] relative overflow-hidden shrink-0 min-h-[24px]"
                  alt=""
                  src="/uilcalender.svg"
                />
                <div className="flex flex-col items-start justify-start pt-[2.6px] px-0 pb-0">
                  <div className="relative capitalize font-medium inline-block min-w-[69px]">
                    Drop-off
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start gap-[15.2px] text-xs text-gray-300 mq450:flex-wrap">
                <div className="h-[50.6px] flex-1 relative min-w-[164px]">
                  <img
                    className="absolute top-[0px] left-[0px] rounded-[4.05px] w-full h-full"
                    alt=""
                    src="/rectangle-744.svg"
                  />
                  <div className="absolute top-[18.2px] left-[20.3px] capitalize inline-block min-w-[79px] z-[1]">
                    DD/MM/yYYY
                  </div>
                </div>
                <div className="h-[50.6px] w-[146px] relative">
                  <img
                    className="absolute top-[0px] left-[0px] rounded-[4.05px] w-full h-full"
                    alt=""
                    src="/rectangle-745-1.svg"
                  />
                  <div className="absolute top-[18.2px] left-[18.7px] capitalize inline-block min-w-[53px] z-[1]">
                    12.30 pM
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[7.7px]">
            <div className="relative capitalize font-semibold inline-block min-w-[67px]">
              Duration
            </div>
            <div className="self-stretch flex flex-row items-center justify-between py-0 pr-px pl-0 gap-[20px] text-xs text-dimgray-200 mq450:flex-wrap">
              <div className="relative capitalize font-medium inline-block min-w-[61px]">
                7.75 hours
              </div>
              <div className="shadow-[0px_18.2px_5.06px_rgba(145,_136,_136,_0),_0px_12.1px_5.06px_rgba(145,_136,_136,_0.01),_0px_7.1px_4.05px_rgba(145,_136,_136,_0.05),_0px_3px_3.04px_rgba(145,_136,_136,_0.09),_0px_1px_2.02px_rgba(145,_136,_136,_0.1),_0px_0px_0px_rgba(145,_136,_136,_0.1)] rounded-[2.02px] bg-white flex flex-row items-start justify-start py-[9.9px] px-6 text-mid-4 text-darkslategray-300">
                <div className="relative capitalize font-semibold inline-block min-w-[61px] whitespace-nowrap">
                  $36.65
                </div>
              </div>
            </div>
          </div>
          <button className="cursor-pointer [border:none] pt-[18px] px-5 pb-[18.1px] bg-gray-1100 w-[404.7px] rounded-[10.12px] flex flex-row items-start justify-center box-border whitespace-nowrap max-w-full hover:bg-darkslategray-200">
            <div className="relative text-base uppercase font-semibold font-inter text-white text-left inline-block min-w-[91px]">
              book now
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Content;
