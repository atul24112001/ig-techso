import { useRef, useState } from "react";
import CoreFeatures from "./components/sections/core-features";
import Courses from "./components/sections/courses";
import FreeTutorial from "./components/sections/free-tutorial";
import FrequentQuestions from "./components/sections/frequest-questions";
import HowItWorks from "./components/sections/how-it-works";
import Introduction from "./components/sections/introduction";
// import PricingPanel from "./components/sections/pricing-panel";
import Tutorials from "./components/sections/tutorials";
import { ArrowDown } from "lucide-react";

export default function App() {
  // const refs = Array(5).map(() => useRef<HTMLElement>(null));
  const introductionRef = useRef<HTMLElement>(null);
  const tutorialRef = useRef<HTMLElement>(null);
  const coreFeatureRef = useRef<HTMLElement>(null);
  const coursesRef = useRef<HTMLElement>(null);
  const howItWorksRef = useRef<HTMLElement>(null);
  const freeTutorialRef = useRef<HTMLElement>(null);
  const faqRef = useRef<HTMLElement>(null);

  const [currentIndex, setCurrentIndex] = useState(1);

  const handleArrowDownClick = () => {
    const refs = [
      introductionRef,
      tutorialRef,
      coreFeatureRef,
      howItWorksRef,
      freeTutorialRef,
      faqRef,
    ];
    // const currentSectionIndex = sections.indexOf(currentSection);
    // const nextSectionIndex =
    //   currentSectionIndex < sections.length - 1 ? currentSectionIndex + 1 : 0;
    if (currentIndex + 1 == 7) {
      setCurrentIndex(0);
    }
    const targetRef = refs[currentIndex];
    if (targetRef?.current) {
      targetRef.current.scrollIntoView({
        behavior: "smooth",
      });
      setCurrentIndex((prev) => {
        return prev + 1;
      });
    }
    console.log({ currentIndex });
  };

  // useEffect(() => {
  //   const handleKeyDown = (event: { key: string }) => {
  //     if (event.key === "ArrowDown") {
  //       console.log({ event });
  //       handleArrowDownClick();
  //     }
  //   };

  //   window.addEventListener("keydown", handleKeyDown);

  //   return () => {
  //     window.removeEventListener("keydown", handleKeyDown);
  //   };
  // }, [currentIndex]);

  return (
    <div>
      <Introduction ref={introductionRef} />
      <Tutorials ref={tutorialRef} />
      <CoreFeatures ref={coreFeatureRef} />
      <Courses ref={coursesRef} />
      <HowItWorks ref={howItWorksRef} />
      {/* <PricingPanel /> */}
      <FreeTutorial ref={freeTutorialRef} />
      <FrequentQuestions ref={faqRef} />
      <ArrowDown
        onClick={handleArrowDownClick}
        className="fixed bottom-5 z-30 right-6 cursor-pointer"
      />
    </div>
  );
}
