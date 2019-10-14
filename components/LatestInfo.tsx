import * as React from 'react';
import { Item, Header, Divider } from 'semantic-ui-react';

type Info = {
  mediaType: string;
  title: string;
  description?: string;
  date: string;
};

type Props = {
  infos?: Info[];
};

const LatestInfo: React.FC<Props> = ({
  infos = [
    {
      mediaType: 'stage',
      title: 'Romeo and Juliet',
      description: 'a TV program',
      date: 'this summer',
    },
    {
      mediaType: 'movie',
      title: 'Romeo and Juliet2',
      description: 'a TV program',
      date: 'this winter',
    },
  ],
}) => (
  <>
    <Header as="h3">★★★ Latest Infos ★★★</Header>
    <Divider />
    <Item.Group divided>
      {infos &&
        infos.map(({ mediaType, title, description, date }) => (
          <Item key={title}>
            <Item.Content>
              <Item.Header as="a">{title}</Item.Header>
              <Item.Meta>{mediaType}</Item.Meta>
              <Item.Description>{description}</Item.Description>
              <Item.Extra>{date}</Item.Extra>
            </Item.Content>
          </Item>
        ))}
    </Item.Group>
    <Divider />
  </>
);

export default LatestInfo;
