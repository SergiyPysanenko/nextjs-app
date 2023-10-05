import { Htag } from "@/components/Htag/Htag";
import { Button } from "@/components/Button/Button";

export default function Home(): JSX.Element {
  return (
    <div className="div">
      <Htag tag="h1">Hello Htag</Htag>
      <Button appearance="primary" className="primary">
        Button!
      </Button>
      <Button appearance="secondary">Button!</Button>
    </div>
  );
}
