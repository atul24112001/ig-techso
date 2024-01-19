import React, { useState } from "react";
import Question from "./component/Question";

type Props = {
  id?: string;
};
const FrequentQuestions = React.forwardRef<HTMLElement, Props>(
  ({ id }, ref) => {
    const [questions] = useState([
      {
        id: 1,
        question: "How to contact with riders emergency ?",
        answer: "Answer of How to contact with riders emergency ?",
      },
      {
        id: 2,
        question: "App installation failed, how to update system information?",
        answer:
          "Answer of App installation failed, how to update system information?",
      },
      {
        id: 3,
        question: "Website reponse taking time, how to improve?",
        answer: "Answer of Website reponse taking time, how to improve?",
      },
      {
        id: 4,
        question: "New update fixed all bug and issues",
        answer: "Answer of New update fixed all bug and issues",
      },
    ]);

    return (
      <section id={id} ref={ref} className="py-20 m-auto  w-3/4">
        <div className="text-center text-[14px] font-bold text-[#EF9E48]">
          Frequent Question
        </div>
        <div className="mb-9 text-center text-[36px] font-bold text-[#0F2137]">
          Do you have any question
        </div>
        <div className="flex justify-center">
          <div className="w-2/3 ">
            {questions.map((question) => {
              return <Question details={question} key={question.id} />;
            })}
          </div>
        </div>
      </section>
    );
  }
);

export default FrequentQuestions;
