import React, { FC, useState, useContext, useEffect } from 'react';
import { List, Placeholder } from 'semantic-ui-react';
import { useTranslation } from 'react-i18next';

import { User as TwitterUser } from '../services/twitter/models/user';
import { User } from '../services/ano-site/models/user';
import FormField from '../components/FormField';
import { UserContext } from '../contexts';
import { capitalize } from 'lodash';

type Props = {
  siteUser: User | null;
  twitterUser: TwitterUser | null;
  loading: boolean;
};

const Contact: FC<Props> = ({ siteUser, twitterUser, loading }) => {
  const { user } = useContext(UserContext);
  const [visible, setVisible] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    if (!loading && twitterUser && siteUser) {
      if (
        siteUser.published ||
        (user && twitterUser.id_str === user.providerUid)
      ) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    }
  });

  if (twitterUser && siteUser && visible) {
    return (
      <List>
        <List.Item>{twitterUser.description}</List.Item>
        <List.Item>
          <List.Content>
            <FormField
              name="email"
              label={t('email')}
              defaultValue={siteUser.email}
              twitterUser={twitterUser}
            />
          </List.Content>
        </List.Item>
        <List.Item>
          <List.Content>
            <FormField
              name="production"
              label={t('production')}
              defaultValue={siteUser.production}
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
  } else {
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
  }
};

export default Contact;
