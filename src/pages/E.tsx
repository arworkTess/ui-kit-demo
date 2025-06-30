import { FunctionComponent } from "react";
import StatusBarIPhone from "../components/StatusBarIPhone";
import BarTopNavigation from "../components/BarTopNavigation";
import Details from "../components/Details";
import Form1 from "../components/Form1";
import GoogleMap from "../components/GoogleMap";
import SegmentedControl from "../components/SegmentedControl";

const E: FunctionComponent = () => {
  return (
    <div className="w-full h-[2374px] relative [background:linear-gradient(167.99deg,_rgba(200,_216,_255,_0.2),_rgba(231,_237,_254,_0.2)_33%,_rgba(255,_249,_245,_0.2)_66%,_rgba(255,_233,_216,_0.2)),_#fff] overflow-hidden flex flex-col items-start justify-start !pt-0 !pb-[1040.6px] !pl-0 !pr-0 box-border gap-[0.1px] leading-[normal] tracking-[normal] text-center text-base text-fg-fg-primary font-noto-sans-tc">
      <StatusBarIPhone
        background
        cellularConnection="/cellular-connection1.svg"
        wifi="/wifi1.svg"
        cap="/cap.svg"
      />
      <BarTopNavigation
        background
        leading
        trailing
        title="行程資訊"
        showTitle
        buttonHierarchy="Tertiary"
        buttonHierarchy1="Secondary"
        buttonIconOnly
        buttonIconOnly1
        buttonSize="sm"
        buttonSize1="sm"
        buttonState="Default"
        buttonState1="Default"
        buttonShow
        buttonShow1
        buttonLineChevronLeftBoldMax="unset"
        buttonLineChevronLeftBoldMax1="unset"
        buttonLineChevronLeftBold1="/line--more.svg"
      />
      <section className="self-stretch overflow-hidden flex flex-row items-center justify-center !pt-0 !pb-0 !pl-spacing-spacing-md !pr-spacing-spacing-md z-[2]">
        <img
          className="flex-1 relative rounded-radius-radius-md max-w-full overflow-hidden max-h-full object-cover"
          loading="lazy"
          alt=""
          src="/aspect-ratio@2x.png"
        />
      </section>
      <section className="self-stretch flex flex-col items-start justify-start !pt-spacing-spacing-xl !pb-spacing-spacing-2xl !pl-spacing-spacing-md !pr-spacing-spacing-md gap-spacing-spacing-2xl z-[1] text-left text-sm text-fg-fg-secondary font-noto-sans-tc">
        <Details />
        <Form1 />
        <div className="w-[361px] flex flex-col items-start justify-start gap-spacing-spacing-xs">
          <div className="flex flex-row items-center justify-start gap-spacing-spacing-2xs">
            <b className="relative leading-5">集合點</b>
            <b className="relative leading-5 hidden">*</b>
          </div>
          <div className="self-stretch shadow-[0px_1px_2px_rgba(0,_0,_0,_0.05)] rounded-radius-radius-lg bg-bg-bg-primary flex flex-row items-center justify-start !pt-spacing-spacing-md !pb-spacing-spacing-md !pl-spacing-spacing-xl !pr-spacing-spacing-xl gap-spacing-spacing-sm text-base text-fg-fg-primary">
            <img
              className="w-6 relative max-h-full object-cover"
              alt=""
              src="/solid--location@2x.png"
            />
            <div className="flex-1 flex flex-col items-start justify-start">
              <b className="self-stretch relative leading-6 overflow-hidden text-ellipsis whitespace-nowrap">
                劍潭山親山步道
              </b>
              <div className="self-stretch relative text-xs tracking-[0.02em] leading-[18px] text-fg-fg-tertiary">
                台北市中山區
              </div>
            </div>
          </div>
          <div className="w-[361px] h-[18px] hidden" />
        </div>
        <GoogleMap
          state="Navigate to"
          hierarchy="Primary"
          iconOnly={false}
          size="sm"
          state1="Default"
          label="導航"
          iconRight
          buttonAlignSelf="unset"
          buttonHeight="unset"
        />
        <div className="w-[361px] flex flex-col items-start justify-start gap-spacing-spacing-xs">
          <div className="flex flex-row items-center justify-start gap-spacing-spacing-2xs">
            <b className="relative leading-5">天氣預報</b>
            <b className="relative leading-5 hidden">*</b>
          </div>
          <img
            className="self-stretch max-w-full overflow-hidden max-h-full object-cover"
            loading="lazy"
            alt=""
            src="/weather@2x.png"
          />
          <div className="w-[361px] h-[18px] hidden" />
        </div>
        <SegmentedControl
          segmentState="Default"
          segmentState1="Default"
          segmentState2="Default"
          segmentState3="Default"
          segmentType="Active"
          segmentType1="Inactive"
          segmentType2="Inactive"
          segmentType3="Inactive"
          segmentLabel="交通"
          segmentLabel1="住宿"
          segmentLabel2="裝備"
          segmentLabel3="餐飲"
        />
      </section>
      <div className="w-36 shadow-[0px_2px_8px_rgba(0,_0,_0,_0.05),_0px_1px_2px_rgba(0,_0,_0,_0.05)] rounded-lg bg-bg-bg-primary overflow-hidden hidden flex-col items-start justify-center">
        <div className="w-36 h-12 flex flex-row items-center justify-start !pt-spacing-spacing-sm !pb-spacing-spacing-sm !pl-spacing-spacing-md !pr-spacing-spacing-md box-border gap-spacing-spacing-xs">
          <img className="w-5 relative h-icon-sizing-icon-sizing-sm" alt="" />
          <div className="relative leading-6">複製行程</div>
        </div>
        <div className="w-36 h-12 flex flex-row items-center justify-start !pt-spacing-spacing-sm !pb-spacing-spacing-sm !pl-spacing-spacing-md !pr-spacing-spacing-md box-border gap-spacing-spacing-xs">
          <img
            className="h-icon-sizing-icon-sizing-sm w-5 relative object-cover"
            alt=""
          />
          <div className="relative leading-6">設定</div>
        </div>
        <div className="w-36 h-12 hidden flex-row items-center justify-start !pt-spacing-spacing-sm !pb-spacing-spacing-sm !pl-spacing-spacing-md !pr-spacing-spacing-md box-border gap-spacing-spacing-xs">
          <img
            className="w-5 relative max-h-full overflow-hidden shrink-0"
            alt=""
          />
          <div className="relative leading-6">Label</div>
        </div>
        <div className="w-36 h-12 hidden flex-row items-center justify-start !pt-spacing-spacing-sm !pb-spacing-spacing-sm !pl-spacing-spacing-md !pr-spacing-spacing-md box-border gap-spacing-spacing-xs">
          <img
            className="w-5 relative max-h-full overflow-hidden shrink-0"
            alt=""
          />
          <div className="relative leading-6">Label</div>
        </div>
        <div className="w-36 h-12 hidden flex-row items-center justify-start !pt-spacing-spacing-sm !pb-spacing-spacing-sm !pl-spacing-spacing-md !pr-spacing-spacing-md box-border gap-spacing-spacing-xs">
          <img
            className="w-5 relative max-h-full overflow-hidden shrink-0"
            alt=""
          />
          <div className="relative leading-6">Label</div>
        </div>
        <div className="w-36 h-12 hidden flex-row items-center justify-start !pt-spacing-spacing-sm !pb-spacing-spacing-sm !pl-spacing-spacing-md !pr-spacing-spacing-md box-border gap-spacing-spacing-xs">
          <img
            className="w-5 relative max-h-full overflow-hidden shrink-0"
            alt=""
          />
          <div className="relative leading-6">Label</div>
        </div>
        <div className="w-36 h-12 hidden flex-row items-center justify-start !pt-spacing-spacing-sm !pb-spacing-spacing-sm !pl-spacing-spacing-md !pr-spacing-spacing-md box-border gap-spacing-spacing-xs">
          <img
            className="w-5 relative max-h-full overflow-hidden shrink-0"
            alt=""
          />
          <div className="relative leading-6">Label</div>
        </div>
        <div className="w-36 h-12 hidden flex-row items-center justify-start !pt-spacing-spacing-sm !pb-spacing-spacing-sm !pl-spacing-spacing-md !pr-spacing-spacing-md box-border gap-spacing-spacing-xs">
          <img
            className="w-5 relative max-h-full overflow-hidden shrink-0"
            alt=""
          />
          <div className="relative leading-6">Label</div>
        </div>
      </div>
    </div>
  );
};

export default E;
