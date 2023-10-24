import { Htag } from "@/components/Htag/Htag";
import { Button } from "@/components/Button/Button";
import { Ptag } from "@/components/Ptag/Ptag";

export default function Home(): JSX.Element {
  return (
    <div className="div">
      <Htag tag="h1">Hello Htag</Htag>
      <Button appearance="primary" className="primary">
        Button!
      </Button>
      <Button appearance="secondary" arrow="right">
        Button!
      </Button>
      <Ptag size="l">afjjfjf</Ptag>
      <Ptag size="m">afjjfjf</Ptag>
      <Ptag size="s">afjjfjf</Ptag>
    </div>
  );
}
