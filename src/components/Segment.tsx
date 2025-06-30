import { FunctionComponent, memo } from "react";

export type SegmentType = {
  className?: string;
  label?: string;

  /** Variant props */
  state?: string;
  type?: string;
};

const Segment: FunctionComponent<SegmentType> = memo(
  ({ className = "", state = "Default", type = "Active", label = "交通" }) => {
    return (
      <div
        className={`flex-1 shadow-[0px_2px_8px_rgba(0,_0,_0,_0.05),_0px_1px_2px_rgba(0,_0,_0,_0.05)] rounded-radius-radius-full bg-bg-bg-brand-solid flex flex-row items-center justify-center !pt-spacing-spacing-2xs !pb-spacing-spacing-2xs !pl-spacing-spacing-md !pr-spacing-spacing-md text-center text-base text-bg-bg-primary font-noto-sans-tc data-[state='Default']:data-[type='Active']:active:shadow-[0px_2px_8px_rgba(0,_0,_0,_0.05),_0px_1px_2px_rgba(0,_0,_0,_0.05)] data-[state='Default']:data-[type='Active']:active:bg-bg-bg-brand-solid data-[state='Default']:data-[type='Active']:active:[&_.label12]:text-bg-bg-primary data-[state='Default']:data-[type='Active']:active:[&_.label12]:font-bold ${className}`}
        data-state={state}
        data-type={type}
      >
        <b className="label12 relative leading-6 overflow-hidden text-ellipsis whitespace-nowrap">
          {label}
        </b>
      </div>
    );
  }
);

export default Segment;
