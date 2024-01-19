// import { useState } from "react";
import React from "react";
import Course from "./component/Course";

export const courses = [
  {
    id: 2,
    title:
      "Professional graphic design tutorial full course with exercise file",
    description:
      "Get your tutorials delivered at let home collect sample from the victory of the managments.",
    rating: 5.0,
    totalReviews: 435,
    numberOfStudentsWatched: 3413,
    durationInMinutes: 240,
    videoCount: 7,
    features: [
      "How to reduce file pixel dimentions without loosing quality",
      "How to make logo pixel perfects with different extension",
      "Create vector file from restarize layer styles",
      "Make color gradient with photoshop build-in tools",
    ],
  },
  {
    id: 1,
    title: "Become ultimate photoshop expert within 30 days",
    description:
      "Get your tutorials delivered at let home collect sample from the victory of the managments.",
    rating: 2.0,
    totalReviews: 435,
    numberOfStudentsWatched: 3413,
    durationInMinutes: 240,
    videoCount: 7,
    features: [
      "How to reduce file pixel dimentions without loosing quality",
      "How to make logo pixel perfects with different extension",
      "Create vector file from restarize layer styles",
      "Make color gradient with photoshop build-in tools",
    ],
  },
];

type Props = {
  id?: string;
};
const Courses = React.forwardRef<HTMLElement, Props>(({ id }, ref) => {
  return (
    <section id={id} ref={ref} className="my-20 m-auto pb-8 w-3/4">
      <div className="text-center text-[14px] font-bold text-[#EF9E48]">
        Quality features
      </div>
      <div className="mb-9 text-center text-[36px] font-bold text-[#0F2137]">
        Popular Designing Course
      </div>
      <div>
        {courses.map((course) => {
          return <Course key={course.id} details={course} />;
        })}
      </div>
    </section>
  );
});

export default Courses;
