import * as React from "react";
import { SVGProps } from "react";

const Loader = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="active"
    viewBox="0 0 82 66"
    {...props}
  >
    <style>
      {
        "@keyframes animate-svg-stroke-1{0%,to{stroke-dashoffset:205.29959106445312px;stroke-dasharray:205.29959106445312px}35%,65%{stroke-dashoffset:410.59918212890625px;stroke-dasharray:205.29959106445312px}}@keyframes animate-svg-stroke-2{0%,to{stroke-dashoffset:43.231056213378906px;stroke-dasharray:43.231056213378906px}35%,65%{stroke-dashoffset:86.46211242675781px;stroke-dasharray:43.231056213378906px}}@keyframes animate-svg-stroke-3{0%,to{stroke-dashoffset:54px;stroke-dasharray:54px}35%,65%{stroke-dashoffset:108px;stroke-dasharray:54px}}@keyframes animate-svg-stroke-4{0%,to{stroke-dashoffset:80px;stroke-dasharray:80px}35%,65%{stroke-dashoffset:160px;stroke-dasharray:80px}}@keyframes animate-svg-stroke-5{0%,to{stroke-dashoffset:49.801673889160156px;stroke-dasharray:49.801673889160156px}15%,60%{stroke-dashoffset:99.60334777832031px;stroke-dasharray:49.801673889160156px}}@keyframes animate-svg-stroke-6{0%,to{stroke-dashoffset:49.801673889160156px;stroke-dasharray:49.801673889160156px}15%,60%{stroke-dashoffset:99.60334777832031px;stroke-dasharray:49.801673889160156px}}"
      }
    </style>
    <g id="Kit" fill="none" fillRule="evenodd" stroke="none" strokeWidth={1}>
      <g
        id="Artboard"
        stroke="#fff"
        strokeWidth={2}
        opacity={0.5}
        transform="translate(-39 -47)"
      >
        <g id="Group-13" transform="translate(41 48)">
          <path
            id="Stroke-1"
            d="M26 17.14 13 1 0 17.14 39 63l39-45.86L65 1 52 17.14"
            style={{
              animation: "animate-svg-stroke-1 3s ease infinite",
            }}
          />
          <path
            id="Stroke-3"
            d="M52 17 39 1 26 17"
            style={{
              animation: "animate-svg-stroke-2 3s ease infinite",
            }}
          />
          <path
            id="Stroke-5"
            d="M13 .5h52"
            style={{
              animation: "animate-svg-stroke-3 3s ease infinite",
            }}
          />
          <path
            id="Stroke-7"
            d="M78 16.5H0"
            style={{
              animation: "animate-svg-stroke-4 3s ease infinite",
            }}
          />
          <path
            id="Stroke-9"
            d="m26 17 13 46"
            style={{
              animation: "animate-svg-stroke-5 3s ease infinite",
            }}
          />
          <path
            id="Stroke-11"
            d="M52 17 39 63"
            style={{
              animation: "animate-svg-stroke-6 3s ease infinite",
            }}
          />
        </g>
      </g>
    </g>
  </svg>
);
export default Loader;
