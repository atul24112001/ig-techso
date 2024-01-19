type Props = {
  title: string;
  subTitle: string;
  titleColor: string;
};

export default function Card({ title, subTitle, titleColor }: Readonly<Props>) {
  return (
    <div className="bg-white shadow-md hover:scale-110 transition-all duration-200 rounded-[10px] w-48 h-44 flex justify-center items-center flex-col p-4">
      <div
        style={{
          color: titleColor,
        }}
        className={`text-center text-2xl font-bold leading-tight tracking-wide`}
      >
        {title}
      </div>
      <div className="text-center text-[18px] font-normal text-[#0F2137]">
        {subTitle}
      </div>
    </div>
  );
}
