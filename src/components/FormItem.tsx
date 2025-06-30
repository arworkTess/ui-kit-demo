import { FunctionComponent, memo } from "react";
import InputText from "./InputText";

export type FormItemType = {
  className?: string;
  label?: string;
  required?: boolean;
  state?: string;
  text?: string;
  iconLeft?: boolean;
  iconRight?: boolean;

  /** Variant props */
  supportingText?: string;
};

const FormItem: FunctionComponent<FormItemType> = memo(
  ({
    className = "",
    supportingText = "N/A",
    label = "行程名稱",
    required = false,
    state,
    text,
    iconLeft,
    iconRight,
  }) => {
    return (
      <div
        className={`w-[361px] flex flex-col items-start justify-start gap-spacing-spacing-xs text-left text-sm text-fg-fg-secondary font-['Noto_Sans_TC'] ${className}`}
        data-supportingText={supportingText}
      >
        <div className="flex flex-row items-center justify-start gap-spacing-spacing-2xs">
          <b className="relative leading-5">{label}</b>
          {!!required && <b className="relative leading-5">*</b>}
        </div>
        <InputText
          state={state}
          text={text}
          iconLeft={iconLeft}
          iconRight={iconRight}
        />
        <div className="self-stretch" />
      </div>
    );
  }
);

export default FormItem;
