import { SVGProps } from "react";
const CheckMarkIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={22}
    fill="none"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        fill="#B5C3CB"
        d="M18.778 18.778c4.296-4.296 4.296-11.26 0-15.556-4.296-4.296-11.26-4.296-15.556 0-4.296 4.297-4.296 11.26 0 15.556 4.297 4.296 11.264 4.296 15.556 0ZM7.056 9.318l2.474 2.474 5.418-5.414 1.917 1.917-5.414 5.414-1.921 1.917-1.917-1.917-2.474-2.473 1.917-1.917Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h22v22H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default CheckMarkIcon;
