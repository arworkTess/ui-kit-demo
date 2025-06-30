import { FunctionComponent } from "react";
import CardLocationBrief from "./CardLocationBrief";

export type FormItem1Type = {
  className?: string;
  label?: string;
  required?: boolean;
  hasLocation?: boolean;
  state?: string;
  withIcon?: boolean;

  /** Variant props */
  supportingText?: string;
};

const FormItem1: FunctionComponent<FormItem1Type> = ({
  className = "",
  supportingText = "N/A",
  label = "地點",
  required = false,
  hasLocation,
  state,
  withIcon,
}) => {
  return (
    <div
      className={`w-[361px] flex flex-col items-start justify-start gap-spacing-spacing-xs text-left text-sm text-fg-fg-secondary font-noto-sans-tc ${className}`}
      data-supportingText={supportingText}
    >
      <div className="flex flex-row items-center justify-start gap-spacing-spacing-2xs">
        <b className="relative leading-5">{label}</b>
        {!!required && <b className="relative leading-5">*</b>}
      </div>
      <CardLocationBrief
        hasLocation={hasLocation}
        state={state}
        withIcon={withIcon}
      />
      <div className="self-stretch" />
    </div>
  );
};

export default FormItem1;
