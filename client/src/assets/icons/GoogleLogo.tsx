import { SVGProps } from "react";
const GoogleLogo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={85}
    height={28}
    fill="none"
    {...props}
  >
    <path fill="url(#a)" d="M0 0h85v28H0z" />
    <defs>
      <pattern
        id="a"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <use xlinkHref="#b" transform="matrix(.00784 0 0 .0238 -.002 0)" />
      </pattern>
      <image
        xlinkHref="data:image/png;base64,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"
        id="b"
        width={128}
        height={42}
      />
    </defs>
  </svg>
);
export default GoogleLogo;