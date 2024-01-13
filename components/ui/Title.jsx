import { twMerge } from "tailwind-merge";

const Title = ({ children, className }) => {
  return (
    <div
      className={twMerge(
        "text-[18px] lg:text-[32px] font-[600] lg:my-3 my-2",
        className
      )}
    >
      {children}
    </div>
  );
};
export default Title;
