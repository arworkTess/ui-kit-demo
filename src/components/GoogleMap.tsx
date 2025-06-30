import { FunctionComponent, memo } from "react";
import Button2 from "./Button2";

export type GoogleMapType = {
  className?: string;
  hierarchy?: string;
  iconOnly?: boolean;
  size?: string;
  state1?: string;
  label?: string;
  iconRight?: boolean;
  buttonAlignSelf?: string;
  buttonHeight?: string;

  /** Variant props */
  state?: string;
};

const GoogleMap: FunctionComponent<GoogleMapType> = memo(
  ({
    className = "",
    state = "Default",
    hierarchy,
    iconOnly,
    size,
    state1,
    label,
    iconRight,
    buttonAlignSelf,
    buttonHeight,
  }) => {
    return (
      <div
        className={`w-[361px] rounded-radius-radius-lg bg-bg-bg-secondary border-border-border-secondary border-solid border-[1px] box-border overflow-hidden flex flex-col items-end justify-start !pt-[122px] !pb-0 !pl-0 !pr-0 ${className}`}
        data-state={state}
      >
        <img
          className="!mt-[-199px] w-[361px] relative h-[251px] object-cover shrink-0 z-[1]"
          alt=""
          src="/map@2x.png"
        />
        <div className="w-24 h-9 flex flex-row items-start justify-end !pt-0 !pb-0 !pl-0 !pr-4 box-border z-[2] !mt-[-52px] relative">
          <Button2
            hierarchy={hierarchy}
            iconOnly={iconOnly}
            size={size}
            state={state1}
            iconLeft={false}
            iconRight={iconRight}
            label={label}
            buttonAlignSelf={buttonAlignSelf}
            buttonHeight={buttonHeight}
            lineCircle="pending_I917:5163;487:7687;265:117"
            lineCircle1="/line--chevronrightbold.svg"
          />
        </div>
      </div>
    );
  }
);

export default GoogleMap;
