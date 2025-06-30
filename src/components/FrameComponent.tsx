import { FunctionComponent, memo } from "react";
import StatusBarIPhone from "./StatusBarIPhone";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: FunctionComponent<FrameComponentType> = memo(
  ({ className = "" }) => {
    return (
      <section
        className={`self-stretch flex flex-col items-start justify-start gap-[35px] ${className}`}
      >
        <StatusBarIPhone
          background={false}
          cellularConnection="/cellular-connection.svg"
          wifi="/wifi.svg"
          cap="/cap.svg"
        />
        <div className="self-stretch flex flex-row items-start justify-start !pt-0 !pb-0 !pl-[88px] !pr-[88px]">
          <img
            className="h-[165px] flex-1 relative max-w-full overflow-hidden object-cover z-[3]"
            loading="lazy"
            alt=""
            src="/whale-2@2x.png"
          />
        </div>
      </section>
    );
  }
);

export default FrameComponent;
