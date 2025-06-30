import { FunctionComponent, memo } from "react";

export type BadgeEventStateType = {
  className?: string;
  prop?: string;

  /** Variant props */
  type?: "Coming" | "Finished";
};

const BadgeEventState: FunctionComponent<BadgeEventStateType> = memo(
  ({ className = "", type = "Coming", prop }) => {
    return (
      <div
        className={`!!m-[0 important] absolute top-[0px] right-[0px] rounded-tl-radius-radius-none rounded-tr-radius-radius-xl rounded-br-radius-radius-none rounded-bl-radius-radius-xl bg-bg-bg-brand-secondary overflow-hidden flex flex-row items-center justify-center !pt-spacing-spacing-xs !pb-spacing-spacing-2xs !pl-spacing-spacing-md !pr-spacing-spacing-md z-[2] text-left text-xs text-fg-fg-brand-primary font-noto-sans-tc data-[type='Finished']:bg-bg-bg-tertiary data-[type='Finished']:[&_.div4]:text-fg-fg-secondary ${className}`}
        data-type={type}
      >
        <div className="div4 relative tracking-[0.02em] leading-[18px]">
          {prop}
        </div>
      </div>
    );
  }
);

export default BadgeEventState;
