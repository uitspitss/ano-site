import React, { FC } from 'react';
import { List, Placeholder } from 'semantic-ui-react';
import { useTranslation } from 'react-i18next';

import { User as TwitterUser } from '../services/twitter/models/user';
import { User } from '../services/ano-site/models/user';
import FormField from './FormField';
import { capitalize } from 'lodash';

type Props = {
  siteUser: User | null;
  twitterUser: TwitterUser | null;
  loading: boolean;
};

const Contact: FC<Props> = ({ siteUser, twitterUser, loading }) => {
  const { t } = useTranslation();

  if (!loading && twitterUser) {
    return (
      <List>
        <List.Item>{twitterUser.description}</List.Item>
        <List.Item>
          <List.Content>
            <FormField
              name="email"
              label={t('email')}
              defaultValue={siteUser ? siteUser.email : ''}
              twitterUser={twitterUser}
            />
          </List.Content>
        </List.Item>
        <List.Item>
          <List.Content>
            <FormField
              name="production"
              label={t('production')}
              defaultValue={siteUser ? siteUser.production : ''}
              twitterUser={twitterUser}
            />
          </List.Content>
        </List.Item>
        <List.Item>
          <List.Content>
            {capitalize(t('address'))}: {twitterUser.location}
          </List.Content>
        </List.Item>
      </List>
    );
  }

  return (
    <Placeholder>
      <Placeholder.Paragraph>
        <Placeholder.Line />
        <Placeholder.Line />
        <Placeholder.Line />
        <Placeholder.Line />
        <Placeholder.Line />
      </Placeholder.Paragraph>
    </Placeholder>
  );
};

export default Contact;
