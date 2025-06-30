import { FunctionComponent } from "react";

export type StepType = {
  className?: string;
  label?: string;
  empty?: string;

  /** Variant props */
  state?: string;
};

const Step: FunctionComponent<StepType> = ({
  className = "",
  state = "Completed",
  label = "基本資訊",
  empty,
}) => {
  return (
    <div
      className={`flex flex-col items-center justify-start !pt-spacing-spacing-none !pb-spacing-spacing-none !pl-spacing-spacing-sm !pr-spacing-spacing-sm gap-spacing-spacing-2xs text-center text-sm text-Backgrounds-Primary font-noto-sans-tc data-[state='Completed']:active:[&_.circle]:bg-bg-bg-brand-solid data-[state='Completed']:active:[&_.empty]:text-Backgrounds-Primary data-[state='Completed']:active:[&_.b]:text-bg-bg-brand-solid ${className}`}
      data-state={state}
    >
      <div className="circle w-6 h-6 rounded-radius-radius-full bg-bg-bg-brand-solid overflow-hidden shrink-0 flex flex-col items-center justify-center">
        <b className="empty self-stretch relative leading-5">{empty}</b>
      </div>
      <b className="b relative text-xs tracking-[0.02em] leading-[18px] text-fg-fg-brand-secondary">
        {label}
      </b>
    </div>
  );
};

export default Step;
