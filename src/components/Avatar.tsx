import { FunctionComponent, memo, useMemo, type CSSProperties } from "react";

export type AvatarType = {
  className?: string;
  photo?: string;

  /** Variant props */
  size?: 24 | 36;

  /** Style props */
  avatarMarginLeft?: CSSProperties["marginLeft"];
  avatarHeight?: CSSProperties["height"];
  avatarWidth?: CSSProperties["width"];
};

const Avatar: FunctionComponent<AvatarType> = memo(
  ({
    className = "",
    size = 24,
    avatarMarginLeft,
    avatarHeight,
    avatarWidth,
    photo,
  }) => {
    const avatarStyle: CSSProperties = useMemo(() => {
      return {
        marginLeft: avatarMarginLeft,
        height: avatarHeight,
        width: avatarWidth,
      };
    }, [avatarMarginLeft, avatarHeight, avatarWidth]);

    return (
      <div
        className={`h-6 w-6 rounded-radius-radius-full border-border-border-white border-solid border-[1px] box-border overflow-hidden shrink-0 flex flex-row items-center justify-center ${className}`}
        data-size={size}
        style={avatarStyle}
      >
        <img
          className="flex-1 rounded-radius-radius-full max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src={photo}
        />
      </div>
    );
  }
);

export default Avatar;
