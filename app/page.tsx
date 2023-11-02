import { Htag } from '@/components/Htag/Htag';
import { Button } from '@/components/Button/Button';
import { Ptag } from '@/components/Ptag/Ptag';
import { Tag } from './../components/Tag/Tag';
import { Rating } from '@/components/Rating/Rating';
import { WithLayout } from '@/layout/layout';

function Home(): JSX.Element {
  return (
    <>
      <Htag tag="h1">Hello Htag</Htag>
      <Button appearance="primary" className="primary">
        Button!
      </Button>
      <Button appearance="secondary" arrow="right">
        Button!
      </Button>
      <Ptag size="l">Button</Ptag>
      <Ptag size="m">Button</Ptag>
      <Ptag size="s">Button</Ptag>
      <Tag size="s" color="secondary">
        TAG
      </Tag>
      <Tag size="s" color="red">
        TAG
      </Tag>
      <Tag size="s" color="grey">
        TAG
      </Tag>
      <Tag size="s" color="green">
        TAG
      </Tag>
      <Tag size="s" color="primary">
        TAG
      </Tag>
      <Rating rating={4} isEditable />
    </>
  );
}

export default WithLayout(Home);
