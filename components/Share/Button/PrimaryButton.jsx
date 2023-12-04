import { twMerge } from "tailwind-merge";
const PrimaryButton = ({ children, className, ...props }) => {
  return (
    <button
      {...props}
      className={twMerge(
        " transition ease-in-out delay-150 bg-[#40282C] hover:-translate-y-1 hover:scale-110 hover:bg-[#40282C] duration-300  px-6 py-3 rounded-md text-white ",
        className
      )}
    >
      {children}
    </button>
  );
};
export default PrimaryButton