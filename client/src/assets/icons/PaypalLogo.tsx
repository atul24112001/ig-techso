import { SVGProps } from "react";
const PaypalLogo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={100}
    height={28}
    fill="none"
    {...props}
  >
    <path fill="url(#a)" d="M0 0h100v28H0z" />
    <defs>
      <pattern
        id="a"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <use xlinkHref="#b" transform="scale(.00667 .0238)" />
      </pattern>
      <image
        xlinkHref="data:image/png;base64,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"
        id="b"
        width={150}
        height={42}
      />
    </defs>
  </svg>
);
export default PaypalLogo;
