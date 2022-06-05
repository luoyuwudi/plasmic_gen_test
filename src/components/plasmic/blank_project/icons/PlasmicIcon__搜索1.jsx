// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function 搜索1Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 20 20"}
      height={"1em"}
      width={"1em"}
      style={{
        fill: "currentcolor",
        stroke: "currentcolor",
        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M13.304 13.148l-.002.002h-.03l-.03.03-.04.04a.178.178 0 00-.05.11 6.545 6.545 0 01-4.464 1.758h-.002C5.055 15.149 2.1 12.195 2.1 8.625 2.1 5.055 4.993 2.1 8.625 2.1a6.489 6.489 0 016.525 6.525 6.545 6.545 0 01-1.762 4.47.17.17 0 00-.04.016.213.213 0 00-.042.036l-.002.001zm5.859 5.266a.533.533 0 00-.222-.427l-4.428-4.366c1.165-1.324 1.837-3.07 1.837-4.996A7.715 7.715 0 008.625.9 7.715 7.715 0 00.9 8.625a7.715 7.715 0 007.725 7.725c1.927 0 3.673-.672 4.997-1.838l4.432 4.371s0 0 0 0c.117.117.286.17.446.17.16 0 .329-.053.446-.17a.673.673 0 00.216-.469z"
        }
        fill={"currentColor"}
        stroke={"currentColor"}
        strokeWidth={".2"}
      ></path>
    </svg>
  );
}

export default 搜索1Icon;
/* prettier-ignore-end */
