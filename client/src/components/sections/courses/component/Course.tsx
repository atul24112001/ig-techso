import { ChevronDown, ChevronRight, Eye, Star } from "lucide-react";
import { useMemo, useState } from "react";
import PlayLogo from "../../../../assets/icons/PlayButton";
import Button from "../../../helper/Button";
import CheckMarkIcon from "../../../../assets/icons/CheckMark";

type Props = {
  details: CourseType;
};

export default function Course({ details }: Props) {
  const [open, setOpen] = useState(false);

  const stars = useMemo(() => {
    const arr: boolean[] = [];
    const rounded = Math.floor(details.rating);
    for (let i = 1; i <= 5; i++) {
      if (rounded >= i) {
        arr.push(true);
      } else {
        arr.push(false);
      }
    }
    return arr;
  }, []);

  const toggleFeatures = () => {
    setOpen((prev) => !prev);
  };

  return (
    <div
      className="border-[1px] border-solid border-[#F3F4F5] rounded-[10px] shadow-md py-8 px-10 cursor-pointer mb-5"
      onClick={toggleFeatures}
    >
      <div className="flex items-center gap-10 ">
        <div className="rounded-full pl-7 p-6 bg-[#ef9e4810]">
          <PlayLogo />
        </div>

        <div>
          <div className="flex items-center gap-3">
            <div className="flex">
              {stars.map((start) => {
                if (start) {
                  return <Star size={18} fill="#FFCE1F" color="#FFCE1F" />;
                }
                return <Star size={18} fill="#F0ECDF" color="#F0ECDF" />;
              })}
            </div>
            <div className="text-[15px] font-normal text-[#0F2137]">
              {details.rating.toFixed(1).toLocaleString()} (
              {details.totalReviews.toLocaleString()} reviews)
            </div>
            <div className="flex gap-2 items-center">
              <Eye size={20} color="#B5C3CB" />
              <div className="text-[16px] font-normal text-[#343D48]">
                {details.numberOfStudentsWatched.toLocaleString()} Students
                Watched
              </div>
            </div>
          </div>
          <div className="text-[22px] my-2 font-bold text-[#0F2137]">
            {details.title}
          </div>
          <div className="text-[15px] font-normal text-[#5D646D]">
            {details.description}
          </div>
        </div>
        <Button bg={"#3FDBB1"} color={"#fff"} onClick={() => {}}>
          {details.videoCount} Video Classes | {details.durationInMinutes / 60}{" "}
          hr
        </Button>
        {open ? <ChevronDown /> : <ChevronRight />}
      </div>
      {open && (
        <div className="mt-5" onClick={(e) => e.stopPropagation()}>
          <div className="flex pl-28  flex-wrap gap-5">
            {details.features.map((feat) => {
              return (
                <div className="flex gap-2">
                  <CheckMarkIcon />
                  <span>{feat}</span>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
