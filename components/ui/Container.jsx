import { twMerge } from "tailwind-merge";

const Container = ({ children, className }) => {
  return <div className={twMerge("container-2", className)}>{children}</div>;
};
export default Container;
