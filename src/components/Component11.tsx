import { FunctionComponent, memo } from "react";
import StatusBarIPhone from "./StatusBarIPhone";
import BarTopNavigation from "./BarTopNavigation";
import ProgressSteps from "./ProgressSteps";
import FormItem1 from "./FormItem";
import FormItem from "./FormItem1";
import Carousel from "./Carousel";
import Button2 from "./Button2";

export type Component2Type = {
  className?: string;
};

const Component2: FunctionComponent<Component2Type> = memo(
  ({ className = "" }) => {
    return (
      <div
        className={`[background:linear-gradient(167.99deg,_rgba(200,_216,_255,_0.2),_rgba(231,_237,_254,_0.2)_33%,_rgba(255,_249,_245,_0.2)_66%,_rgba(255,_233,_216,_0.2)),_#fff] max-w-full flex flex-col items-start justify-start leading-[normal] tracking-[normal] ${className}`}
      >
        <StatusBarIPhone
          background
          cellularConnection="/cellular-connection2.svg"
          wifi="/wifi2.svg"
          cap="/cap1.svg"
        />
        <BarTopNavigation
          background
          leading
          trailing={false}
          title="建立行程"
          showTitle
          buttonHierarchy="Tertiary"
          buttonHierarchy1="Tertiary"
          buttonIconOnly
          buttonIconOnly1
          buttonSize="sm"
          buttonSize1="sm"
          buttonState="Default"
          buttonState1="Default"
          buttonShow
          buttonShow1={false}
          buttonLineChevronLeftBoldMax1="100%"
          buttonLineChevronLeftBoldOverflow1="hidden"
          buttonLineChevronLeftBold1="pending_I918:6403;918:5858;326:10318"
        />
        <section className="flex flex-col items-center justify-start !pt-spacing-spacing-xl !pb-spacing-spacing-2xl !pl-spacing-spacing-md !pr-spacing-spacing-md gap-spacing-spacing-2xl z-[1] text-left text-sm text-fg-fg-secondary font-noto-sans-tc">
          <ProgressSteps
            step={1}
            stepState="Completed"
            stepState1="Incomplete"
            stepState2="Incomplete"
            stepLabel="基本資訊"
            stepLabel1="行程首圖"
            stepLabel2="時間與細節"
            stepEmpty="1"
            stepEmpty1="2"
            stepEmpty2="3"
          />
          <div className="w-[361px] flex flex-col items-start justify-start gap-2">
            <FormItem1
              supportingText="NA"
              label="行程名稱"
              required={false}
              state="Default"
              text="為這趟行程取個酷名字！"
              iconLeft={false}
              iconRight={false}
            />
            <FormItem
              supportingText="NA"
              label="地點"
              required={false}
              hasLocation={false}
              state="Default"
              withIcon={false}
            />
            <div className="w-[361px] flex flex-col items-start justify-start gap-spacing-spacing-xs">
              <div className="flex flex-row items-center justify-start gap-spacing-spacing-2xs">
                <b className="relative leading-5">野放模式</b>
                <b className="relative leading-5 hidden">*</b>
              </div>
              <Carousel
                supportingText="NA"
                buttonArrowLeftHierarchy="Secondary"
                buttonArrowRightHierarchy="Secondary"
                buttonArrowLeftIconOnly
                buttonArrowRightIconOnly
                buttonArrowLeftSize="md"
                buttonArrowRightSize="md"
                buttonArrowLeftState="Default"
                buttonArrowRightState="Default"
                buttonArrowLeftShow
                buttonArrowRightShow
                type="健行"
                supportingText1="NA"
              />
              <div className="self-stretch" />
            </div>
            <Button2
              hierarchy="Primary"
              iconOnly={false}
              size="md"
              state="Default"
              iconLeft={false}
              iconRight={false}
              label="下一步"
              lineCircle="pending_I491:11662;265:108"
              lineCircle1="pending_I491:11662;265:111"
            />
          </div>
        </section>
      </div>
    );
  }
);

export default Component2;
