import { FunctionComponent, memo } from "react";
import ListEventCards from "./ListEventCards";

export type BottomSheetType = {
  className?: string;
  badgeEventStateType?: "Coming" | "Finished";
  badgeEventStateType1?: "Coming" | "Finished";
  badgeEventStateType2?: "Coming" | "Finished";
  badgeEventStateType3?: "Coming" | "Finished";
  badgeEventStateProp?: string;
  badgeEventStateProp1?: string;
  badgeEventStateProp2?: string;
  badgeEventStateProp3?: string;
};

const BottomSheet: FunctionComponent<BottomSheetType> = memo(
  ({
    className = "",
    badgeEventStateType,
    badgeEventStateType1,
    badgeEventStateType2,
    badgeEventStateType3,
    badgeEventStateProp,
    badgeEventStateProp1,
    badgeEventStateProp2,
    badgeEventStateProp3,
  }) => {
    return (
      <div
        className={`w-[393px] shadow-[0px_2px_8px_rgba(0,_0,_0,_0.05),_0px_1px_2px_rgba(0,_0,_0,_0.05)] rounded-t-spacing-spacing-md rounded-b-none [background:linear-gradient(167.99deg,_rgba(200,_216,_255,_0.2),_rgba(231,_237,_254,_0.2)_33%,_rgba(255,_249,_245,_0.2)_66%,_rgba(255,_233,_216,_0.2)),_#fff] overflow-hidden shrink-0 flex flex-col items-center justify-start !pt-spacing-spacing-none !pb-spacing-spacing-xl !pl-spacing-spacing-md !pr-spacing-spacing-md box-border max-h-[632px] text-left text-xs text-fg-fg-tertiary font-noto-sans-tc ${className}`}
      >
        <div className="w-[393px] flex flex-col items-center justify-center !pt-spacing-spacing-sm !pb-spacing-spacing-sm !pl-0 !pr-0 box-border">
          <div className="w-[49px] relative rounded-radius-radius-full bg-bg-bg-tertiary h-1.5" />
        </div>
        <div className="self-stretch overflow-hidden flex flex-col items-center justify-start">
          <ListEventCards />
        </div>
      </div>
    );
  }
);

export default BottomSheet;
