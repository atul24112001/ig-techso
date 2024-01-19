import { PropsWithChildren } from "react";

type Props = {
  onClick: () => void;
  bg?: string;
  color?: string;
};

export default function Button({
  onClick,
  bg = "#FCF2E8",
  color = "#EF9E48",
  children,
}: PropsWithChildren<Props>) {
  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
      style={{
        backgroundColor: bg,
        color,
      }}
      className={`py-2 px-4 rounded-md text-[16px] `}
    >
      {children}
    </button>
  );
}
