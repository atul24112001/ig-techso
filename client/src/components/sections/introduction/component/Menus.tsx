import { ChevronDown } from "lucide-react";
import { useMemo } from "react";

export default function Menus() {
  const menus = useMemo(() => {
    return [
      {
        title: "Home",
        onClick: () => {},
      },
      {
        title: "Advertise",
        onClick: () => {},
        addonRight: <ChevronDown size={18} />,
      },
      {
        title: "Supports",
        onClick: () => {},
        addonRight: <ChevronDown size={18} />,
      },
      {
        title: "Contact",
        onClick: () => {},
      },
    ];
  }, []);
  return (
    <div className="flex items-center gap-8">
      {menus.map((item, index) => {
        return (
          <a
            className="flex items-center cursor-pointer "
            onKeyDown={() => {}}
            onClick={item.onClick}
            key={`${index + 1}`}
          >
            <span className="text-sm">{item.title}</span>
            {item.addonRight ?? null}
          </a>
        );
      })}
    </div>
  );
}
