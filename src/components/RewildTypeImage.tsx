import { FunctionComponent, memo } from "react";

export type RewildTypeImageType = {
  className?: string;

  /** Variant props */
  type?: string;
};

const RewildTypeImage: FunctionComponent<RewildTypeImageType> = memo(
  ({ className = "", type = "健行" }) => {
    return (
      <div
        className={`w-40 relative h-40 overflow-hidden shrink-0 ${className}`}
        data-type={type}
      >
        <img
          className="absolute h-[150%] w-[150%] top-[-25%] right-[-25%] bottom-[-25%] left-[-25%] max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src="/@2x.png"
        />
      </div>
    );
  }
);

export default RewildTypeImage;
