import { FunctionComponent } from "react";
import FrameComponent from "../components/FrameComponent";
import ScrimBottomSheet from "../components/ScrimBottomSheet";
import Button1 from "../components/Button1";
import BarBottomNavigation from "../components/BarBottomNavigation";

const Component3: FunctionComponent = () => {
  return (
    <div className="w-full relative overflow-hidden flex flex-col items-start justify-start gap-[468px] bg-[url('/public/basecamp@2x.png')] bg-cover bg-no-repeat bg-[top] leading-[normal] tracking-[normal]">
      <img
        className="w-full h-full absolute !!m-[0 important] right-[0px] bottom-[-0.5px] left-[0px] max-w-full overflow-hidden shrink-0 object-cover"
        alt=""
        src="/basecamp@2x.png"
      />
      <FrameComponent />
      <ScrimBottomSheet />
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
            lineChevronLeftBoldOverflow="hidden"
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
};

export default Component3;
