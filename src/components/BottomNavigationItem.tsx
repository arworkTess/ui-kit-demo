import { FunctionComponent, memo, useMemo, type CSSProperties } from "react";

export type BottomNavigationItemType = {
  className?: string;
  label?: string;
  solidBinoculars?: string;

  /** Variant props */
  state?: string;

  /** Style props */
  solidBinocularsOverflow?: CSSProperties["overflow"];
};

const BottomNavigationItem: FunctionComponent<BottomNavigationItemType> = memo(
  ({
    className = "",
    state = "Inactive",
    label = "探索",
    solidBinoculars,
    solidBinocularsOverflow,
  }) => {
    const solidBinocularsStyle: CSSProperties = useMemo(() => {
      return {
        overflow: solidBinocularsOverflow,
      };
    }, [solidBinocularsOverflow]);

    return (
      <div
        className={`w-[78px] overflow-hidden shrink-0 flex flex-col items-center justify-start gap-spacing-spacing-2xs opacity-[0.4] text-center text-xs text-fg-fg-brand-secondary font-noto-sans-tc data-[state='Inactive']:active:opacity-[unset] ${className}`}
        data-state={state}
      >
        <img
          className="w-6 relative max-h-full overflow-hidden"
          loading="lazy"
          alt=""
          src={solidBinoculars}
          style={solidBinocularsStyle}
        />
        <b className="relative tracking-[0.02em] leading-[18px]">{label}</b>
      </div>
    );
  }
);

export default BottomNavigationItem;
