import { FunctionComponent, memo } from "react";
import Button1 from "./Button1";

export type BarTopNavigationType = {
  className?: string;
  leading?: boolean;
  trailing?: boolean;
  title?: string;
  showTitle?: boolean;
  buttonHierarchy?: "Tertiary" | "Secondary";
  buttonHierarchy1?: "Tertiary" | "Secondary";
  buttonIconOnly?: boolean;
  buttonIconOnly1?: boolean;
  buttonSize?: "sm" | "md";
  buttonSize1?: "sm" | "md";
  buttonState?: string;
  buttonState1?: string;
  buttonShow?: boolean;
  buttonShow1?: boolean;
  buttonLineChevronLeftBoldMax?: string;
  buttonLineChevronLeftBoldMax1?: string;
  buttonLineChevronLeftBoldOverflow?: string;
  buttonLineChevronLeftBoldOverflow1?: string;
  buttonLineChevronLeftBold1?: string;

  /** Variant props */
  background?: boolean;
};

const BarTopNavigation: FunctionComponent<BarTopNavigationType> = memo(
  ({
    className = "",
    background = false,
    leading = true,
    trailing = false,
    title = "建立行程",
    showTitle = true,
    buttonHierarchy,
    buttonHierarchy1,
    buttonIconOnly,
    buttonIconOnly1,
    buttonSize,
    buttonSize1,
    buttonState,
    buttonState1,
    buttonShow,
    buttonShow1,
    buttonLineChevronLeftBoldMax,
    buttonLineChevronLeftBoldMax1,
    buttonLineChevronLeftBoldOverflow,
    buttonLineChevronLeftBoldOverflow1,
    buttonLineChevronLeftBold1,
  }) => {
    return (
      <div
        className={`w-[393px] h-[60px] [backdrop-filter:blur(20px)] [background:linear-gradient(180deg,_#fff,_rgba(255,_255,_255,_0))] border-border-border-white border-solid border-b-[1px] box-border flex flex-row items-center justify-center !pt-spacing-spacing-sm !pb-spacing-spacing-sm !pl-spacing-spacing-md !pr-spacing-spacing-md gap-spacing-spacing-sm text-left text-base text-fg-fg-secondary font-noto-sans-tc ${className}`}
        data-background={background}
      >
        <Button1
          hierarchy={buttonHierarchy}
          iconOnly={buttonIconOnly}
          size={buttonSize}
          state={buttonState}
          showButton={buttonShow}
          lineChevronLeftBold="/line--chevronleftbold.svg"
          lineChevronLeftBoldMaxHeight={buttonLineChevronLeftBoldMax}
        />
        <div className="flex-1 flex flex-row items-center justify-start">
          {!!showTitle && <b className="relative leading-6">{title}</b>}
        </div>
        <Button1
          hierarchy={buttonHierarchy1}
          iconOnly={buttonIconOnly1}
          size={buttonSize1}
          state={buttonState1}
          showButton={buttonShow1}
          lineChevronLeftBold={buttonLineChevronLeftBold1}
          lineChevronLeftBoldMaxHeight={buttonLineChevronLeftBoldMax1}
        />
      </div>
    );
  }
);

export default BarTopNavigation;