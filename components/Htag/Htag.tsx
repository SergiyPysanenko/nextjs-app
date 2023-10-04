import { HtagProps } from "./Htag.props";

export const Htag = ({ children, tag }: HtagProps): JSX.Element => {
  return <h1>{children}</h1>;
};
