import { FunctionComponent } from "react";
import PageControlDot from "./PageControlDot";

export type PageControlType = {
  className?: string;
  pageControlDotState?: string;
  pageControlDotState1?: string;
  pageControlDotState2?: string;
  pageControlDotState3?: string;
  pageControlDotState4?: string;
  pageControlDotState5?: string;

  /** Variant props */
  supportingText?: string;
};

const PageControl: FunctionComponent<PageControlType> = ({
  className = "",
  supportingText = "N/A",
  pageControlDotState,
  pageControlDotState1,
  pageControlDotState2,
  pageControlDotState3,
  pageControlDotState4,
  pageControlDotState5,
}) => {
  return (
    <div
      className={`flex flex-row items-center justify-center !pt-spacing-spacing-md !pb-spacing-spacing-md !pl-spacing-spacing-xl !pr-spacing-spacing-xl gap-spacing-spacing-xs ${className}`}
      data-supportingText={supportingText}
    >
      <PageControlDot state={pageControlDotState} />
      <PageControlDot state={pageControlDotState1} />
      <PageControlDot state={pageControlDotState2} />
      <PageControlDot state={pageControlDotState3} />
      <PageControlDot state={pageControlDotState4} />
      <PageControlDot state={pageControlDotState5} />
    </div>
  );
};

export default PageControl;
