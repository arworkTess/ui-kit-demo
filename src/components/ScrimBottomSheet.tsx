import { FunctionComponent, memo } from "react";
import BottomSheet from "./BottomSheet";

export type ScrimBottomSheetType = {
  className?: string;
};

const ScrimBottomSheet: FunctionComponent<ScrimBottomSheetType> = memo(
  ({ className = "" }) => {
    return (
      <section
        className={`w-full h-full !!m-[0 important] absolute top-[0px] right-[0px] bottom-[0px] left-[0px] bg-bg-bg-overlay flex flex-row items-start justify-start !pt-[220px] !pb-0 !pl-0 !pr-0 box-border z-[2] text-left text-xs text-fg-fg-tertiary font-noto-sans-tc ${className}`}
      >
        <BottomSheet
          badgeEventStateType="Coming"
          badgeEventStateType1="Coming"
          badgeEventStateType2="Finished"
          badgeEventStateType3="Finished"
          badgeEventStateProp="即將出發"
          badgeEventStateProp1="即將出發"
          badgeEventStateProp2="已結束"
          badgeEventStateProp3="已結束"
        />
      </section>
    );
  }
);

export default ScrimBottomSheet;
