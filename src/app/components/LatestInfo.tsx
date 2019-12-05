import React, { FC } from 'react';
import { Item, Header, Divider, Placeholder } from 'semantic-ui-react';
import { format } from 'date-fns';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { faTwitterSquare } from '@fortawesome/free-brands-svg-icons';

import { Tweet } from '../services/twitter/models/tweet';

type Props = {
  timeline: Tweet[] | null;
  loading: boolean;
};

const LatestInfo: FC<Props> = ({ timeline, loading }) => {
  const tl =
    timeline && timeline.length >= 10 ? timeline.slice(0, 10) : timeline;
  const { t } = useTranslation();

  if (!loading && tl) {
    return (
      <>
        <Header as="h3">★★★ {t('Latest Infomation')} ★★★</Header>
        <Divider />
        <Item.Group divided>
          {tl.map(tweet => (
            <Item key={tweet.id_str}>
              <Item.Content>
                <Item.Header>
                  <FontAwesomeIcon icon={faTwitterSquare} color="#00aced" />{' '}
                  {t('Twitter')}
                </Item.Header>
                <Item.Meta>
                  <a
                    href={`https://twitter.com/${tweet.user.screen_name}/status/${tweet.id_str}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Open with new tab{' '}
                    <FontAwesomeIcon icon={faExternalLinkAlt} />
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
  }

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
};

export default LatestInfo;
