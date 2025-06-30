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
  lineChevronLeftBoldOverflow?: CSSProperties["overflow"];
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
    lineChevronLeftBoldOverflow,
  }) => {
    const lineChevronLeftBoldStyle: CSSProperties = useMemo(() => {
      return {
        maxHeight: lineChevronLeftBoldMaxHeight,
        overflow: lineChevronLeftBoldOverflow,
      };
    }, [lineChevronLeftBoldMaxHeight, lineChevronLeftBoldOverflow]);

    return (
      <div
        className={`rounded-radius-radius-full flex flex-row items-center justify-center !p-spacing-spacing-xs data-[hierarchy='Secondary']:data-[iconOnly='true']:data-[size='md']:data-[state='Default']:!p-3 data-[hierarchy='Secondary']:data-[iconOnly='true']:data-[size='md']:data-[state='Default']:shadow-[0px_2px_8px_rgba(0,_0,_0,_0.05),_0px_1px_2px_rgba(0,_0,_0,_0.05)] data-[hierarchy='Secondary']:data-[iconOnly='true']:data-[size='md']:data-[state='Default']:bg-Backgrounds-Primary data-[hierarchy='Secondary']:data-[iconOnly='true']:data-[size='md']:data-[state='Default']:[&_.line-chevron-left-bold]:h-6 data-[hierarchy='Secondary']:data-[iconOnly='true']:data-[size='md']:data-[state='Default']:[&_.line-chevron-left-bold]:w-6 ${className}`}
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
