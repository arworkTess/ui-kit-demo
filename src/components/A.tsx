import { FunctionComponent, memo } from "react";
import StatusBarIPhone from "./StatusBarIPhone";
import CardEventBrief from "./CardEventBrief";
import Button1 from "./Button1";
import BarBottomNavigation from "./BarBottomNavigation";

export type AType = {
  className?: string;
};

const A: FunctionComponent<AType> = memo(({ className = "" }) => {
  return (
    <div
      className={`max-w-full overflow-hidden flex flex-col items-start justify-start relative gap-[512px] bg-[url('/public/basecamp@2x.png')] bg-cover bg-no-repeat bg-[top] leading-[normal] tracking-[normal] ${className}`}
    >
      <img
        className="w-full h-full absolute !!m-[0 important] right-[0px] bottom-[-0.5px] left-[0px] max-w-full overflow-hidden shrink-0 object-cover"
        alt=""
        src="/basecamp@2x.png"
      />
      <StatusBarIPhone
        background={false}
        cellularConnection="/cellular-connection3.svg"
        wifi="/wifi3.svg"
        cap="/cap1.svg"
      />
      <section className="flex flex-col items-end justify-start gap-4 max-w-full">
        <div className="flex flex-row items-start justify-end !pt-0 !pb-0 !pl-4 !pr-4 box-border max-w-full">
          <CardEventBrief
            state="Default"
            photoFrame="/photo-frame@2x.png"
            date="2025.07.18 - 2025.07.19"
            title="野溪探險"
            prop="親水"
            prop1="秀姑巒溪"
            type="Coming"
            prop2="即將出發"
          />
        </div>
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
});

export default A;
