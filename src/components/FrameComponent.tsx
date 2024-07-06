import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type FrameComponentType = {
  className?: string;

  /** Style props */
  propPadding?: CSSProperties["padding"];
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
  propPadding,
}) => {
  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  return (
    <div
      className={`flex flex-col items-start justify-start gap-[16px] text-left text-xl text-white font-inter ${className}`}
      style={frameDivStyle}
    >
      <div className="flex flex-row items-start justify-start py-0 px-2.5">
        <div className="relative leading-[185.02%] capitalize font-medium inline-block min-w-[39px] mq450:text-base mq450:leading-[30px]">
          city
        </div>
      </div>
      <div className="relative text-sm leading-[185.02%] capitalize text-lightgray-100">
        <ul className="m-0 font-inherit text-inherit pl-[19px]">
          <li className="mb-0">dhaka</li>
          <li className="mb-0">chittagong</li>
          <li className="mb-0">sylhet</li>
          <li className="mb-0">kulna</li>
          <li className="mb-0">borishal</li>
          <li className="mb-0">rajshahi</li>
          <li>rongpur</li>
        </ul>
      </div>
    </div>
  );
};

export default FrameComponent;
