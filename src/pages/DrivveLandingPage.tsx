import { FunctionComponent } from "react";
import Navigation1 from "../components/Navigation1";
import Hero from "../components/Hero";
import FormItem from "../components/FormItem";
import FrameComponent6 from "../components/FrameComponent6";
import FrameComponent5 from "../components/FrameComponent5";
import FrameComponent4 from "../components/FrameComponent4";
import Testimonials from "../components/Testimonials";
import LocalServices from "../components/LocalServices";
import Questions from "../components/Questions";
import Futtersection from "../components/Futtersection";

const DrivveLandingPage: FunctionComponent = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start gap-[93px] leading-[normal] tracking-[normal] mq450:gap-[23px] mq800:gap-[46px]">
      <section className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[95px] box-border max-w-full mq450:pb-10 mq450:box-border mq1125:pb-[62px] mq1125:box-border">
        <div className="flex-1 flex flex-col items-end justify-start pt-0 px-0 pb-[239.3px] box-border relative gap-[30px] bg-[url('/public/header-sction@3x.png')] bg-cover bg-no-repeat bg-[top] max-w-full mq450:pb-[101px] mq450:box-border mq800:pb-[156px] mq800:box-border">
          <img
            className="w-[858px] relative max-h-full object-contain hidden max-w-full z-[0]"
            alt=""
            src="/car-image-header-section@2x.png"
          />
          <img
            className="w-[445px] relative max-h-full object-contain hidden max-w-full z-[1]"
            alt=""
            src="/bike-image-header-section@2x.png"
          />
          <Navigation1 />
          <Hero />
          <FormItem />
        </div>
      </section>
      <section className="self-stretch flex flex-col items-end justify-start pt-0 px-0 pb-[115px] box-border gap-[97px] min-h-[1158px] max-w-full mq450:gap-[24px] mq800:gap-[48px] mq800:pb-[49px] mq800:box-border mq1350:pb-[75px] mq1350:box-border">
        <FrameComponent6 />
        <FrameComponent5 />
      </section>
      <section className="w-[1009.6px] flex flex-row items-start justify-center pt-0 px-5 pb-[59.7px] box-border max-w-full text-left text-19xl text-gray-1300 font-outfit mq800:pb-[39px] mq800:box-border">
        <div className="w-[729.6px] flex flex-row items-start justify-start relative max-w-full">
          <img
            className="h-[473px] w-[710px] absolute !m-[0] top-[-85px] right-[-570.4px] object-cover"
            loading="lazy"
            alt=""
            src="/car-share-image@2x.png"
          />
          <div className="flex-1 shadow-[38px_156px_45px_rgba(201,_201,_201,_0),_24px_100px_41px_rgba(201,_201,_201,_0.01),_14px_56px_35px_rgba(201,_201,_201,_0.05),_6px_25px_26px_rgba(201,_201,_201,_0.09),_2px_6px_14px_rgba(201,_201,_201,_0.1)] rounded-2xl bg-white box-border flex flex-col items-start justify-start pt-[38px] pb-[50px] pr-[49px] pl-[52px] gap-[35.9px] max-w-full z-[1] border-[2px] border-solid border-gainsboro-100 mq450:pt-[25px] mq450:pb-8 mq450:box-border mq800:gap-[18px] mq800:pl-[26px] mq800:pr-6 mq800:box-border">
            <div className="self-stretch flex flex-col items-start justify-start gap-[21px] max-w-full shrink-0">
              <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[65px] max-w-full mq450:gap-[16px] mq800:gap-[32px]">
                <div className="flex-1 flex flex-col items-start justify-start pt-[11.6px] px-0 pb-0 box-border min-w-[345px] max-w-full mq800:min-w-full">
                  <h1 className="m-0 self-stretch relative text-inherit leading-[124.52%] capitalize font-semibold font-inherit mq450:text-[23px] mq450:leading-[28px] mq800:text-11xl mq800:leading-[38px]">
                    do yo want to share your vehicle?
                  </h1>
                </div>
                <div className="h-[26.2px] w-[26.2px] relative rounded-[50%] bg-gray-1400" />
              </div>
              <div className="self-stretch h-[155.4px] relative text-base leading-[200%] capitalize font-inter text-dimgray-400 inline-block shrink-0">
                We'll use your car's location to calculate your Onboard Bonus.
                Each ZIP code will belong to one of five zones. Zones are based
                on guest demand for cars—more guest demand means a higher zone,
                and bigger bonuses for cars. Zone 1 gets the highest bonus,
                while Zones 4 and 5 aren't eligible for the Onboard Bonus.
              </div>
            </div>
            <button className="cursor-pointer [border:none] py-4 px-[23px] bg-gray-1300 rounded flex flex-row items-start justify-start gap-[10px]">
              <a className="[text-decoration:none] relative text-[15px] capitalize font-semibold font-inter text-white text-left inline-block min-w-[83px] whitespace-nowrap">
                learn more
              </a>
              <div className="flex flex-col items-start justify-start pt-[3.6px] px-0 pb-0">
                <img
                  className="w-[11px] h-[10.9px] relative object-contain"
                  alt=""
                  src="/group-1000004072@2x.png"
                />
              </div>
            </button>
          </div>
        </div>
      </section>
      <FrameComponent4 />
      <Testimonials />
      <LocalServices />
      <img
        className="w-full h-[651px] absolute !m-[0] right-[0px] bottom-[982px] left-[0px] max-w-full overflow-hidden shrink-0 object-cover"
        alt=""
        src="/local-service-we-provide@2x.png"
      />
      <Questions />
      <Futtersection />
    </div>
  );
};

export default DrivveLandingPage;
