// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function 电话填充1Icon(props) {
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
          "M19.675 18.483c.657-1.144.293-2.023-.87-2.902-1.37-1.033-2.706-1.728-3.668-.615 0 0-1.02 1.215-4.023-1.628C7.622 10.01 9.087 8.83 9.087 8.83c1.215-1.22.443-2.132-.576-3.511-1.018-1.38-2.047-1.816-3.524-.63-2.846 2.286 1.167 7.655 3.196 9.742 0 0 3.086 3.192 5.027 4.255l1.04.58c1.489.765 3.163 1.115 4.34.405 0 0 .569-.292 1.085-1.187z"
        }
        fill={"currentColor"}
        opacity={".6"}
      ></path>
    </svg>
  );
}

export default 电话填充1Icon;
/* prettier-ignore-end */
