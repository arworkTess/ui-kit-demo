import { FunctionComponent, memo } from "react";

export type Form1Type = {
  className?: string;
};

const Form1: FunctionComponent<Form1Type> = memo(({ className = "" }) => {
  return (
    <div
      className={`w-[361px] flex flex-col items-start justify-start text-left text-sm text-fg-fg-secondary font-noto-sans-tc ${className}`}
    >
      <div className="w-[361px] flex flex-col items-start justify-start gap-spacing-spacing-xs">
        <div className="flex flex-row items-center justify-start gap-spacing-spacing-2xs">
          <b className="relative leading-5">地點</b>
          <b className="relative leading-5 hidden">*</b>
        </div>
        <div className="self-stretch shadow-[0px_1px_2px_rgba(0,_0,_0,_0.05)] rounded-radius-radius-lg bg-bg-bg-primary flex flex-row items-center justify-start !pt-spacing-spacing-md !pb-spacing-spacing-md !pl-spacing-spacing-xl !pr-spacing-spacing-xl gap-spacing-spacing-sm text-base text-fg-fg-primary">
          <img
            className="w-6 relative max-h-full object-cover"
            loading="lazy"
            alt=""
            src="/solid--location@2x.png"
          />
          <div className="flex-1 flex flex-col items-start justify-start">
            <b className="self-stretch relative leading-6 overflow-hidden text-ellipsis whitespace-nowrap">
              劍潭山親山步道
            </b>
            <div className="self-stretch relative text-xs tracking-[0.02em] leading-[18px] text-fg-fg-tertiary">
              台北市中山區
            </div>
          </div>
        </div>
        <div className="w-[361px] h-[18px] hidden" />
      </div>
    </div>
  );
});

export default Form1;
