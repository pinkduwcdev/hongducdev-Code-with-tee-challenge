import Image from "next/image";
import { DM_Serif_Display } from "next/font/google";
import Link from "next/link";

const dmSerifDisplay = DM_Serif_Display({ subsets: ["latin"], weight: "400" });

interface BlogCardProps {
  data: IBlogCard;
}

const BlogCard = ({ data }: BlogCardProps) => {
  const backgroundStyle =
    data.backgroundColor.length === 1
      ? { backgroundColor: data.backgroundColor[0] }
      : {
          background: `linear-gradient(to bottom right, ${data.backgroundColor[0]}, ${data.backgroundColor[1]})`,
        };

  return (
    <div className="w-full md:h-[400px] rounded-2xl bg-white flex flex-col md:flex-row">
      <div
        className="w-full min-h-[168px] md:w-[400px] h-full flex items-center justify-center rounded-t-2xl md:rounded-tr-none md:rounded-l-2xl"
        style={backgroundStyle}
      >
        <div className="relative h-[120px] w-[120px] md:h-[240px] md:w-[240px]">
          <Image
            src={data.image}
            alt={data.title}
            layout="fill"
            className="object-cover"
          />
        </div>
      </div>
      <div className="py-[15px] px-6 md:py-8 md:pl-[35px] md:pr-10 w-full flex-1 flex flex-col justify-between">
        <div>
          <div className="text-[#6E798C] flex items-center justify-between">
            <span className="uppercase text-[11px] md:text-[20px] font-semibold">
              {data.category}
            </span>
            <span className="text-[11px] md:text-lg font-normal">
              {data.time}
            </span>
          </div>
          <div className="mt-[10px] md:mt-[25px]">
            <h3
              className={`${dmSerifDisplay.className} text-xl md:text-[40px] leading-tight md:leading-[1.15]`}
            >
              {data.title}
            </h3>
            <p className="mt-1 md:mt-[15px] text-[#374A59] font-normal text-[13px] md:text-lg leading-normal">
              {data.description}
            </p>
          </div>
        </div>
        <div className="flex items-center justify-between mt-[14px]">
          <div className="flex items-center space-x-2 md:space-x-3">
            <div className="relative h-8 w-8 md:h-11 md:w-11">
              <Image
                src={data.user.avatar}
                alt={data.user.name}
                layout="fill"
                className="object-cover rounded-full"
              />
            </div>
            <p className="text-[#007AE9] font-semibold text-[11px] lg:text-[18px]">
              {data.user.name}
            </p>
          </div>
          <Link href="/">
            <p className="text-[#007AE9] font-semibold text-[11px] lg:text-[18px]">
              Read more 🡢
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
