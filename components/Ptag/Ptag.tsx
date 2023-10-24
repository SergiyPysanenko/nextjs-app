import { PtagProps } from "./Ptag.props";
import s from "./Ptag.module.css";
import cn from "classnames";

export const Ptag = ({
  size = "m",
  children,
  className,
  ...props
}: PtagProps): JSX.Element => {
  return (
    <>
      <p
        className={cn(s.p, className, {
          [s.s]: size == "s",
          [s.m]: size == "m",
          [s.l]: size == "l",
        })}
        {...props}
      >
        {children}
      </p>
    </>
  );
};
