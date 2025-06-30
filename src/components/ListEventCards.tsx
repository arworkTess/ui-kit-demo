import { FunctionComponent, memo } from "react";
import CardEventBrief from "./CardEventBrief";

export type ListEventCardsType = {
  className?: string;
};

const ListEventCards: FunctionComponent<ListEventCardsType> = memo(
  ({ className = "" }) => {
    return (
      <div
        className={`overflow-y-auto flex flex-col items-start justify-start gap-spacing-spacing-md text-left text-xs text-fg-fg-tertiary font-noto-sans-tc ${className}`}
      >
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
        <CardEventBrief
          state="Default"
          photoFrame="/photo-frame-1@2x.png"
          date="2025.04.12"
          title="上山賞花"
          prop="健行"
          prop1="六十石山"
          type="Coming"
          prop2="即將出發"
        />
        <CardEventBrief
          state="Default"
          photoFrame="/photo-frame-2@2x.png"
          date="2025.02.25"
          title="湖光山色"
          prop="生態賞景"
          prop1="日月潭"
          type="Finished"
          prop2="已結束"
        />
        <CardEventBrief
          state="Default"
          photoFrame="/photo-frame-3@2x.png"
          date="2025.01.06 - 2025.01.07"
          title="The Great Walk"
          prop="露營"
          prop1="阿里山"
          type="Finished"
          prop2="已結束"
        />
      </div>
    );
  }
);

export default ListEventCards;
