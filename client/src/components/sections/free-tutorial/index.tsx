import React, { useState } from "react";
import MapIcon from "../../../assets/icons/map";
import Button from "../../helper/Button";
// import { tutorials } from "../tutorials";
import TutorialCard from "../tutorials/component/TutorialCard";
import review1 from "../../../assets/images/review-1.png";
import review2 from "../../../assets/images/review-2.png";
import review3 from "../../../assets/images/review-3.png";

const tutorials = [
  {
    _id: "1",
    title: "How to work with prototype design with adobe xd featuring tools",
    totalReviews: 343,
    rating: 5.0,
    numberOfStudentsWatched: 1249,
    image: review1,
  },
  {
    _id: "2",
    title: "How to work with prototype design with adobe xd featuring tools",
    totalReviews: 343,
    rating: 4.5,
    numberOfStudentsWatched: 1249,
    image: review2,
  },
  {
    _id: "3",
    title: "How to work with prototype design with adobe xd featuring tools",
    totalReviews: 343,
    rating: 4,
    numberOfStudentsWatched: 1249,
    image: review3,
  },
  {
    _id: "4",
    title: "How to work with prototype design with adobe xd featuring tools",
    totalReviews: 343,
    rating: 4,
    numberOfStudentsWatched: 1249,
    image: review3,
  },
];

type Props = {
  id?: string;
};
const FreeTutorial = React.forwardRef<HTMLElement, Props>(({ id }, ref) => {
  const [activeCard, setActiveCard] = useState(1);

  const handleScroll = (e: React.UIEvent<HTMLDivElement, UIEvent>) => {
    const cardIndex = Math.floor(e.currentTarget.scrollLeft / 100);
    console.log({
      cardIndex,
    });
    setActiveCard(cardIndex);
  };

  return (
    <section ref={ref} id={id} className="py-20 flex m-auto  w-3/4 gap-3">
      <div className="flex-1 relative  overflow-hidden">
        <div className="absolute top-0 left-0 right-0">
          <MapIcon />
        </div>
        <div className="absolute top-0 left-0 right-0 z-20 ">
          <div onScroll={handleScroll} className="overflow-x-auto flex py-8">
            {tutorials.map((tutorial, index) => {
              return (
                <div
                  className={`transition-all decoration-slate-200 cursor-pointer ${
                    activeCard == index ? "scale-100" : "scale-75"
                  }`}
                >
                  <TutorialCard
                    width="250px"
                    key={tutorial._id}
                    details={tutorial}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="w-2/5 ">
        <div className="">
          <h3 className="text-[#EF9E48] text-sm font-bold mb-2 uppercase">
            Free tutorial
          </h3>
          <p className="text-[#0F2137] text-5xl font-bold  mb-10">
            More than thousand of free tutorial upload every weeks
          </p>
          <p className="text-[#02073E] text-[18px] font-normal  mb-7">
            Get your tests delivered at let home collect sample from the victory
            of the managments that supplies best design system guidelines ever.
            Get your tests delivered at let home collect sample.
          </p>
          <Button onClick={() => {}}>Explore details</Button>
        </div>
      </div>
    </section>
  );
});

export default FreeTutorial;
