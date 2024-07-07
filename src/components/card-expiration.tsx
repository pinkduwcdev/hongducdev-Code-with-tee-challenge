import { RiArrowDropDownLine } from "react-icons/ri";

const CardExpiration = () => {
  return (
    <div className="rounded-[4px] border border-[#D5D5D5] dark:border-[#4C4C4C] py-3 px-4">
      <label htmlFor="" className="text-xs font-medium">
        Card expiration
      </label>
      <div className="flex items-center gap-0.5">
        <div className="relative border-r border-[#D5D5D5] dark:border-[#4C4C4C]">
          <input type="text" placeholder="Month" className="w-full outline-none" />
          <div className="absolute right-4 top-1/2 -translate-y-1/2">
            <RiArrowDropDownLine className="text-2xl text-black dark:text-white" />
          </div>
        </div>
        <div className="relative">
          <input type="text" placeholder="Year" className="w-full px-4 outline-none" />
          <div className="absolute right-4 top-1/2 -translate-y-1/2">
            <RiArrowDropDownLine className="text-2xl text-black dark:text-white" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardExpiration;
