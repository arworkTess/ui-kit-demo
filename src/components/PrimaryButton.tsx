import { FunctionComponent, memo, useMemo, type CSSProperties } from "react";

export type Button2Type = {
  className?: string;
  iconLeft?: boolean;
  iconRight?: boolean;
  label?: string;
  lineCircle?: string;
  lineCircle1?: string;

  /** Variant props */
  hierarchy?: string;
  iconOnly?: boolean;
  size?: string;
  state?: string;

  /** Style props */
  buttonAlignSelf?: CSSProperties["alignSelf"];
  buttonHeight?: CSSProperties["height"];
};

const Button2: FunctionComponent<Button2Type> = memo(
  ({
    className = "",
    hierarchy = "Primary",
    iconOnly = false,
    size = "md",
    state = "Default",
    iconLeft = false,
    iconRight = false,
    label = "下一步",
    buttonAlignSelf,
    buttonHeight,
    lineCircle,
    lineCircle1,
  }) => {
    const buttonStyle: CSSProperties = useMemo(() => {
      return {
        alignSelf: buttonAlignSelf,
        height: buttonHeight,
      };
    }, [buttonAlignSelf, buttonHeight]);

    return (
      <div
        className={`self-stretch h-12 shadow-[0px_1px_2px_rgba(0,_0,_0,_0.05)] rounded-radius-radius-full [background:linear-gradient(135deg,_#c85c50,_#b34438)] flex flex-row items-center justify-center !pt-spacing-spacing-sm !pb-spacing-spacing-sm !pl-spacing-spacing-xl !pr-spacing-spacing-xl box-border gap-spacing-spacing-xs text-center text-base text-bg-bg-primary font-noto-sans-tc data-[hierarchy='Primary']:data-[iconOnly='false']:data-[size='sm']:data-[state='Default']:!pt-2 data-[hierarchy='Primary']:data-[iconOnly='false']:data-[size='sm']:data-[state='Default']:!pb-2 data-[hierarchy='Primary']:data-[iconOnly='false']:data-[size='sm']:data-[state='Default']:!pl-4 data-[hierarchy='Primary']:data-[iconOnly='false']:data-[size='sm']:data-[state='Default']:!pr-4 data-[hierarchy='Primary']:data-[iconOnly='false']:data-[size='sm']:data-[state='Default']:[box-sizing:unset] data-[hierarchy='Primary']:data-[iconOnly='false']:data-[size='sm']:data-[state='Default']:gap-1 data-[hierarchy='Primary']:data-[iconOnly='false']:data-[size='sm']:data-[state='Default']:shrink-0 data-[hierarchy='Primary']:data-[iconOnly='false']:data-[size='sm']:data-[state='Default']:[&_.line-circle]:w-4 data-[hierarchy='Primary']:data-[iconOnly='false']:data-[size='sm']:data-[state='Default']:[&_.label13]:text-sm data-[hierarchy='Primary']:data-[iconOnly='false']:data-[size='sm']:data-[state='Default']:[&_.label13]:leading-5 data-[hierarchy='Primary']:data-[iconOnly='false']:data-[size='sm']:data-[state='Default']:[&_.line-circle1]:w-4 data-[hierarchy='Primary']:data-[iconOnly='false']:data-[size='sm']:data-[state='Default']:[&_.line-circle1]:max-h-[unset] data-[hierarchy='Primary']:data-[iconOnly='false']:data-[size='sm']:data-[state='Default']:[&_.line-circle1]:[overflow:unset] data-[hierarchy='Primary']:data-[iconOnly='false']:data-[size='sm']:data-[state='Default']:[&_.line-circle1]:[flex-shrink:unset] data-[hierarchy='Primary']:data-[iconOnly='false']:data-[size='sm']:data-[state='Default']:[&_.line-circle1]:[display:unset] data-[hierarchy='Primary']:data-[iconOnly='false']:data-[size='sm']:data-[state='Default']:[&_.line-circle1]:h-4 ${className}`}
        data-hierarchy={hierarchy}
        data-iconOnly={iconOnly}
        data-size={size}
        data-state={state}
        style={buttonStyle}
      >
        {!!iconLeft && (
          <img
            className="line-circle w-5 relative max-h-full overflow-hidden shrink-0"
            alt=""
            src={lineCircle}
          />
        )}
        <b className="label13 relative leading-6 overflow-hidden text-ellipsis whitespace-nowrap">
          {label}
        </b>
        {!!iconRight && (
          <img
            className="line-circle1 w-5 relative max-h-full overflow-hidden shrink-0"
            alt=""
            src={lineCircle1}
          />
        )}
      </div>
    );
  }
);

export default Button2;
