import React, { FC } from 'react';
import { List, Image, Placeholder, Icon } from 'semantic-ui-react';
import { capitalize } from 'lodash';
import { useTranslation } from 'react-i18next';

import { User as TwitterUser } from '../services/twitter/models/user';
import { User } from '../services/ano-site/models/user';
import FormField from './FormField';

type Props = {
  siteUser: User | null;
  twitterUser: TwitterUser | null;
  loading: boolean;
};

const Profile: FC<Props> = ({ siteUser, twitterUser, loading }) => {
  const { t } = useTranslation();

  if (!loading && twitterUser) {
    return (
      <List>
        <List.Item>
          <Image src={twitterUser.profile_image_url} size="medium" />
        </List.Item>
        <List.Item>
          <List.Content>
            {capitalize(t('name'))}: {twitterUser.name}
          </List.Content>
        </List.Item>
        <List.Item>
          <List.Content>
            <FormField
              name="birthday"
              label={t('birthday')}
              type="date"
              defaultValue={siteUser ? siteUser.birthday : ''}
              twitterUser={twitterUser}
            />
          </List.Content>
        </List.Item>
        <List.Item>
          <List.Content>
            <FormField
              name="bloodType"
              label={t('blood type')}
              defaultValue={siteUser ? siteUser.bloodType : ''}
              twitterUser={twitterUser}
            />
          </List.Content>
        </List.Item>
        <List.Item>
          <List.Content>
            <a
              href={`https://twitter.com/${twitterUser.name}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {t('Twitter Profile')} <Icon name="external alternate" />
            </a>
          </List.Content>
        </List.Item>
      </List>
    );
  }

  return (
    <>
      <Placeholder style={{ width: 300, height: 300 }}>
        <Placeholder.Image />
      </Placeholder>
      <Placeholder>
        <Placeholder.Paragraph>
          <Placeholder.Line />
          <Placeholder.Line />
          <Placeholder.Line />
        </Placeholder.Paragraph>
      </Placeholder>
    </>
  );
};

export default Profile;
