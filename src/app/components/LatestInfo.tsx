import React, { FC, useContext } from 'react';
import { Item, Header, Divider } from 'semantic-ui-react';

import { TwitterContext } from '../contexts';

type Props = {};

const LatestInfo: FC<Props> = () => {
  const { timeline } = useContext(TwitterContext);

  return (
    <>
      <Header as="h3">★★★ Latest Infos ★★★</Header>
      <Divider />
      <Item.Group divided>
        {timeline &&
          timeline.map(tweet => (
            <Item key={tweet.id_str}>
              <Item.Content>
                <Item.Header
                  as="a"
                  href={`https://twitter.com/${tweet.user.name}/status/${tweet.id_str}`}
                >
                  {tweet.text}
                </Item.Header>
                <Item.Meta>Tweet</Item.Meta>
                <Item.Description>{tweet.text}</Item.Description>
                <Item.Extra>{tweet.created_at}</Item.Extra>
              </Item.Content>
            </Item>
          ))}
      </Item.Group>
      <Divider />
    </>
  );
};

export default LatestInfo;
