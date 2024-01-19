import { SVGProps } from "react";
const CurvedArrowUp = (props: SVGProps<SVGSVGElement>) => (
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
      d="M.481 10.258s92.3 71.528 195 0"
    />
    <path
      stroke="#C2CBDE"
      strokeDasharray="4 4"
      strokeWidth={1.5}
      d="M180.7 3.476s19.116-5.527 20.938.734c1.822 6.261.455 12.736-5.462 21.605"
    />
  </svg>
);
export default CurvedArrowUp;
