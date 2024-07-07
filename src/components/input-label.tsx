import { RiArrowDropDownLine, RiQuestionLine } from "react-icons/ri";

interface InputLabelProps {
  label: string;
  placeholder: string;
  type?: "text" | "select" | "question";
}

const InputLabel = ({ label, placeholder, type = "text" }: InputLabelProps) => {
  return (
    <div className="rounded-[4px] border border-[#D5D5D5] dark:border-[#4C4C4C] py-3 px-4">
      <label htmlFor="" className="text-xs font-medium">
        {label}
      </label>
      <div className="relative">
        <input
          type="text"
          className="placeholder:dark:text-[#7A7A7A] placeholder:text-[#B8B8B8] w-full outline-none bg-transparent text-black dark:text-white text-[16px] leading-[20px] font-normal"
          placeholder={placeholder}
        />
        {type === "select" && (
          <div className="absolute right-0 top-1/2 -translate-y-1/2">
            <RiArrowDropDownLine className="text-2xl" />
          </div>
        )}
        {type === "question" && (
          <div className="absolute right-0 top-1/2 -translate-y-1/2 text-[#D5D5D5] dark:text-[#4C4C4C]">
            <RiQuestionLine className="text-2xl" />
          </div>
        )}
      </div>
    </div>
  );
};

export default InputLabel;
