import { HtagProps } from "./Htag.props";
import s from "./Htag.module.css";

export const Htag = ({ tag, children }: HtagProps): JSX.Element => {
  return (
    <>
      {tag == "h1" && <h1 className={s.h1}>{children}</h1>}
      {tag == "h2" && <h2 className={s.h2}>{children}</h2>}
      {tag == "h3" && <h3 className={s.h3}>{children}</h3>}
    </>
  );
};
