import React from "react";
import Button from "../../helper/Button";
import Card from "./component/Card";

type Props = {
  id?: string;
};
const CoreFeatures = React.forwardRef<HTMLElement, Props>(({ id }, ref) => {
  return (
    <section
      id={id}
      ref={ref}
      className="my-20 m-auto pb-8 w-3/4 flex justify-center items-center gap-20"
    >
      <div className="flex-1 flex justify-center items-center">
        <div className="flex gap-11 w-2/3">
          <div className="flex flex-col gap-11 pt-16">
            <Card
              titleColor="#EF9E48"
              subTitle="We have more than students"
              title="80K+"
            />
            <Card
              titleColor="#FA578E"
              subTitle="Daily updated blog post maintain"
              title="90+"
            />
          </div>
          <div className="flex flex-col gap-11">
            <Card
              titleColor="#FF753A"
              subTitle="Free online tutorials videos avaialble"
              title="150+"
            />

            <Card
              titleColor="#E682FF"
              subTitle="Job posted everydays with  qualification"
              title="&3M"
            />
          </div>
        </div>
      </div>
      <div className="w-2/5">
        <h3 className="text-[#EF9E48] text-sm font-bold mb-2">Core features</h3>
        <p className="text-[#0F2137] text-5xl font-bold  mb-10">
          Smart Jackpots that you may love this anytime & anywhere
        </p>
        <p className="text-[#02073E] text-[18px] font-normal  mb-7">
          Get your tests delivered at let home collect sample from the victory
          of the managments that supplies best design system guidelines ever.
          Get your tests delivered at let home collect sample.
        </p>
        <Button onClick={() => {}}>Explore details</Button>
      </div>
    </section>
  );
});

export default CoreFeatures;
