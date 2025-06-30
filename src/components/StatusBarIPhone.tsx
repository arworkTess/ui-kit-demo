import { FunctionComponent, memo } from "react";

export type StatusBarIPhoneType = {
  className?: string;

  /** Variant props */
  background?: boolean;
};

const StatusBarIPhone: FunctionComponent<StatusBarIPhoneType> = memo(
  ({ className = "", background = true }) => {
    return (
      <div
        className={`w-[393px] h-[50px] bg-Backgrounds-Primary flex flex-col items-start justify-start !pt-[21px] !pb-0 !pl-0 !pr-0 box-border z-[3] text-center text-[17px] text-Labels-Primary font-['Noto_Sans_JP'] ${className}`}
        data-background={background}
      >
        <div className="self-stretch flex flex-row items-center justify-between gap-0">
          <div className="flex-1 flex flex-row items-center justify-center !pt-0 !pb-0 !pl-4 !pr-1.5">
            <div className="relative leading-[22px] font-semibold">9:41</div>
          </div>
          <div className="h-2.5 w-[124px]" />
          <div className="flex-1 flex flex-row items-center justify-center !pt-0 !pb-0 !pl-1.5 !pr-4 gap-[7px]">
            <img
              className="h-[12.2px] w-[19.2px] relative"
              loading="lazy"
              alt=""
              src="/cellular-connection.svg"
            />
            <img
              className="h-[12.3px] w-[17.1px] relative"
              loading="lazy"
              alt=""
              src="/wifi.svg"
            />
            <div className="h-[13px] w-[27.3px] relative">
              <div className="absolute h-full top-[0%] bottom-[0%] left-[calc(50%_-_13.65px)] rounded-[4.3px] border-Labels-Primary border-solid border-[1px] box-border w-[25px] opacity-[0.35]" />
              <img
                className="absolute h-[31.54%] top-[36.92%] bottom-[31.54%] left-[calc(50%_+_12.35px)] max-h-full w-[1.3px]"
                loading="lazy"
                alt=""
                src="/cap.svg"
              />
              <div className="absolute h-[69.23%] top-[15.38%] bottom-[15.38%] left-[calc(50%_-_11.65px)] rounded-[2.5px] bg-Labels-Primary w-[21px]" />
            </div>
          </div>
        </div>
      </div>
    );
  }
);

export default StatusBarIPhone;
