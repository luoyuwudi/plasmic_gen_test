// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function 地址11Icon(props) {
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
          "M12.067 2.091c-4.17 0-7.55 3.337-7.55 7.453s7.55 12.243 7.55 12.243 7.55-8.127 7.55-12.243-3.38-7.453-7.55-7.453zm0 11.161a3.61 3.61 0 110-7.221 3.61 3.61 0 010 7.221z"
        }
        fill={"currentColor"}
        opacity={".6"}
      ></path>
    </svg>
  );
}

export default 地址11Icon;
/* prettier-ignore-end */
