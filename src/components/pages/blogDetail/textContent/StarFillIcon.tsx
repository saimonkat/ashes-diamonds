import { FC } from "react";
import cn from "classnames";

interface IIcon {
  color?: string;
  secondColor?: string;
  className?: string;
  width?: number;
  height?: number;
  opacity?: string;
  onClick?: () => void;
}

const StarFillIcon: FC<IIcon> = ({ color, className, width, height }) => {
  return (
    <svg
      width={width || "40"}
      height={height || "40"}
      className={cn(className)}
      viewBox="0 0 40 40"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g
        id="icon/star/filled"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <rect id="pallet" x="0" y="0" width="40" height="40"></rect>
        <polygon
          id="star"
          fill={color ? color : "#FFFFFF"}
          points="20 30.2564692 7.63932023 39 12.1445 24.5554546 0 15.5147084 15.145034 15.3310192 20 1 24.854966 15.3310192 40 15.5147084 27.8555 24.5554546 32.3606798 39"
        ></polygon>
      </g>
    </svg>
  );
};

export default StarFillIcon;
