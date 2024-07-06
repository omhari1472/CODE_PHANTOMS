import { FunctionComponent } from "react";

export type TestimonialsType = {
  className?: string;
};

const Testimonials: FunctionComponent<TestimonialsType> = ({
  className = "",
}) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[57px] box-border max-w-full text-left text-31xl text-gray-800 font-inter mq450:pb-6 mq450:box-border mq1125:pb-[37px] mq1125:box-border ${className}`}
    >
      <div className="flex-1 bg-whitesmoke-200 overflow-hidden flex flex-col items-center justify-start pt-[108px] pb-[107.5px] pr-5 pl-[21px] box-border gap-[34px] max-w-full z-[1] mq450:pt-[45px] mq450:pb-[45px] mq450:box-border mq800:gap-[17px] mq1125:pt-[70px] mq1125:pb-[70px] mq1125:box-border">
        <div className="w-[1159px] flex flex-row items-start justify-center py-0 pr-px pl-0 box-border max-w-full">
          <h1 className="m-0 relative text-inherit capitalize font-semibold font-inherit mq450:text-11xl mq800:text-21xl">
            what our customer saying...
          </h1>
        </div>
        <div className="w-[1159px] grid flex-row items-end justify-start gap-[19.9px] max-w-full grid-cols-[repeat(3,_minmax(280px,_1fr))] text-base text-white mq800:grid-cols-[minmax(280px,_1fr)] mq1125:justify-center mq1125:grid-cols-[repeat(2,_minmax(280px,_485px))]">
          <div className="flex flex-row items-end justify-start relative min-h-[558px] max-w-full">
            <img
              className="h-full w-full absolute !m-[0] top-[0px] left-[0px] rounded-smi object-cover"
              loading="lazy"
              alt=""
              src="/rectangle-822@2x.png"
            />
            <div className="flex-1 rounded-t-none rounded-b-sm [background:linear-gradient(69.77deg,_#0f0f1f,_rgba(69,_70,_84,_0))] flex flex-col items-start justify-start pt-[19.5px] pb-[50.5px] pr-5 pl-[21px] box-border gap-[9px] max-w-full z-[1]">
              <div className="w-[373px] h-[231px] relative rounded-t-none rounded-b-sm [background:linear-gradient(69.77deg,_#0f0f1f,_rgba(69,_70,_84,_0))] hidden max-w-full" />
              <div className="relative leading-[27px] capitalize font-semibold z-[2]">
                Excellent Service! Car Rent Service
              </div>
              <div className="self-stretch relative text-xs leading-[166%] capitalize text-whitesmoke-500 z-[2]">
                We have been using Rentaly for our trips needs for several years
                now and have always been happy with their service. Their
                customer support is Excellent Service! and they are always
                available to help with any issues we have. Their prices are also
                very competitive.
              </div>
              <div className="w-[178px] flex flex-row items-start justify-start gap-[5px]">
                <div className="flex flex-col items-start justify-start pt-[7px] px-0 pb-0">
                  <div className="w-[37px] h-px relative box-border z-[2] border-t-[1px] border-solid border-white" />
                </div>
                <div className="flex-1 relative leading-[14px] capitalize font-semibold z-[2]">
                  <p className="m-0">Rovert harvest</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-end pt-0 px-0 pb-[1.5px] box-border max-w-full">
            <div className="self-stretch flex flex-row items-end justify-start pt-0 px-0 pb-[0.5px] box-border relative min-h-[557px] max-w-full">
              <img
                className="h-full w-full absolute !m-[0] top-[0px] bottom-[0px] left-[0px] rounded-smi max-h-full object-cover"
                loading="lazy"
                alt=""
                src="/rectangle-823@2x.png"
              />
              <div className="flex-1 rounded-t-none rounded-br-sm rounded-bl-smi [background:linear-gradient(69.77deg,_#0f0f1f,_rgba(69,_70,_84,_0))] flex flex-col items-start justify-start pt-[20.5px] pb-[49.5px] pr-5 pl-[22px] box-border gap-[9px] max-w-full z-[1]">
                <div className="w-[373px] h-[231px] relative rounded-t-none rounded-br-sm rounded-bl-smi [background:linear-gradient(69.77deg,_#0f0f1f,_rgba(69,_70,_84,_0))] hidden max-w-full" />
                <div className="relative leading-[27px] capitalize font-semibold z-[2]">
                  Excellent Service! Car Rent Service
                </div>
                <div className="self-stretch relative text-xs leading-[166%] capitalize text-whitesmoke-500 z-[2]">
                  I have been using Rentaly for my Car Rental needs for over 5
                  years now. I have never had any problems with their service.
                  Their customer support is always responsive and helpful. I
                  would recommend Rentaly to anyone looking for a reliable Car
                  Rental provider.
                </div>
                <div className="w-[178px] flex flex-row items-start justify-start gap-[5px]">
                  <div className="flex flex-col items-start justify-start pt-[7px] px-0 pb-0">
                    <div className="w-[37px] h-px relative box-border z-[2] border-t-[1px] border-solid border-white" />
                  </div>
                  <div className="flex-1 relative leading-[14px] capitalize font-semibold z-[2]">
                    Jovan Reels
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row items-end justify-start relative min-h-[558px] max-w-full">
            <img
              className="h-full w-full absolute !m-[0] top-[0px] left-[0px] rounded-smi object-cover"
              loading="lazy"
              alt=""
              src="/rectangle-824@2x.png"
            />
            <div className="flex-1 rounded-t-none rounded-br-sm rounded-bl-smi [background:linear-gradient(69.77deg,_#0f0f1f,_rgba(69,_70,_84,_0))] flex flex-col items-start justify-start pt-[18.5px] px-5 pb-[54.5px] box-border gap-[31px] max-w-full z-[1] mq450:gap-[15px]">
              <div className="w-[373px] h-[231px] relative rounded-t-none rounded-br-sm rounded-bl-smi [background:linear-gradient(69.77deg,_#0f0f1f,_rgba(69,_70,_84,_0))] hidden max-w-full" />
              <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
                <div className="relative leading-[27px] capitalize font-semibold z-[2]">
                  Excellent Service! Car Rent Service
                </div>
                <div className="self-stretch relative text-xs leading-[166%] capitalize text-whitesmoke-500 z-[2]">
                  Endorsed by industry experts, Rentaly is the Car Rental
                  solution you can trust. With years of experience in the field,
                  we provide fast, reliable and secure Car Rental services.
                </div>
              </div>
              <div className="w-[178px] flex flex-row items-start justify-start gap-[5px]">
                <div className="flex flex-col items-start justify-start pt-[7px] px-0 pb-0">
                  <div className="w-[37px] h-px relative box-border z-[2] border-t-[1px] border-solid border-white" />
                </div>
                <div className="flex-1 relative leading-[14px] capitalize font-semibold z-[2]">
                  <p className="m-0">Kanesha Keyton</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
