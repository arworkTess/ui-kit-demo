import { FunctionComponent, memo, useMemo, type CSSProperties } from "react";

export type Button1Type = {
  className?: string;
  showButton?: boolean;
  lineChevronLeftBold?: string;

  /** Variant props */
  hierarchy?: "Tertiary" | "Secondary";
  iconOnly?: boolean;
  size?: "sm" | "md";
  state?: string;

  /** Style props */
  lineChevronLeftBoldMaxHeight?: CSSProperties["maxHeight"];
};

const Button1: FunctionComponent<Button1Type> = memo(
  ({
    className = "",
    hierarchy = "Primary",
    iconOnly = false,
    size = "md",
    state = "Default",
    showButton,
    lineChevronLeftBold,
    lineChevronLeftBoldMaxHeight,
  }) => {
    const lineChevronLeftBoldStyle: CSSProperties = useMemo(() => {
      return {
        maxHeight: lineChevronLeftBoldMaxHeight,
      };
    }, [lineChevronLeftBoldMaxHeight]);

    return (
      <div
        className={`rounded-radius-radius-full flex flex-row items-center justify-center !p-spacing-spacing-xs data-[hierarchy='Primary']:data-[iconOnly='true']:data-[size='md']:data-[state='Default']:!p-3 data-[hierarchy='Primary']:data-[iconOnly='true']:data-[size='md']:data-[state='Default']:shadow-[0px_1px_2px_rgba(0,_0,_0,_0.05)] data-[hierarchy='Primary']:data-[iconOnly='true']:data-[size='md']:data-[state='Default']:[background:linear-gradient(135deg,_#c85c50,_#b34438)] data-[hierarchy='Secondary']:data-[iconOnly='true']:data-[size='md']:data-[state='Default']:!p-3 data-[hierarchy='Secondary']:data-[iconOnly='true']:data-[size='md']:data-[state='Default']:shadow-[0px_2px_8px_rgba(0,_0,_0,_0.05),_0px_1px_2px_rgba(0,_0,_0,_0.05)] data-[hierarchy='Secondary']:data-[iconOnly='true']:data-[size='md']:data-[state='Default']:bg-bg-bg-primary data-[hierarchy='Secondary']:data-[iconOnly='true']:data-[size='sm']:data-[state='Default']:shadow-[0px_2px_8px_rgba(0,_0,_0,_0.05),_0px_1px_2px_rgba(0,_0,_0,_0.05)] data-[hierarchy='Secondary']:data-[iconOnly='true']:data-[size='sm']:data-[state='Default']:bg-bg-bg-primary data-[hierarchy='Primary']:data-[iconOnly='true']:data-[size='md']:data-[state='Default']:[&_.line-chevron-left-bold]:h-6 data-[hierarchy='Primary']:data-[iconOnly='true']:data-[size='md']:data-[state='Default']:[&_.line-chevron-left-bold]:w-6 data-[hierarchy='Primary']:data-[iconOnly='true']:data-[size='md']:data-[state='Default']:[&_.line-chevron-left-bold]:overflow-hidden data-[hierarchy='Primary']:data-[iconOnly='true']:data-[size='md']:data-[state='Default']:[&_.line-chevron-left-bold]:shrink-0 data-[hierarchy='Primary']:data-[iconOnly='true']:data-[size='md']:data-[state='Default']:[&_.line-chevron-left-bold]:object-cover data-[hierarchy='Secondary']:data-[iconOnly='true']:data-[size='md']:data-[state='Default']:[&_.line-chevron-left-bold]:h-6 data-[hierarchy='Secondary']:data-[iconOnly='true']:data-[size='md']:data-[state='Default']:[&_.line-chevron-left-bold]:w-6 ${className}`}
        data-hierarchy={hierarchy}
        data-iconOnly={iconOnly}
        data-size={size}
        data-state={state}
      >
        <img
          className="line-chevron-left-bold h-icon-sizing-icon-sizing-sm w-5 relative"
          loading="lazy"
          alt=""
          src={lineChevronLeftBold}
          style={lineChevronLeftBoldStyle}
        />
      </div>
    );
  }
);

export default Button1;