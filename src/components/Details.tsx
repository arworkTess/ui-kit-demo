import { FunctionComponent, memo } from "react";
import Avatar from "./Avatar";
import Button2 from "./Button2";

export type DetailsType = {
  className?: string;
};

const Details: FunctionComponent<DetailsType> = memo(({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start gap-spacing-spacing-xs text-center text-sm text-fg-fg-secondary font-noto-sans-tc ${className}`}
    >
      <div className="self-stretch flex flex-row items-center justify-start text-2xl text-fg-fg-primary">
        <h3 className="!m-0 relative text-[length:inherit] leading-8 font-bold font-[inherit]">
          劍潭山沒有潭也沒有劍
        </h3>
      </div>
      <div className="self-stretch flex flex-row items-center justify-start gap-spacing-spacing-xs">
        <img
          className="h-6 w-6 relative object-cover"
          loading="lazy"
          alt=""
          src="/line--calendar@2x.png"
        />
        <div className="relative leading-5">2024.07.26</div>
        <div className="relative leading-5">08:00 - 11:00</div>
      </div>
      <div className="self-stretch flex flex-row items-center justify-start gap-spacing-spacing-xs">
        <img
          className="w-6 relative max-h-full overflow-hidden shrink-0"
          loading="lazy"
          alt=""
          src="/line--personal1.svg"
        />
        <div className="relative leading-5">Eugene Ding</div>
        <img
          className="w-4 relative max-h-full overflow-hidden shrink-0 object-cover"
          loading="lazy"
          alt=""
          src="/solid--checkcircle@2x.png"
        />
        <img
          className="w-[19.6px] relative max-h-full"
          loading="lazy"
          alt=""
          src="/line--bullet.svg"
        />
        <div className="relative leading-5">共1人參加</div>
        <img
          className="w-[19.6px] relative max-h-full"
          alt=""
          src="/line--bullet.svg"
        />
        <div className="relative leading-5">7人滿團</div>
      </div>
      <div className="flex flex-row items-center justify-start">
        <div className="flex flex-row items-center justify-start">
          <Avatar
            size={36}
            avatarMarginLeft="unset"
            avatarHeight="36px"
            avatarWidth="36px"
            photo="/photo1@2x.png"
          />
          <Avatar
            size={36}
            avatarMarginLeft="-4px"
            avatarHeight="36px"
            avatarWidth="36px"
            photo="/photo1@2x.png"
          />
          <Avatar
            size={36}
            avatarMarginLeft="-4px"
            avatarHeight="36px"
            avatarWidth="36px"
            photo="/photo1@2x.png"
          />
          <img
            className="w-9 rounded-[999999px] max-h-full !ml-[-4px] relative"
            loading="lazy"
            alt=""
            src="/button--more.svg"
          />
        </div>
      </div>
      <Button2
        hierarchy="Primary"
        iconOnly={false}
        size="md"
        state="Default"
        iconLeft={false}
        iconRight={false}
        label="發送邀請"
        buttonAlignSelf="unset"
        buttonHeight="unset"
        lineCircle="pending_I918:5339;265:108"
        lineCircle1="pending_I918:5339;265:111"
      />
    </div>
  );
});

export default Details;
