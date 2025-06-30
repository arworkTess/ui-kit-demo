import { FunctionComponent, memo } from "react";

export type InputTextType = {
  className?: string;
  text?: string;
  iconLeft?: boolean;
  iconRight?: boolean;

  /** Variant props */
  state?: string;
};

const InputText: FunctionComponent<InputTextType> = memo(
  ({
    className = "",
    state = "Default",
    text = "為這趟行程取個酷名字！",
    iconLeft = false,
    iconRight = false,
  }) => {
    return (
      <div
        className={`self-stretch shadow-[0px_1px_2px_rgba(0,_0,_0,_0.05)] rounded-radius-radius-md bg-bg-bg-primary border-border-border-secondary border-solid border-[1px] overflow-hidden flex flex-row items-center justify-start !pt-spacing-spacing-sm !pb-spacing-spacing-sm !pl-spacing-spacing-md !pr-spacing-spacing-md gap-spacing-spacing-sm text-left text-base text-fg-fg-disabled font-['Noto_Sans_TC'] ${className}`}
        data-state={state}
      >
        {!!iconLeft && (
          <img
            className="w-5 relative max-h-full overflow-hidden shrink-0"
            alt=""
          />
        )}
        <div className="flex-1 relative leading-6 overflow-hidden text-ellipsis whitespace-nowrap">
          {text}
        </div>
        {!!iconRight && (
          <img
            className="w-5 relative max-h-full overflow-hidden shrink-0"
            alt=""
          />
        )}
      </div>
    );
  }
);

export default InputText;
