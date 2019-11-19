import React, { FC } from 'react';
import { Item, Header, Divider, Placeholder, Icon } from 'semantic-ui-react';
import { format } from 'date-fns';

import { Tweet } from '../services/twitter/models/tweet';
import { User } from '../services/ano-site/models/user';

type Props = {
  siteUser: User | null;
  timeline: Tweet[] | null;
  loading: boolean;
};

const LatestInfo: FC<Props> = ({ siteUser, timeline, loading }) => {
  const tl =
    timeline && timeline.length >= 10 ? timeline.slice(0, 10) : timeline;

  if (!loading && tl && siteUser && siteUser.published) {
    return (
      <>
        <Header as="h3">★★★ Latest Infomation ★★★</Header>
        <Divider />
        <Item.Group divided>
          {tl.map(tweet => (
            <Item key={tweet.id_str}>
              <Item.Content>
                <Item.Header>
                  <Icon name="twitter square" color="blue" />
                  Twitter
                </Item.Header>
                <Item.Meta>
                  <a
                    href={`https://twitter.com/${tweet.user.name}/status/${tweet.id_str}`}
                    target="_blank"
                    rel="noopener"
                  >
                    Open with new tab <Icon name="external alternate" />
                  </a>
                </Item.Meta>
                <Item.Description>{tweet.text}</Item.Description>
                <Item.Extra>
                  {tweet.created_at && tweet.created_at
                    ? format(Date.parse(tweet.created_at), 'hh:mm MM/dd/yyyy')
                    : ''}
                </Item.Extra>
              </Item.Content>
            </Item>
          ))}
        </Item.Group>
        <Divider />
      </>
    );
  } else {
    return (
      <>
        <Placeholder>
          <Placeholder.Header>
            <Placeholder.Line />
          </Placeholder.Header>
        </Placeholder>
        <Divider />
        <Item.Group divided>
          {Array.from(Array(5), (_, k) => (
            <Item key={k}>
              <Item.Content>
                <Placeholder>
                  <Placeholder.Paragraph>
                    <Placeholder.Line />
                    <Placeholder.Line />
                    <Placeholder.Line />
                    <Placeholder.Line />
                    <Placeholder.Line />
                  </Placeholder.Paragraph>
                </Placeholder>
              </Item.Content>
            </Item>
          ))}
        </Item.Group>
        <Divider />
      </>
    );
  }
};

export default LatestInfo;
