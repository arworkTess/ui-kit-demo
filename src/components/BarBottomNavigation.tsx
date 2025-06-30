import { FunctionComponent, memo } from "react";
import BottomNavigationItem from "./BottomNavigationItem";

export type BarBottomNavigationType = {
  className?: string;
  bottomNavigationItemState?: string;
  bottomNavigationItemState1?: string;
  bottomNavigationItemState2?: string;
  bottomNavigationItemState3?: string;
  bottomNavigationItemState4?: string;
  bottomNavigationItemLabel?: string;
  bottomNavigationItemLabel1?: string;
  bottomNavigationItemLabel2?: string;
  bottomNavigationItemLabel3?: string;
  bottomNavigationItemLabel4?: string;
  bottomNavigationItemSolidBinoculars6?: string;
  bottomNavigationItemSolidBinoculars7?: string;
  bottomNavigationItemSolidBinoculars8?: string;
  bottomNavigationItemSolidBinoculars9?: string;
};

const BarBottomNavigation: FunctionComponent<BarBottomNavigationType> = memo(
  ({
    className = "",
    bottomNavigationItemState,
    bottomNavigationItemState1,
    bottomNavigationItemState2,
    bottomNavigationItemState3,
    bottomNavigationItemState4,
    bottomNavigationItemLabel,
    bottomNavigationItemLabel1,
    bottomNavigationItemLabel2,
    bottomNavigationItemLabel3,
    bottomNavigationItemLabel4,
    bottomNavigationItemSolidBinoculars6,
    bottomNavigationItemSolidBinoculars7,
    bottomNavigationItemSolidBinoculars8,
    bottomNavigationItemSolidBinoculars9,
  }) => {
    return (
      <div
        className={`w-[393px] bg-bg-bg-brand-primary flex flex-row items-start justify-center !pt-spacing-spacing-xs !pb-spacing-spacing-md !pl-spacing-spacing-none !pr-spacing-spacing-none box-border text-center text-xs text-fg-fg-brand-secondary font-noto-sans-tc ${className}`}
      >
        <BottomNavigationItem
          state={bottomNavigationItemState}
          label={bottomNavigationItemLabel}
          solidBinoculars="/solid--binoculars.svg"
        />
        <BottomNavigationItem
          state={bottomNavigationItemState1}
          label={bottomNavigationItemLabel1}
          solidBinoculars="/solid--cloud.svg"
          solidBinocularsOverflow={bottomNavigationItemSolidBinoculars6}
        />
        <BottomNavigationItem
          state={bottomNavigationItemState2}
          label={bottomNavigationItemLabel2}
          solidBinoculars="/line--star.svg"
          solidBinocularsOverflow={bottomNavigationItemSolidBinoculars7}
        />
        <BottomNavigationItem
          state={bottomNavigationItemState3}
          label={bottomNavigationItemLabel3}
          solidBinoculars="/line--world.svg"
          solidBinocularsOverflow={bottomNavigationItemSolidBinoculars8}
        />
        <BottomNavigationItem
          state={bottomNavigationItemState4}
          label={bottomNavigationItemLabel4}
          solidBinoculars="/line--personal.svg"
          solidBinocularsOverflow={bottomNavigationItemSolidBinoculars9}
        />
      </div>
    );
  }
);

export default BarBottomNavigation;
