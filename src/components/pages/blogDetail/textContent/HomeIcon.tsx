import * as React from "react";
import { SVGProps } from "react";

const HomeIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 128 128"
    width="1em"
    height="1em"
    {...props}
  >
    <defs>
      <linearGradient
        id="a"
        x1={3.75}
        x2={124.16}
        y1={64.51}
        y2={64.51}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#67a3ff" />
        <stop offset={1} stopColor="#418cff" />
      </linearGradient>
    </defs>
    <path
      d="m123 62.5-.13-.14-56-52.19a4.29 4.29 0 0 0-5.7-.13L4.94 62.5a4.23 4.23 0 0 0-.76 4.8A5 5 0 0 0 8.71 70H22l-.1 45.81a2.31 2.31 0 0 0 .06.52 4.87 4.87 0 0 0 4.86 3.67h74.27a4.88 4.88 0 0 0 4.86-3.67 3.05 3.05 0 0 0 0-.52L105.9 70h13.3a5 5 0 0 0 4.53-2.7 4.25 4.25 0 0 0-.73-4.8Z"
      style={{
        fill: "#ffffffcc",
      }}
    />
  </svg>
);

export default HomeIcon;
