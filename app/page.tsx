import { Htag } from "@/components/Htag/Htag";
import { Button } from "@/components/Button/Button";
import Arrow from "../public/arrow.svg";

export default function Home(): JSX.Element {
  return (
    <div className="div">
      <Htag tag="h1">Hello Htag</Htag>
      <Button appearance="primary" className="primary">
        Button!
        <Arrow />
      </Button>
      <Button appearance="secondary" arrow="right">
        Button!
      </Button>
    </div>
  );
}
