import { FunctionComponent } from "react";

export type Button2Type = {
  className?: string;
  iconLeft?: boolean;
  iconRight?: boolean;
  label?: string;

  /** Variant props */
  hierarchy?: string;
  iconOnly?: boolean;
  size?: string;
  state?: string;
};

const Button2: FunctionComponent<Button2Type> = ({
  className = "",
  hierarchy = "Primary",
  iconOnly = false,
  size = "md",
  state = "Default",
  iconLeft = false,
  iconRight = false,
  label = "下一步",
}) => {
  return (
    <div
      className={`self-stretch h-12 shadow-[0px_1px_2px_rgba(0,_0,_0,_0.05)] rounded-radius-radius-full [background:linear-gradient(135deg,_#c85c50,_#b34438)] flex flex-row items-center justify-center !pt-spacing-spacing-sm !pb-spacing-spacing-sm !pl-spacing-spacing-xl !pr-spacing-spacing-xl box-border gap-spacing-spacing-xs text-center text-base text-Backgrounds-Primary font-noto-sans-tc ${className}`}
      data-hierarchy={hierarchy}
      data-iconOnly={iconOnly}
      data-size={size}
      data-state={state}
    >
      {!!iconLeft && (
        <img
          className="w-5 relative max-h-full overflow-hidden shrink-0"
          alt=""
        />
      )}
      <b className="relative leading-6 overflow-hidden text-ellipsis whitespace-nowrap">
        {label}
      </b>
      {!!iconRight && (
        <img
          className="w-5 relative max-h-full overflow-hidden shrink-0"
          alt=""
        />
      )}
    </div>
  );
};

export default Button2;
