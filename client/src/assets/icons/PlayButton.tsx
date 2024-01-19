import { SVGProps } from "react";
const PlayLogo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={31}
    height={31}
    fill="none"
    {...props}
  >
    <path
      fill="#EF9E48"
      d="M3.113 31a1.59 1.59 0 0 1-1.59-1.59V1.59c0-.878.712-1.59 1.59-1.59l25.834 14.308s1.192 1.192 0 2.384C27.753 17.885 3.113 31 3.113 31Z"
    />
  </svg>
);
export default PlayLogo;
