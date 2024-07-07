import { RiArrowDropDownLine, RiQuestionLine } from "react-icons/ri";

interface InputProps {
  placeholder: string;
  type?: "text" | "select" | "question";
}

const Input = ({ placeholder, type = "text" }: InputProps) => {
  return (
    <div className="relative flex-1 w-full">
      <input
        type="text"
        className="rounded-[4px] border border-[#D5D5D5] dark:border-[#4C4C4C] outline-none px-4 py-[14px] w-full bg-transparent text-black dark:text-white text-[16px] leading-[20px] placeholder:dark:text-[#7A7A7A] placeholder:text-[#B8B8B8] font-normal"
        placeholder={placeholder}
      />
      {type === "select" && (
        <div className="absolute right-4 top-1/2 -translate-y-1/2">
          <RiArrowDropDownLine className="text-2xl" />
        </div>
      )}
      {type === "question" && (
        <div className="absolute right-4 top-1/2 -translate-y-1/2 text-[#D5D5D5] dark:text-[#4C4C4C]">
          <RiQuestionLine className="text-2xl" />
        </div>
      )}
    </div>
  );
};

export default Input;
