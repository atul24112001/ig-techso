import React from "react";
import Main from "./component/Main";
import Navbar from "./component/Navbar";

type Props = {
  id?: string;
};
const Introduction = React.forwardRef<HTMLElement, Props>(({ id }, ref) => {
  return (
    <section id={id} ref={ref} className="h-screen min-h-fit relative">
      <div
        style={{
          background: "linear-gradient(106deg, #E0F5FA -1.4%, #FFFDE6 100.87%)",
          borderBottomRightRadius: 150,
        }}
        className="absolute top-0 left-0 bottom-0 rounded-br-full right-[36%]"
      />
      <div className="absolute z-10  w-screen mx-auto h-screen">
        <div className="mt-6 m-auto  w-3/4">
          <Navbar />
          <Main />
        </div>
      </div>
    </section>
  );
});

export default Introduction;
