import { FunctionComponent, memo } from "react";

export type CardLocationBriefType = {
  className?: string;

  /** Variant props */
  hasLocation?: boolean;
  state?: string;
  withIcon?: boolean;
};

const CardLocationBrief: FunctionComponent<CardLocationBriefType> = memo(
  ({
    className = "",
    hasLocation = false,
    state = "Default",
    withIcon = false,
  }) => {
    return (
      <div
        className={`self-stretch shadow-[0px_2px_8px_rgba(0,_0,_0,_0.05),_0px_1px_2px_rgba(0,_0,_0,_0.05)] rounded-radius-radius-lg bg-bg-bg-primary flex flex-row items-center justify-center !p-spacing-spacing-xl gap-spacing-spacing-xs text-left text-base text-fg-fg-primary font-['Noto_Sans_TC'] ${className}`}
        data-hasLocation={hasLocation}
        data-state={state}
        data-withIcon={withIcon}
      >
        <img
          className="w-6 relative max-h-full object-cover"
          alt=""
          src="/solid--location@2x.png"
        />
        <div className="flex flex-col items-start justify-start">
          <b className="relative leading-6">加入地點</b>
        </div>
      </div>
    );
  }
);

export default CardLocationBrief;
