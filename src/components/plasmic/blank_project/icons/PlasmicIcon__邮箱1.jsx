// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function 邮箱1Icon(props) {
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
          "M20.773 7.027l-8.932 5.156-8.71-5.03a2.523 2.523 0 012.517-2.36h12.617c1.296 0 2.365.975 2.508 2.234zm.016 1.846v7.85a2.524 2.524 0 01-2.524 2.524H5.648a2.524 2.524 0 01-2.524-2.524V9.007l8.318 4.802c.286.164.63.134.88-.049l.032-.019 8.435-4.868z"
        }
        fill={"currentColor"}
        opacity={".6"}
      ></path>
    </svg>
  );
}

export default 邮箱1Icon;
/* prettier-ignore-end */
