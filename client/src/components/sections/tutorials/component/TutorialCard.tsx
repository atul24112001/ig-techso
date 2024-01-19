import { Eye, Star } from "lucide-react";
import { useMemo } from "react";

type Props = {
  details: TutorialType;
  width?: string;
};

export default function TutorialCard({ details, width }: Props) {
  const stars = useMemo(() => {
    const arr: boolean[] = [];
    const rounded = Math.floor(details.review);
    for (let i = 1; i <= 5; i++) {
      if (rounded >= i) {
        arr.push(true);
      } else {
        arr.push(false);
      }
    }
    return arr;
  }, []);

  return (
    <div
      style={{
        width: width ?? "calc(100% / 3)",
      }}
      className="flex-shrink-0 bg-white hover:scale-105 transition-all duration-300 rounded-[10px] border-[1px] border-solid border-[#F3F4F5]"
    >
      <img className="" src={details.thumbnail} alt={`${details.id}`} />
      <div className="py-4 px-4">
        <div className="flex items-center gap-2">
          <div className="flex">
            {stars.map((start) => {
              if (start) {
                return <Star size={18} fill="#FFCE1F" color="#FFCE1F" />;
              }
              return <Star size={18} fill="#F0ECDF" color="#F0ECDF" />;
            })}
          </div>
          <div className="text-[15px] font-normal text-[#0F2137]">
            {details.review}
          </div>
          <div className="text-[15px] font-normal text-[#0F2137]">
            ({details.totalReviews} Reviews)
          </div>
        </div>
        <div className="text-[20px] font-bold py-2 text-[#0F2137]">
          {details.title}
        </div>
        <div className="flex gap-2 items-center">
          <Eye size={20} color="#B5C3CB" />
          <div className="text-[16px] font-normal text-[#343D48]">
            {details.numberOfStudentsWatched.toLocaleString()} Students Watched
          </div>
        </div>
      </div>
    </div>
  );
}
