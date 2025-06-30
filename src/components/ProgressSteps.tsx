import { FunctionComponent, memo } from "react";
import StepLine from "./StepLine";

export type ProgressStepsType = {
  className?: string;
  stepState?: string;
  stepState1?: string;
  stepState2?: string;
  stepLabel?: string;
  stepLabel1?: string;
  stepLabel2?: string;
  stepEmpty?: string;
  stepEmpty1?: string;
  stepEmpty2?: string;

  /** Variant props */
  step?: 1;
};

const ProgressSteps: FunctionComponent<ProgressStepsType> = memo(
  ({
    className = "",
    step = 1,
    stepState,
    stepState1,
    stepState2,
    stepLabel,
    stepLabel1,
    stepLabel2,
    stepEmpty,
    stepEmpty1,
    stepEmpty2,
  }) => {
    return (
      <div
        className={`w-[361px] flex flex-row items-center justify-center text-center text-sm text-bg-bg-primary font-noto-sans-tc ${className}`}
        data-step={step}
      >
        <StepLine
          step="Start"
          leftLine="pending_I491:3994;381:16192;374:6912"
          rightLine="/right-line.svg"
          state="Completed"
          label="基本資訊"
          empty="1"
        />
        <StepLine
          step="Middle"
          leftLine="/left-line.svg"
          rightLine="/left-line.svg"
          state="Incomplete"
          label="行程首圖"
          empty="2"
        />
        <StepLine
          step="End"
          leftLine="/left-line-1.svg"
          rightLine="pending_I491:3994;381:16194;374:6900"
          state="Incomplete"
          label="時間與細節"
          empty="3"
        />
      </div>
    );
  }
);

export default ProgressSteps;