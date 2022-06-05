// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function 手机11Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 24 24"}
      height={"1em"}
      width={"1em"}
      style={{
        fill: "currentcolor",
        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M16.723 1.608l-9.456-.01A1.883 1.883 0 005.385 3.49v17.02c0 1.045.837 1.892 1.882 1.892h9.456a1.89 1.89 0 001.892-1.892V3.49a1.883 1.883 0 00-1.892-1.882zm0 17.011H7.267V5.381h9.456v13.238z"
        }
        fill={"currentColor"}
        opacity={".6"}
      ></path>
    </svg>
  );
}

export default 手机11Icon;
/* prettier-ignore-end */
