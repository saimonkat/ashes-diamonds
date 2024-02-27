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

const StarNonFillIcon: FC<IIcon> = ({ color, className, width, height }) => {
  return (
    <svg
      width={width || "40"}
      height={height || "40"}
      className={cn(className)}
      viewBox="0 0 40 40"
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
    >
      <g
        id="icon/star/non-filled"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <rect id="Rectangle" x="0" y="0" width="40" height="40"></rect>
        <path
          d="M20,1 L24.854966,15.3310192 L40,15.5147084 L27.8555,24.5554546 L32.3606798,39 L20,30.2564692 L7.63932023,39 L12.1445,24.5554546 L0,15.5147084 L15.145034,15.3310192 L20,1 Z M20,7.233 L17.0392866,15.9727413 L16.5850052,17.3137014 L15.1692896,17.3308721 L5.938,17.442 L13.3387748,22.9511766 L14.4758713,23.7976669 L14.0537886,25.1509519 L11.307,33.955 L18.8450168,28.623676 L20,27.8066795 L21.1549832,28.623676 L28.692,33.955 L25.9462114,25.1509519 L25.5241287,23.7976669 L26.6612252,22.9511766 L34.061,17.442 L24.8307104,17.3308721 L23.4149948,17.3137014 L22.9607134,15.9727413 L20,7.233 Z"
          id="star"
          fill={color ? color : "#FFFFFF"}
          fillRule="nonzero"
        ></path>
      </g>
    </svg>
  );
};

export default StarNonFillIcon;
