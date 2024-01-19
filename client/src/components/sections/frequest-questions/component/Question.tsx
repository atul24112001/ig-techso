import { Minus, Plus } from "lucide-react";
import React, { useState } from "react";

type Props = {
  details: QuestionType;
};

export default function Question({ details }: Props) {
  const [open, setOpen] = useState(false);

  const toggle = () => setOpen((prev) => !prev);

  return (
    <div
      onClick={toggle}
      className="flex cursor-pointer items-start border-b-[1px] border-b-[#E5ECF4] border-solid mb-5 pb-3 gap-4"
    >
      <div className="rounded-full p-1 text-white bg-[#3FDBB1]">
        {open ? <Minus size={16} /> : <Plus size={16} />}
      </div>
      <div>
        <div className="text-[18px] font-medium text-[#0F2137]">
          {details.question}
        </div>
        {open && (
          <div className="text-[16px] transition-all duration-200 font-normal pt-1 text-[#343D48]">
            {details.answer}
          </div>
        )}
      </div>
    </div>
  );
}
