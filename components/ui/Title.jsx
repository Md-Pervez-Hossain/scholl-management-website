import { twMerge } from "tailwind-merge";

const Title = ({ children, className }) => {
  return (
    <div
      className={twMerge(
        "text-[18px] lg:text-[32px] font-[600] lg:mb-5 my-2",
        className
      )}
    >
      {children}
    </div>
  );
};
export default Title;
