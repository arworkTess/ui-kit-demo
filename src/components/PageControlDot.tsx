import { FunctionComponent } from "react";

export type PageControlDotType = {
  className?: string;

  /** Variant props */
  state?: string;
};

const PageControlDot: FunctionComponent<PageControlDotType> = ({
  className = "",
  state = "Active",
}) => {
  return (
    <div
      className={`w-2 relative h-2 data-[state='Active']:active:[&_.dot]:bg-bg-bg-brand-solid ${className}`}
      data-state={state}
    >
      <div className="dot absolute top-[calc(50%_-_4px)] left-[calc(50%_-_4px)] rounded-radius-radius-full bg-bg-bg-brand-solid w-2 h-2 overflow-hidden" />
    </div>
  );
};

export default PageControlDot;
