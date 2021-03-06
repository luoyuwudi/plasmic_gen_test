// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function FrameIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 30 34"}
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

      <g clipPath={"url(#HAaMmLkEeza)"} fill={"currentColor"}>
        <path
          d={
            "M22.281.586l.007.003c-2.338-.32-4.752.154-6.886 1.132-2.135.978-4.001 2.444-5.612 4.112-3.523 3.65-5.896 8.412-6.212 13.395-.12 1.885.055 3.808.713 5.586.659 1.778 1.824 3.41 3.434 4.48 2.656 1.765 6.254 1.808 9.273.714 3.018-1.094 5.54-3.186 7.743-5.462-2.6 3.225-5.683 6.265-9.607 7.792-3.924 1.526-8.838 1.23-11.882-1.608C.686 28.338-.118 24.643.013 21.2c.24-6.33 3.315-12.472 8.228-16.643 1.694-1.44 3.56-2.722 5.65-3.565 2.647-1.068 5.706-1.381 8.39-.406z"
          }
        ></path>

        <path
          d={
            "M7.966 27.146c-1.435-2.406-1.61-5.366-1.064-8.096.861-4.301 3.46-8.233 7.055-10.903C15.46 7.03 17.159 6.115 19.01 5.72s3.87-.236 5.517.67c2.38 1.309 3.675 4.004 3.865 6.646.19 2.64-.57 5.257-1.466 7.758 1.485-3.89 2.808-8.05 2.033-12.127-.418-2.193-1.517-4.353-3.415-5.619-2.273-1.516-5.36-1.508-7.942-.56C12.23 4.463 7.963 9.486 6.274 14.7a18.617 18.617 0 00-.803 3.761c-.328 3.09.24 6.475 2.495 8.685z"
          }
        ></path>

        <path
          d={
            "M10.497 26.069c-.895-2.092-.906-4.489-.226-6.654.68-2.166 2.021-4.108 3.687-5.7 1.231-1.178 2.684-2.197 4.353-2.645 1.669-.449 3.581-.258 4.946.774 1.311.992 1.964 2.627 2.097 4.231.133 1.605-.193 3.208-.518 4.787.457-1.519.909-3.05 1.079-4.623.17-1.573.049-3.206-.605-4.656-.654-1.45-1.884-2.7-3.444-3.178-1.574-.484-3.32-.147-4.795.57-3.555 1.724-6.276 4.896-7.451 8.55a13.91 13.91 0 00-.647 3.412c-.111 1.828.206 3.813 1.524 5.132z"
          }
        ></path>
      </g>

      <defs>
        <clipPath id={"HAaMmLkEeza"}>
          <path fill={"currentColor"} d={"M0 0h29.189v33.25H0z"}></path>
        </clipPath>
      </defs>
    </svg>
  );
}

export default FrameIcon;
/* prettier-ignore-end */
