import { Search } from "lucide-react";
import HeaderUnderline from "../../../../assets/icons/HeaderUnderline";
import GoogleLogo from "../../../../assets/icons/GoogleLogo";
import DropboxLogo from "../../../../assets/icons/DropboxLogo";
import PaypalLogo from "../../../../assets/icons/PaypalLogo";
import FiveStars from "../../../../assets/icons/FiveStarts";
import Pattern from "../../../../assets/icons/pattern";
import video from "../../../../assets/sample.mp4";

export default function Main() {
  return (
    <div className="pt-20 flex justify-between gap-8 ">
      <div className="flex-1">
        <div className="flex items-center gap-2">
          <FiveStars />

          <span className="text-[15px] font-normal leading-[100px]">
            Trused by over 4,332 students
          </span>
        </div>
        <div
          style={{
            color: "#02073E",
            fontFamily: "DM Sans",
            fontSize: "10vh",
            fontStyle: "normal",
            fontWeight: 700,
            lineHeight: "100px",
            letterSpacing: "-2px",
          }}
        >
          Learn Design with Nia Matos
        </div>
        <div className="flex justify-end">
          <HeaderUnderline />
        </div>
        <p
          style={{
            color: "#02073E",
            fontFamily: "DM Sans",
            fontSize: "18px",
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: "42px",
          }}
          className="mt-3"
        >
          Get your blood tests delivered at let home collect sample from the
          victory of the managments that supplies best design system guidelines
          ever.
        </p>
        <div className="bg-white mt-12 px-6 py-4 flex rounded-md items-center">
          <input
            placeholder="Search Course Name"
            className="border-none focus:outline-0 flex-1"
          />
          <Search color="#02073E" size={17} />
        </div>
        <div className="mt-4 flex items-center gap-5">
          <p>Sponsored by:</p>
          <GoogleLogo />
          <DropboxLogo />
          <PaypalLogo />
        </div>
      </div>
      <div className="flex-1 relative p-4">
        <Pattern className="absolute top-0  right-0" />
        <video
          className="absolute top-8 right-20 z-20"
          width={302}
          height={500}
          controls
        >
          <source src={video} type="video/mp4" />
        </video>
        <div
          style={{ width: 303, height: 378 }}
          className="absolute top-12 right-16 z-10 border-[2px] border-solid border-[#FFDC6B]"
        ></div>
      </div>
    </div>
  );
}
