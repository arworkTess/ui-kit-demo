import { FunctionComponent, memo } from "react";
import StatusBarIPhone from "./StatusBarIPhone";
import Button1 from "./Button1";
import BarBottomNavigation from "./BarBottomNavigation";

export type Component1Type = {
  className?: string;
};

const Component1: FunctionComponent<Component1Type> = memo(
  ({ className = "" }) => {
    return (
      <div
        className={`max-w-full overflow-hidden flex flex-col items-start justify-start relative gap-[668px] bg-[url('/public/basecamp@2x.png')] bg-cover bg-no-repeat bg-[top] leading-[normal] tracking-[normal] ${className}`}
      >
        <img
          className="w-full h-full absolute !!m-[0 important] right-[0px] bottom-[-0.5px] left-[0px] max-w-full overflow-hidden shrink-0 object-cover"
          alt=""
          src="/basecamp@2x.png"
        />
        <StatusBarIPhone
          background={false}
          cellularConnection="/cellular-connection2.svg"
          wifi="/wifi1.svg"
          cap="/cap1.svg"
        />
        <section className="flex flex-col items-end justify-start gap-4">
          <div className="flex flex-row items-start justify-end !pt-0 !pb-0 !pl-4 !pr-4">
            <Button1
              hierarchy="Primary"
              iconOnly
              size="md"
              state="Default"
              showButton
              lineChevronLeftBold="/line--plus@2x.png"
              lineChevronLeftBoldMaxHeight="unset"
            />
          </div>
          <BarBottomNavigation
            bottomNavigationItemState="Inactive"
            bottomNavigationItemState1="Inactive"
            bottomNavigationItemState2="Inactive"
            bottomNavigationItemState3="Inactive"
            bottomNavigationItemState4="Inactive"
            bottomNavigationItemLabel="探索"
            bottomNavigationItemLabel1="揪團基地"
            bottomNavigationItemLabel2="野放成就"
            bottomNavigationItemLabel3="世界"
            bottomNavigationItemLabel4="我的"
            bottomNavigationItemSolidBinoculars6="hidden"
            bottomNavigationItemSolidBinoculars7="unset"
            bottomNavigationItemSolidBinoculars8="hidden"
            bottomNavigationItemSolidBinoculars9="hidden"
          />
        </section>
      </div>
    );
  }
);

export default Component1;