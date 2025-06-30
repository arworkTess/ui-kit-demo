import { FunctionComponent, memo } from "react";
import Button1 from "./Button1";
import RewildTypeImage from "./RewildTypeImage";
import PageControl from "./PageControl";

export type CarouselType = {
  className?: string;
  buttonArrowLeftHierarchy?: "Tertiary" | "Secondary";
  buttonArrowRightHierarchy?: "Tertiary" | "Secondary";
  buttonArrowLeftIconOnly?: boolean;
  buttonArrowRightIconOnly?: boolean;
  buttonArrowLeftSize?: "sm" | "md";
  buttonArrowRightSize?: "sm" | "md";
  buttonArrowLeftState?: string;
  buttonArrowRightState?: string;
  buttonArrowLeftShow?: boolean;
  buttonArrowRightShow?: boolean;
  type?: string;
  supportingText1?: string;

  /** Variant props */
  supportingText?: string;
};

const Carousel: FunctionComponent<CarouselType> = memo(
  ({
    className = "",
    supportingText = "N/A",
    buttonArrowLeftHierarchy,
    buttonArrowRightHierarchy,
    buttonArrowLeftIconOnly,
    buttonArrowRightIconOnly,
    buttonArrowLeftSize,
    buttonArrowRightSize,
    buttonArrowLeftState,
    buttonArrowRightState,
    buttonArrowLeftShow,
    buttonArrowRightShow,
    type,
    supportingText1,
  }) => {
    return (
      <div
        className={`self-stretch flex flex-col items-center justify-center gap-spacing-spacing-xs text-left text-base text-fg-fg-primary font-noto-sans-tc ${className}`}
        data-supportingText={supportingText}
      >
        <div className="w-[361px] flex flex-row items-center justify-center gap-spacing-spacing-xl">
          <Button1
            hierarchy={buttonArrowLeftHierarchy}
            iconOnly={buttonArrowLeftIconOnly}
            size={buttonArrowLeftSize}
            state={buttonArrowLeftState}
            showButton={buttonArrowLeftShow}
            lineChevronLeftBold="/line--chevronleftbold-1.svg"
            lineChevronLeftBoldMaxHeight="unset"
          />
          <div className="flex flex-col items-center justify-start">
            <RewildTypeImage type={type} />
            <div className="self-stretch flex flex-row items-center justify-center">
              <div className="relative leading-6">健行</div>
            </div>
          </div>
          <Button1
            hierarchy={buttonArrowRightHierarchy}
            iconOnly={buttonArrowRightIconOnly}
            size={buttonArrowRightSize}
            state={buttonArrowRightState}
            showButton={buttonArrowRightShow}
            lineChevronLeftBold="/line--chevronrightbold1.svg"
            lineChevronLeftBoldMaxHeight="unset"
          />
        </div>
        <PageControl
          supportingText={supportingText1}
          pageControlDotState="Active"
          pageControlDotState1="Inactive"
          pageControlDotState2="Inactive"
          pageControlDotState3="Inactive"
          pageControlDotState4="Inactive"
          pageControlDotState5="Inactive"
        />
      </div>
    );
  }
);

export default Carousel;