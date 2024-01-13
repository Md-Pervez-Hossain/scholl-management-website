import { twMerge } from "tailwind-merge";
const PrimaryButton = ({ children, className, ...props }) => {
  return (
    <button {...props} className={twMerge("btnHover", className)}>
      {children}
    </button>
  );
};
export default PrimaryButton;
