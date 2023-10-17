import { ButtonProps } from "./Button.props";
import s from "./Button.module.css";
import cn from "classnames";

export const Button = ({
  appearance,
  arrow = "none",
  children,
  className,
  ...props
}: ButtonProps): JSX.Element => {
  return (
    <button
      className={cn(s.button, className, {
        [s.primary]: appearance == "primary",
        [s.secondary]: appearance == "secondary",
      })}
      {...props}
    >
      {children}
      {arrow != "none" && (
        <span className={cn(s.arrow, { [s.down]: arrow == "down" })}> +++</span>
      )}
    </button>
  );
};
