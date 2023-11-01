import { Htag } from '@/components/Htag/Htag';
import { Button } from '@/components/Button/Button';
import { Ptag } from '@/components/Ptag/Ptag';
import { Tag } from './../components/Tag/Tag';
import { Rating } from '@/components/Rating/Rating';
import { Layout } from '@/layout/layout';

export default function Home(): JSX.Element {
  return (
    <Layout>
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
      <Tag size="s" color="secondary">
        afjjfjf
      </Tag>
      <Tag size="s" color="red">
        afjjfjf
      </Tag>
      <Tag size="s" color="grey">
        afjjfjf
      </Tag>
      <Tag size="s" color="green">
        afjjfjf
      </Tag>
      <Tag size="s" color="primary">
        afjjfjf
      </Tag>
      <Rating rating={4} isEditable />
    </Layout>
  );
}
