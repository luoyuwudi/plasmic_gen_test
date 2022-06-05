// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function UnionIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 93 65"}
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
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M32.408 2.478c1.905-3.304 6.673-3.304 8.578 0l19.464 33.74 5.404-9.367c1.905-3.303 6.673-3.303 8.578 0l17.723 30.723c1.904 3.301-.478 7.426-4.29 7.426H52.422c-.306 0-.603-.027-.889-.077H4.96c-3.81 0-6.193-4.125-4.29-7.426l31.739-55.02zm38.968 10.767a6.014 6.014 0 006.011-6.016 6.014 6.014 0 00-6.01-6.017 6.014 6.014 0 00-6.012 6.017 6.014 6.014 0 006.011 6.016z"
        }
        fill={"currentColor"}
        fillOpacity={".05"}
      ></path>
    </svg>
  );
}

export default UnionIcon;
/* prettier-ignore-end */
