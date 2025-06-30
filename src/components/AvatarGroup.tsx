import { FunctionComponent, memo } from "react";
import Avatar from "./Avatar";

export type AvatarGroupType = {
  className?: string;
  spacerDivision?: string;
  avatarSize?: 24 | 36;
  avatarSize1?: 24 | 36;
  avatarSize2?: 24 | 36;
  avatarMarginLeft?: string;
  avatarMarginLeft1?: string;
  avatarMarginLeft2?: string;
  avatarHeight?: string;
  avatarHeight1?: string;
  avatarHeight2?: string;
  avatarWidth?: string;
  avatarWidth1?: string;
  avatarWidth2?: string;

  /** Variant props */
  size?: 24;
};

const AvatarGroup: FunctionComponent<AvatarGroupType> = memo(
  ({
    className = "",
    size = 24,
    spacerDivision,
    avatarSize,
    avatarSize1,
    avatarSize2,
    avatarMarginLeft,
    avatarMarginLeft1,
    avatarMarginLeft2,
    avatarHeight,
    avatarHeight1,
    avatarHeight2,
    avatarWidth,
    avatarWidth1,
    avatarWidth2,
  }) => {
    return (
      <div
        className={`flex flex-row items-center justify-start gap-spacing-spacing-2xs text-left text-xs text-fg-fg-secondary font-noto-sans-tc ${className}`}
        data-size={size}
      >
        <div className="flex flex-row items-center justify-start">
          <Avatar
            size={avatarSize}
            avatarMarginLeft={avatarMarginLeft}
            avatarHeight={avatarHeight}
            avatarWidth={avatarWidth}
            photo="/photo@2x.png"
          />
          <Avatar
            size={avatarSize1}
            avatarMarginLeft={avatarMarginLeft1}
            avatarHeight={avatarHeight1}
            avatarWidth={avatarWidth1}
            photo="/photo@2x.png"
          />
          <Avatar
            size={avatarSize2}
            avatarMarginLeft={avatarMarginLeft2}
            avatarHeight={avatarHeight2}
            avatarWidth={avatarWidth2}
            photo="/photo@2x.png"
          />
        </div>
        <div className="relative tracking-[0.02em] leading-[18px]">
          {spacerDivision}
        </div>
      </div>
    );
  }
);

export default AvatarGroup;
