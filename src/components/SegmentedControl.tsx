import { FunctionComponent, memo } from "react";
import Segment from "./Segment";

export type SegmentedControlType = {
  className?: string;
  segmentState?: string;
  segmentState1?: string;
  segmentState2?: string;
  segmentState3?: string;
  segmentType?: string;
  segmentType1?: string;
  segmentType2?: string;
  segmentType3?: string;
  segmentLabel?: string;
  segmentLabel1?: string;
  segmentLabel2?: string;
  segmentLabel3?: string;
};

const SegmentedControl: FunctionComponent<SegmentedControlType> = memo(
  ({
    className = "",
    segmentState,
    segmentState1,
    segmentState2,
    segmentState3,
    segmentType,
    segmentType1,
    segmentType2,
    segmentType3,
    segmentLabel,
    segmentLabel1,
    segmentLabel2,
    segmentLabel3,
  }) => {
    return (
      <div
        className={`w-[361px] rounded-radius-radius-full bg-bg-bg-tertiary flex flex-row items-center justify-start !p-spacing-spacing-2xs box-border text-center text-base text-bg-bg-primary font-noto-sans-tc ${className}`}
      >
        <Segment state={segmentState} type={segmentType} label={segmentLabel} />
        <Segment
          state={segmentState1}
          type={segmentType1}
          label={segmentLabel1}
        />
        <Segment
          state={segmentState2}
          type={segmentType2}
          label={segmentLabel2}
        />
        <Segment
          state={segmentState3}
          type={segmentType3}
          label={segmentLabel3}
        />
      </div>
    );
  }
);

export default SegmentedControl;
