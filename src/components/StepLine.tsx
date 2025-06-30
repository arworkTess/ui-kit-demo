import { FunctionComponent } from "react";
import Step from "./Step";

export type StepLineType = {
  className?: string;
  leftLine?: string;
  rightLine?: string;
  state?: string;
  label?: string;
  empty?: string;

  /** Variant props */
  step?: "Start" | "Middle" | "End";
};

const StepLine: FunctionComponent<StepLineType> = ({
  className = "",
  step = "Start",
  leftLine,
  rightLine,
  state,
  label,
  empty,
}) => {
  return (
    <div
      className={`flex-1 flex flex-col items-center justify-start text-center text-sm text-Backgrounds-Primary font-noto-sans-tc data-[step='Middle']:[&_.step-line]:w-[unset] data-[step='Middle']:[&_.step-line]:self-stretch data-[step='End']:[&_.step-line]:w-[unset] data-[step='End']:[&_.step-line]:self-stretch data-[step='Middle']:[&_.left-line-icon]:[filter:brightness(0)_saturate(100%)_invert(100%)_sepia(0%)_saturate(7500%)_hue-rotate(43deg)_brightness(78%)_contrast(122%)] data-[step='Middle']:[&_.left-line-icon]:w-[unset] data-[step='Middle']:[&_.left-line-icon]:[display:unset] data-[step='Middle']:[&_.left-line-icon]:flex-1 data-[step='End']:[&_.left-line-icon]:[filter:brightness(0)_saturate(100%)_invert(100%)_sepia(0%)_saturate(7500%)_hue-rotate(43deg)_brightness(78%)_contrast(122%)] data-[step='End']:[&_.left-line-icon]:w-[unset] data-[step='End']:[&_.left-line-icon]:[display:unset] data-[step='End']:[&_.left-line-icon]:flex-1 data-[step='End']:[&_.right-line-icon]:flex-[unset] data-[step='End']:[&_.right-line-icon]:w-[41px] data-[step='End']:[&_.right-line-icon]:hidden ${className}`}
      data-step={step}
    >
      <div className="step-line w-[131px] flex flex-row items-start justify-center">
        <img
          className="left-line-icon self-stretch w-[41px] max-w-full overflow-hidden max-h-full hidden"
          alt=""
          src={leftLine}
        />
        <Step state={state} label={label} empty={empty} />
        <img
          className="right-line-icon self-stretch flex-1 max-w-full overflow-hidden max-h-full"
          alt=""
          src={rightLine}
        />
      </div>
    </div>
  );
};

export default StepLine;
