import { FunctionComponent, memo } from "react";
import AvatarGroup from "./AvatarGroup";
import BadgeEventState from "./BadgeEventState";

export type CardEventBriefType = {
  className?: string;
  photoFrame?: string;
  date?: string;
  title?: string;
  prop?: string;
  prop1?: string;
  type?: "Coming" | "Finished";
  prop2?: string;

  /** Variant props */
  state?: string;
};

const CardEventBrief: FunctionComponent<CardEventBriefType> = memo(
  ({
    className = "",
    state = "Default",
    photoFrame,
    date,
    title,
    prop,
    prop1,
    type,
    prop2,
  }) => {
    return (
      <div
        className={`w-[361px] h-[140px] shadow-[0px_2px_8px_rgba(0,_0,_0,_0.05),_0px_1px_2px_rgba(0,_0,_0,_0.05)] rounded-spacing-spacing-md bg-bg-bg-primary shrink-0 flex flex-row items-center justify-start !p-spacing-spacing-sm box-border relative gap-spacing-spacing-sm text-left text-xs text-fg-fg-tertiary font-noto-sans-tc ${className}`}
        data-state={state}
      >
        <img
          className="self-stretch w-[92px] rounded-spacing-spacing-xs max-h-full overflow-hidden shrink-0 object-cover z-[0]"
          loading="lazy"
          alt=""
          src={photoFrame}
        />
        <div className="self-stretch flex-1 overflow-hidden flex flex-col items-start justify-start gap-spacing-spacing-2xs z-[1]">
          <div className="flex flex-row items-center justify-start">
            <div className="relative tracking-[0.02em] leading-[18px] overflow-hidden text-ellipsis whitespace-nowrap">
              {date}
            </div>
          </div>
          <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-spacing-spacing-2xs text-base text-fg-fg-primary">
            <b className="self-stretch relative leading-6 overflow-hidden text-ellipsis whitespace-nowrap">
              {title}
            </b>
            <div className="self-stretch flex flex-row items-start justify-start text-xs text-fg-fg-tertiary">
              <div className="flex flex-row items-start justify-start">
                <div className="relative tracking-[0.02em] leading-[18px]">
                  {prop}
                </div>
              </div>
              <div className="relative tracking-[0.02em] leading-[18px]">
                ・
              </div>
              <div className="flex-1 flex flex-row items-start justify-start">
                <div className="flex-1 relative tracking-[0.02em] leading-[18px] overflow-hidden text-ellipsis whitespace-nowrap">
                  {prop1}
                </div>
              </div>
            </div>
          </div>
          <AvatarGroup
            size={24}
            spacerDivision="+2"
            avatarSize="24"
            avatarSize1="24"
            avatarSize2="24"
            avatarMarginLeft1="-4px"
            avatarMarginLeft2="-4px"
            avatarHeight1="24px"
            avatarHeight2="24px"
            avatarWidth1="24px"
            avatarWidth2="24px"
          />
        </div>
        <BadgeEventState type={type} prop={prop2} />
      </div>
    );
  }
);

export default CardEventBrief;
