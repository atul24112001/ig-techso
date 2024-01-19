import React, { useMemo } from "react";
import CurvedArrowUp from "../../../assets/icons/CurvedArrowUp";
import CurvedArrowDown from "../../../assets/icons/CurvedArrowDown";

type Props = {
  id?: string;
};
const HowItWorks = React.forwardRef<HTMLElement, Props>(({ id }, ref) => {
  const steps = useMemo(() => {
    return [
      {
        title: "Set disbursement Instructions",
        description:
          "Get your blood tests delivered at home collect a sample from the your blood tests.",
      },
      {
        title: "Assembly retrieves funds from your account",
        description:
          "Get your blood tests delivered at home collect a sample from the your blood tests.",
      },
      {
        title: "Assembly initiates disbursement",
        description:
          "Get your blood tests delivered at home collect a sample from the your blood tests.",
      },
      {
        title: "Customer receives funds payment",
        description:
          "Get your blood tests delivered at home collect a sample from the your blood tests.",
      },
    ];
  }, []);

  return (
    <section
      id={id}
      ref={ref}
      className="bg-gradient-to-b from-[#EBF9FF] to-[#F6F6FF]"
    >
      <div className="py-20 m-auto  w-3/4">
        <div className="text-center text-[14px] font-bold text-[#EF9E48]">
          Quality features
        </div>
        <div className="mb-9 text-center text-[36px] font-bold text-[#0F2137]">
          Let’s see how it works
        </div>
        <div className="flex">
          {steps.map((step, index) => {
            const isEven = (index + 1) % 2 == 0;
            return (
              <div>
                <div className="flex items-center gap-2">
                  <div
                    className={`bg-white shadow-md rounded-full px-4 py-3  ${
                      isEven ? "" : ""
                    }`}
                  >
                    0{index + 1}
                  </div>
                  {index < 3 &&
                    (isEven ? <CurvedArrowUp /> : <CurvedArrowDown />)}
                </div>
                <div className="w-5/6 ">
                  <div className="text-[#0F2137] text-[22px] mt-6">
                    {" "}
                    {step.title}
                  </div>
                  <div className="text-[#343D48] text-[15px] mt-4">
                    {" "}
                    {step.description}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
});

export default HowItWorks;
