import { SVGProps } from "react";
const CurvedArrowDown = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={204}
    height={43}
    fill="none"
    {...props}
  >
    <path
      stroke="#C2CBDE"
      strokeDasharray="5 5"
      strokeWidth={1.5}
      d="M1 32.72s92.3-71.527 195 0"
    />
    <path
      stroke="#C2CBDE"
      strokeDasharray="4 4"
      strokeWidth={1.5}
      d="M181.219 39.499s19.115 5.526 20.937-.735c1.822-6.26.455-12.735-5.462-21.605"
    />
  </svg>
);
export default CurvedArrowDown;
