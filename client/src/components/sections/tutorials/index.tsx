import TutorialCard from "./component/TutorialCard";
import review1 from "../../../assets/images/review-1.png";
import review2 from "../../../assets/images/review-2.png";
import review3 from "../../../assets/images/review-3.png";
import React from "react";

export const tutorials = [
  {
    id: 1,
    title: "How to work with prototype design with adobe xd featuring tools",
    totalReviews: 343,
    review: 5.0,
    numberOfStudentsWatched: 1249,
    thumbnail: review1,
  },
  {
    id: 2,
    title: "How to work with prototype design with adobe xd featuring tools",
    totalReviews: 343,
    review: 4.5,
    numberOfStudentsWatched: 1249,
    thumbnail: review2,
  },
  {
    id: 3,
    title: "How to work with prototype design with adobe xd featuring tools",
    totalReviews: 343,
    review: 4,
    numberOfStudentsWatched: 1249,
    thumbnail: review3,
  },
  {
    id: 4,
    title: "How to work with prototype design with adobe xd featuring tools",
    totalReviews: 343,
    review: 4,
    numberOfStudentsWatched: 1249,
    thumbnail: review3,
  },
];

type Props = {
  id?: string;
};
const Tutorials = React.forwardRef<HTMLElement, Props>(({ id }, ref) => {
  return (
    <section id={id} ref={ref} className="my-20 m-auto pb-8 w-3/4">
      <div className="text-center text-[14px] font-bold text-[#EF9E48]">
        Quality features
      </div>
      <div className="mb-9 text-center text-[36px] font-bold text-[#0F2137]">
        Tutorials that people love most
      </div>
      <div className="flex items-center overflow-x-auto gap-4 p-4">
        {tutorials.map((tutorial) => {
          return <TutorialCard key={tutorial.id} details={tutorial} />;
        })}
      </div>
    </section>
  );
});

export default Tutorials;
